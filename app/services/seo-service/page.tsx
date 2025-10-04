"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { generateServiceSchema } from "@/components/schema"

// SEO対策サービスの特徴を定義
const seoServiceFeatures = [
  'テクニカルSEO（サイト構造最適化、表示速度改善）',
  'コンテンツSEO（キーワード戦略、記事作成）',
  'ローカルSEO（Googleビジネスプロフィール最適化）',
  '検索順位向上と安定的なオーガニック流入獲得',
  'キーワード調査・分析',
  'サイト内SEO最適化',
  'コンテンツ戦略立案・実行',
  '検索エンジンからの自然流入増加'
];

// 構造化データを生成
const generateSEOServiceSchema = () => generateServiceSchema({
  name: 'SEO対策サービス',
  description: '検索エンジンからの自然流入を増やし、持続的な集客を実現。コンテンツ戦略からテクニカルSEOまで総合的に対応します。',
  category: 'マーケティング',
  features: seoServiceFeatures,
  url: 'https://www.stellarium.jp/services/seo-service'
});

// 画像拡大モーダルコンポーネント
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="relative w-full max-w-[90vw] md:max-w-[80vw] h-auto max-h-[90vh] md:max-h-[80vh]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 80vw"
          quality={100}
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="absolute -bottom-8 left-0 right-0 text-center text-gray-400 text-sm">
          ESCキーまたは画面クリックで閉じる
        </p>
      </div>
    </div>
  )
}

