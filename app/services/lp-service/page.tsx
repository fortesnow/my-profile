import type { Metadata } from "next";
import Image from "next/image"
import { 
  Target, 
  PenTool, 
  Smartphone, 
  Search,
  Award,
  // Clock,  // 未使用のためコメントアウトまたは削除
  // Users,  // 未使用のためコメントアウトまたは削除
  // Zap,    // 未使用のためコメントアウトまたは削除
  CheckCircle,
  ArrowRight,
  // Gift,   // 未使用のためコメントアウトまたは削除
  // Star    // 未使用のためコメントアウトまたは削除
} from "lucide-react"

export const metadata: Metadata = {
  title: 'LP制作サービス | Stellarium マーケティング',
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
    canonical: 'https://yourdomain.com/services/lp-service'
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
      '@type': 'Organization',
      name: 'Stellarium',
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

export default function LPServicePage() {
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
  
  const results = [
    {
      title: "化粧品ECサイト",
      description: "コンバージョン率120%アップ、広告効果180%向上",
      badge: "Beauty"
    },
    {
      title: "士業サービス",
      description: "問い合わせ数が前月比300%増加、CPAが40%改善",
      badge: "Service"
    },
    {
      title: "法人向けSaaS",
      description: "申込率85%向上、LTVが前年比150%に改善",
      badge: "SaaS"
    }
  ]
  
  const process = [
    {
      step: "01",
      title: "ヒアリング・分析",
      description: "市場分析やターゲット設定など、戦略的なマーケティングプランを策定します"
    },
    {
      step: "02",
      title: "ワイヤーフレーム作成",
      description: "ユーザーの行動心理を考慮した、効果的な導線設計を行います"
    },
    {
      step: "03",
      title: "デザイン制作",
      description: "ブランドの世界観とコンバージョン率の両立を意識したデザインを制作"
    },
    {
      step: "04",
      title: "コーディング",
      description: "表示速度にこだわった最適化と、レスポンシブ対応の実装"
    },
    {
      step: "05",
      title: "運用・改善",
      description: "A/Bテストや分析による継続的な改善で、成果を最大化します"
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* ヒーローセクション */}
      <div className="container mx-auto px-6 pt-32 mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              成果にこだわるLP制作
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              戦略的なデザインと効果的なコピーライティングで、<br />
              高いコンバージョン率を実現するランディングページを制作します。
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["戦略設計", "高CVR", "A/Bテスト", "SEO対策", "レスポンシブ対応"].map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-blue-900/50 rounded-full text-cyan-400 text-sm border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>無料相談する</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-cyan-500/20">
              <Image
                src="/images/lp-hero.jpg"
                alt="LP制作サービス"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              
              {/* 実績バッジ */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between gap-4">
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30">
                  <p className="text-lg font-bold text-cyan-400">300%</p>
                  <p className="text-xs text-gray-300">平均問い合わせ増加率</p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30">
                  <p className="text-lg font-bold text-cyan-400">120%</p>
                  <p className="text-xs text-gray-300">平均CVR改善率</p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30">
                  <p className="text-lg font-bold text-cyan-400">50+</p>
                  <p className="text-xs text-gray-300">制作実績</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* サービスの特徴 */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          LP制作サービスの特徴
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 実績セクション */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          制作実績
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20 relative"
            >
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-4 py-1 text-xs font-semibold">
                {result.badge}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{result.title}</h3>
              <p className="text-gray-300">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* メリットセクション */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          他社との違い
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                {benefit.title}
              </h3>
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* 比較表 */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4"></th>
                <th className="py-3 px-4 text-cyan-400">当社</th>
                <th className="py-3 px-4 text-gray-400">他社</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="text-left py-3 px-4 text-gray-300">マーケティング戦略</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 inline" /></td>
                <td className="py-3 px-4 text-center">△</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="text-left py-3 px-4 text-gray-300">セールスライティング</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 inline" /></td>
                <td className="py-3 px-4 text-center">△</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="text-left py-3 px-4 text-gray-300">A/Bテスト対応</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 inline" /></td>
                <td className="py-3 px-4 text-center">×</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="text-left py-3 px-4 text-gray-300">LPO支援</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 inline" /></td>
                <td className="py-3 px-4 text-center">×</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-4 text-gray-300">広告連携</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 inline" /></td>
                <td className="py-3 px-4 text-center">△</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 制作フローセクション */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          制作の流れ
        </h2>
        
        <div className="space-y-6">
          {process.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
            >
              <div className="md:w-16 h-16 flex-shrink-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 料金プラン */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          料金プラン
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* スタンダードプラン */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-cyan-500/20 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">スタンダードプラン</h3>
              <p className="text-gray-300 text-sm mb-4">シンプルなLP制作に最適</p>
              <div className="text-3xl font-bold text-cyan-400">
                ¥150,000〜
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>1ページのLP制作</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>レスポンシブ対応</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>SEO基本対策</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>お問い合わせフォーム</span>
                </li>
              </ul>
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                詳細を見る
              </a>
            </div>
          </div>
          
          {/* プレミアムプラン */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-lg border-2 border-cyan-500/40 overflow-hidden transform scale-105 shadow-lg shadow-cyan-500/20 relative z-10">
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                おすすめ
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-700 to-purple-700 p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">プレミアムプラン</h3>
              <p className="text-gray-200 text-sm mb-4">成果にこだわるLP制作に</p>
              <div className="text-3xl font-bold text-white">
                ¥250,000〜
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>スタンダードプランの全機能</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>ユーザー心理分析</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>アクセス解析</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>A/Bテスト実施</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>3ヶ月間の改善サポート</span>
                </li>
              </ul>
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-colors"
              >
                詳細を見る
              </a>
            </div>
          </div>
          
          {/* エンタープライズプラン */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-cyan-500/20 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">エンタープライズプラン</h3>
              <p className="text-gray-300 text-sm mb-4">法人向け包括的なLPO支援</p>
              <div className="text-3xl font-bold text-cyan-400">
                ¥400,000〜
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>プレミアムプランの全機能</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>複数LP制作（最大3ページ）</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>広告アカウント連携</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>6ヶ月間の運用サポート</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>月次レポート提出</span>
                </li>
              </ul>
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          よくある質問
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "制作期間はどのくらいですか？",
              answer: "標準的なLPの場合、約3〜4週間程度です。ただし、プロジェクトの規模や複雑さによって変動する場合があります。急ぎの場合は、ご相談ください。"
            },
            {
              question: "どのような業界のLPに対応していますか？",
              answer: "美容、健康、不動産、教育、BtoB、SaaSなど、幅広い業界のLP制作実績があります。業界特性を踏まえた効果的なデザインと文章で、高いコンバージョン率を実現します。"
            },
            {
              question: "制作後の修正は可能ですか？",
              answer: "はい、納品後2週間以内の軽微な修正は無償で対応しています。それ以降の修正や大幅な変更については、別途お見積りいたします。"
            },
            {
              question: "A/Bテストとは何ですか？",
              answer: "A/Bテストとは、2種類のデザインやコピーを用意し、どちらがより高いコンバージョン率を達成するかを検証する手法です。データに基づいて継続的に改善していくことで、LP全体の成果を最大化します。"
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
            >
              <h3 className="text-lg font-semibold mb-3 text-cyan-400 flex items-start gap-3">
                <span className="bg-gradient-to-br from-cyan-500 to-purple-500 p-1.5 rounded-md text-white text-sm flex-shrink-0">Q</span>
                {faq.question}
              </h3>
              <div className="pl-9">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-12 max-w-4xl mx-auto text-center border border-cyan-500/20">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            成果を最大化するLPで、<br className="md:hidden" />ビジネスを加速させませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            私たちのLP制作サービスは、ただのデザインではなく、<br className="hidden md:block" />
            成果にコミットする戦略的なマーケティングツールです。
          </p>
          <a
            href="https://lin.ee/ATZ4bog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <span>無料相談を予約する</span>
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            LINEでお気軽にご相談ください。通常24時間以内に返信いたします。
          </p>
        </div>
      </div>
    </div>
  )
} 