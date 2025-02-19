import Image from "next/image"
import { Metadata } from "next"
import { 
  Target, 
  PenTool, 
  Smartphone, 
  Search 
} from "lucide-react"

export const metadata: Metadata = {
  title: 'LP制作サービス | Web制作 あおい',
  description: '戦略的なデザインと効果的なコピーライティングで成果を最大化するランディングページ制作サービス。A/Bテストによる継続的な改善と、セールスライティングのノウハウを活かした高コンバージョンのLP制作を提供します。',
  keywords: [
    'LP制作',
    'ランディングページ',
    'コンバージョン率改善',
    'A/Bテスト',
    'セールスライティング',
    'Web制作',
    'UI/UXデザイン',
    'レスポンシブデザイン',
    'コーディング'
  ].join(', '),
  openGraph: {
    title: 'LP制作サービス | 高コンバージョンのランディングページ制作',
    description: '戦略的なデザインと効果的なコピーライティングで成果を最大化するランディングページ制作サービス。A/Bテストによる継続的な改善を提供。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/lp-service-og.jpg',
        width: 1200,
        height: 630,
        alt: 'LP制作サービス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LP制作サービス | 高コンバージョンのランディングページ制作',
    description: '戦略的なデザインと効果的なコピーライティングで成果を最大化するランディングページ制作サービス。A/Bテストによる継続的な改善を提供。',
    images: ['/images/lp-service-og.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com/lp-service'
  }
}

// 構造化データの生成
function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LP制作サービス',
    description: '高品質なランディングページ制作サービスを提供。戦略的なデザイン、効果的なコピーライティング、SEO対策まで一貫して対応。',
    provider: {
      '@type': 'Person',
      name: 'あおい',
      url: 'https://yourdomain.com'
    },
    areaServed: 'JP',
    serviceType: 'Web Development',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'JP'
    }
  }
}

export default function LPService() {
  const structuredData = generateStructuredData()

  const features = [
    {
      title: "戦略的デザイン",
      description: "ユーザー心理を考慮した、高コンバージョンを実現するデザイン設計",
      icon: Target
    },
    {
      title: "コピーライティング",
      description: "商品の価値を最大限に引き出す、説得力のある文章作成",
      icon: PenTool
    },
    {
      title: "レスポンシブ対応",
      description: "すべてのデバイスで最適な表示を実現する完全レスポンシブ対応",
      icon: Smartphone
    },
    {
      title: "SEO対策",
      description: "検索エンジンからの自然流入を増やすための最適化",
      icon: Search
    }
  ]

  const benefits = [
    {
      title: "成果にこだわる制作",
      points: [
        "AIDMAに基づいた導線設計",
        "セールスライティングによる高CVR実現",
        "データに基づく継続的な改善"
      ]
    },
    {
      title: "LPO対応",
      points: [
        "A/Bテストによる検証",
        "アクセス解析と改善提案",
        "コンバージョン率の最適化"
      ]
    },
    {
      title: "継続的なサポート",
      points: [
        "月次パフォーマンスレポート",
        "広告運用との連携支援",
        "定期的な改善提案"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "ヒアリング",
      description: "目的、ターゲット、KPIなどをお伺いし、最適な提案を行います。"
    },
    {
      step: "02",
      title: "企画・設計",
      description: "コンバージョンを最大化するための導線設計とワイヤーフレームを作成。"
    },
    {
      step: "03",
      title: "デザイン・実装",
      description: "魅力的なビジュアルと、高品質なコーディングで実装。"
    },
    {
      step: "04",
      title: "運用サポート",
      description: "公開後の効果測定と改善提案で、継続的な成果向上をサポート。"
    }
  ]

  const results = [
    {
      title: "ECサイトのLP",
      improvement: "CVR 3.2% → 8.5%",
      period: "3ヶ月の改善実績",
      description: "セールスライティングとLPOによる継続的な改善で、コンバージョン率を165%向上"
    },
    {
      title: "セミナーLP",
      improvement: "申込率 12% → 25%",
      period: "2ヶ月の改善実績",
      description: "ユーザー心理に基づいた導線の最適化で、セミナー申込率を108%向上"
    },
    {
      title: "サービス紹介LP",
      improvement: "問合せ 15件 → 45件",
      period: "3ヶ月の改善実績",
      description: "A/Bテストと継続的な改善で、月間問合せ数を200%向上"
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
            LP制作サービス
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            成果の出るランディングページを、戦略的に制作いたします
          </p>
        </div>
      </section>

      {/* 課題解決セクション - 上部に移動 */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">成果が出ないLPでお困りですか？</h3>
                    <p className="text-gray-300">制作して終わりではなく、データに基づいた継続的な改善が重要です。私たちは制作後も成果向上までサポートします。</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">広告効果を最大化したいですか？</h3>
                    <p className="text-gray-300">広告運用とLPの連携で、広告費用対効果（ROAS）を最大化。効率的な集客を実現します。</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">コピーライティングに悩んでいませんか？</h3>
                    <p className="text-gray-300">商品やサービスの価値を最大限に引き出し、ユーザーの心理に響く効果的なコピーライティングを提供します。</p>
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
              <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-indigo-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            選ばれる3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-1 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コンテンツセクション - 移動 */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            なぜLPの継続的な改善が重要なのか
          </h2>
          <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                ランディングページは、制作して公開したら終わりではありません。
                むしろ、そこからが本当のスタートラインです。
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                完璧なLPは存在しない
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                最初から完璧なLPを作ることは不可能です。なぜなら、ユーザーの行動は常に変化し、
                市場環境も刻々と変わっていくからです。そのため、データに基づいた継続的な改善が必要不可欠です。
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                3ステップの改善サイクル
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">
                    1. データ収集と分析
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>ヒートマップによるユーザー行動の可視化</li>
                    <li>コンバージョンファネルの分析</li>
                    <li>離脱ポイントの特定</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">
                    2. 改善仮説の設定
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>ユーザー行動心理に基づく改善案の策定</li>
                    <li>セールスライティングの最適化</li>
                    <li>UIの改善提案</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">
                    3. A/Bテストと効果測定
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>科学的なアプローチによる検証</li>
                    <li>データに基づく意思決定</li>
                    <li>継続的な改善サイクルの確立</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-lg font-semibold text-cyan-400 mb-4">
                  継続的な改善がもたらす効果
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>コンバージョン率の段階的な向上</li>
                  <li>投資対効果（ROI）の最大化</li>
                  <li>市場環境の変化への迅速な対応</li>
                  <li>競合との差別化要因の強化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 制作フローセクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            制作の流れ
          </h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 items-start bg-gray-900/30 rounded-lg p-6">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-indigo-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            改善実績
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{result.title}</h3>
                  <div className="text-2xl font-bold text-purple-400 mb-2">{result.improvement}</div>
                  <div className="text-sm text-gray-400 mb-4">{result.period}</div>
                  <p className="text-gray-300">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            お問い合わせ
          </h2>
          <p className="text-gray-300 mb-8">
            LP制作についてのご相談・お見積りは、LINEにてお気軽にお問い合わせください。
          </p>
          <a
            href="https://lin.ee/ATZ4bog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#00B900] text-white font-bold hover:opacity-90 transition-all duration-300"
          >
            <span>LINEでお問い合わせ</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}