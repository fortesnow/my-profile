import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'ブログ | Web制作 あおい',
  description: 'Web制作、デジタルマーケティング、SEOなどの実践的な知識やノウハウを発信しています。',
}

export default function BlogPage() {
  const posts = [
    {
      title: "Notion API でできること - ビジネスを自動化する11の活用例",
      description: "Notion APIを活用したビジネス自動化の可能性を探ります。データベース操作からワークフロー自動化まで、実践的な11の活用例を解説します。",
      date: "2025年2月27日",
      href: "/blog/notion-api-usage",
      image: "/blog/eye-catch/for-notion.jpeg",
      category: "API活用"
    },
    {
      id: 2,
      title: "結果の出るホームページの作り方～プロが教える7つの成功戦略と実践事例",
      excerpt: "ホームページの成果を最大化するための実践的な戦略と具体的な改善手法を解説。アクセス解析データに基づく効果的なホームページ設計のノウハウと、CV率を2.3倍に改善した実例を紹介します。",
      date: "2025.02.22",
      category: "Web制作",
      slug: "homepage-success",
      thumbnail: "/blog/eye-catch/homepage-success.jpg"
    },
    {
      id: 1,
      title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
      excerpt: "LPの本質的な目的と、制作後の運用の重要性について解説します。セールスライティング、LPO、広告運用など、実務経験に基づいた知見を共有します。",
      date: "2025.02.16",
      category: "LP制作",
      slug: "lp-development",
      thumbnail: "/blog/eye-catch/for-LPO.webp"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          ブログ
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Web制作とマーケティングの実践的な情報を発信
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Link 
              key={post.id}
              href={post.href || `/blog/${post.slug}`}
              className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.thumbnail || post.image || '/images/default-image.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-cyan-400">{post.title}</h2>
                <p className="text-gray-300">{post.excerpt || post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 