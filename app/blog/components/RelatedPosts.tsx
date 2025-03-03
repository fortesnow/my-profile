import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getSortedPosts } from '@/lib/blog-posts';

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return null;
  
  // 同じカテゴリの記事を最大3件取得（現在の記事を除く）
  const relatedPosts = getSortedPosts()
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, 3);
  
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-cyan-300">関連記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-colors">
              <div className="relative h-48 w-full">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg group-hover:text-cyan-300 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 