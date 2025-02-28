import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import ProfileClient from '@/components/profile'
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react"

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

// 最新の記事データを更新（時系列順に並べ替え）
const latestPosts = [
  {
    title: "Notion API でできること - ビジネスを自動化する11の活用例",
    description: "Notion APIを活用したビジネス自動化の可能性を探ります。データベース操作からワークフロー自動化まで、実践的な11の活用例を解説します。",
    date: "2025.02.27",
    category: "API活用",
    slug: "notion-api-usage",
    image: "/blog/eye-catch/for-notion.jpeg",
    href: "/blog/notion-api-usage"
  },
  {
    title: "結果の出るホームページの作り方～プロが教える7つの成功戦略と実践事例",
    description: 'ホームページの成果を最大化するための実践的な戦略と具体的な改善手法を解説。アクセス解析データに基づく効果的なホームページ設計のノウハウと、CV率を2.3倍に改善した実例を紹介します。',
    date: "2025.02.22",
    category: 'Web制作',
    slug: 'homepage-success',
    image: '/blog/eye-catch/homepage-success.jpg',
    href: "/blog/homepage-success"
  },
  {
    title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
    description: 'LPの本質的な目的と、制作後の運用の重要性について解説します。セールスライティング、LPO、広告運用など、実務経験に基づいた知見を共有します。',
    date: "2025.02.16",
    category: 'LP制作',
    slug: 'lp-development',
    image: '/blog/eye-catch/for-LPO.webp',
    href: "/blog/lp-development"
  },
  // ... 他の記事データ ...
];

export default async function Home() {
  const startTime = process.hrtime();
  const data = await ProfileServer();
  const endTime = process.hrtime(startTime);
  
  console.log(`Server-side rendering took ${endTime[0]}s ${endTime[1] / 1000000}ms`);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* ヒーローセクション */
        /* ... */}

      {/* サービスセクション */
        /* ... */}

      {/* プロフィールセクション */}
      <ProfileClient data={data} />

      {/* 最新記事セクション */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">最新の記事</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {latestPosts.map((post) => (
              <a
                key={post.slug}
                href={post.href}
                className="block bg-gray-800/50 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-cyan-400">{post.category}</span>
                    <time className="text-gray-500">{post.date}</time>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ブログセクション */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0d1631] to-[#0f172a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-16 text-center">
            ブログ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 新しいブログ記事 - Meta広告 エステサロン */}
            <article className="bg-[#0d1631]/70 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-900/20 transition-all group">
              <Link href="/blog/meta-ads-for-esthetic-salon" className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/blog/eye-catch/meta-ads-esthetic.jpg"
                    alt="エステサロン向けMeta広告運用ガイド"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4 z-10">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">広告運用</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    エステサロンのMeta広告運用完全ガイド
                  </h3>
                  <time className="text-gray-500 text-sm">2025.02.28</time>
                </div>
              </Link>
            </article>
            
            {/* 既存のブログ記事 */}
            {/* ... existing articles ... */}
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