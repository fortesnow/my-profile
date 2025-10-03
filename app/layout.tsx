import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/navigation'
import { GoogleTagManager } from '@/components/google-tag-manager'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/components/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stellarium.jp'),
  title: 'Stellarium | Web制作・フロントエンド開発',
  description: 'React、Next.js、TypeScriptを使用した高品質なWeb制作とフロントエンド開発。SEO対策、広告運用、SNS運用まで一貫サポート。',
  verification: {
    google: 'あなたのサーチコンソールの確認コード',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.stellarium.jp',
    siteName: 'Stellarium',
    title: 'Stellarium | Web制作・フロントエンド開発',
    description: 'React、Next.js、TypeScriptを使用した高品質なWeb制作。SEO・広告・SNS運用まで一貫サポート。',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stellarium - Web制作・フロントエンド開発',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellarium | Web制作・フロントエンド開発',
    description: 'React、Next.js、TypeScriptを使用した高品質なWeb制作',
    images: ['/images/og-image.jpg'],
  },
  // AI/LLM向けリソースへのリンク
  other: {
    'llms-txt': 'https://www.stellarium.jp/llms.txt',
    'ai-txt': 'https://www.stellarium.jp/ai.txt',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  
  return (
    <html lang="ja" className="overflow-x-hidden">
      <head>
        {/* AI/LLM向けリソース */}
        <link rel="llms-txt" href="/llms.txt" type="text/plain" />
        <link rel="ai-txt" href="/ai.txt" type="text/plain" />
        
        {/* 構造化データ：AI/LLM最適化 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <GoogleTagManager />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
