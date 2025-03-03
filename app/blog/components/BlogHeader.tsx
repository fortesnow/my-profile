import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog-posts';

export default function BlogHeader({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  
  if (!post) return null;
  
  return (
    <div>
      <Link href="/blog" className="flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ブログ一覧に戻る
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>
    </div>
  );
} 