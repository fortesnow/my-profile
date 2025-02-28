import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, BlogPost } from "../../lib/blog-posts"

export const metadata: Metadata = {
  title: 'ブログ | Web制作 あおい',
  description: 'Web制作、デジタルマーケティング、SEOなどの実践的な知識やノウハウを発信しています。',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          ブログ
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Web制作やデジタルマーケティングに関する<br className="md:hidden" />
          実践的な知識やノウハウを発信しています
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post: BlogPost) => (
            <article key={post.id} className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-900/20 transition-all group">
              <Link href={`/blog/${post.slug}`} className="block">
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
                  <h2 className="text-xl font-semibold mb-3 text-cyan-400 group-hover:text-white transition-colors">{post.title}</h2>
                  <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 