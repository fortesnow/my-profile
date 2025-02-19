import type { Metadata } from "next";
import { ProfileServer } from '@/components/profile-server'
import ProfileClient from '@/components/profile'
import '@/app/globals.css';
import { Newspaper, Rocket, LineChart } from 'lucide-react';
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

// 実績データの定義
const achievements = [
  {
    category: "プレスリリース・メディア",
    items: [
      {
        title: "社団法人のブランド認知拡大",
        description: "全国紙への掲載実績あり。認知度が前年比200%に向上",
        impact: "メディア掲載数：30件以上",
        icon: <Newspaper className="w-6 h-6" />
      },
      {
        title: "ベンチャー企業の新規サービス",
        description: "Web・IT系メディアを中心に大規模プロモーションを実施",
        impact: "記事到達数：100万PV達成",
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "大手メディア出稿支援",
        description: "ネット新聞・Webメディアへの最適な出稿戦略を立案",
        impact: "ROI：150%改善",
        icon: <LineChart className="w-6 h-6" />
      }
    ]
  },
  // ... 他のカテゴリーも同様に定義 ...
]

export default async function Home() {
  // サーバーサイドでの処理時間を計測
  const startTime = process.hrtime();
  const data = await ProfileServer();
  const endTime = process.hrtime(startTime);
  
  console.log(`Server-side rendering took ${endTime[0]}s ${endTime[1] / 1000000}ms`);
  
  return (
    <div>
      <ProfileClient data={data} />

      {/* 実績セクション */}
      <section className="py-20 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            実績
          </h2>

          <div className="grid gap-12">
            {achievements.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <div className="text-sm font-medium text-purple-400">
                        {item.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 実績の補足説明 */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 max-w-2xl mx-auto">
              プレスリリース作成から、メディアへの出稿戦略立案、実施後の効果測定まで、
              一貫したサポートを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* メディア掲載実績のロゴ表示 */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold mb-8 text-center text-cyan-400">
            メディア掲載実績
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* メディアロゴを追加 */}
            <Image
              src="/images/media-logo-1.png"
              alt="メディアロゴ"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all"
            />
            {/* 他のメディアロゴも同様に追加 */}
          </div>
        </div>
      </section>
    </div>
  )
}