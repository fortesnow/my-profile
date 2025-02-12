import Image from "next/image"
import { Metadata } from "next"
import { 
  Target, 
  BarChart2, 
  TrendingUp,
  Settings,
  Users,
  PieChart
} from "lucide-react"

export const metadata: Metadata = {
  title: '広告運用サービス | Web制作 あおい',
  description: '効率的な広告運用でROASを最大化。Google/Meta広告の運用代行から、LPとの連携まで一貫してサポートします。',
  keywords: [
    '広告運用', 'Web広告', 'Google広告', 'Meta広告',
    'ROAS改善', '運用代行', '広告戦略', 'Web集客'
  ].join(', '),
  openGraph: {
    title: '広告運用サービス | Web制作 あおい',
    description: '効率的な広告運用でROASを最大化。Google/Meta広告の運用代行から、LPとの連携まで一貫してサポートします。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/og-ads-service.jpg',
        width: 1200,
        height: 630,
        alt: '広告運用サービス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '広告運用サービス | Web制作 あおい',
    description: '効率的な広告運用でROASを最大化。Google/Meta広告の運用代行から、LPとの連携まで一貫してサポートします。',
    images: ['/images/og-ads-service.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com/ads-service'
  }
}

function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '広告運用サービス',
    description: '効率的な広告運用でROASを最大化。Google/Meta広告の運用代行から、LPとの連携まで一貫してサポートします。',
    provider: {
      '@type': 'Person',
      name: 'あおい',
      url: 'https://yourdomain.com'
    },
    areaServed: 'JP',
    serviceType: 'Digital Advertising',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'JP'
    }
  }
}

export default function AdsService() {
  const structuredData = generateStructuredData()

  const features = [
    {
      title: "戦略的な広告設計",
      description: "ターゲット分析と市場調査に基づく、効果的な広告戦略の立案",
      icon: Target
    },
    {
      title: "データ分析",
      description: "広告データの詳細な分析による、継続的な改善と最適化",
      icon: BarChart2
    },
    {
      title: "ROAS改善",
      description: "広告費用対効果を最大化する運用とクリエイティブの改善",
      icon: TrendingUp
    },
    {
      title: "自動化設定",
      description: "効率的な運用を実現する広告の自動化設定",
      icon: Settings
    }
  ]

  const benefits = [
    {
      title: "効率的な運用",
      points: [
        "ターゲット層の明確化",
        "効果的な予算配分",
        "自動入札の最適化"
      ]
    },
    {
      title: "継続的な改善",
      points: [
        "定期的なレポーティング",
        "クリエイティブの改善提案",
        "競合分析と対策"
      ]
    },
    {
      title: "LPとの連携",
      points: [
        "広告とLPの整合性確保",
        "コンバージョン率の改善",
        "ユーザー体験の最適化"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "現状分析",
      description: "現在の広告運用状況、目標、課題などをヒアリングし、改善点を特定します。"
    },
    {
      step: "02",
      title: "戦略立案",
      description: "データに基づいた広告戦略を立案し、具体的な施策を提案します。"
    },
    {
      step: "03",
      title: "運用開始",
      description: "効果的なクリエイティブと最適な配信設定で運用を開始します。"
    },
    {
      step: "04",
      title: "改善・最適化",
      description: "定期的なレポーティングと分析に基づき、継続的に改善を行います。"
    }
  ]

  const results = [
    {
      title: "ECサイトの広告運用",
      improvement: "ROAS 127% → 312%",
      period: "3ヶ月の改善実績",
      description: "ターゲティングの最適化とLPの改善で、広告費用対効果を146%向上"
    },
    {
      title: "リード獲得広告",
      improvement: "CPA ¥3,200 → ¥1,850",
      period: "2ヶ月の改善実績",
      description: "クリエイティブとキーワードの改善で、獲得単価を42%削減"
    },
    {
      title: "認知拡大キャンペーン",
      improvement: "CTR 0.8% → 2.1%",
      period: "1ヶ月の改善実績",
      description: "ターゲット層の分析と広告文の改善で、クリック率を163%向上"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ヒーローセクション */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            広告運用サービス
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            データドリブンな運用で、広告効果を最大化します
          </p>
        </div>
      </section>

      {/* 課題解決セクション */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 relative overflow-hidden">
        <div className="container mx-auto relative">
          {/* Zunda-pic */}
          <div className="absolute right-[-20%] top-1/2 transform -translate-y-1/2 opacity-10 pointer-events-none z-20">
            <Image
              src="/images/zunda-pic.png"
              alt="装飾"
              width={800}
              height={800}
              className="w-[600px] md:w-[800px]"
              priority
            />
          </div>

          {/* コンテンツ */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              もう悩ませません
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">広告費用が高騰していませんか？</h3>
                    <p className="text-gray-300">適切なターゲティングと入札戦略で、広告費用を最適化し、ROASを改善します。</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">ターゲットが明確ではありませんか？</h3>
                    <p className="text-gray-300">データ分析に基づいて最適なターゲット層を特定し、効果的な広告配信を実現します。</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <PieChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">成果が見えづらくありませんか？</h3>
                    <p className="text-gray-300">詳細なレポーティングと分析で、広告効果を可視化し、継続的な改善を実現します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 以下、サービス内容、メリット、制作フロー、実績セクションは同様の構造で実装 */}
      // ... 残りのセクションは同様の構造で実装します
    </div>
  )
} 