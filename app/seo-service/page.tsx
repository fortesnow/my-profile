import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'SEO対策サービス | Web制作 あおい',
  description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。データに基づく戦略的なSEO施策で成果を最大化します。',
  keywords: [
    'SEO対策',
    '検索順位改善',
    'コンテンツSEO',
    '技術的SEO',
    'サイト内部対策',
    '外部対策',
    'MEO対策',
    'アクセス解析',
    'コンバージョン改善'
  ],
  openGraph: {
    title: 'SEO対策サービス | 検索順位改善・アクセス数向上',
    description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。',
    type: 'website',
    images: [
      {
        url: '/images/seo-service-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO対策サービス',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO対策サービス | 検索順位改善・アクセス数向上',
    description: '検索順位の改善による自然な集客増加を実現するSEO対策サービス。技術的SEOからコンテンツSEO、内部対策・外部対策まで包括的に対応。',
    images: ['/images/seo-service-og.jpg'],
  },
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
          {/* 技術的専門性セクション */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              このサイトもSEOを意識して作っています
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  このWebサイトは、デザインから実装、SEO対策まで、すべて自分自身で作り上げました。
                  遊び心のある動きや効果を取り入れながらも、検索エンジンでの表示を最適化し、
                  ユーザーにとって使いやすいサイトを目指しています。
                </p>
                {/* 制作過程の投稿 */}
                <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto my-8">
                  <Image
                    src="/images/for-seo.png"
                    alt="サイト制作過程のSNS投稿 - CSRとSSRの複合レンダリングでSEOの内部強化"
                    fill
                    className="object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10 rounded-lg" />
                </div>
                <p className="text-gray-300 text-center italic">
                  ↑ 実際のサイト制作過程での投稿 - SEOを意識した実装について
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">速度にこだわり</h4>
                    <p className="text-gray-300">ページの読み込み速度を最適化し、快適な閲覧体験を提供しています。</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">見やすさを重視</h4>
                    <p className="text-gray-300">スマートフォンでも見やすく、情報が伝わりやすいデザインにしています。</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">SEOを意識</h4>
                    <p className="text-gray-300">検索エンジンで見つけやすく、かつ魅力的に表示されるよう工夫しています。</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-gray-300">
                    このサイトでは、Next.jsを使用したCSRとSSRの複合レンダリングを採用し、
                    SEOの内部強化を図りながら、ゲーム的な要素や遊び心のある演出も取り入れています。
                    Noteに掲載していた記事を厳選してブログ形式で再構成するなど、
                    コンテンツの最適化も行っています。
                  </p>
                </div>
              </div>
            </div>
          </section>

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
                <p className="text-gray-300">技術的SEOの改善により、主要キーワードでの検索順位を平均30%改善。Core Web Vitalsスコアも90以上を達成。</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">オーガニック流入増加</h3>
                <p className="text-gray-300">ハイブリッドレンダリングの実装とコンテンツ最適化により、自然検索からの訪問者数が3ヶ月で50%増加</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">コンバージョン率向上</h3>
                <p className="text-gray-300">構造化データの実装とパフォーマンス改善により、モバイルでのコンバージョン率が20%向上</p>
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