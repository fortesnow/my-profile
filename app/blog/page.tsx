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
      id: 1,
      title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
      excerpt: "LPの本質的な目的と、制作後の運用の重要性について解説します。セールスライティング、LPO、広告運用など、実務経験に基づいた知見を共有します。",
      date: "2025.02.16",
      category: "LP制作",
      slug: "lp-development",
      thumbnail: "/images/blog/lp-development.jpg"
    },
    {
      id: 2,
      title: "効果的なデジタルマーケティング戦略",
      excerpt: "成果を出すためのデジタルマーケティング戦略と実践方法をご紹介します。",
      date: "2024.03.18",
      category: "マーケティング",
      slug: "digital-marketing",
      thumbnail: "/images/blog/marketing.jpg"
    },
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
              href={`/blog/${post.slug}`}
              className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.thumbnail}
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
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 