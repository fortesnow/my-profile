import Link from 'next/link'

export const metadata = {
  title: 'LP制作サービス | Web制作 あおい',
  description: '高品質なランディングページ制作サービスを提供。戦略的なデザイン、効果的なコピーライティング、SEO対策まで一貫して対応。成果の出るLPを制作いたします。',
  keywords: 'LP制作, ランディングページ, コーディング, Web制作, デザイン, SEO対策, コピーライティング',
  openGraph: {
    title: 'LP制作サービス | Web制作 あおい',
    description: '高品質なランディングページ制作サービスを提供。戦略的なデザイン、効果的なコピーライティング、SEO対策まで一貫して対応。',
    images: [
      {
        url: '/images/og-lp-service.jpg', // OGP画像を用意する必要があります
        width: 1200,
        height: 630,
        alt: 'LP制作サービス',
      },
    ],
  },
}

export default function LPService() {
  const services = [
    {
      title: "戦略的デザイン",
      description: "ユーザー心理を考慮した、高コンバージョンを実現するデザイン設計",
      icon: "🎯"
    },
    {
      title: "コピーライティング",
      description: "商品の価値を最大限に引き出す、説得力のある文章作成",
      icon: "✍️"
    },
    {
      title: "レスポンシブ対応",
      description: "すべてのデバイスで最適な表示を実現する完全レスポンシブ対応",
      icon: "📱"
    },
    {
      title: "SEO対策",
      description: "検索エンジンからの自然流入を増やすための最適化",
      icon: "🔍"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            LP制作サービス
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            成果の出るランディングページを、戦略的に制作いたします
          </p>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
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