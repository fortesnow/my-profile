import Image from "next/image"
import { Metadata } from "next"
import { 
  Target, 
  PenTool, 
  Smartphone, 
  Search,
  Award,
  Clock,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Gift,
  Star
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white [image-rendering:pixelated]">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ヒーローセクション - ゲーム風にアップグレード + zunda-pic追加 */}
        <section className="relative py-12 mb-20">
          {/* ピクセルアートの装飾 */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[url('/images/pixel-grid.png')] bg-repeat"></div>
          </div>
          
          {/* メインビジュアル */}
          <div className="absolute top-20 inset-x-0 w-full mx-auto opacity-40 max-w-[280px] md:max-w-2xl aspect-square md:aspect-[16/9]">
            <Image
              src="/images/zunda-pic.png"
              alt="LP制作サービス"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg border-[3px] border-white/20 transform -rotate-2 [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
              <p className="text-lg font-bold [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                コンバージョン率 UP! 売上 UP!
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:4px_4px_0_rgba(0,0,0,0.5)]">
              LP制作サービス
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
              戦略的なデザインと効果的なセールスライティングで<br />
              <span className="text-cyan-400 font-bold">売上を最大化</span>するランディングページを制作
            </p>
            
            {/* ゲーム風のボタン */}
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="#service-details"
                className="inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-lg border-b-[6px] border-l-[2px] border-r-[2px] border-t-[2px] border-cyan-900 hover:translate-y-1 hover:border-b-[4px] transition-all duration-200 [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]"
              >
                サービス詳細を見る
              </a>
              
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg border-b-[6px] border-l-[2px] border-r-[2px] border-t-[2px] border-purple-900 hover:translate-y-1 hover:border-b-[4px] transition-all duration-200 [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]"
              >
                <span className="flex items-center">
                  今すぐ相談する
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </a>
            </div>
            
            {/* 緊急性を高める要素 */}
            <div className="mt-8 inline-block bg-red-600/80 px-4 py-2 rounded-lg border-[2px] border-red-400/30 animate-pulse [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
              <p className="text-white font-bold flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                今月の制作枠残りわずか！
              </p>
            </div>
          </div>
        </section>

        {/* 成功レベルアップセクション - NEW */}
        <section id="level-up" className="mb-20">
          <div className="bg-gradient-to-br from-gray-900/70 to-indigo-900/70 backdrop-blur-md rounded-lg border-[8px] border-purple-500/20 [box-shadow:8px_8px_0_rgba(168,85,247,0.2)] p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              LPでビジネスをレベルアップ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-lg p-6 border-[4px] border-cyan-500/30 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)] hover:translate-y-[-4px] transition-transform">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-cyan-400 mb-4 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  顧客獲得率 UP!
                </h3>
                <p className="text-gray-300 text-center">
                  訪問者を顧客に変える<br />高コンバージョンLPで<br />新規獲得を増やします
                </p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6 border-[4px] border-purple-500/30 [box-shadow:4px_4px_0_rgba(168,85,247,0.2)] hover:translate-y-[-4px] transition-transform">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-purple-400 mb-4 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  広告効果 MAX!
                </h3>
                <p className="text-gray-300 text-center">
                  広告投資の効果を最大化<br />広告費用対効果を<br />劇的に向上させます
                </p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6 border-[4px] border-cyan-500/30 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)] hover:translate-y-[-4px] transition-transform">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-cyan-400 mb-4 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  ブランド力 強化!
                </h3>
                <p className="text-gray-300 text-center">
                  洗練されたデザインで<br />ブランド価値を高め<br />競合との差別化を実現
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション - ピクセルアート風にアップグレード */}
        <section id="service-details" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
            サービスの特徴
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/70 to-indigo-900/70 backdrop-blur-md rounded-lg p-6 border-[4px] border-cyan-500/20 [box-shadow:6px_6px_0_rgba(8,145,178,0.2)] hover:translate-y-[-4px] transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg [box-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTAブロック - NEW */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-gray-900/70 to-indigo-900/70 backdrop-blur-md p-6 rounded-lg border-[4px] border-yellow-500/30 [box-shadow:4px_4px_0_rgba(234,179,8,0.2)]">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                <Gift className="w-5 h-5 inline-block mr-2" />
                初回限定特典
              </h3>
              <p className="text-gray-300 mb-4">
                今月中のお申し込みで、A/Bテスト無料実施！<br />
                コンバージョン率を科学的に向上させるチャンス！
              </p>
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-lg border-b-[4px] border-l-[2px] border-r-[2px] border-t-[2px] border-yellow-800 hover:translate-y-1 hover:border-b-[2px] transition-all [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] [text-shadow:1px_1px_0_rgba(0,0,0,0.5)]"
              >
                特典を受け取る
              </a>
            </div>
          </div>
        </section>

        {/* メリットセクション - ゲーム風にアップグレード */}
        <section className="py-12 px-4 mb-20 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-lg border-[8px] border-purple-500/20 [box-shadow:8px_8px_0_rgba(168,85,247,0.2)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              選ばれる3つの理由
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [box-shadow:6px_6px_0_rgba(8,145,178,0.2)] hover:translate-y-[-4px] transition-transform"
                >
                  <h3 className="text-xl font-bold mb-6 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">{benefit.title}</h3>
                  <ul className="space-y-4">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-1 rounded-full mt-1 [box-shadow:2px_2px_0_rgba(0,0,0,0.3)]">
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

        {/* 成果指標カウンター - NEW */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900/70 to-indigo-900/70 backdrop-blur-md rounded-lg border-[8px] border-cyan-500/20 [box-shadow:8px_8px_0_rgba(8,145,178,0.2)] p-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              実績スコア
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  98%
                </div>
                <p className="text-gray-300 text-sm">顧客満足度</p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400 mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  150+
                </div>
                <p className="text-gray-300 text-sm">制作実績</p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  53%
                </div>
                <p className="text-gray-300 text-sm">平均CVR向上率</p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400 mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  1ヶ月
                </div>
                <p className="text-gray-300 text-sm">平均制作期間</p>
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツセクション - ゲーム風にアップグレード */}
        <section className="py-12 px-4 mb-20 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-lg border-[8px] border-purple-500/20 [box-shadow:8px_8px_0_rgba(168,85,247,0.2)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              なぜLPの継続的な改善が重要なのか
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [box-shadow:6px_6px_0_rgba(8,145,178,0.2)]">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  ランディングページは、制作して公開したら終わりではありません。
                  むしろ、そこからが本当のスタートラインです。
                </p>

                <h3 className="text-2xl font-bold mb-6 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  完璧なLPは存在しない
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  最初から完璧なLPを作ることは不可能です。なぜなら、ユーザーの行動は常に変化し、
                  市場環境も刻々と変わっていくからです。そのため、データに基づいた継続的な改善が必要不可欠です。
                </p>

                <h3 className="text-2xl font-bold mb-6 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  3ステップの改善サイクル
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-purple-500/30 [box-shadow:4px_4px_0_rgba(168,85,247,0.2)]">
                    <h4 className="text-xl font-bold mb-4 text-purple-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                      1. データ収集と分析
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>ヒートマップによるユーザー行動の可視化</li>
                      <li>コンバージョンファネルの分析</li>
                      <li>離脱ポイントの特定</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-cyan-500/30 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)]">
                    <h4 className="text-xl font-bold mb-4 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                      2. 改善仮説の設定
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>ユーザー行動心理に基づく改善案の策定</li>
                      <li>セールスライティングの最適化</li>
                      <li>UIの改善提案</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-purple-500/30 [box-shadow:4px_4px_0_rgba(168,85,247,0.2)]">
                    <h4 className="text-xl font-bold mb-4 text-purple-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                      3. A/Bテストと効果測定
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>科学的なアプローチによる検証</li>
                      <li>データに基づく意思決定</li>
                      <li>継続的な改善サイクルの確立</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border-[4px] border-cyan-500/20 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)]">
                  <p className="text-lg font-bold text-cyan-400 mb-4 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
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

        {/* 制作フローセクション - ゲーム風にアップグレード */}
        <section className="py-12 px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              制作の流れ
            </h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-gray-900/50 rounded-lg p-6 border-[4px] border-purple-500/20 [box-shadow:6px_6px_0_rgba(168,85,247,0.2)] hover:translate-y-[-4px] transition-transform">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white font-bold [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある質問 - NEW */}
        <section className="py-12 px-4 mb-20 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-lg border-[8px] border-cyan-500/20 [box-shadow:8px_8px_0_rgba(8,145,178,0.2)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              よくある質問
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-purple-500/30 [box-shadow:4px_4px_0_rgba(168,85,247,0.2)]">
                <h3 className="text-xl font-bold mb-3 text-purple-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  制作期間はどのくらいですか？
                </h3>
                <p className="text-gray-300">
                  標準的なLPの場合、企画から実装まで1ヶ月程度です。内容や規模により前後する場合があります。緊急対応も可能ですので、ご相談ください。
                </p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-cyan-500/30 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)]">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  料金はいくらですか？
                </h3>
                <p className="text-gray-300">
                  機能やデザインの複雑さにより変動します。詳細な見積もりは無料でご提供しますので、お気軽にお問い合わせください。
                </p>
              </div>
              <div className="bg-gray-900/70 p-6 rounded-lg border-[4px] border-cyan-500/30 [box-shadow:4px_4px_0_rgba(8,145,178,0.2)]">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                  公開後のサポートはありますか？
                </h3>
                <p className="text-gray-300">
                  はい、公開後のサポートプランをご用意しています。アクセス解析、改善提案、効果測定までトータルでサポート。コンバージョン率の最大化を継続的に支援します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 実績セクション - ゲーム風にアップグレード */}
        <section className="py-12 px-4 mb-20 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-lg border-[8px] border-purple-500/20 [box-shadow:8px_8px_0_rgba(168,85,247,0.2)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              改善実績
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden border-[4px] border-cyan-500/20 [box-shadow:6px_6px_0_rgba(8,145,178,0.2)] hover:scale-105 transition-transform"
                >
                  <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-2">
                    <h3 className="text-xl font-bold text-center text-cyan-400 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">{result.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-2xl font-bold text-center text-purple-400 mb-4 [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-center text-gray-400 mb-4">
                      {result.period}
                    </div>
                    <p className="text-gray-300">{result.description}</p>
                    
                    {/* 評価スター */}
                    <div className="flex justify-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* お問い合わせセクション - ゲーム風にアップグレード */}
        <section className="py-12 px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/70 to-indigo-900/70 p-8 rounded-lg border-[8px] border-cyan-500/20 [box-shadow:8px_8px_0_rgba(8,145,178,0.2)]">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:3px_3px_0_rgba(0,0,0,0.5)]">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-300 mb-12 [text-shadow:1px_1px_0_rgba(0,0,0,0.5)]">
              LP制作についてのご相談・お見積りは、<br />LINEにてお気軽にお問い合わせください。
            </p>
            
            {/* 安心の保証 - 成果保証制度を削除 */}
            <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-cyan-500/20">
                <CheckCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">初期費用0円から<br />始められるプランあり</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-cyan-500/20">
                <CheckCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">納品後も<br />しっかりサポート</p>
              </div>
            </div>
            
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 text-xl font-bold text-white bg-[#00B900] rounded-lg border-b-[6px] border-l-[2px] border-r-[2px] border-t-[2px] border-[#009900] hover:translate-y-1 hover:border-b-[4px] transition-all duration-200 [box-shadow:6px_6px_0_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]"
            >
              <span className="flex items-center">
                LINEでお問い合わせ
                <ArrowRight className="ml-3 w-6 h-6" />
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}