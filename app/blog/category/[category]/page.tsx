import type { Metadata } from "next"
import Link from "next/link"
import { getSortedPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = decodeURIComponent(resolvedParams.category);
  const posts = getSortedPosts().filter(post => post.category === category);
  
  if (posts.length === 0) {
    return notFound();
  }
  
  return {
    title: `${category}に関する記事一覧 | Web制作あおい`,
    description: `${category}に関する情報、ノウハウ、実践テクニック、成功事例などをご紹介。Webマーケティングのプロが解説する${category}の最新情報が満載です。`,
    openGraph: {
      title: `${category}の専門記事一覧`,
      description: `${category}に関する実践的な情報とノウハウをご紹介します。`,
    }
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = decodeURIComponent(resolvedParams.category);
  const posts = getSortedPosts().filter(post => post.category === category);
  
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* ページコンテンツ */}
        <nav className="text-sm text-gray-400 mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-cyan-400">ホーム</Link></li>
            <li><span className="mx-2">›</span></li>
            <li><Link href="/blog" className="hover:text-cyan-400">ブログ</Link></li>
            <li><span className="mx-2">›</span></li>
            <li aria-current="page" className="text-cyan-400">{category}</li>
          </ol>
        </nav>
        
        <h1 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
          {category}に関する記事一覧
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          {category}に関する最新情報、実践テクニック、成功事例などをご紹介します。
          プロの視点から解説する{category}のノウハウをぜひご活用ください。
        </p>
        
        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 記事リスト表示（上記と同様） */}
        </div>
      </div>
    </div>
  )
} 