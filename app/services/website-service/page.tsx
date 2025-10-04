import type { Metadata } from "next";
import Image from "next/image"
import {
  Trophy,
  BarChart2,
  Smartphone,
  Search,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { generateServiceSchema } from "@/components/schema"

// Webサイト制作サービスの特徴を定義
const websiteServiceFeatures = [
  'ビジネス成果を出すための戦略的Webサイト制作',
  '成果にコミットする設計',
  'データドリブンな改善',
  '顧客分析からUI/UXデザインまで一貫したアプローチ',
  '勝つための結果を出すWebサイト制作',
  'コンバージョン率最適化',
  'レスポンシブデザイン対応',
  'SEO対策実装'
];

// 構造化データを生成（統一された関数を使用）
const generateWebsiteServiceSchema = () => generateServiceSchema({
  name: 'Webサイト制作サービス',
  description: '勝つための結果を出すWebサイト制作。ただきれいなだけではなく、ビジネス成果につながるWebサイトを戦略的に設計・構築します。',
  category: 'デザイン',
  features: websiteServiceFeatures,
  url: 'https://www.stellarium.jp/services/website-service'
});

export const metadata: Metadata = {
  title: 'Webサイト制作サービス | Stellarium マーケティング',
  description: '勝つための結果を出すWebサイト制作。ただきれいなだけではなく、ビジネス成果につながるWebサイトを戦略的に設計・構築します。顧客分析からUI/UXデザイン、SEO対策まで一貫したアプローチでビジネスを加速します。',
  keywords: [
    'Webサイト制作',
    'コーポレートサイト',
    'UI/UXデザイン',
    'レスポンシブデザイン',
    'SEO対策',
    'ビジネス成果',
    'コンバージョン率最適化',
    'ワードプレス',
    'Web開発'
  ].join(', '),
  openGraph: {
    title: 'Webサイト制作サービス | 勝つための成果につながるWebサイト',
    description: 'ただきれいなだけではなく、ビジネス成果につながるWebサイトを戦略的に設計・構築します。顧客分析からUI/UXデザイン、SEO対策まで一貫したアプローチ。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/website-service-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Webサイト制作サービス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webサイト制作サービス | 勝つための成果につながるWebサイト',
    description: 'ただきれいなだけではなく、ビジネス成果につながるWebサイトを戦略的に設計・構築。顧客分析からUI/UXデザイン、SEO対策まで一貫したアプローチ。',
    images: ['/images/website-service-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.stellarium.jp/services/website-service'
  }
}

// 構造化データを生成（統一された関数を使用）
function generateStructuredData() {
  return generateWebsiteServiceSchema();
}

export default function WebsiteServicePage() {
  const structuredData = generateStructuredData()
  const features = [
    {
      title: "成果にコミットする設計",
      description: "ビジネスKPIを達成するための戦略的なサイト設計とUI/UX",
      icon: Trophy
    },
    {
      title: "データドリブンな改善",
      description: "アクセス解析と継続的な改善提案で成長するWebサイト",
      icon: BarChart2
    },
    {
      title: "モバイルファースト",
      description: "すべてのデバイスで最適なユーザー体験を提供するレスポンシブ対応",
      icon: Smartphone
    },
    {
      title: "SEO最適化",
      description: "検索エンジンからの自然流入を最大化する内部・外部SEO対策",
      icon: Search
    }
  ]
  
  const benefits = [
    {
      title: "「勝つ」ための設計思想",
      points: [
        "ビジネスゴールを起点とした設計",
        "競合サイト徹底分析と差別化戦略",
        "ユーザー心理を考慮したUI/UX設計"
      ]
    },
    {
      title: "集客から成約までの最適化",
      points: [
        "SEO・SNS連携による自然流入設計",
        "ユーザー行動分析と導線最適化",
        "コンバージョンポイントの強化"
      ]
    },
    {
      title: "長期的な成長支援",
      points: [
        "定期的なパフォーマンスレポート",
        "改善提案と継続的な最適化",
        "マーケティング施策との連携"
      ]
    }
  ]
  
  const results = [
    {
      title: "士業事務所",
      description: "リニューアル後、問い合わせ数200%増加、新規顧客獲得コスト40%削減",
      badge: "Professional"
    },
    {
      title: "飲食店チェーン",
      description: "予約システム導入と動線改善で予約数150%増、客単価25%向上",
      badge: "Restaurant"
    },
    {
      title: "製造業メーカー",
      description: "BtoBサイト刷新で問い合わせ数3倍、営業効率が40%改善",
      badge: "Manufacturing"
    }
  ]
  
  const process = [
    {
      step: "01",
      title: "戦略策定・分析",
      description: "ビジネス目標設定、競合分析、ユーザーペルソナ作成、KPI設計を行います"
    },
    {
      step: "02",
      title: "設計・構造化",
      description: "サイトマップ設計、ユーザーフロー設計、ワイヤーフレーム作成"
    },
    {
      step: "03",
      title: "UI/UXデザイン",
      description: "ブランドアイデンティティを反映した視覚的デザインと優れたユーザー体験の構築"
    },
    {
      step: "04",
      title: "開発・コーディング",
      description: "SEO対策・表示速度最適化・セキュリティを考慮した高品質な実装"
    },
    {
      step: "05",
      title: "テスト・公開",
      description: "デバイス・ブラウザ動作検証、品質チェック、公開作業"
    },
    {
      step: "06",
      title: "運用・改善",
      description: "アクセス解析、ユーザー行動分析、継続的な改善提案とアップデート"
    }
  ]

  const plans = [
    {
      title: "スタンダードプラン",
      price: "20万円〜",
      features: [
        "ヒアリング・競合分析",
        "レスポンシブWebデザイン",
        "5〜10ページ程度",
        "WordPress実装",
        "お問い合わせフォーム",
        "基本的なSEO対策",
        "アクセス解析設定"
      ],
      recommended: false
    },
    {
      title: "プレミアムプラン",
      price: "50万円〜",
      features: [
        "詳細な市場・競合分析",
        "ユーザーペルソナ設計",
        "UI/UXデザイン最適化",
        "10〜20ページ程度",
        "WordPress or カスタム開発",
        "SEO内部対策・構造化データ",
        "コンバージョン導線設計",
        "コンテンツ企画・ライティング",
        "アクセス解析・ヒートマップ設定",
        "公開後1ヶ月の改善サポート"
      ],
      recommended: true
    },
    {
      title: "エンタープライズプラン",
      price: "100万円以上",
      features: [
        "包括的な市場分析・戦略策定",
        "カスタム機能・システム開発",
        "20ページ以上の大規模サイト",
        "多言語対応・グローバル展開",
        "高度なSEO戦略",
        "コンテンツマーケティング連携",
        "動画・アニメーション制作",
        "サーバー構築・セキュリティ対策",
        "運用・保守プラン",
        "定期的な改善提案・PDCAサポート"
      ],
      recommended: false
    }
  ]
  
  const faq = [
    {
      question: "制作期間はどのくらいかかりますか？",
      answer: "規模や要件にもよりますが、一般的なコーポレートサイトであれば1.5〜2ヶ月程度です。ECサイトや特殊な機能を持つサイトは3〜4ヶ月程度かかることがあります。プロジェクト開始時に詳細なスケジュールをご提案します。"
    },
    {
      question: "公開後のサポートはありますか？",
      answer: "はい。公開後の運用・保守プランをご用意しています。Webサイトは公開して終わりではなく、継続的な改善が重要です。アクセス解析に基づく改善提案、セキュリティアップデート、コンテンツ追加など、長期的に伴走するサポート体制を整えています。"
    },
    {
      question: "既存サイトのリニューアルも対応していますか？",
      answer: "もちろんです。既存サイトの課題分析から始め、現状のコンテンツを活かしながら最新のデザイン・技術でリニューアルします。SEO評価を落とさないよう、適切なリダイレクト設定なども行います。"
    },
    {
      question: "SEO対策は含まれていますか？",
      answer: "すべてのプランに基本的なSEO対策を含んでいます。適切なHTML構造、メタタグ最適化、構造化データ、表示速度の最適化などを標準で実施します。より本格的なSEO施策をご希望の場合は、SEOコンサルティングサービスとの組み合わせをおすすめします。"
    },
    {
      question: "更新作業は自分たちでできますか？",
      answer: "WordPressなどのCMSを使用したサイトであれば、専門知識がなくても簡単に更新ができるよう設計します。管理画面の使い方トレーニングも提供していますので、日々の更新作業は社内で効率的に行っていただけます。"
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
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                Webサイト制作
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-cyan-400 text-sm">成果にコミットするWeb制作</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-cyan-400 text-transparent bg-clip-text">
              勝つための<br />Webサイト制作
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ただ美しいだけではなく、<strong className="text-cyan-300">ビジネス成果を出す</strong>ための戦略的なWebサイトを制作します。集客から成約までの設計で、御社のビジネスに貢献します。
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["戦略設計", "UI/UX", "SEO対策", "レスポンシブ対応", "成果分析"].map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-blue-900/50 rounded-full text-cyan-400 text-sm border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
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
                src="/images/zunda-pic.png"
                alt="WebサイトのUI/UXデザイン"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              
              {/* 実績バッジ */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between gap-4">
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-amber-500/30">
                  <p className="text-lg font-bold text-amber-400">200%</p>
                  <p className="text-xs text-gray-300">平均問い合わせ増加率</p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-amber-500/30">
                  <p className="text-lg font-bold text-amber-400">40%</p>
                  <p className="text-xs text-gray-300">コスト削減率</p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-amber-500/30">
                  <p className="text-lg font-bold text-amber-400">100+</p>
                  <p className="text-xs text-gray-300">制作実績</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* サービスの特徴 */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          「勝つための」Webサイト制作の特徴
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-800/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-cyan-500/20 rounded-lg mr-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-blue-900/50 rounded-xl overflow-hidden border border-cyan-800/30">
          <div className="p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
                なぜ当社のWebサイト制作が<br />「勝つ」ための選択なのか
              </h3>
              <p className="text-gray-300 mb-4">
                多くのWeb制作会社は「見た目の美しさ」や「技術の先進性」を重視します。しかし、私たちは違います。
              </p>
              <p className="text-gray-300">
                <span className="text-amber-300 font-medium">ビジネス成果にコミットする</span>という観点からサイト設計を行い、戦略的なマーケティング視点を取り入れたWebサイトを制作します。あなたのビジネスが「勝つ」ための強力なツールとなるWebサイトを提供します。
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="relative h-full w-full">
                <Image
                  src="/images/zunda-pic.png"
                  alt="成果を出すWebサイト制作"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cyan-800/20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-900/30 p-6">
                <h4 className="text-lg font-semibold mb-4 text-amber-300">{benefit.title}</h4>
                <ul className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 高い技術力とフルスクラッチ開発 */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          プロフェッショナルな技術力で<br />あらゆるWEB制作ニーズに対応
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-800/50 to-blue-900/50 rounded-xl p-8 border border-cyan-800/30">
            <h3 className="text-2xl font-bold mb-4 text-amber-300">
              WordPress だけでなく、<br />フルスクラッチ開発まで対応
            </h3>
            <p className="text-gray-300 mb-4">
              多くのWeb制作会社はWordPressテンプレートのカスタマイズのみを提供しますが、私たちはプログラマとしての高い技術力を活かし、完全オーダーメイドのWebサイト開発まで幅広く対応します。
            </p>
            <p className="text-gray-300 mb-6">
              フロントエンド開発（React、Next.js、Vue.js）からバックエンド開発（Node.js、PHP、Python）、データベース設計まで、ビジネス要件に最適な技術スタックを選定し、一からの構築が可能です。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-900/30 rounded-lg p-4 border border-cyan-700/30">
                <h4 className="text-lg font-medium mb-2 text-cyan-300">WordPressの場合</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 更新のしやすさを重視するサイト</li>
                  <li>• コストを抑えた迅速な構築</li>
                  <li>• ブログ・ニュース機能が重要な場合</li>
                  <li>• 運用コストの最適化</li>
                </ul>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 border border-cyan-700/30">
                <h4 className="text-lg font-medium mb-2 text-cyan-300">フルスクラッチ開発の場合</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 独自の機能・仕様が必要な場合</li>
                  <li>• パフォーマンスを極限まで追求</li>
                  <li>• 拡張性・スケーラビリティが重要</li>
                  <li>• Web アプリケーション開発</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/50 rounded-xl p-8 border border-cyan-800/30 h-full">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">使用技術・言語</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">フロントエンド</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3/SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/50 text-cyan-200 text-sm rounded-full border border-cyan-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">バックエンド</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Node.js", "Python", "Ruby", "MySQL", "PostgreSQL", "MongoDB"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/50 text-cyan-200 text-sm rounded-full border border-cyan-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">開発環境・ツール</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "Vercel", "CI/CD", "Webpack"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/50 text-cyan-200 text-sm rounded-full border border-cyan-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-900/30 to-blue-900/30 rounded-xl p-6 border border-amber-700/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">10+</span>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-xl font-bold mb-2 text-white text-center md:text-left">プログラミング経験10年以上</h3>
              <p className="text-gray-300">
                単なるWeb制作会社ではなく、プログラマとしての豊富な経験とスキルを持つ専門家がプロジェクトを担当します。複雑なビジネス要件も、最適な技術で解決します。WEB制作とシステム開発の両方の知見を活かした、ビジネス成果を最大化するサイト構築が強みです。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 成功事例 */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          Webサイト制作の成功事例
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          私たちの戦略的アプローチで、お客様のビジネスに具体的な成果をもたらした事例をご紹介します。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-gradient-to-b from-blue-900/20 to-gray-900/40 rounded-xl overflow-hidden border border-cyan-800/30 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Image
                    src="/images/zunda-pic.png"
                    alt={result.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  {result.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{result.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{result.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">サービス</span>
                  <span className="text-cyan-400">Webサイト制作</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
            <span>すべての成功事例を見る</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      
      {/* 制作プロセス */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          Webサイト制作の流れ
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          ビジネス成果を出すためのWebサイト制作は、綿密な戦略設計から始まります。制作プロセスをご紹介します。
        </p>
        
        <div className="space-y-6">
          {process.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/6 flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
              </div>
              <div className="md:w-5/6 bg-blue-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-semibold mb-2 text-amber-300">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 料金プラン */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          料金プラン
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          ビジネス規模や目的に合わせた最適なプランをご用意しています。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${plan.recommended 
                ? 'border-amber-500 relative' 
                : 'border-blue-800/50'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-amber-500 text-gray-900 font-bold px-4 py-1 text-sm">
                  おすすめ
                </div>
              )}
              <div className={`p-6 ${plan.recommended 
                ? 'bg-gradient-to-br from-amber-500/20 to-cyan-500/20' 
                : 'bg-blue-900/20'}`}>
                <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>
                <p className={`text-2xl font-bold mb-4 ${plan.recommended ? 'text-amber-400' : 'text-cyan-400'}`}>
                  {plan.price}
                </p>
                <a
                  href="https://lin.ee/ATZ4bog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2 rounded-lg font-medium transition-colors ${plan.recommended 
                    ? 'bg-amber-500 hover:bg-amber-600 text-gray-900' 
                    : 'bg-cyan-800/60 hover:bg-cyan-700/60 text-white'}`}
                >
                  詳細を問い合わせる
                </a>
              </div>
              <div className="bg-gray-900/60 p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${plan.recommended 
                        ? 'text-amber-400' 
                        : 'text-cyan-400'}`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">
            ※上記は標準的な料金目安です。具体的なお見積りは、ご要件をヒアリングした上でご提案いたします。
          </p>
          <p className="text-gray-400">
            ※保守・運用プランは別途ご用意しております。長期的なサイト運用・改善をサポートします。
          </p>
        </div>
      </div>
      
      {/* よくある質問 */}
      <div className="container mx-auto px-6 mb-20" id="faq">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
          よくある質問
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="bg-blue-900/20 rounded-xl p-6 border border-cyan-800/30">
              <h3 className="text-xl font-semibold mb-4 text-amber-300">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="container mx-auto px-6 mb-20" id="contact">
        <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 p-8 rounded-xl border border-amber-800/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            勝つためのWebサイトを一緒に作りませんか？
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            ビジネス成果を生み出すWebサイト制作について、まずはお気軽にご相談ください。
            御社の課題や目標に合わせた最適なプランをご提案いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:from-amber-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              無料相談を予約する
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-900/30 transition-colors duration-300 w-full sm:w-auto"
            >
              お問い合わせフォームへ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 