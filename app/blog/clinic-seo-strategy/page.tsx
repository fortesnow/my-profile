import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: '【2025年最新】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック',
  description: 'クリニック・医療機関専門のSEO対策を徹底解説。地域検索で上位表示させるためのローカルSEO施策から、医療コンテンツの作り方まで。実績に基づいた患者集客数アップの具体的手法を公開します。',
  keywords: [
    'クリニック SEO対策',
    '医療機関 SEO',
    'クリニック 集客',
    '病院 Web集客',
    'クリニック MEO対策',
    '医院 Googleビジネスプロフィール',
    'クリニック 地域SEO',
    '病院 キーワード選定',
    '医療サイト コンテンツマーケティング',
    'クリニック ホームページ 集客'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/clinic-seo-strategy',
  },
  openGraph: {
    title: '【2025年最新】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック',
    description: 'クリニック・医療機関専門のSEO対策を徹底解説。地域特性を活かし、患者集客力を高める実践的な戦略とノウハウを公開します。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/clinic-seo-strategy.png',
        width: 1200,
        height: 630,
        alt: 'クリニックのSEO対策ガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/clinic-seo-strategy',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-16T00:00:00+09:00',
    modifiedTime: '2025-03-16T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'クリニックのSEO対策完全ガイド',
    description: 'クリニック・医療機関専門のSEO対策を徹底解説。実践的な戦略で患者数アップ。',
    images: ['/blog/eye-catch/clinic-seo-strategy.png'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
}

export default function BlogClinicSEOStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* ブログ記事のヘッダー */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/blog/eye-catch/clinic-seo-strategy.png"
          alt="クリニックのSEO対策ガイド"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
          <Link 
            href="/blog" 
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>ブログ一覧に戻る</span>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-emerald-900/50 text-emerald-300 text-xs font-medium rounded-full border border-emerald-700/30">
              SEO対策
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              クリニック・医療機関
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              集客戦略
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
            【2025年最新】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック
          </h1>
          
          <div className="flex items-center mt-6 text-white">
            <div className="flex items-center">
              <Image 
                src="/images/zunda-pic.png" 
                alt="著者アイコン" 
                width={40} 
                height={40} 
                className="rounded-full mr-3"
              />
              <span>Stellarium マーケティング</span>
            </div>
            <span className="mx-3">|</span>
            <span>2025.03.16</span>
          </div>
        </div>
      </div>
      
      {/* 記事本文 */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* イントロダクション */}
            <p className="lead text-xl text-cyan-300 font-medium">
              「ホームページを作ったのに患者さんが増えない…」
              「他のクリニックに比べて検索順位が低いままで悩んでいる」
            </p>

            <p className="text-white">
              クリニックや医療機関の経営者・担当者なら、こんな悩みを抱えていませんか？
              特に地域密着型の医療機関では、検索エンジンで上位表示されなければ、せっかくのホームページも宝の持ち腐れになってしまいます。
            </p>

            <p className="text-white">
              医療分野は特に「信頼性」が重視され、またGoogleの品質評価ガイドラインでも「Your Money, Your Life」（YMYL：お金や生命に関わる）分野として厳しい評価基準が適用されます。つまり、一般的なSEO対策に加え、医療機関ならではの専門的なアプローチが必要なのです。
            </p>

            <p className="text-white">
              本記事では、クリニック・医療機関に特化したSEO対策を徹底解説します。私たちが実際に成功させてきた事例をもとに、Googleの最新アルゴリズムに対応した具体的な施策から、医療コンテンツの作成法まで、実践的なノウハウをお伝えします。
            </p>

            {/* 目次 */}
            <div className="my-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">この記事でわかること</h2>
              <ul className="space-y-2 text-cyan-300">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">1</span>
                  <span>なぜクリニック・医療機関のSEOは難しいのか</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">2</span>
                  <span>クリニックSEOの基本：医療機関ならではのSEO対策の特徴</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">3</span>
                  <span>事例で見る：患者数2倍に成功したクリニックのSEO戦略</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">4</span>
                  <span>すぐに実践できる！クリニックSEO対策7つのポイント</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">5</span>
                  <span>医療機関向けGoogleビジネスプロフィール最適化ガイド</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-emerald-900 text-emerald-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-0.5 text-xs">6</span>
                  <span>クリニックSEOの失敗例と改善策</span>
                </li>
              </ul>
            </div>

            {/* セクション1 */}
            <h2 id="section-1" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              なぜクリニック・医療機関のSEOは難しいのか
            </h2>

            <p className="text-white">
              「SEO対策といえばキーワードを詰め込めばいい」そんな認識はとうの昔に古くなりました。特に医療分野では、Googleが特別に厳しい審査基準を設けています。
            </p>

            <h3 className="text-xl font-semibold text-cyan-300 mt-8 mb-4">
              YMYLとE-A-Tの高い壁
            </h3>

            <p className="text-white">
              GoogleはYMYL（Your Money, Your Life）分野、つまり人の健康や生命、金銭に関わるウェブサイトに対して、非常に厳格な評価基準を適用しています。クリニックや医療機関のウェブサイトは、まさにこのYMYL分野の最たるものです。
            </p>

            <p className="text-white">
              さらに重要なのが、E-A-T（Expertise, Authoritativeness, Trustworthiness：専門性、権威性、信頼性）です。一般的なSEO対策では主にテクニカルな面や内部リンク構造などに注目しがちですが、医療分野では「誰が」「どのような根拠で」情報を発信しているかがとても重要です。
            </p>

            <div className="my-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">医療サイトのE-A-T評価ポイント</h4>
              <ul className="space-y-2 text-white list-disc pl-5">
                <li><span className="text-cyan-300 font-medium">専門性（Expertise）</span>：医師や医療専門家による監修やコンテンツ作成</li>
                <li><span className="text-cyan-300 font-medium">権威性（Authoritativeness）</span>：信頼できる医療機関であることの証明</li>
                <li><span className="text-cyan-300 font-medium">信頼性（Trustworthiness）</span>：正確で、最新かつ患者さんのためになる情報提供</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-cyan-300 mt-8 mb-4">
              ローカルSEOの重要性
            </h3>

            <p className="text-white">
              クリニックの多くは地域密着型のビジネスです。全国からの集客よりも、クリニック周辺の数キロ圏内からの集客が重要になります。つまり、一般的なSEO対策だけでなく「ローカルSEO」と呼ばれる地域特化のSEO対策が必須なのです。
            </p>

            <p className="text-white">
              「近くの皮膚科」「〇〇駅 歯医者」といった地域名を含む検索クエリで上位表示されることが、患者集客の鍵となります。
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-slate-700/50">
              <div className="bg-slate-800 px-6 py-3">
                <h4 className="text-white font-semibold">医療機関の検索クエリ実例</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700/30">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">検索タイプ</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">検索クエリ例</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">月間検索ボリューム</th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800/20 divide-y divide-slate-700/30">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">地域名 + 診療科</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">新宿 皮膚科</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400">9,900</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">駅名 + 診療科</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">渋谷駅 歯医者</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400">5,400</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">地域名 + 症状</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">横浜 腰痛 病院</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400">2,900</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">診療科 + 評判</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">大阪 眼科 評判</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400">3,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* セクション2 */}
            <h2 id="section-2" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              クリニックSEOの基本：医療機関ならではのSEO対策の特徴
            </h2>

            <p className="text-white">
              医療機関のSEO対策には、一般的なSEO対策とは異なる特有のポイントがあります。これらを理解することが、効果的な対策の第一歩です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">医療情報の正確性と信頼性</h3>
                <p className="text-white">
                  医療情報は人の健康に直結するため、正確性と信頼性が最も重要です。不正確な情報や誇大な表現は避け、エビデンスに基づいた情報提供を心がけましょう。
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">専門家の監修と明示</h3>
                <p className="text-white">
                  医療コンテンツは、できるだけ医師や専門家の監修を受け、その旨を明記することが重要です。監修者の経歴や専門分野も併せて記載するとより効果的です。
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">地域特化型のコンテンツ</h3>
                <p className="text-white">
                  クリニックの所在地や最寄り駅、アクセス方法などの地域情報を充実させ、地域名を含むキーワードでの検索に対応したコンテンツ作りが必要です。
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">患者体験とユーザビリティ</h3>
                <p className="text-white">
                  スマートフォンでの閲覧を重視した設計や、予約フォームの使いやすさなど、患者さんの利便性を高めるサイト設計がSEOにも良い影響を与えます。
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-cyan-300 mt-8 mb-4">
              クリニックSEOでの競合分析の重要性
            </h3>

            <p className="text-white">
              効果的なSEO対策を行うには、同じ地域や診療科の競合クリニックを分析することが欠かせません。特に検索上位に表示されている医療機関のウェブサイトから学べる点は多いものです。
            </p>

            <div className="my-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">競合分析のチェックポイント</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-cyan-300 font-medium">コンテンツ構成</h5>
                    <p className="text-white text-sm">どのような症状や治療法のページを作成しているか、情報の深さと専門性</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-cyan-300 font-medium">サイト構造と内部リンク</h5>
                    <p className="text-white text-sm">情報設計やナビゲーション、ユーザーが求める情報への導線設計</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-cyan-300 font-medium">差別化ポイント</h5>
                    <p className="text-white text-sm">専門性の打ち出し方や、患者さんへの独自の価値提案</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-cyan-300 font-medium">ローカルSEO対策</h5>
                    <p className="text-white text-sm">地域情報の活用法やGoogleビジネスプロフィールの最適化状況</p>
                  </div>
                </div>
              </div>
            </div>

            {/* セクション3 */}
            <h2 id="section-3" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              事例で見る：患者数2倍に成功したクリニックのSEO戦略
            </h2>

            <p className="text-white">
              実際に当社が支援した皮膚科クリニックの事例をご紹介します。開業2年目にして患者数の伸び悩みに悩まされていたこのクリニックは、SEO対策の見直しによって半年間で新規患者数を2倍以上に増やすことに成功しました。
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-6 my-8 border border-slate-700/30">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">成功事例：S皮膚科クリニック</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2">■ 課題</h4>
                  <p className="text-white">
                    駅から徒歩5分の好立地にもかかわらず、ホームページからの新規問い合わせが月に2〜3件程度と低迷。特に美容皮膚科メニューの認知度が低く、新規患者の獲得に苦戦していました。
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">■ 実施した対策</h4>
                  <ul className="text-white list-disc pl-5 space-y-2">
                    <li>地域名+症状のキーワードを強化した専門ページの作成（「〇〇区 ニキビ治療」など）</li>
                    <li>診療圏内の主要駅名を含むランディングページの最適化</li>
                    <li>医師による症状別コンテンツの充実と専門家監修の明示</li>
                    <li>施術事例・症例写真の追加によるビジュアルコンテンツの強化</li>
                    <li>Googleビジネスプロフィールの最適化と定期的な投稿更新</li>
                    <li>モバイルユーザビリティの大幅改善と予約導線の簡略化</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">■ 結果</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-cyan-300">ホームページからの問い合わせ</p>
                      <p className="text-2xl font-bold text-emerald-400 mt-2">月3件 → 月15件</p>
                      <p className="text-xs text-white mt-1">5倍増</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-cyan-300">オーガニック流入数</p>
                      <p className="text-2xl font-bold text-emerald-400 mt-2">1,200 → 3,800</p>
                      <p className="text-xs text-white mt-1">3.2倍増</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-cyan-300">美容メニュー売上</p>
                      <p className="text-2xl font-bold text-emerald-400 mt-2">前年比180%</p>
                      <p className="text-xs text-white mt-1">大幅増加</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-cyan-300 mt-8 mb-4">
              成功の鍵：徹底した地域特化戦略
            </h3>

            <p className="text-white">
              この事例の最大の成功要因は、「地域特化型のコンテンツ戦略」でした。単に皮膚科の一般的な情報を提供するだけでなく、クリニック周辺の地域特性や患者層に合わせたコンテンツを徹底的に作り込んだことが奏功しました。
            </p>

            <p className="text-white">
              特に効果があったのは、「〇〇駅 ニキビ治療」「〇〇区 美容皮膚科」など、具体的な地名と症状・治療法を組み合わせたキーワードに特化したページの作成です。こうしたページは検索意図に正確に応えるため、コンバージョン率も高くなります。
            </p>

            <div className="overflow-hidden rounded-lg border border-slate-700/50 my-8">
              <div className="bg-slate-800 px-6 py-3">
                <h4 className="text-white font-semibold">地域特化コンテンツの効果</h4>
              </div>
              <div className="bg-slate-800/20 p-6">
                <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-700/30">
                  <div className="flex items-center mb-2">
                    <div className="bg-emerald-900/50 text-emerald-300 p-1 rounded mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-cyan-300 font-medium">Before</span>
                  </div>
                  <p className="text-white text-sm">一般的な「ニキビ治療について」のページ → 検索順位30位以下、ほぼ流入なし</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center mb-2">
                    <div className="bg-emerald-900/50 text-emerald-300 p-1 rounded mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-cyan-300 font-medium">After</span>
                  </div>
                  <p className="text-white text-sm">「〇〇駅から通えるニキビ治療クリニック」というタイトルで地域情報を盛り込んだページ → 検索順位5位、月間100PV以上獲得</p>
                </div>
              </div>
            </div>

            {/* セクション4 */}
            <h2 id="section-4" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              すぐに実践できる！クリニックSEO対策7つのポイント
            </h2>

            <p className="text-white">
              ここからは、クリニック・医療機関が今日から実践できるSEO対策のポイントを7つご紹介します。
              どれも専門的な知識がなくても取り組めるものばかりですので、ぜひチェックリストとしてご活用ください。
            </p>

            <div className="space-y-8 my-8">
              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">地域名を含むタイトルとメタディスクリプションの最適化</h3>
                    <p className="text-white">
                      各ページのタイトルタグに地域名（市区町村名や駅名）を含めることで、ローカル検索での表示順位が大幅に向上します。特にトップページと主要な診療科目ページは必ず地域名を入れましょう。
                    </p>
                    <div className="mt-3 bg-slate-900/50 p-4 rounded text-sm">
                      <p className="text-emerald-300 font-medium">最適化例：</p>
                      <p className="text-white">「渋谷駅徒歩3分の皮膚科・美容皮膚科 | 〇〇クリニック」</p>
                      <p className="text-white mt-2">「新宿区でニキビ治療なら〇〇クリニック | 最新の治療法で根本改善」</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">医師プロフィールページの充実</h3>
                    <p className="text-white">
                      Googleは医療サイトの評価において「専門家による情報提供」を重視します。院長や医師の詳細なプロフィールページを作成し、経歴、所属学会、専門分野、論文実績などを詳しく記載しましょう。できれば医師の顔写真も掲載すると信頼性がさらに高まります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">症状・治療法別の詳細コンテンツ作成</h3>
                    <p className="text-white">
                      代表的な症状や治療法ごとに独立したページを作成し、詳細な情報を提供しましょう。その際、単なる医学的説明だけでなく、「患者さんの悩み」「治療のメリット・デメリット」「治療後の経過」など、患者目線の情報を盛り込むことが重要です。
                    </p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 p-3 rounded text-sm">
                        <p className="text-emerald-300 font-medium">症状別ページ例（皮膚科）</p>
                        <ul className="text-white list-disc pl-4 mt-1 space-y-1">
                          <li>ニキビ・ニキビ跡</li>
                          <li>シミ・そばかす</li>
                          <li>湿疹・かぶれ</li>
                          <li>アトピー性皮膚炎</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 p-3 rounded text-sm">
                        <p className="text-emerald-300 font-medium">治療法別ページ例（歯科）</p>
                        <ul className="text-white list-disc pl-4 mt-1 space-y-1">
                          <li>インプラント治療</li>
                          <li>ホワイトニング</li>
                          <li>矯正歯科</li>
                          <li>歯周病治療</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">構造化データの実装</h3>
                    <p className="text-white">
                      構造化データ（Schema.org）を実装することで、Googleに情報を正確に伝えることができます。特に医療機関では「LocalBusiness」と「MedicalOrganization」のスキーマを組み合わせて使用するのが効果的です。
                    </p>
                    <div className="mt-3 bg-slate-900/50 p-4 rounded text-sm overflow-x-auto">
                      <p className="text-emerald-300 font-medium">実装すべき構造化データ：</p>
                      <ul className="text-white list-disc pl-4 mt-1 space-y-1">
                        <li>クリニック名、住所、電話番号</li>
                        <li>営業時間</li>
                        <li>診療科目</li>
                        <li>保険適用の有無</li>
                        <li>地図情報（座標）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">患者の声・症例実績の掲載</h3>
                    <p className="text-white">
                      患者の声や症例実績を掲載することで、サイトの信頼性と説得力が大幅に向上します。特に「Before/After」の写真や具体的な治療経過、患者さんの感想は非常に効果的です。もちろん、個人情報保護に十分配慮し、必ず患者さんの同意を得た上で掲載しましょう。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    6
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">モバイル対応の徹底</h3>
                    <p className="text-white">
                      医療情報の検索は、症状が気になったときにスマートフォンで即座に調べるケースが多いため、モバイル対応は必須です。特に予約ボタンの配置や電話番号のタップ対応、フォームの入力しやすさなど、スマホユーザーの利便性を徹底的に高めましょう。
                    </p>
                    <div className="mt-4 bg-slate-900/50 p-4 rounded text-sm">
                      <p className="text-emerald-300 font-medium">モバイル最適化のチェックポイント：</p>
                      <ul className="text-white list-disc pl-4 mt-1 space-y-1">
                        <li>表示速度の改善（特に画像の最適化）</li>
                        <li>タップしやすい大きなボタン設計</li>
                        <li>スマホでの予約動線の簡略化</li>
                        <li>地図表示の最適化</li>
                        <li>電話番号のタップ発信対応</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    7
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">FAQ（よくある質問）セクションの充実</h3>
                    <p className="text-white">
                      患者さんがよく疑問に思う点をFAQとしてまとめると、SEOと患者満足度の両方が向上します。FAQを作成する際は、実際にクリニックに寄せられる質問を基に作成すると、より検索意図に合致したコンテンツになります。
                    </p>
                    <div className="mt-3 bg-slate-900/50 p-4 rounded text-sm">
                      <p className="text-emerald-300 font-medium">FAQの効果的な構成：</p>
                      <p className="text-white mt-1">
                        • 診療に関する質問（「保険は適用されますか？」「痛みはありますか？」）<br />
                        • 費用に関する質問（「治療費の目安はいくらですか？」）<br />
                        • 治療後の経過に関する質問（「通院回数はどれくらいですか？」）<br />
                        • 初診の方向けの質問（「初診時に必要なものはありますか？」）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* セクション5 */}
            <h2 id="section-5" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              医療機関向けGoogleビジネスプロフィール最適化ガイド
            </h2>

            <p className="text-white">
              クリニックのSEO対策において、Googleビジネスプロフィール（旧Googleマイビジネス）の最適化は非常に重要です。特に「近くの〇〇科」といった検索では、Googleマップの上位表示が患者集客に直結します。
            </p>

            <div className="my-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                  Googleビジネスプロフィール最適化の5ステップ
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded-full flex items-center justify-center mr-4 flex-shrink-0 w-8 h-8">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-medium">基本情報の完全な登録</h4>
                      <p className="text-white text-sm mt-1">
                        クリニック名、住所、電話番号、診療時間、ウェブサイトURLなどの基本情報をすべて正確に入力しましょう。特に診療時間は祝日や年末年始の休診情報も含めて詳細に設定すると良いでしょう。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded-full flex items-center justify-center mr-4 flex-shrink-0 w-8 h-8">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-medium">診療科目の正確な設定</h4>
                      <p className="text-white text-sm mt-1">
                        ビジネスカテゴリは「皮膚科」「歯科医院」など、主たる診療科を第一カテゴリに設定し、副カテゴリとして「美容皮膚科」「矯正歯科」など専門分野を追加しましょう。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded-full flex items-center justify-center mr-4 flex-shrink-0 w-8 h-8">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-medium">写真の充実</h4>
                      <p className="text-white text-sm mt-1">
                        クリニックの外観、待合室、診察室、医療設備など、高品質な写真を最低10枚以上アップロードしましょう。特に外観写真は、患者さんが実際に訪問する際の目印になるため重要です。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded-full flex items-center justify-center mr-4 flex-shrink-0 w-8 h-8">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-medium">投稿の定期更新</h4>
                      <p className="text-white text-sm mt-1">
                        Googleビジネスプロフィールの「投稿」機能を活用し、診療内容の紹介や季節の健康情報、クリニックからのお知らせなどを定期的に投稿しましょう。2週間に1回程度の更新が理想的です。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded-full flex items-center justify-center mr-4 flex-shrink-0 w-8 h-8">
                      5
                    </div>
                    <div>
                      <h4 className="text-white font-medium">レビューへの返信</h4>
                      <p className="text-white text-sm mt-1">
                        患者さんからのレビューには必ず返信しましょう。特に気を付けたいのが否定的なレビューへの対応で、謝罪と改善策を示すことで、他の閲覧者に誠実な印象を与えることができます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 rounded-lg p-6 my-8 border border-cyan-800/30">
              <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                Googleビジネスプロフィールの新機能「予約機能」の活用
              </h3>
              <p className="text-white">
                Googleビジネスプロフィールに直接予約機能を連携できるようになりました。予約システムを導入しているクリニックは、この機能を活用することで、検索からスムーズに予約までつなげることができます。
              </p>
              <p className="text-white mt-3">
                特に、スマートフォンでの検索が主流の現在、「予約ボタン」がGoogleマップ上に表示されることで、クリニックのウェブサイトに移動せずに予約できる利便性は患者獲得に大きな効果を発揮します。
              </p>
            </div>

            {/* セクション6 */}
            <h2 id="section-6" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 border-b border-emerald-700/30 pb-2">
              クリニックSEOの失敗例と改善策
            </h2>

            <p className="text-white">
              最後に、医療機関のSEO対策でよくある失敗例と、その改善策をご紹介します。
              これらの失敗を避けることで、より効果的なSEO対策が可能になります。
            </p>

            <div className="space-y-8 my-8">
              <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/30">
                <div className="bg-gradient-to-r from-rose-900/50 to-rose-800/30 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">失敗例1：過剰なキーワード詰め込み</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-rose-900/50 text-rose-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-rose-300 font-medium">問題点</h4>
                      <p className="text-white text-sm mt-1">
                        「〇〇区 皮膚科 おすすめ 評判 人気 安い 駅近」のように、キーワードを不自然に詰め込んだタイトルやコンテンツは、Googleからスパム行為とみなされ、むしろペナルティを受ける可能性があります。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-emerald-300 font-medium">改善策</h4>
                      <p className="text-white text-sm mt-1">
                        自然な文脈でキーワードを使用し、患者さんが実際に知りたい情報を提供することに注力しましょう。
                        例：「渋谷駅徒歩5分の皮膚科 | 土日診療・女性医師在籍の〇〇クリニック」
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/30">
                <div className="bg-gradient-to-r from-rose-900/50 to-rose-800/30 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">失敗例2：医学的に不正確な情報の掲載</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-rose-900/50 text-rose-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-rose-300 font-medium">問題点</h4>
                      <p className="text-white text-sm mt-1">
                        医学的に不正確な情報や、エビデンスに基づかない過剰な効果謳い文句を掲載すると、Googleの品質評価で大幅に評価を下げられます。YMYLコンテンツとして厳しく審査されるため、特に注意が必要です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-emerald-300 font-medium">改善策</h4>
                      <p className="text-white text-sm mt-1">
                        必ず医師の監修のもとでコンテンツを作成し、学会のガイドラインや最新の医学研究に基づいた正確な情報を提供しましょう。また、「絶対」「100%」などの断定的な表現は避け、エビデンスレベルに応じた適切な表現を心がけましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/30">
                <div className="bg-gradient-to-r from-rose-900/50 to-rose-800/30 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">失敗例3：モバイル対応の不備</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-rose-900/50 text-rose-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-rose-300 font-medium">問題点</h4>
                      <p className="text-white text-sm mt-1">
                        スマートフォンでの表示が崩れる、ボタンが小さすぎてタップしにくい、フォームが入力しづらいなど、モバイルユーザビリティに問題があると、離脱率が高まりSEO評価も低下します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-900/50 text-emerald-300 p-2 rounded mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-emerald-300 font-medium">改善策</h4>
                      <p className="text-white text-sm mt-1">
                        レスポンシブデザインの採用、タップしやすい大きめのボタン設計、フォームの簡略化など、スマホユーザーを最優先した設計に改善しましょう。特に予約や問い合わせなどのコンバージョンポイントは、スマホでの操作性を徹底的に向上させることが重要です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAセクション */}
            <div className="mt-16 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-lg p-8 border border-emerald-800/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                クリニックの集客でお悩みですか？<br />医療機関専門のSEO対策をサポートします
              </h2>
              
              <p className="text-white mb-6">
                「ホームページはあるのに患者さんが増えない…」<br />
                「他のクリニックに比べて検索順位が低いままで悩んでいる…」<br />
                「地域での認知度を高めたい…」
              </p>
              
              <p className="text-white mb-8">
                Stellariumは、医療機関特化型のSEO対策で多くのクリニックの集客アップを支援してきました。YMYLサイト特有の課題を熟知したコンサルタントが、あなたのクリニックに最適なSEO戦略をご提案します。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services/medical-seo" 
                  className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
                >
                  医療機関SEOサービスの詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
                >
                  無料相談・お問い合わせ
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 