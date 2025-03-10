import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import ProfileClient from '@/components/profile'
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react"
import { getLatestPosts, BlogPost } from '../lib/blog-posts';

export const metadata: Metadata = {
  title: 'Web制作 あおい | フロントエンド開発・LP制作',
  description: 'フロントエンド開発とLP制作のフリーランスエンジニア。React, Next.js, TypeScriptを使用した高品質な開発と、成果の出るLP制作を提供します。',
  keywords: ['Web制作', 'フロントエンド開発', 'LP制作', 'React', 'Next.js', 'フリーランス', '広告運用', 'SEO対策', 'コーディング'],
  alternates: {
    canonical: 'https://yourdomain.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Web制作 あおい | フロントエンド開発・LP制作',
    description: 'フロントエンド開発とLP制作のフリーランスエンジニア。高品質な開発と成果の出るLP制作を提供します。',
    images: [
      {
        url: '/images/og-home.jpg', // OGP画像を用意する必要があります
        width: 1200,
        height: 630,
        alt: 'Web制作 あおい',
      },
    ],
  },
}

export default async function Home() {
  const startTime = process.hrtime();
  const data = await ProfileServer();
  const endTime = process.hrtime(startTime);
  
  console.log(`Server-side rendering took ${endTime[0]}s ${endTime[1] / 1000000}ms`);
  
  // 確実に最新データを取得するため、明示的に関数を呼び出す
  const latestPosts = getLatestPosts(3);
  
  console.log("Latest posts:", latestPosts); // デバッグ用
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* ヒーローセクション */
        /* ... */}

      {/* サービスセクション */
        /* ... */}

      {/* プロフィールセクション */}
      <ProfileClient data={data} />

      {/* ブログセクション */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0d1631] to-[#0f172a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-16 text-center">
            ブログ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post: BlogPost) => (
              <article key={post.id} className="bg-[#0d1631]/70 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-900/20 transition-all group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4 z-10">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <time className="text-gray-500 text-sm">{post.date}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-teal-500 transition-all">
              ブログ一覧を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}