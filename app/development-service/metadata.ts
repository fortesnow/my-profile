import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '受託開発サービス | Web制作 あおい',
  description: 'フロントエンドからバックエンド、インフラまで、フルスタックな開発サービスを提供。React、Next.js、Node.js、AWS等の最新技術を活用した高品質な開発を実現します。',
  keywords: [
    '受託開発',
    'フルスタック開発',
    'フロントエンド',
    'バックエンド',
    'インフラ構築',
    'アプリ開発',
    'システム開発',
    'AWS',
    'React',
    'Next.js'
  ],
  openGraph: {
    title: '受託開発サービス | フルスタック開発',
    description: 'フロントエンドからバックエンド、インフラまで、フルスタックな開発サービスを提供。',
    type: 'website',
    images: [
      {
        url: '/images/zunda-pic.png',
        width: 1200,
        height: 630,
        alt: '受託開発サービス',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '受託開発サービス | フルスタック開発',
    description: 'フロントエンドからバックエンド、インフラまで、フルスタックな開発サービスを提供。',
    images: ['/images/zunda-pic.png'],
  },
} 