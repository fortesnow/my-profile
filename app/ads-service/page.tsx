import Image from "next/image"
import { Metadata } from "next"
import { 
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
      title: "Google広告運用",
      description: "検索広告、ディスプレイ広告の戦略立案から運用まで",
      icon: BarChart2
    },
    {
      title: "Meta広告運用",
      description: "Instagram、Facebook広告の効率的な運用と最適化",
      icon: TrendingUp
    },
    {
      title: "広告分析・改善",
      description: "データに基づく継続的な改善とROAS最大化",
      icon: PieChart
    },
    {
      title: "LPO対応",
      description: "広告とLPの連携による効果最大化",
      icon: Settings
    }
  ]

  const benefits = [
    {
      title: "データドリブン",
      points: [
        "詳細なデータ分析",
        "A/Bテストによる検証",
        "継続的な改善提案"
      ]
    },
    {
      title: "コスト最適化",
      points: [
        "入札額の最適化",
        "ターゲティングの精緻化",
        "無駄な広告費の削減"
      ]
    },
    {
      title: "統合的なアプローチ",
      points: [
        "広告とLPの連携",
        "クリエイティブ改善",
        "コンバージョン率向上"
      ]
    }
  ]

  const process = [
    {
      title: "現状分析",
      description: "現在の広告運用状況を詳細に分析し、改善点を洗い出します。"
    },
    {
      title: "戦略立案",
      description: "目標達成のための具体的な運用戦略を策定します。"
    },
    {
      title: "運用開始",
      description: "策定した戦略に基づき、効率的な運用を開始します。"
    },
    {
      title: "効果測定・改善",
      description: "定期的なレポーティングと継続的な改善を実施します。"
    }
  ]

  const results = [
    {
      title: "ECサイト",
      description: "広告費用を20%削減しながら、ROASを150%改善"
    },
    {
      title: "サービス業",
      description: "問い合わせ数を3倍に増加、CPAを40%削減"
    },
    {
      title: "BtoB企業",
      description: "リード獲得単価を半額に抑制し、質も向上"
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

      {/* サービス内容 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{benefit.title}</h3>
                    <ul className="list-disc pl-6 text-gray-300">
                      {benefit.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 制作フローセクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            運用の流れ
          </h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            改善実績
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{result.title}</h3>
                    <p className="text-gray-300">{result.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 