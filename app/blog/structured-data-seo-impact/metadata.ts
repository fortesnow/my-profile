import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '【完全解説】構造化データがSEOに与える7つの影響｜検索順位を上げる実装テクニック',
  description: '構造化データがSEOに与える具体的な影響と実装方法を徹底解説。リッチスニペット表示やCTR向上など間接的な効果を最大化する7つの手法を紹介。JSON-LDでの正しい実装例も公開。',
  keywords: [
    '構造化データ SEO',
    '構造化データ SEO 影響',
    'JSON-LD 実装方法',
    'リッチスニペット 検索順位',
    'スキーママークアップ 効果',
    '構造化データ CTR',
    'Schema.org 活用法',
    'Google 構造化データ',
    'SEO 構造化データ 重要性',
    'マイクロデータ FAQ'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/structured-data-seo-impact',
  },
  openGraph: {
    title: '【完全解説】構造化データがSEOに与える7つの影響｜検索順位を上げる実装テクニック',
    description: '構造化データがSEOに与える影響と効果的な実装方法を徹底解説。リッチスニペット獲得によるCTR向上から検索エンジンの理解度を高める具体的な手法を公開。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/structured-data-seo-impact.jpg',
        width: 1200,
        height: 630,
        alt: '構造化データがSEOに与える影響',
      },
    ],
    url: 'https://stellarium.jp/blog/structured-data-seo-impact',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-23T00:00:00+09:00',
    modifiedTime: '2025-03-23T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '構造化データがSEOに与える7つの影響と具体的な実装法',
    description: '構造化データの正しい実装方法とSEOへの効果を解説。リッチスニペット獲得で検索結果から流入を増やす方法を公開。',
    images: ['/blog/eye-catch/structured-data-seo-impact.jpg'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
} 