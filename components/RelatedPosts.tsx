import Link from "next/link"
import Image from "next/image"
import { getSortedPosts } from "@/lib/blog-posts"

export default function RelatedPosts({ 
  currentSlug, 
  currentCategory 
}: { 
  currentSlug: string, 
  currentCategory: string 
}) {
  // 同じカテゴリーの記事を取得（現在の記事を除く）
  const relatedPosts = getSortedPosts()
    .filter(post => post.slug !== currentSlug && post.category === currentCategory)
    .slice(0, 3);
  
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-white">関連記事</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.id}
            className="bg-gray-800/30 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-colors"
          >
            <div className="relative aspect-video">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-cyan-400">{post.category}</span>
              <h4 className="font-bold text-white mt-1 mb-2 line-clamp-2">{post.title}</h4>
              <p className="text-sm text-gray-300 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 