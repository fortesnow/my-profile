import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '【初心者必見】Meta広告が難しいと感じる3つの理由と解決策｜わかりやすく解説',
  description: 'Meta広告（旧Facebook広告）を始めたい初心者向けに、なぜ難しく感じるのか、その3つの原因と克服法を解説。実践的なステップとコツで、広告運用の壁を乗り越え、効果的なキャンペーンを実現するガイドです。',
  keywords: [
    'Meta広告 初心者',
    'Meta広告 難しい',
    'Facebook広告 始め方',
    'Instagram広告 初心者',
    'Meta広告 設定方法',
    'Meta広告 予算設定',
    'Meta広告 ターゲティング',
    'Meta広告 画像サイズ',
    'Meta広告 運用方法',
    'Meta広告 成功事例'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/meta-ads-beginners-guide',
  },
  openGraph: {
    title: '【初心者必見】Meta広告が難しいと感じる3つの理由と解決策',
    description: 'Meta広告を始めたい初心者向けに、なぜ難しく感じるのか、その原因と克服法を解説。実践的なステップとコツで広告運用の壁を乗り越えるガイドです。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/meta-ads-beginners-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Meta広告初心者ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/meta-ads-beginners-guide',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-11T00:00:00+09:00',
    modifiedTime: '2025-03-11T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者必見】Meta広告が難しいと感じる3つの理由と解決策',
    description: 'Meta広告を始めたい初心者向けに、なぜ難しく感じるのか、その原因と克服法を解説。',
    images: ['/blog/eye-catch/meta-ads-beginners-guide.jpg'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
} 