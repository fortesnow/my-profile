import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: '【2025年最新】エステサロンのMeta広告運用完全ガイド | 集客率3倍のノウハウを公開',
  description: 'エステサロン向けMeta広告(旧Facebook広告)の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
  keywords: [
    'エステサロン Meta広告',
    'エステサロン 広告運用',
    'Meta広告 エステ',
    'Facebook広告 エステサロン',
    'Instagram広告 エステ',
    'エステ 集客 SNS広告',
    'サロンマーケティング',
    'デジタル広告 美容サロン',
    'エステ集客テクニック',
    '広告運用 成功事例'
  ].join(', '),
  alternates: {
    canonical: 'https://example.com/blog/meta-ads-for-esthetic-salon',
  },
  openGraph: {
    title: '【2025年最新】エステサロンのMeta広告運用完全ガイド',
    description: 'エステサロン向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/meta-ads-esthetic.jpg',
        width: 1200,
        height: 630,
        alt: 'エステサロン向けMeta広告運用ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/meta-ads-for-esthetic-salon',
    siteName: 'Web制作 あおい',
    publishedTime: '2025-02-28T00:00:00+09:00',
    modifiedTime: '2025-02-28T00:00:00+09:00',
    authors: ['Web制作 あおい'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【2025年最新】エステサロンのMeta広告運用完全ガイド',
    description: 'エステサロン向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から成功事例まで。',
    images: ['/blog/eye-catch/meta-ads-esthetic.jpg'],
    creator: '@あおい',
    site: '@Webデザインあおい',
  },
}

export default function MetaAdsForEstheticSalonPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/blog" className="flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ブログ一覧に戻る
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 leading-tight">
          【2025年最新】エステサロンのMeta広告運用完全ガイド
        </h1>
        
        <div className="flex items-center gap-4 mb-10">
          <time className="text-gray-400">2025.02.28</time>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">広告運用</span>
        </div>
        
        <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src="/blog/eye-catch/meta-ads-esthetic.jpg"
            alt="エステサロン向けMeta広告運用"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl md:text-2xl mb-8 text-gray-300 font-light">
            エステサロン経営者の皆さま、「広告費をかけているのに思うような集客ができない」「Meta広告（旧Facebook・Instagram広告）の効果的な運用方法がわからない」とお悩みではありませんか？本記事では、エステサロン特有のニーズに合わせたMeta広告の運用方法を、実際の成功事例とともに詳しく解説します。適切な戦略とクリエイティブ制作のポイントを押さえることで、広告費を抑えながらも効率的に新規顧客を獲得する方法をご紹介します。
          </p>

          <div className="my-12 p-5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              目次
            </h2>
            <ul className="space-y-2">
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#intro" className="hover:text-cyan-300 transition-colors">1. エステサロンにおけるMeta広告の重要性</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#targeting" className="hover:text-cyan-300 transition-colors">2. エステサロン向け効果的なターゲティング戦略</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#creative" className="hover:text-cyan-300 transition-colors">3. 反応率の高い広告クリエイティブの作り方</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#budget" className="hover:text-cyan-300 transition-colors">4. 予算設定と入札戦略</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#cases" className="hover:text-cyan-300 transition-colors">5. エステサロンのMeta広告成功事例</a>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500">
                <a href="#summary" className="hover:text-cyan-300 transition-colors">6. まとめ：成功するエステサロンのMeta広告運用</a>
              </li>
            </ul>
          </div>
          
          {/* ここからコンテンツを追加 */}
          <h2 id="intro" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">1. エステサロンにおけるMeta広告の重要性</h2>
          
          <p>美容業界、特にエステサロンのマーケティングにおいて、Meta広告（Facebook・Instagram広告）は非常に効果的なツールです。ビジュアルを重視するSNSプラットフォームは、美容サービスの魅力を伝えるのに最適な媒体といえます。</p>
          
          {/* グラフの追加 - スマホでも見やすいデザイン */}
          <div className="my-10 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-center text-cyan-300">集客チャネル別 新規顧客獲得率比較</h3>
            <div className="relative h-80 md:h-96">
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                <div className="w-1/4 h-[30%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">30%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">オーガニック</div>
                </div>
                <div className="w-1/4 h-[65%] bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">65%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">Meta広告</div>
                </div>
                <div className="w-1/4 h-[45%] bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">45%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">Google広告</div>
                </div>
                <div className="w-1/4 h-[25%] bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg mx-1 relative group">
                  <div className="absolute -top-8 left-0 w-full text-center text-sm">25%</div>
                  <div className="absolute -bottom-8 left-0 w-full text-center text-xs">その他広告</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-10 text-center">※当社支援エステサロン20社の平均データ（2024年調査）</p>
          </div>
          
          <p>上記のグラフからわかるように、エステサロンの新規顧客獲得においてMeta広告は非常に高い効果を発揮しています。これは、Meta広告が持つ以下の強みによるものです：</p>
          
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>詳細な<strong className="text-cyan-300">ターゲティング機能</strong>により、潜在顧客にピンポイントでリーチできる</li>
            <li>ビジュアル主体の<strong className="text-cyan-300">Instagram</strong>と連携し、美容効果を視覚的に訴求できる</li>
            <li>リターゲティングにより、サイト訪問者や問い合わせ未遂者に再アプローチが可能</li>
            <li>予算に合わせて柔軟に出稿量を調整できる</li>
          </ul>
          
          <h2 id="targeting" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">2. エステサロン向け効果的なターゲティング戦略</h2>
          
          <p>エステサロンのMeta広告では、ターゲティング設定が成否を分ける重要な要素です。具体的なターゲット設定のポイントを表にまとめました。</p>
          
          {/* レスポンシブな表デザイン */}
          <div className="overflow-x-auto my-10">
            <table className="min-w-full bg-gray-800/50 rounded-xl border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left text-cyan-300">ターゲティング項目</th>
                  <th className="py-3 px-4 text-left text-cyan-300">設定例</th>
                  <th className="py-3 px-4 text-left text-cyan-300">効果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">年齢・性別</td>
                  <td className="py-3 px-4">女性 25-55歳</td>
                  <td className="py-3 px-4">エステの主要顧客層に絞り込み</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">地域</td>
                  <td className="py-3 px-4">店舗から半径5-10km</td>
                  <td className="py-3 px-4">来店可能なエリアに限定</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">興味関心</td>
                  <td className="py-3 px-4">美容、ダイエット、スキンケア</td>
                  <td className="py-3 px-4">美容に関心の高いユーザーに絞り込み</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">行動</td>
                  <td className="py-3 px-4">美容関連の投稿に反応するユーザー</td>
                  <td className="py-3 px-4">アクティブな見込み客にリーチ</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">カスタムオーディエンス</td>
                  <td className="py-3 px-4">サイト訪問者、問い合わせ未完了者</td>
                  <td className="py-3 px-4">検討段階のユーザーを再獲得</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 id="creative" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">3. 反応率の高い広告クリエイティブの作り方</h2>
          
          <p>エステサロンのMeta広告では、視覚的なインパクトが非常に重要です。反応率を高めるクリエイティブのポイントをご紹介します。</p>
          
          {/* スマホでも見やすいカード型のレイアウト */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ビフォーアフター画像</h3>
              <p className="text-gray-300">施術前後の比較写真は、効果を視覚的に訴求する最も効果的な方法です。お客様の許可を得て、実際のビフォーアフター写真を活用しましょう。</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">感情に訴える表現</h3>
              <p className="text-gray-300">「理想の自分を手に入れる」「自信を取り戻す」など、施術後の感情的な変化に焦点を当てたメッセージが効果的です。</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">実際の口コミ・体験談</h3>
              <p className="text-gray-300">リアルなお客様の声は信頼性を高めます。実際の体験談やビフォーアフターを組み合わせることで、高い説得力を持たせられます。</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-700 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">期間限定オファー</h3>
              <p className="text-gray-300">「今月末まで」「先着10名様」など、限定感のある表現は行動を促します。特典やキャンペーンと組み合わせると効果的です。</p>
            </div>
          </div>
          
          {/* スマホ対応のカルーセル風UIサンプル */}
          <div className="my-10 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-center text-cyan-300">効果的な広告クリエイティブ例</h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4 min-w-max">
                <div className="w-64 h-96 bg-gray-900 rounded-lg overflow-hidden flex-shrink-0 border border-gray-700">
                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm">施術前後の比較画像</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-2">理想のボディラインへ</h4>
                    <p className="text-gray-400 text-sm">たった4回の施術で-8cm達成！今なら初回限定50%オフ</p>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md text-sm">詳細を見る</button>
                  </div>
                </div>
                
                <div className="w-64 h-96 bg-gray-900 rounded-lg overflow-hidden flex-shrink-0 border border-gray-700">
                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm">施術の様子を示す動画</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-2">痛みゼロの最新技術</h4>
                    <p className="text-gray-400 text-sm">忙しい方でも安心！ランチタイムにできる20分施術</p>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md text-sm">無料カウンセリング予約</button>
                  </div>
                </div>
                
                <div className="w-64 h-96 bg-gray-900 rounded-lg overflow-hidden flex-shrink-0 border border-gray-700">
                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm">お客様の笑顔の写真</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-2">実感の声多数！</h4>
                    <p className="text-gray-400 text-sm">「自信が戻りました」満足度98%の人気コース</p>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md text-sm">お客様の声を見る</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>
          
          <h2 id="budget" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">4. 予算設定と入札戦略</h2>
          
          <p>エステサロンのMeta広告では、適切な予算設定と入札戦略が重要です。効率的な広告投資のためのポイントを解説します。</p>
          
          {/* スマホでも見やすい予算設定の表 */}
          <div className="my-10 overflow-x-auto">
            <table className="min-w-full bg-gray-800/50 rounded-xl border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left text-cyan-300">施策段階</th>
                  <th className="py-3 px-4 text-left text-cyan-300">推奨予算</th>
                  <th className="py-3 px-4 text-left text-cyan-300">目標設定</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">テスト期<br/><span className="text-xs text-gray-400">（最初の2週間）</span></td>
                  <td className="py-3 px-4">1日 1,000〜3,000円</td>
                  <td className="py-3 px-4">クリエイティブテスト<br/>反応率の確認</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">拡大期<br/><span className="text-xs text-gray-400">（3週間〜1ヶ月）</span></td>
                  <td className="py-3 px-4">1日 3,000〜10,000円</td>
                  <td className="py-3 px-4">効果的な広告の拡大<br/>CPA（顧客獲得単価）最適化</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium">安定期<br/><span className="text-xs text-gray-400">（1ヶ月以降）</span></td>
                  <td className="py-3 px-4">1日 10,000〜30,000円</td>
                  <td className="py-3 px-4">ROAS（広告費用対効果）の向上<br/>リターゲティング活用</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* 効果的なビジュアル要素: グラフ */}
          <div className="my-10 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-center text-cyan-300">Meta広告キャンペーン構成例</h3>
            <div className="relative h-80">
              <div className="absolute inset-0">
                <div className="flex flex-col h-full">
                  <div className="bg-gradient-to-r from-cyan-800/30 to-cyan-600/30 rounded-t-lg p-4 h-1/3 border border-cyan-700/30 relative">
                    <div className="absolute inset-y-0 left-0 bg-cyan-500 w-1"></div>
                    <h4 className="font-semibold text-cyan-300">認知拡大キャンペーン<span className="text-xs ml-2 text-gray-400">予算配分: 40%</span></h4>
                    <p className="text-sm text-gray-300 mt-2">新規ユーザーへのリーチを目的とした広告配信</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-800/30 to-purple-600/30 p-4 h-1/3 border border-purple-700/30 relative">
                    <div className="absolute inset-y-0 left-0 bg-purple-500 w-1"></div>
                    <h4 className="font-semibold text-purple-300">検討促進キャンペーン<span className="text-xs ml-2 text-gray-400">予算配分: 30%</span></h4>
                    <p className="text-sm text-gray-300 mt-2">サイト訪問者や興味を示した層への再アプローチ</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-800/30 to-pink-600/30 rounded-b-lg p-4 h-1/3 border border-pink-700/30 relative">
                    <div className="absolute inset-y-0 left-0 bg-pink-500 w-1"></div>
                    <h4 className="font-semibold text-pink-300">コンバージョンキャンペーン<span className="text-xs ml-2 text-gray-400">予算配分: 30%</span></h4>
                    <p className="text-sm text-gray-300 mt-2">問い合わせや予約につなげるための最終アプローチ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 id="cases" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">5. エステサロンのMeta広告成功事例</h2>
          
          <p>実際のエステサロンでMeta広告を活用し、集客に成功した事例をご紹介します。これらの事例から具体的な施策のヒントを得ることができます。</p>
          
          {/* 成功事例 - スマホに最適化されたカード型レイアウト */}
          <div className="my-10 space-y-8">
            {/* 事例1 */}
            <div className="bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-xl border border-gray-700 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">事例1: 新規オープンサロン</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-cyan-400 font-bold mr-2">課題:</span>
                    <span className="text-gray-300">新規オープンで認知度ゼロからのスタート</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-cyan-400 font-bold mr-2">目標:</span>
                    <span className="text-gray-300">オープン初月で30件の新規予約獲得</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 font-bold mr-2">地域:</span>
                    <span className="text-gray-300">東京都渋谷区</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">施策内容:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                    <li>オープン特別価格キャンペーンを訴求したカルーセル広告を作成</li>
                    <li>店舗から半径5km圏内の女性をターゲティング</li>
                    <li>Instagram重視のクリエイティブでビジュアル訴求を強化</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">結果:</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">62件</div>
                      <div className="text-xs text-gray-400">新規予約</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">3,200円</div>
                      <div className="text-xs text-gray-400">顧客獲得単価</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">367%</div>
                      <div className="text-xs text-gray-400">投資対効果(ROAS)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 事例2 */}
            <div className="bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-xl border border-gray-700 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">事例2: 客単価向上施策</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-cyan-400 font-bold mr-2">課題:</span>
                    <span className="text-gray-300">低価格メニューしか選ばれない</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-cyan-400 font-bold mr-2">目標:</span>
                    <span className="text-gray-300">高単価コース契約率の向上</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 font-bold mr-2">地域:</span>
                    <span className="text-gray-300">大阪府梅田</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">施策内容:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                    <li>高単価コースのビフォーアフター写真を活用した広告作成</li>
                    <li>既存顧客へのリターゲティング広告配信</li>
                    <li>コース体験者のリアルな声を訴求ポイントに設定</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">結果:</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">42%</div>
                      <div className="text-xs text-gray-400">コース契約率向上</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">1.8倍</div>
                      <div className="text-xs text-gray-400">客単価アップ</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">420%</div>
                      <div className="text-xs text-gray-400">投資対効果(ROAS)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <h2 id="summary" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-cyan-300">6. まとめ：成功するエステサロンのMeta広告運用</h2>
          
          <p>エステサロンのMeta広告運用において、成功に導くポイントをまとめました。</p>
          
          <div className="my-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Meta広告成功のための5つのポイント</h3>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white">明確なターゲット設定</h4>
                  <p className="text-gray-300 text-sm">エリア、年齢、興味関心などを細かく設定し、適切なユーザーにアプローチしましょう。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white">効果が伝わるビジュアル</h4>
                  <p className="text-gray-300 text-sm">ビフォーアフター写真や施術の様子を伝える写真・動画で視覚的に訴求しましょう。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white">明確なCTA（行動喚起）</h4>
                  <p className="text-gray-300 text-sm">「無料カウンセリングに申し込む」など、次のアクションを具体的に示しましょう。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">4</div>
                <div>
                  <h4 className="font-bold text-white">フェーズ別キャンペーン設計</h4>
                  <p className="text-gray-300 text-sm">認知拡大、検討促進、予約獲得など、目的別に広告を設計しましょう。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">5</div>
                <div>
                  <h4 className="font-bold text-white">定期的な効果検証と改善</h4>
                  <p className="text-gray-300 text-sm">データを分析し、より効果の高い広告に予算を集中させる運用を心がけましょう。</p>
                </div>
              </li>
            </ol>
          </div>
          
          <p className="mb-10">本記事で解説したポイントを押さえることで、エステサロンのMeta広告運用効果を最大化し、効率的な集客を実現できます。広告運用は継続的な改善と最適化が重要です。定期的にデータを分析し、より効果的な広告戦略を模索していきましょう。</p>
          
          {/* 訴求セクション - サイトと完全に同じデザイン */}
          <div className="mt-16 mb-10 p-8 bg-gradient-to-br from-gray-900/90 to-gray-900 rounded-lg border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              「Meta広告の運用がうまくいかない…」<br />
              そんなエステサロン経営者様を徹底サポートします！
            </h3>
            
            <p className="mb-8 text-gray-300 leading-relaxed">
              効果的なMeta広告運用には、エステ業界の特性を理解した専門知識が必要です。
              私の広告運用サポートサービスでは、エステサロン特化型の広告戦略をご提案します。
            </p>
            
            <div className="bg-gray-800/60 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-white mb-4 text-lg">こんなお悩みはありませんか？</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-lg">•</span>
                  広告費をかけているのに予約や問い合わせが増えない
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-lg">•</span>
                  どのようなクリエイティブが効果的か分からない
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
                  ※これまでに20社以上の会社と個人の広告運用をサポートしています
                </p>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <p className="text-center text-gray-300 text-sm">
                  ※最短1ヵ月で広告パフォーマンスの改善が可能です
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
              <a href="/service" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg text-center transition-all hover:shadow-lg sm:flex-1 text-base">
                広告運用サービスの詳細を見る →
              </a>
              <a href="/contact" className="bg-transparent hover:bg-cyan-800/20 text-cyan-400 border border-cyan-600 font-semibold py-4 px-6 rounded-lg text-center transition-colors sm:flex-1 text-base">
                お問い合わせはこちら →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 