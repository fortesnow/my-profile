// サーバーコンポーネント
import type { Metadata } from "next"
import { BlogCategoryFilter } from "./BlogCategoryFilter"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: 'Web制作 SEO対策 集客ブログ | 効果的なマーケティング戦略 | Web制作あおい',
  description: '飲食店・エステサロン向けのWeb集客・SEO対策・SNS広告運用のノウハウを公開。Webマーケティングプロが教える実践的な集客テクニックを無料で学べるブログです。',
  keywords: 'Web集客, Meta広告, SEO対策, 飲食店マーケティング, エステサロン集客, デジタルマーケティング, ホームページ制作, 広告運用',
  alternates: {
    canonical: 'https://www.stellarium.jp/blog',
  },
  openGraph: {
    title: 'Web集客・デジタルマーケティングの実践ブログ',
    description: '実績あるWeb集客のプロが教える、成果の出るデジタルマーケティング戦略。初心者にもわかりやすく解説します。',
    url: 'https://www.stellarium.jp/blog',
    siteName: 'Web制作 あおい',
    images: [
      {
        url: '/images/blog-ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'Web集客ブログ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function BlogPage() {
  const allPosts = blogPosts;
  const categories = ["すべて", ...new Set(allPosts.map(post => post.category))];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "Web集客・デジタルマーケティングの実践ブログ",
              "description": "飲食店・エステサロン向けのWeb集客・SEO対策・SNS広告運用のノウハウを公開",
              "url": "https://www.stellarium.jp/blog",
              "author": {
                "@type": "Person",
                "name": "あおい"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Web制作 あおい",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.stellarium.jp/images/logo.png"
                }
              }
            })
          }}
        />
        
        <BlogCategoryFilter allPosts={allPosts} categories={categories} />
      </div>
    </div>
  )
} 