export default function SEOService() {
  const seoServiceSchema = generateSEOServiceSchema();
  const [showModal, setShowModal] = useState(false)
  
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            SEO対策サービス
          </h1>
          <p className="text-xl text-gray-300 mt-6">
            戦略的なSEO施策であなたのビジネスの可能性を広げます
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
          <section className="mb-20">
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
            
            <div className="mt-8 bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">コンサルティングと社内人材育成</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300">SEO施策の外部委託だけでなく、貴社のニーズに応じて以下のサービスも提供しています：</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">企業内SEO人材の育成支援</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">SEO内製化のためのワークショップ・研修</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">SEO戦略立案と実行のアドバイザリー</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-500/30">
                  <p className="text-gray-200 leading-relaxed">
                    「魚を与えるだけでなく、釣り方を教える」という考え方で、貴社内でSEOを実践できる人材を育成します。専門知識や最新トレンドを共有し、持続可能なSEO体制の構築をサポートします。社内リソースの最大活用と長期的なSEO成功を実現します。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
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
                <div 
                  className="relative w-full aspect-[4/3] max-w-2xl mx-auto my-8 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <Image
                    src="/images/for-seo.png"
                    alt="サイト制作過程のSNS投稿 - CSRとSSRの複合レンダリングでSEOの内部強化"
                    fill
                    className="object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                      タップして拡大
                    </span>
                  </div>
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
          
          {/* 分析ツールセクション */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              プロフェッショナルな分析と改善
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-cyan-400">各種分析ツールの活用</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2 flex items-center">
                        <span className="inline-block w-6 h-6 mr-2">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#F9AB00"/>
                            <path d="M12 5.44995V18.5499" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                            <path d="M18.55 12H5.44995" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                          </svg>
                        </span>
                        Google Analytics 4
                      </h4>
                      <p className="text-gray-300">最新のGA4を使用したユーザー行動分析、コンバージョン測定、ROI分析を実施。的確なデータに基づく改善提案を行います。</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2 flex items-center">
                        <span className="inline-block w-6 h-6 mr-2">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.58 10.58L12 19.17L3.42 10.58C2.86391 10.0451 2.42863 9.3975 2.14216 8.67788C1.85568 7.95825 1.72471 7.18044 1.75892 6.4012C1.79313 5.62197 1.99162 4.86181 2.33812 4.17149C2.68461 3.48116 3.17114 2.8779 3.76121 2.39981C4.35128 1.92172 5.03226 1.57998 5.7611 1.39524C6.48994 1.2105 7.25061 1.18676 7.99124 1.32562C8.73187 1.46447 9.43361 1.76218 10.0522 2.19824C10.6707 2.6343 11.1924 3.19896 11.58 3.85L12 4.43L12.42 3.85C12.8076 3.19896 13.3293 2.6343 13.9478 2.19824C14.5664 1.76218 15.2681 1.46447 16.0088 1.32562C16.7494 1.18676 17.5101 1.2105 18.2389 1.39524C18.9677 1.57998 19.6487 1.92172 20.2388 2.39981C20.8289 2.8779 21.3154 3.48116 21.6619 4.17149C22.0084 4.86181 22.2069 5.62197 22.2411 6.4012C22.2753 7.18044 22.1443 7.95825 21.8578 8.67788C21.5714 9.3975 21.1361 10.0451 20.58 10.58Z" fill="#4285F4"/>
                          </svg>
                        </span>
                        Google Tag Manager
                      </h4>
                      <p className="text-gray-300">GTMを活用した柔軟なタグ管理と詳細なイベント計測により、ユーザー行動を正確に把握します。</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2 flex items-center">
                        <span className="inline-block w-6 h-6 mr-2">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36003 19.27 5.00003 16.25 5.00003 12C5.00003 7.9 8.20003 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42003 2 2.03003 6.8 2.03003 12C2.03003 17.05 6.16003 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" fill="#34A853"/>
                          </svg>
                        </span>
                        Search Console
                      </h4>
                      <p className="text-gray-300">サーチコンソールを活用した検索パフォーマンスの分析、技術的な問題の早期発見と対応を行います。</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-cyan-400">データドリブンな改善</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">
                        定期的なレポーティング
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• 検索順位とクリック率の推移</li>
                        <li>• ユーザー行動の詳細分析</li>
                        <li>• コンバージョン率の改善状況</li>
                        <li>• 具体的な改善提案の提示</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-gray-300">
                        各種分析ツールを組み合わせることで、より正確なデータ収集と分析が可能になります。
                        これらのデータを基に、効果的なSEO施策を提案・実施していきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* 実績に基づいた現実的なSEOアプローチ */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              実績に基づいた現実的なSEOアプローチ
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-cyan-400">メディア事業の成功経験</h3>
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      わたしは<span className="text-cyan-300 font-semibold">メディア立ち上げから収益の安定化、そして事業売却まで</span>の一連の流れを経験しています。単なる理論ではなく、実際のビジネス成果に繋がるSEO戦略を構築し、実行してきました。
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>0からのメディア構築と集客基盤確立</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>広告収益・アフィリエイト収益の最大化</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>企業価値を高める戦略的SEO施策</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-cyan-400">現実的なSEOコンサルティング</h3>
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-purple-300 font-semibold">SEOはなんでもかんでもやればいいわけではありません。</span>自社の技術力や規模だけでなく、<span className="text-purple-300 font-semibold">競合の強さによって難易度が比例</span>します。わたしは以下の現実的アプローチを徹底しています：
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>コスパの良いキーワードと投資回収が難しいキーワードの明確な切り分け</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>「やるべきこと」と「やらないべきこと」を含めた現実的な戦略提案</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>競合分析に基づく実現可能な目標設定と期間計画</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                    <p className="text-gray-200 italic">
                      「施策の取捨選択ができるコンサルタントこそが本物です。SEOは&ldquo;できること&rdquo;より&ldquo;やるべきこと&rdquo;を見極めることが成功への近道です。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* 技術力セクション */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              高度な技術スキルと専門知識
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  SEO対策には単なるコンテンツ作成だけでなく、技術的な深い理解が不可欠です。わたしは以下のスキルを駆使して、あらゆる角度からSEO最適化を実現します。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-3">技術的SEOの専門知識</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>フロントエンド開発（React, Next.js）による高速化実装</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>SSR/CSR/SSGの適切な使い分けによるSEO最適化</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>構造化データ（JSON-LD）の高度な実装</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Core Web Vitalsの最適化テクニック</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-3">データ分析と戦略立案</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>BigQuery, Google Analyticsを活用した高度なデータ分析</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Python, Rを用いたSEOデータの統計分析</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>競合分析と差別化戦略の策定</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>検索意図を捉えたコンテンツ設計</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30 mt-6">
                  <p className="text-gray-200 leading-relaxed">
                    技術とマーケティングの両面からアプローチできることが私の強みです。単なる表面的な対策ではなく、サイト構造やビジネスモデルに合わせた本質的なSEO改善を提案します。
                  </p>
              </div>
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
          
          {/* 料金表セクション */}
          <section className="mb-20 mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              料金プラン
            </h2>
            <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
              SEO対策は一律のサービスではなく、ビジネスの状況や目標に合わせたカスタマイズが必要です。
              以下のプランは一般的な指針であり、詳細はご相談に基づいて決定します。
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* ライトプラン */}
              <div className="bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 border border-cyan-500/20 hover:border-cyan-400/40 flex flex-col h-full">
                <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ライトプラン</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">¥80,000</span>
                    <span className="text-gray-300 ml-2 pb-1">~/月（税別）</span>
                  </div>
                  <p className="text-gray-300 mt-2 text-sm">※ 初期費用：¥100,000（税別）</p>
                </div>
                
                <div className="p-6 bg-gray-800/50 flex-grow">
                  <p className="text-gray-200 mb-4 font-medium">小規模ビジネス、個人向けの基本的なSEO対策</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">キーワード調査・分析（5キーワードまで）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">ページ内SEO最適化（月5ページまで）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">基本的な技術SEO診断</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">月次レポーティング</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">オンラインミーティング（月1回）</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-900/50">
                  <div className="text-xs text-gray-400 mb-4">
                    <p>※ 契約期間：3ヶ月〜</p>
                    <p>※ 解約は2ヶ月前までにご連絡ください</p>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all">
                    詳細を問い合わせる
                  </button>
                </div>
              </div>
              
              {/* スタンダードプラン */}
              <div className="bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 border border-purple-500/30 hover:border-purple-400/50 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold py-1 px-4 rounded-bl-lg">
                  人気プラン
                </div>
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">スタンダードプラン</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">¥200,000</span>
                    <span className="text-gray-300 ml-2 pb-1">~/月（税別）</span>
                  </div>
                  <p className="text-gray-300 mt-2 text-sm">※ 初期費用：¥200,000（税別）</p>
                </div>
                
                <div className="p-6 bg-gray-800/50 flex-grow">
                  <p className="text-gray-200 mb-4 font-medium">中規模ビジネスに最適な包括的なSEO対策</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">キーワード調査・分析（15キーワードまで）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">ページ内SEO最適化（月10ページまで）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">詳細な技術SEO診断と改善</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">SEO記事制作</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">内部SEO改善（構造・リンク最適化）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">コンテンツ戦略立案</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">競合分析レポート</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">内部リンク最適化</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">詳細な月次レポーティング</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">オンラインミーティング（月2回）</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-900/50">
                  <div className="text-xs text-gray-400 mb-4">
                    <p>※ 契約期間：3ヶ月〜</p>
                    <p>※ 解約は2ヶ月前までにご連絡ください</p>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-semibold transition-all">
                    詳細を問い合わせる
                  </button>
                </div>
              </div>
              
              {/* プレミアムプラン */}
              <div className="bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 border border-blue-500/20 hover:border-blue-400/40 flex flex-col h-full">
                <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">プレミアムプラン</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">¥500,000</span>
                    <span className="text-gray-300 ml-2 pb-1">~/月（税別）</span>
                  </div>
                  <p className="text-gray-300 mt-2 text-sm">※ 初期費用：¥300,000（税別）</p>
                </div>
                
                <div className="p-6 bg-gray-800/50 flex-grow">
                  <p className="text-gray-200 mb-4 font-medium">大規模ビジネス・高競争市場向けの最上位SEO戦略</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">包括的なキーワード戦略（30キーワード以上）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">サイト全体のSEO最適化</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">高度な技術SEO対策</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">SEO記事制作</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">内部SEO改善（詳細構造分析・最適化）</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">専門的コンテンツ戦略立案と執筆支援</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">詳細な競合分析と市場調査</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">高品質な被リンク戦略</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">専任SEOコンサルタントのアサイン</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">週次進捗報告と月次詳細レポート</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">オンラインミーティング（週1回）</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-900/50">
                  <div className="text-xs text-gray-400 mb-4">
                    <p>※ 契約期間：3ヶ月〜</p>
                    <p>※ 解約は3ヶ月前までにご連絡ください</p>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-semibold transition-all">
                    詳細を問い合わせる
                  </button>
                </div>
              </div>
            </div>
            
            {/* カスタムプラン */}
            <div className="mt-12 bg-gradient-to-r from-gray-900/80 to-indigo-900/30 backdrop-blur-md rounded-lg p-8 border border-indigo-500/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                  カスタムプラン
                </h3>
                <p className="text-gray-300">
                  ビジネス規模や業界特性、目標に合わせたオーダーメイドのSEO戦略をご提案します
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">こんな方におすすめ</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">複数サイトの一括SEO管理が必要な企業</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">ECサイトなど特殊な構造のサイト</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">非常に競争の激しい業界でのSEO</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">多言語・グローバルなSEO展開</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <a
                    href="https://lin.ee/ATZ4bog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span>無料相談する</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* 注意書き */}
            <div className="mt-10 text-sm text-gray-400 space-y-2">
              <p>※ 料金はすべて税別表示です。別途消費税がかかります。</p>
              <p>※ 契約期間は最低3ヶ月〜となります。</p>
              <p>※ プランはいつでもアップグレード可能です。ダウングレードは契約更新時のみ可能です。</p>
              <p>※ 記載されている内容は一般的な目安です。詳細は無料相談にてご確認ください。</p>
            </div>
          </section>
        </div>
      </div>
      
      {showModal && (
        <ImageModal
          src="/images/for-seo.png"
          alt="サイト制作過程のSNS投稿 - CSRとSSRの複合レンダリングでSEOの内部強化"
          onClose={() => setShowModal(false)}
        />
      )}
          
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

          {/* AI/LLM最適化のための構造化データ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seoServiceSchema)
            }}
          />
    </div>
  )
} 