import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '飲食店マーケティング戦略の最前線｜集客からリピーター獲得まで徹底解説',
  description: '飲食店経営者必見のマーケティング戦略を徹底解説。地域密着型の集客施策からデジタルマーケティング、顧客体験設計まで、現場で即実践できる効果的な手法を具体例とともに紹介します。',
  keywords: [
    '飲食店 マーケティング 戦略',
    '飲食店 集客 方法',
    'レストラン 売上 アップ',
    '飲食業 デジタルマーケティング',
    '地域密着型 飲食店 PR',
    'レストラン ブランディング',
    '飲食店 リピーター獲得',
    '飲食業 SNS活用法',
    'レストラン ターゲティング',
    '飲食店 差別化 戦略'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/restaurant-marketing-strategy',
  },
  openGraph: {
    title: '飲食店マーケティング戦略の最前線｜集客からリピーター獲得まで徹底解説',
    description: '飲食店経営者必見のマーケティング戦略を徹底解説。地域密着型の集客施策からデジタルマーケティング、顧客体験設計まで、現場で即実践できる効果的な手法を具体例とともに紹介します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/restaurant-marketing-strategy.jpg',
        width: 1200,
        height: 630,
        alt: '飲食店のマーケティング戦略ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/restaurant-marketing-strategy',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-14T00:00:00+09:00',
    modifiedTime: '2025-03-14T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '飲食店マーケティング戦略の最前線',
    description: '飲食店経営者必見のマーケティング戦略を実践例とともに徹底解説。集客からリピーター獲得まで。',
    images: ['/blog/eye-catch/restaurant-marketing-strategy.jpg'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
} 