import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'SEO対策サービス | Web制作 あおい',
  description: '戦略的なSEO対策で検索順位を改善。キーワード戦略からコンテンツ最適化まで、包括的なSEOサービスを提供します。',
  keywords: ['SEO対策', 'キーワード戦略', 'コンテンツ最適化', '検索順位改善'],
}

export default function SEOService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            SEO対策サービス
          </h1>
          <p className="text-xl text-gray-300">
            戦略的なSEO施策で、あなたのビジネスの可能性を広げます
          </p>
        </div>

        {/* メインコンテンツ */}
        <div className="max-w-7xl mx-auto">
          {/* サービス概要 */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  検索上位表示で<br />集客力アップ
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  戦略的なSEO施策で、Googleでの検索順位を上げ、オーガニック流入を増やします。
                  キーワード戦略から技術的な最適化まで、包括的なSEOサービスを提供します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">検索順位改善</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <span className="text-gray-300">キーワード戦略</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">コンテンツ最適化</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg" />
                <Image
                  src="/images/zunda-pic.png"
                  alt="SEO対策サービスのイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </section>

          {/* サービスの特徴 */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              サービスの特徴
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">戦略的なキーワード選定</h3>
                <p className="text-gray-300">競合分析とデータに基づいて、最適なターゲットキーワードを選定します。</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">技術的SEO対策</h3>
                <p className="text-gray-300">サイトの読み込み速度改善、構造化データの実装など、技術面での最適化を行います。</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">コンテンツマーケティング</h3>
                <p className="text-gray-300">ユーザーと検索エンジンの両方に価値のあるコンテンツを制作します。</p>
              </div>
            </div>
          </section>

          {/* 実績セクション */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg" />
                <Image
                  src="/images/zunda-pic.png"
                  alt="SEO対策の実績"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  実績に基づく<br />最適化戦略
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">検索順位の改善</h3>
                    <p className="text-gray-300">主要キーワードでの検索順位を平均30%改善</p>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">オーガニック流入増加</h3>
                    <p className="text-gray-300">自然検索からの訪問者数が3ヶ月で50%増加</p>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">コンバージョン率向上</h3>
                    <p className="text-gray-300">最適化されたランディングページで成約率が20%向上</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTAセクション */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                まずはご相談ください
              </h2>
              <p className="text-gray-300 mb-8">
                あなたのビジネスに最適なSEO戦略をご提案いたします
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
    </div>
  )
} 