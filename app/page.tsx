import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import ProfileClient from '@/components/profile'
import '@/app/globals.css';
import Image from 'next/image';

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
    </main>
  )
}