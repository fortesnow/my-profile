"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/lib/blog-posts"

export function BlogCategoryFilter({ 
  allPosts, 
  categories 
}: { 
  allPosts: BlogPost[], 
  categories: string[] 
}) {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  
  // 選択されたカテゴリーに基づいて記事をフィルタリング
  const filteredPosts = selectedCategory === "すべて" 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);
  
  return (
    <>
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-400 mb-8" aria-label="パンくずリスト">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              ホーム
            </Link>
          </li>
          <li>
            <span className="mx-2">›</span>
          </li>
          <li aria-current="page" className="text-cyan-400">
            ブログ記事一覧
          </li>
        </ol>
      </nav>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
        ブログ記事一覧
      </h1>
      
      <p className="text-xl text-gray-300 mb-12 max-w-3xl">
        飲食店・エステサロン向けのWeb集客テクニック、SEO対策、Meta広告運用のノウハウなど、
        成果の出るデジタルマーケティング戦略を実践的に解説しています。
      </p>
      
      {/* カテゴリーフィルター */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">カテゴリーで絞り込む</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-cyan-600/50 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-gray-800/40 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all border border-gray-700 hover:border-cyan-800">
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <div className="relative aspect-video">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 bg-cyan-500/80 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-gray-400 text-sm">{post.date}</time>
                <h2 className="text-xl font-bold text-white my-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {/* フィルター結果が0件の場合のメッセージ */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-300 text-lg">
            該当する記事が見つかりませんでした。別のカテゴリーを選択してください。
          </p>
        </div>
      )}
      
      {/* ページネーション（記事が増えたら実装） */}
      {filteredPosts.length > 12 && (
        <div className="flex justify-center mt-16">
          <nav aria-label="ページネーション">
            <ul className="flex space-x-2">
              <li>
                <span className="px-4 py-2 bg-cyan-600 text-white rounded-md">1</span>
              </li>
              <li>
                <a href="/blog/page/2" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700">2</a>
              </li>
              <li>
                <a href="/blog/page/3" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700">3</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      
      {/* CTAセクション */}
      <div className="mt-16 p-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-white">最新の集客ノウハウを受け取りませんか？</h2>
        <p className="text-gray-300 mb-6">メールマガジンに登録いただくと、最新の集客テクニックや特別なお知らせをいち早くお届けします。</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="メールアドレス" 
            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white flex-grow"
            aria-label="メールアドレス"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
            登録する
          </button>
        </form>
      </div>
    </>
  )
} 