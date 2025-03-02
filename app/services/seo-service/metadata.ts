import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SEO対策サービス | Web制作 あおい',
  description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。データに基づく戦略的なSEO施策で成果を最大化します。',
  keywords: [
    'SEO対策',
    '検索順位改善',
    'コンテンツSEO',
    '技術的SEO',
    'サイト内部対策',
    '外部対策',
    'MEO対策',
    'アクセス解析',
    'コンバージョン改善'
  ],
  openGraph: {
    title: 'SEO対策サービス | 検索順位改善・アクセス数向上',
    description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。',
    type: 'website',
    images: [
      {
        url: '/images/seo-service-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO対策サービス',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO対策サービス | 検索順位改善・アクセス数向上',
    description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。',
    images: ['/images/seo-service-og.jpg'],
  },
} 