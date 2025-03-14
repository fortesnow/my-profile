import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/navigation'
import { GoogleTagManager } from '@/components/google-tag-manager'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stellarium.jp'),
  title: 'Web制作 あおい',
  description: 'Web制作・LP制作・コーディング・広告運用のフリーランス',
  verification: {
    google: 'あなたのサーチコンソールの確認コード',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.stellarium.jp',
    siteName: 'Web制作 あおい',
    title: 'Web制作 あおい',
    description: 'Web制作・LP制作・コーディング・広告運用のフリーランス',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web制作 あおい',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web制作 あおい',
    description: 'Web制作・LP制作・コーディング・広告運用のフリーランス',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body className="font-sans">
        <GoogleTagManager />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
