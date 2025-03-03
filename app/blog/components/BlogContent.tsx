import { getPostBySlug } from '@/lib/blog-posts';
import Image from 'next/image';

export default function BlogContent({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  
  if (!post) return null;
  
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
        <Image 
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="lead text-xl text-gray-300">{post.excerpt}</p>
      {/* ここで記事の本文内容を表示 */}
      <div className="mt-8">
        {/* 記事内容のプレースホルダー */}
        <p>この記事の詳細内容は現在準備中です。</p>
      </div>
    </div>
  );
} 