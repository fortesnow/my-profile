import { Metadata } from "next"
import Image from "next/image"
import { 
  TrendingUp,
  Settings,
  Users,
  PieChart
} from "lucide-react"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SiLine, SiTiktok } from "react-icons/si"

export const metadata: Metadata = {
  title: '広告運用サービス | Web制作 あおい',
  description: 'データドリブンな広告運用で成果を最大化。Google広告、Meta広告、LINE広告など、各種広告媒体の運用代行サービスを提供します。',
  keywords: ['広告運用', 'Google広告', 'Meta広告', 'LINE広告', 'TikTok広告'],
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
      title: "ROAS改善",
      description: "データ分析に基づく継続的な改善で、広告費用対効果を最大化します。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "ターゲティング最適化",
      description: "精緻なターゲティングで、最適なユーザーにリーチします。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "クリエイティブ制作",
      description: "効果的な広告クリエイティブで、高いコンバージョン率を実現。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const results = [
    {
      title: "ROAS 300%改善",
      description: "広告費用対効果を3倍に改善し、投資効率を大幅に向上させました。",
    },
    {
      title: "CVR 50%向上",
      description: "広告クリエイティブとランディングページの最適化でコンバージョン率が1.5倍に。",
    },
    {
      title: "運用コスト30%削減",
      description: "効率的な運用と自動化により、運用コストを大幅に削減しました。",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-6">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            広告運用サービス
          </h1>
          <p className="text-xl text-gray-300">
            データドリブンな運用で、広告効果を最大化します
          </p>
        </div>

        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/9]">
          <Image
            src="/images/zunda-pic.png"
            alt="広告運用サービスのイメージ"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                ROASを最大化する運用力
              </h2>
              <p className="text-lg text-gray-200">
                豊富な運用実績とデータ分析に基づく最適化で、広告効果を最大限に引き出します
              </p>
            </div>
          </div>
        </div>

        {/* 特徴セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            サービスの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対応広告媒体セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            対応広告媒体
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FcGoogle className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-cyan-400">Google広告</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・検索広告</li>
                <li>・ディスプレイ広告</li>
                <li>・ショッピング広告</li>
                <li>・YouTube広告</li>
                <li>・パフォーマンスMAX</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FaFacebook className="w-8 h-8 text-[#1877F2]" />
                <h3 className="text-xl font-semibold text-cyan-400">Meta広告</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・フィード広告</li>
                <li>・ストーリーズ広告</li>
                <li>・リール広告</li>
                <li>・メッセンジャー広告</li>
                <li>・Instagram広告</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <SiLine className="w-8 h-8 text-[#00B900]" />
                <h3 className="text-xl font-semibold text-cyan-400">LINE広告</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・タイムライン広告</li>
                <li>・LINE NEWS広告</li>
                <li>・トークリスト広告</li>
                <li>・ウォレット広告</li>
                <li>・LINE VOOM広告</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <SiTiktok className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-cyan-400">TikTok広告</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・インフィード広告</li>
                <li>・トップビュー広告</li>
                <li>・ブランドタグチャレンジ</li>
                <li>・スパークアズ広告</li>
                <li>・コレクション広告</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 運用プロセスセクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            運用プロセス
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">初期設定</h3>
              <p className="text-gray-300">アカウント設定から配信設定まで、最適な広告配信の土台を構築</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">ターゲティング</h3>
              <p className="text-gray-300">データに基づく最適なターゲット選定と配信最適化</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">運用改善</h3>
              <p className="text-gray-300">パフォーマンスデータの分析と継続的な改善施策の実施</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">レポーティング</h3>
              <p className="text-gray-300">詳細な分析レポートの提供と改善提案の実施</p>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            実績
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{result.title}</h3>
                <p className="text-gray-300">{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8">
              あなたのビジネスに最適な広告戦略をご提案いたします
            </p>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>お問い合わせ</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
} 