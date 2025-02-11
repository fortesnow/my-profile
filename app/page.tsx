import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import ProfileClient from '@/components/profile'
import '@/app/globals.css';
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Web制作 あおい | フロントエンド開発・LP制作',
  description: 'フロントエンド開発とLP制作のフリーランスエンジニア。React, Next.js, TypeScriptを使用した高品質な開発と、成果の出るLP制作を提供します。',
  keywords: 'Web制作, フロントエンド開発, LP制作, React, Next.js, フリーランス',
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
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  
  // サーバーサイドでの処理時間を計測
  const startTime = process.hrtime();
  const data = await ProfileServer();
  const endTime = process.hrtime(startTime);
  
  console.log(`Server-side rendering took ${endTime[0]}s ${endTime[1] / 1000000}ms`);
  
  return <ProfileClient data={data} />
}