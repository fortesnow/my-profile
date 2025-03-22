import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '【医療専門】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック',
  description: 'クリニック・医療機関専門のSEO対策を徹底解説。地域検索で上位表示させるためのローカルSEO施策から、医療コンテンツの作り方まで。実績に基づいた患者集客数アップの具体的手法を公開します。',
  keywords: [
    'クリニック SEO対策',
    '医療機関 SEO',
    'クリニック 集客',
    '病院 Web集客',
    'クリニック MEO対策',
    '医院 Googleビジネスプロフィール',
    'クリニック 地域SEO',
    '病院 キーワード選定',
    '医療サイト コンテンツマーケティング',
    'クリニック ホームページ 集客'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/clinic-seo-strategy',
  },
  openGraph: {
    title: '【医療専門】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック',
    description: 'クリニック・医療機関専門のSEO対策を徹底解説。地域特性を活かし、患者集客力を高める実践的な戦略とノウハウを公開します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/clinic-seo-strategy.png',
        width: 1200,
        height: 630,
        alt: 'クリニックのSEO対策ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/clinic-seo-strategy',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-16T00:00:00+09:00',
    modifiedTime: '2025-03-16T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'クリニックのSEO対策完全ガイド',
    description: 'クリニック・医療機関専門のSEO対策を徹底解説。実践的な戦略で患者数アップ。',
    images: ['/blog/eye-catch/clinic-seo-strategy.png'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
} 