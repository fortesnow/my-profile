import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

function getProductPrices(): Record<string, string> {
  return {
    'meta-ads': process.env.STRIPE_PRICE_META_ADS!,
    'google-ads': process.env.STRIPE_PRICE_GOOGLE_ADS!,
    bundle: process.env.STRIPE_PRICE_BUNDLE!,
  };
}

function getProductRepos(): Record<string, string[]> {
  return {
    'meta-ads': [process.env.GITHUB_REPO_META_ADS!],
    'google-ads': [process.env.GITHUB_REPO_GOOGLE_ADS!],
    bundle: [
      process.env.GITHUB_REPO_META_ADS!,
      process.env.GITHUB_REPO_GOOGLE_ADS!,
    ],
  };
}

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    const productPrices = getProductPrices();
    const productRepos = getProductRepos();

    if (!productPrices[productId]) {
      return NextResponse.json(
        { error: '無効な商品IDです' },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || 'https://www.stellarium.jp';
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: productPrices[productId],
          quantity: 1,
        },
      ],
      custom_fields: [
        {
          key: 'github_username',
          label: {
            type: 'custom',
            custom: 'GitHubユーザー名',
          },
          type: 'text',
          optional: false,
        },
      ],
      metadata: {
        productId,
        repos: JSON.stringify(productRepos[productId]),
      },
      success_url: `${baseUrl}/tools/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/tools/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    return NextResponse.json(
      { error: 'チェックアウトセッションの作成に失敗しました' },
      { status: 500 }
    );
  }
}
