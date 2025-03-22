import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '【成功事例】地方・自治体のSNS運用戦略｜人手不足でも成果を出す具体的手法',
  description: '地方自治体のSNS運用における具体的な成功事例と実践手法を紹介。限られたリソースでも効果を最大化するための7つの戦略、住民エンゲージメントを高めるコンテンツ設計、運用体制の構築まで徹底解説します。',
  keywords: [
    'SNS運用 地方',
    'SNS運用 自治体',
    '地方自治体 SNS活用',
    '自治体 Twitter 運用',
    '自治体 Instagram 運用',
    '地域活性化 SNS',
    '行政 SNS戦略',
    '自治体 情報発信',
    '地方創生 SNS',
    '自治体 SNS担当者'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/local-government-sns-strategy',
  },
  openGraph: {
    title: '【成功事例】地方・自治体のSNS運用戦略｜人手不足でも成果を出す具体的手法',
    description: '地方自治体のSNS運用における成功事例と実践戦略を紹介。限られたリソースでも効果を最大化する具体的な手法を解説します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/local-government-sns-strategy.jpg',
        width: 1200,
        height: 630,
        alt: '地方・自治体のSNS運用戦略',
      },
    ],
    url: 'https://stellarium.jp/blog/local-government-sns-strategy',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-19T00:00:00+09:00',
    modifiedTime: '2025-03-19T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '地方・自治体のSNS運用成功事例と実践戦略',
    description: '地方自治体がSNSを効果的に活用するための具体的手法を公開。人手不足でも成果を出すポイントを解説。',
    images: ['/blog/eye-catch/local-government-sns-strategy.jpg'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
} 