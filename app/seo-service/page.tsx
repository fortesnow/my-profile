import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'SEO対策サービス | Web制作 あおい',
  description: '戦略的なSEO対策で検索順位を改善。キーワード戦略からコンテンツ最適化まで、包括的なSEOサービスを提供します。',
  keywords: ['SEO対策', 'キーワード戦略', 'コンテンツ最適化', '検索順位改善'],
}

export default function SEOService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            SEO対策サービス
          </h1>
          <p className="text-xl text-gray-300">
            戦略的なSEO施策で、あなたのビジネスの可能性を広げます
          </p>
        </div>

        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/9]">
          <Image
            src="/images/zunda-pic.png"
            alt="SEO対策サービスのイメージ"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                検索結果の上位表示を実現
              </h2>
              <p className="text-lg text-gray-200">
                データ分析に基づく戦略的なSEO対策で、持続的な集客を実現します
              </p>
            </div>
          </div>
        </div>

        {/* サービス内容 */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 特徴セクション */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              サービスの特徴
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">戦略的なキーワード選定</h3>
                <p className="text-gray-300">競合分析とデータに基づいて、最適なターゲットキーワードを選定します。</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">技術的SEO対策</h3>
                <p className="text-gray-300">サイトの読み込み速度改善、構造化データの実装など、技術面での最適化を行います。</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">コンテンツマーケティング</h3>
                <p className="text-gray-300">ユーザーと検索エンジンの両方に価値のあるコンテンツを制作します。</p>
              </div>
            </div>
          </section>

          {/* 実績セクション */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              実績
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">検索順位の改善</h3>
                <p className="text-gray-300">主要キーワードでの検索順位を平均30%改善</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">オーガニック流入増加</h3>
                <p className="text-gray-300">自然検索からの訪問者数が3ヶ月で50%増加</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">コンバージョン率向上</h3>
                <p className="text-gray-300">最適化されたランディングページで成約率が20%向上</p>
              </div>
            </div>
          </section>

          {/* CTAセクション */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                まずはご相談ください
              </h2>
              <p className="text-gray-300 mb-6">
                あなたのビジネスに最適なSEO戦略をご提案いたします
              </p>
              <a
                href="https://lin.ee/ATZ4bog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
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