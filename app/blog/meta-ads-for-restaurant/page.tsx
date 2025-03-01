import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: '【2025年最新】飲食店のMeta広告運用完全ガイド | 集客率2倍の実践テクニック',
  description: '飲食店向けMeta広告(旧Facebook広告)の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
  keywords: [
    '飲食店 Meta広告',
    '広告運用 飲食店',
    'Meta広告 レストラン',
    'Facebook広告 飲食店',
    'Instagram広告 飲食店',
    '飲食店 集客 SNS広告',
    'レストランマーケティング',
    'デジタル広告 飲食業',
    '飲食店集客テクニック',
    '広告運用 成功事例'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/meta-ads-for-restaurant',
  },
  openGraph: {
    title: '【2025年最新】飲食店のMeta広告運用完全ガイド',
    description: '飲食店向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/meta-ads-restaurant.jpg',
        width: 1200,
        height: 630,
        alt: '飲食店向けMeta広告運用ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/meta-ads-for-restaurant',
    siteName: 'Web制作 あおい',
    publishedTime: '2025-03-01T00:00:00+09:00',
    modifiedTime: '2025-03-01T00:00:00+09:00',
    authors: ['Web制作 あおい'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【2025年最新】飲食店のMeta広告運用完全ガイド',
    description: '飲食店向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から成功事例まで。',
    images: ['/blog/eye-catch/meta-ads-restaurant.jpg'],
    creator: '@あおい',
    site: '@Webデザインあおい',
  },
}

export default function MetaAdsForRestaurantPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/blog" className="flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ブログ一覧に戻る
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 leading-tight">
          【2025年最新】飲食店のMeta広告運用完全ガイド
        </h1>
        
        <div className="text-gray-400 mb-6">2025.03.01 <span className="ml-2 px-2 py-1 bg-cyan-900/30 text-cyan-400 rounded text-xs">広告運用</span></div>
        
        <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src="/blog/eye-catch/meta-ads-restaurant.jpg"
            alt="飲食店向けMeta広告運用"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl md:text-2xl mb-8 text-gray-300 font-light">
            飲食店経営者の皆さま、「広告を出しているのにお客さんが増えない」「Meta広告（旧Facebook・Instagram広告）の効果的な運用方法がわからない」とお悩みではありませんか？本記事では、飲食店特有のニーズに合わせたMeta広告の運用方法を、実際の成功事例とともに詳しく解説します。コストを抑えながらも効率的に新規顧客を獲得し、リピーターを増やす方法をご紹介します。
          </p>

          <div className="my-12 p-5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              目次
            </h2>
            <ul className="space-y-2">
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#intro" className="hover:text-cyan-300 transition-colors">1. 飲食店におけるMeta広告の重要性</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#targeting" className="hover:text-cyan-300 transition-colors">2. 飲食店向け効果的なターゲティング戦略</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#creative" className="hover:text-cyan-300 transition-colors">3. 反応率の高い広告クリエイティブの作り方</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#budget" className="hover:text-cyan-300 transition-colors">4. 予算設定と入札戦略</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#cases" className="hover:text-cyan-300 transition-colors">5. 飲食店のMeta広告成功事例</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#summary" className="hover:text-cyan-300 transition-colors">6. まとめ：成功する飲食店のMeta広告運用</a>
              </li>
            </ul>
          </div>
          
          <h2 id="intro" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">1. 飲食店におけるMeta広告の重要性</h2>
          
          <p>飲食業界において、Meta広告（Facebook・Instagram広告）は非常に効果的な集客ツールです。美味しい料理や居心地の良い店内の雰囲気など、視覚的な魅力を伝えるのに最適なプラットフォームといえます。</p>
          
          {/* グラフの追加 - スマホでも見やすいデザイン */}
          <div className="my-10 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-center text-cyan-300">集客チャネル別 新規顧客獲得率比較（飲食店）</h3>
            <div className="relative h-80 md:h-96">
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                <div className="w-1/5 h-[25%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">25%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">口コミ・紹介</div>
                </div>
                <div className="w-1/5 h-[55%] bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">55%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">Meta広告</div>
                </div>
                <div className="w-1/5 h-[40%] bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">40%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">Google広告</div>
                </div>
                <div className="w-1/5 h-[30%] bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">30%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">グルメサイト</div>
                </div>
                <div className="w-1/5 h-[15%] bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">15%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">その他広告</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-10 text-center">※当社支援飲食店15店舗の平均データ（2024年調査）</p>
          </div>
          
          <p>上記のグラフからわかるように、飲食店の新規顧客獲得においてMeta広告は非常に高い効果を発揮しています。これは、Meta広告が持つ以下の強みによるものです：</p>
          
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li><strong className="text-cyan-300">視覚的訴求力</strong>：料理の美しい写真や動画で、味を視覚的に伝えることができる</li>
            <li><strong className="text-cyan-300">地域ターゲティング</strong>：来店可能な半径内のユーザーにピンポイントでアプローチ可能</li>
            <li><strong className="text-cyan-300">興味関心ターゲティング</strong>：食に関心の高いユーザーに絞った広告配信ができる</li>
            <li><strong className="text-cyan-300">リターゲティング</strong>：サイト訪問者や予約未遂者に再アプローチが可能</li>
            <li><strong className="text-cyan-300">コスト効率</strong>：少額から始められ、効果を見ながら予算調整が可能</li>
          </ul>
        </div>

        <h2 id="targeting" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">2. 飲食店向け効果的なターゲティング戦略</h2>
        
        <p>Meta広告の強みは、非常に細かいターゲティングが可能な点です。飲食店広告では、以下のようなターゲティング設定が効果的です。</p>
        
        {/* 表形式でターゲティング戦略を紹介 - スマホでも見やすいデザイン */}
        <div className="overflow-x-auto my-10">
          <table className="w-full border-collapse bg-gray-800/30 rounded-lg overflow-hidden">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="py-4 px-4 text-left text-cyan-300 font-semibold">ターゲティング項目</th>
                <th className="py-4 px-4 text-left text-cyan-300 font-semibold">設定例</th>
                <th className="py-4 px-4 text-left text-cyan-300 font-semibold">効果・メリット</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/30">
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">地域</td>
                <td className="py-3 px-4">店舗から半径3-5km</td>
                <td className="py-3 px-4">来店可能なエリアに限定し、広告費用を効率化</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">年齢・性別</td>
                <td className="py-3 px-4">店舗コンセプトに合わせた設定<br/><span className="text-xs text-gray-400">（例：25-45歳、女性中心など）</span></td>
                <td className="py-3 px-4">ターゲット顧客層に絞り込み効果を高める</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">興味関心</td>
                <td className="py-3 px-4">料理、グルメ、飲食店、<br/>店舗ジャンルに関連する興味</td>
                <td className="py-3 px-4">食に関心の高いユーザーに絞り込み</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">行動</td>
                <td className="py-3 px-4">飲食店予約サイト利用者<br/>フードデリバリー利用者</td>
                <td className="py-3 px-4">飲食に積極的なユーザーにアプローチ</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">カスタムオーディエンス</td>
                <td className="py-3 px-4">サイト訪問者<br/>ブログ読者<br/>既存顧客リスト</td>
                <td className="py-3 px-4">すでに興味を示したユーザーへの再アプローチ</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="py-3 px-4 font-medium">類似オーディエンス</td>
                <td className="py-3 px-4">既存顧客に似た特性を持つユーザー</td>
                <td className="py-3 px-4">優良顧客と似た特性を持つ新規ユーザーを発見</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>特に飲食店では「地域」と「時間帯」のターゲティングが重要です。例えば、ランチタイム前の11時〜12時に近隣オフィスワーカーに広告を出すことで、昼食の選択肢として認知してもらうことができます。</p>
        
        <div className="bg-gray-800/50 border border-cyan-900/50 rounded-lg p-5 my-8">
          <h4 className="text-lg font-bold text-cyan-300 mb-3">📍 飲食店向けターゲティングのポイント</h4>
          <p className="mb-4">入念なターゲティングは大切ですが、あまりに絞りすぎると十分なリーチが得られない場合があります。まずは広めに設定し、データを見ながら徐々に最適化していくアプローチがおすすめです。</p>
          <div className="flex items-center text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Meta広告マネージャーでは、推定リーチ数を確認できます。日次10,000人程度のリーチが目安です。</span>
          </div>
        </div>

        <h2 id="creative" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">3. 反応率の高い広告クリエイティブの作り方</h2>
        
        <p>飲食店のMeta広告では、視覚的な訴求力が非常に重要です。美味しそうな料理写真や居心地の良い店内の雰囲気など、視覚に訴えるクリエイティブが効果的です。</p>
        
        {/* スマホでも見やすいカード型のレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">高品質な料理写真</h3>
            <p className="text-gray-300">美味しそうな料理の写真は、顧客の食欲を刺激します。プロのフードフォトグラファーに依頼するか、明るい自然光の下で撮影しましょう。多角度から撮影し、料理の質感が伝わるようにします。</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">短尺動画コンテンツ</h3>
            <p className="text-gray-300">調理過程や盛り付けの様子、お客様の反応など、動画は静止画よりも高いエンゲージメントを生み出します。15秒程度の短い動画が最も効果的です。</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">実際の口コミ・レビュー</h3>
            <p className="text-gray-300">「このパスタは絶品！」など、実際のお客様の声を引用することで、広告の信頼性が大幅に向上します。Google・食べログなどの高評価レビューを活用しましょう。</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">期間限定メニュー</h3>
            <p className="text-gray-300">「今週末まで」「季節限定」といった限定感は、行動を促す強力なトリガーになります。希少性と緊急性を演出することで、来店意欲を高めましょう。</p>
          </div>
        </div>
        
        <div className="my-10 p-6 bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">効果的な広告文の例</h3>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
              <p className="italic text-gray-300">「自家製生パスタと厳選素材で作る本格イタリアン。渋谷駅から徒歩5分。今なら平日ランチセット10%オフ！予約はプロフィールのリンクから。#渋谷ランチ #イタリアン」</p>
              <div className="mt-2 text-sm text-gray-400">
                <span className="text-cyan-400">ポイント:</span> 場所、特典、アクションの明確化
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="italic text-gray-300">「＼今週末限定／A5ランク和牛の炭火焼きフェア開催中！当店自慢の和牛を特別価格でご提供。予約された方にはワンドリンクサービスをこの機会をお見逃しなく！」</p>
              <div className="mt-2 text-sm text-gray-400">
                <span className="text-purple-400">ポイント:</span> 限定感と特典の明示
              </div>
            </div>
          </div>
        </div>

        <h2 id="budget" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">4. 予算設定と入札戦略</h2>
        
        <p>飲食店のMeta広告運用では、コスト効率の高い予算設定が重要です。一般的な飲食店の場合、まずは小規模な予算から始め、効果を見ながら徐々に拡大していくことをおすすめします。</p>
        
        {/* 横スクロール可能なカルーセル型UI - スマホでも見やすい */}
        <div className="relative my-10 overflow-hidden">
          <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <div className="flex-shrink-0 w-full md:w-80 p-5 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white">テスト期</h4>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-xs">1-2週間</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>日予算: 1,000〜2,000円</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>複数のクリエイティブでA/Bテスト</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>データ収集と初期効果測定を実施</p>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-80 p-5 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white">拡大期</h4>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs">2-4週間</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>日予算: 3,000〜5,000円</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>効果の高いクリエイティブに予算集中</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>ターゲティングの最適化</p>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-80 p-5 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white">安定期</h4>
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-xs">継続運用</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>予算: ROI（投資対効果）に基づいて設定</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>新メニュー・イベント時に予算増加</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <p>定期的な広告内容のリフレッシュ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-10 mb-4 text-cyan-300">入札戦略のポイント</h3>
        
        <p>Meta広告では、入札タイプを適切に選ぶことでコスト効率を高められます。飲食店に特におすすめの入札戦略は以下の通りです：</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-lg p-5">
            <h4 className="font-bold text-white mb-3">コンバージョン最適化入札</h4>
            <p className="text-gray-300 text-sm mb-3">予約や問い合わせなど、具体的なアクションを目的とする場合に最適です。過去のデータからコンバージョンしやすいユーザーに広告を表示します。</p>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-cyan-300 text-sm font-semibold">おすすめの使用例</p>
              <p className="text-gray-300 text-xs">オンライン予約を促進したい、メニュー詳細ページへの誘導を増やしたい場合</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-lg p-5">
            <h4 className="font-bold text-white mb-3">リーチ最適化入札</h4>
            <p className="text-gray-300 text-sm mb-3">新規オープンや新メニュー告知など、多くの人に情報を届けたい場合に有効です。CPM（1000インプレッション当たりのコスト）が低く抑えられます。</p>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-cyan-300 text-sm font-semibold">おすすめの使用例</p>
              <p className="text-gray-300 text-xs">新店舗オープン、周年イベント、季節限定メニューの告知など</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/30 border-l-4 border-amber-500 p-5 rounded-r-lg my-8">
          <h4 className="font-bold text-white mb-2">予算配分のコツ</h4>
          <p className="text-gray-300 mb-3">最も効果的な予算配分は、曜日・時間帯によって異なります。以下のポイントを参考にしてください：</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">✓</span>
              <p>ランチタイム集客なら前日夕方〜当日午前中に予算を多く配分</p>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">✓</span>
              <p>週末予約促進なら水・木曜日に予算を多く配分</p>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">✓</span>
              <p>繁忙期（年末年始、歓送迎会シーズンなど）は1ヶ月前から予算を増やす</p>
            </li>
          </ul>
        </div>
        
        <h2 id="cases" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">5. 飲食店のMeta広告成功事例</h2>
        
        <p>実際に成果を上げた飲食店のMeta広告運用事例を紹介します。それぞれの施策のポイントを押さえ、自店舗の広告運用に活かしましょう。</p>
        
        <div className="space-y-10 my-10">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-800 h-48 md:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Case 1</span>
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-white">イタリアンレストラン「A」の事例</h3>
                <p className="text-sm text-gray-400 mb-4">店舗規模：30席 / 月間広告予算：5万円</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">課題</h4>
                  <p className="text-gray-300 text-sm">平日ランチタイムの集客が伸び悩み、客単価も低迷していた</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">施策</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>平日限定パスタランチセットの写真を中心にカルーセル広告を作成</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>店舗から半径2km以内の25-45歳のオフィスワーカーにターゲティング</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>平日10:30〜12:00に広告を集中配信</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">結果</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">ランチ客数 45%増加</span>
                    </div>
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">投資対効果(ROAS) 380%</span>
                    </div>
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">平均客単価 12%向上</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-800 h-48 md:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Case 2</span>
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-white">居酒屋「B」の事例</h3>
                <p className="text-sm text-gray-400 mb-4">店舗規模：50席 / 月間広告予算：8万円</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">課題</h4>
                  <p className="text-gray-300 text-sm">新規顧客の獲得が停滞し、特に若年層の来店が少なかった</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">施策</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>調理風景や人気メニューの短尺動画を作成</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>Instagram Reelsに特化した広告配信</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>初来店特典クーポン（一杯無料）を訴求</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <p>木〜土曜日の17:00〜20:00に配信時間を集中</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">結果</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">新規顧客 月60名以上増加</span>
                    </div>
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">20代客層 68%増加</span>
                    </div>
                    <div className="bg-green-900/30 px-3 py-1.5 rounded-full">
                      <span className="text-green-400 font-semibold">SNSフォロワー 2.4倍に</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="summary" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">6. まとめ：成功する飲食店のMeta広告運用</h2>
        
        <p>Meta広告を活用した飲食店の集客は、適切な戦略とコツを押さえることで非常に効果的なマーケティング手法となります。この記事で解説したポイントを実践することで、費用対効果の高い広告運用が可能です。</p>
        
        <div className="my-10 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="font-bold text-xl mb-4 text-white">飲食店のMeta広告運用 成功の5つのポイント</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mr-3 mt-0.5">
                <span className="font-bold text-cyan-400">1</span>
              </div>
              <div>
                <p className="font-semibold text-white">ターゲティングの精度を高める</p>
                <p className="text-gray-300 text-sm">店舗から適切な距離、年齢層、食の興味関心に基づいたターゲティングで効率を高める</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mr-3 mt-0.5">
                <span className="font-bold text-cyan-400">2</span>
              </div>
              <div>
                <p className="font-semibold text-white">視覚的なクリエイティブにこだわる</p>
                <p className="text-gray-300 text-sm">食欲をそそる高品質な写真や動画を使い、短時間で顧客の興味を引く</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mr-3 mt-0.5">
                <span className="font-bold text-cyan-400">3</span>
              </div>
              <div>
                <p className="font-semibold text-white">明確な訴求ポイントを設定する</p>
                <p className="text-gray-300 text-sm">限定メニュー、特別価格、特典など、行動を促す要素を必ず含める</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mr-3 mt-0.5">
                <span className="font-bold text-cyan-400">4</span>
              </div>
              <div>
                <p className="font-semibold text-white">データを分析して継続的に最適化する</p>
                <p className="text-gray-300 text-sm">広告の反応データを定期的に確認し、効果の高い要素を強化していく</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mr-3 mt-0.5">
                <span className="font-bold text-cyan-400">5</span>
              </div>
              <div>
                <p className="font-semibold text-white">来店後の体験まで一貫させる</p>
                <p className="text-gray-300 text-sm">広告で訴求した内容と実際の提供内容・価値が一致していることを確認する</p>
              </div>
            </li>
          </ul>
        </div>
        
        <p className="mb-10">Meta広告を効果的に運用するには、継続的な改善と最適化が鍵となります。初期の広告パフォーマンスにとらわれず、データを分析しながら少しずつ改善していくことで、着実に集客効果を高めていくことができます。経験を積み重ねることで、自店舗に最適な広告戦略が見えてくるでしょう。</p>
        
        {/* 訴求セクション - サイトと同じデザイン */}
        <div className="mt-16 mb-10 p-8 bg-gradient-to-br from-gray-900/90 to-gray-900 rounded-lg border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            「Meta広告の運用がうまくいかない…」<br />
            そんな飲食店経営者様を徹底サポートします！
          </h3>
          
          <p className="mb-8 text-gray-300 leading-relaxed">
            効果的なMeta広告運用には、飲食業界の特性を理解した専門知識が必要です。
            私の広告運用サポートサービスでは、飲食店特化型の広告戦略をご提案します。
          </p>
          
          <div className="bg-gray-800/60 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-white mb-4 text-lg">こんなお悩みはありませんか？</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-lg">•</span>
                広告費をかけているのに予約や来店が増えない
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-lg">•</span>
                どんな写真や動画が効果的か分からない
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-lg">•</span>
                集客したいけれど、広告運用の時間がない
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-lg">•</span>
                新規客獲得のためのMeta広告の始め方が分からない
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-gray-800/60 p-4 rounded-lg">
              <p className="text-center text-gray-300 text-sm">
                ※これまでに15店舗以上の飲食店の広告運用をサポートしています
              </p>
            </div>
            <div className="bg-gray-800/60 p-4 rounded-lg">
              <p className="text-center text-gray-300 text-sm">
                ※平均で広告費用対効果(ROAS)が200%以上向上しています
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-5 rounded-lg text-center mb-8">
            <p className="text-cyan-300 font-bold">
              今なら初回相談無料！第一線で活躍するわたしがお客様の課題をヒアリングします
            </p>
            <p className="text-gray-300 text-sm mt-2">
              ※技術的な知識は一切必要ありません。現在の集客状況や課題をお聞かせください
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://www.stellarium.jp/ads-service" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg text-center transition-all hover:shadow-lg sm:flex-1 text-base">
              広告運用サービスの詳細を見る →
            </a>
            <a href="https://page.line.me/nag6553k?oat_content=url&openQrModal=true" className="bg-transparent hover:bg-cyan-800/20 text-cyan-400 border border-cyan-600 font-semibold py-4 px-6 rounded-lg text-center transition-colors sm:flex-1 text-base">
              お問い合わせはこちら →
            </a>
          </div>
        </div>
      </div>
    </article>
  )
} 