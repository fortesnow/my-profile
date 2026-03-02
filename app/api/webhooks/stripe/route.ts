import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { inviteCollaborator } from '@/lib/github';
import Stripe from 'stripe';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const githubUsername = session.custom_fields?.find(
          (f) => f.key === 'github_username'
        )?.text?.value;
        const repos: string[] = JSON.parse(
          session.metadata?.repos || '[]'
        );

        if (!githubUsername) {
          console.error('No GitHub username found in session', session.id);
          break;
        }

        for (const repo of repos) {
          const result = await inviteCollaborator(repo, githubUsername);
          if (!result.success) {
            console.error(
              `Failed to invite ${githubUsername} to ${repo}:`,
              result.error
            );
          } else {
            console.log(`Invited ${githubUsername} to ${repo}`);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ received: true, error: 'Processing error' });
  }

  return NextResponse.json({ received: true });
}
