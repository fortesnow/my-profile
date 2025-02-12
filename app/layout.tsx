import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Web制作 あおい',
  description: 'Web制作・LP制作・コーディング・広告運用のフリーランス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body className="font-sans">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
