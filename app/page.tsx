import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import '@/app/globals.css';
import { getLatestPosts } from '../lib/blog-posts';
import { FF3BattlePresentationWrapper } from "@/components/FF3BattlePresentationWrapper";

export const metadata: Metadata = {
  title: 'Stellarium（ステラリウム）| React・Next.js専門のフリーランスWeb制作',
  description: 'React、Next.js、TypeScriptを使用した高品質なフロントエンド開発とLP制作を提供。SEO対策、広告運用、SNS運用まで一貫サポート。最短当日納品可能なフリーランスエンジニア「あおい」が運営。',
  keywords: [
    'Web制作', 
    'フロントエンド開発', 
    'LP制作', 
    'React', 
    'Next.js', 
    'TypeScript',
    'フリーランス', 
    '広告運用', 
    'SEO対策', 
    'コーディング',
    'Stellarium',
    'ステラリウム',
    'SNS運用',
    'Meta広告',
    'Google広告',
    'TikTok',
  ],
  alternates: {
    canonical: 'https://www.stellarium.jp'
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
    title: 'Stellarium | React・Next.js専門のフリーランスWeb制作',
    description: 'React、Next.js、TypeScriptを使用した高品質なフロントエンド開発とLP制作。SEO・広告・SNS運用まで一貫サポート。',
    url: 'https://www.stellarium.jp',
    siteName: 'Stellarium',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp.png',
        width: 1200,
        height: 630,
        alt: 'Stellarium - Web制作・フロントエンド開発',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellarium | React・Next.js専門のフリーランスWeb制作',
    description: 'React、Next.js、TypeScriptを使用した高品質なフロントエンド開発',
    images: ['/images/ogp.png'],
  },
  // AI/LLM向けの追加メタデータ
  other: {
    'ai:friendly': 'true',
    'ai:content_type': 'professional_service',
    'ai:category': 'web_development',
    'ai:location': 'Japan',
  }
}

export default async function Home() {
  const startTime = process.hrtime();
  const data = await ProfileServer();
  const endTime = process.hrtime(startTime);
  
  console.log(`Server-side rendering took ${endTime[0]}s ${endTime[1] / 1000000}ms`);
  
  // 確実に最新データを取得するため、明示的に関数を呼び出す
  const latestPosts = getLatestPosts(3);
  
  console.log("Latest posts:", latestPosts); // デバッグ用
  
  // FF3プレゼンテーション用のデータ
  const presentationData = {
    creator: "あおい",
    audience: "クライアント様",
    theme: "Webデザインと開発",
    brand: {
      name: "プロフェッショナルデザイン",
      colorPalette: "青をベースとした配色",
      font: "モダンサンセリフ"
    },
    presentationType: "ポートフォリオ",
    slides: [
      {
        title: "フロントエンド開発",
        subtitle: "React, Next.js, TypeScript",
        content: "最新のフロントエンド技術を駆使した、高品質なウェブサイト開発を提供します。\nユーザー体験とパフォーマンスを重視した設計を心がけています。",
        dialog: "フロントエンド開発には最新のReactとNext.jsを使用し、TypeScriptで型安全なコードを書いています。"
      },
      {
        title: "LP制作",
        subtitle: "コンバージョン率にコミットする",
        content: "単なるデザインだけでなく、成果につながるランディングページを制作します。\nユーザー心理と行動分析に基づいたデザインを提供します。",
        dialog: "ランディングページはコンバージョンが命です。A/Bテストとデータ分析を通じて継続的に改善していきます。"
      },
      {
        title: "SEO対策",
        subtitle: "検索エンジン最適化",
        content: "SEOを考慮したコーディングとコンテンツ設計で、検索エンジンからの流入を増やします。\n技術的SEOとコンテンツSEOの両面からアプローチします。",
        dialog: "検索エンジン対策は技術とコンテンツの両輪が大切です。最新のSEOトレンドを常に取り入れています。"
      }
    ]
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* FF3バトルプレゼンテーション */}
      <FF3BattlePresentationWrapper 
        presentationData={presentationData}
        profileData={data}
      />
      
      {/* 元のページコンテンツはFF3BattlePresentationWrapperコンポーネント内部に移動されました */}
    </main>
  )
}