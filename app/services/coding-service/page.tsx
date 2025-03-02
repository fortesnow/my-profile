import { Metadata } from "next"
import Image from "next/image"
import { 
  Zap, 
  Code2, 
  LineChart,
  MessageSquare,
  Calculator,
  Rocket,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: '爆速コーディングサービス | Stellarium マーケティング',
  description: '最短当日対応可能な高品質コーディングサービス。HTML/CSS, React, Next.js, TypeScriptなど、モダンな技術スタックに対応。Web制作会社様の開発効率化をサポートします。',
  keywords: ['コーディング', 'フロントエンド開発', 'React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Web制作'],
  openGraph: {
    title: '爆速コーディングサービス | Stellarium マーケティング',
    description: '最短当日対応可能な高品質コーディングサービス。モダンな技術スタックで、あなたのプロジェクトを加速させます。',
    images: [
      {
        url: '/images/og-coding-service.jpg',
        width: 1200,
        height: 630,
        alt: '爆速コーディングサービス',
      },
    ],
  },
}

// 構造化データの生成を関数化
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '爆速コーディングサービス',
    description: '最短当日対応可能な高品質コーディングサービス。',
    provider: {
      '@type': 'Organization',
      name: 'Stellarium',
      url: 'https://yourdomain.com'
    },
    areaServed: 'JP',
    serviceType: 'Web Development',
  }
}

export default function CodingServicePage() {
  const jsonLd = generateJsonLd()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        {/* ヒーローセクション */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
          <div className="absolute inset-0 bg-[url('/images/coding-bg.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              爆速コーディングサービス
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              最短当日対応。高品質なコードで
              あなたのビジネスを加速させます。
            </p>
          </div>
        </section>

        {/* 課題解決セクション */}
        <section className="bg-gradient-to-br from-gray-900/50 to-indigo-900/50 py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            {/* メインの大きなZunda-pic - z-indexを20に設定 */}
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
            {/* コンテンツ - z-indexを10に設定 */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                かゆいところに手が届く！
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      コーダーが不足して<br />作業が進まない
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    急な案件や繁忙期の人員不足で、
                    プロジェクトの進行に支障が出ている
                  </p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      高度な実装力のある<br />人材がいない
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    モダンな技術スタックや複雑なアニメーションなど、
                    高度な実装に対応できる人材が不足
                  </p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      納期に間に合うか<br />不安
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    タイトな納期での対応が必要だが、
                    品質を維持しながらの短期開発に不安がある
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                  そんな課題を全て解決します
                </p>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  即戦力のコーディング人材として、あなたのプロジェクトをサポート。
                  高品質なコードと迅速な納品で、開発の効率化を実現します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 space-y-24">
          {/* 特徴セクション */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              サービスの特徴
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">高品質なコーディング</h3>
                <p className="text-gray-300">
                  LP制作やWebサイトの更新に必要な、セマンティックで保守性の高いコードを提供。
                  デザインの意図を正確に実装し、高品質な仕上がりを実現します。
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">ソースコード管理</h3>
                <p className="text-gray-300">
                  Gitを活用した確実なバージョン管理により、コードの変更履歴を完全に把握。
                  いつでも安全にバックアップや復元が可能です。
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">最適化された性能</h3>
                <p className="text-gray-300">
                  品質基準に応える高度な実装と、
                  パフォーマンスを考慮した最適化を提供します。
                </p>
              </div>
            </div>
          </section>

          {/* 開発フローセクション */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              開発の流れ
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "要件ヒアリング",
                  description: "プロジェクトの目的、技術要件、納期などについて詳しくお伺いします。Web制作会社様との連携経験が豊富です。",
                  icon: MessageSquare
                },
                {
                  step: "02",
                  title: "見積もり提示",
                  description: "ヒアリング内容を基に、最適な実装方法と期間、費用を提案させていただきます。",
                  icon: Calculator
                },
                {
                  step: "03",
                  title: "開発着手",
                  description: "承認後、即座に開発を開始。進捗状況を定期的に共有します。",
                  icon: Rocket
                },
                {
                  step: "04",
                  title: "コード納品・デプロイ",
                  description: "GitHubなどのリポジトリでソースコードを共有。必要に応じて本番環境へのデプロイもサポートします。",
                  icon: CheckCircle2
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-gray-900/30 rounded-lg p-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white font-bold flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 技術スタックセクション */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              対応技術スタック
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["HTML", "CSS", "Next.js", "React", "TypeScript", "Python", "TailwindCSS", "Node.js", "Git", "AWS"].map((tech) => (
                <div key={tech} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform">
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTAセクション */}
          <section className="bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              プロジェクトの規模や要件に応じて、最適なご提案をさせていただきます。
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </section>
        </div>
      </div>
    </>
  )
} 