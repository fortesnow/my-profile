import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: '【2025年最新】古いホームページをリニューアルすべき5つの理由と成功事例',
  description: '10年選手の古いホームページが抱える問題点と、最新のUI/UXを取り入れたリニューアル方法を解説。デザイン、SEO、モバイル対応などの視点から、ビジネスに貢献するサイトへの変革事例を紹介します。',
  keywords: [
    '古いホームページ リニューアル',
    'Webサイト リニューアル 方法',
    'ホームページ 刷新 効果',
    'Webデザイン 最新トレンド',
    'ホームページ 改善 集客',
    'サイトリニューアル コンバージョン',
    'Web制作 リニューアル 費用',
    'レスポンシブデザイン 変更',
    'ビジネスサイト 更新 事例',
    'UI UX 改善 手法'
  ].join(', '),
  alternates: {
    canonical: 'https://stellarium.jp/blog/old-website-renewal-guide',
  },
  openGraph: {
    title: '【2025年最新】古いホームページをリニューアルすべき5つの理由と成功事例',
    description: '10年選手の古いホームページが抱える問題点と、最新のUI/UXを取り入れたリニューアル方法を解説。ビジネスに貢献するサイトへの変革事例を紹介。',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: '/blog/eye-catch/old-website-renewal-guide.png',
        width: 1200,
        height: 630,
        alt: '古いホームページのリニューアルガイド',
      },
    ],
    url: 'https://stellarium.jp/blog/old-website-renewal-guide',
    siteName: 'Stellarium マーケティング',
    publishedTime: '2025-03-13T00:00:00+09:00',
    modifiedTime: '2025-03-13T00:00:00+09:00',
    authors: ['Stellarium マーケティング'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【2025年最新】古いホームページをリニューアルすべき5つの理由と成功事例',
    description: '10年選手の古いホームページが抱える問題点と、最新のUI/UXを取り入れたリニューアル方法を解説。',
    images: ['/blog/eye-catch/old-website-renewal-guide.png'],
    creator: '@StellariumMkt',
    site: '@StellariumMkt',
  },
}

export default function BlogOldWebsiteRenewalGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* トップナビゲーションを完全に削除 */}
      
      {/* ブログ記事のヘッダー */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/blog/eye-catch/old-website-renewal-guide.png"
          alt="古いホームページのリニューアルガイド"
          fill
          className="object-cover opacity-75"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs font-medium rounded-full border border-indigo-700/30">
              Web制作
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              リニューアル
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              UI/UX
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
            【2025年最新】古いホームページをリニューアルすべき5つの理由と成功事例
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
            <span>2025.03.13</span>
          </div>
        </div>
      </div>
      
      {/* 記事本文 */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* イントロダクション - パート1 */}
            <p className="lead text-white">
              「うちのホームページ、もう何年も更新してないな…」
              「スマホで見ると崩れてしまうけど、どうしよう」
              「競合他社のサイトと比べると見劣りする気がする」
            </p>
            
            <p className="text-white">
              こんな悩みを抱えている方は少なくありません。特に10年以上前に作られたホームページは、現代のデジタルマーケティング環境に対応しきれていないケースがほとんどです。
            </p>
            
            <p className="text-white">
              Webの世界は日進月歩で進化しています。過去数年でユーザーの閲覧環境やGoogleの評価基準も大きく変化しました。このブログでは、古いホームページをリニューアルすべき具体的な理由と、成功するためのポイントを解説します。
            </p>
            
            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">古いホームページが抱える5つの問題点</h2>
            
            <p className="text-white">
              まずは、古いホームページが現在どのような問題を抱えているのかを見ていきましょう。
            </p>
            
            <div className="bg-slate-800/50 rounded-lg p-6 my-8 border border-slate-700/30">
              <h4 className="font-bold text-white mb-4">古いホームページの5つの問題点</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-800/30">
                  <h5 className="font-bold text-indigo-300 mb-3">モバイル対応の不足</h5>
                  <p className="text-white text-sm">スマートフォンやタブレットでの表示が崩れ、ユーザーの離脱率が高い。今や検索トラフィックの約70%はモバイルからのアクセス。</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-800/30">
                  <h5 className="font-bold text-indigo-300 mb-3">セキュリティの脆弱性</h5>
                  <p className="text-white text-sm">HTTPSに対応していない古いサイトはブラウザに警告表示がされるため、信頼性を損ねユーザー離れの原因に。</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-800/30">
                  <h5 className="font-bold text-indigo-300 mb-3">検索エンジン最適化の遅れ</h5>
                  <p className="text-white text-sm">現代のSEO要件を満たしておらず、検索順位が下がり続けている。コンテンツの鮮度や構造化データの欠如が原因。</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-800/30">
                  <h5 className="font-bold text-indigo-300 mb-3">古いデザイン・UI</h5>
                  <p className="text-white text-sm">時代遅れのデザインはブランドイメージを損ない、ユーザーに「古い会社」という印象を与える。最新のUI/UXとの乖離が大きい。</p>
                </div>
                <div className="bg-indigo-900/20 p-4 md:col-span-2 rounded-lg border border-indigo-800/30">
                  <h5 className="font-bold text-indigo-300 mb-3">低速な読み込み</h5>
                  <p className="text-white text-sm">最適化されていない古いコードや画像は読み込み速度を遅くし、ユーザー体験を悪化させる。特に低速回線のモバイル環境では致命的な問題に。</p>
                </div>
              </div>
            </div>
            
            {/* パート2: リニューアルによるメリット */}
            <p className="text-white">
              上記のような問題を解決するために、古いホームページをリニューアルすることで多くのメリットが得られます。特に企業のデジタルプレゼンスを強化し、ビジネス成果に直結する変化を生み出すことができます。
            </p>
            
            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">ホームページリニューアルで得られる5つのメリット</h2>
            
            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">1. ユーザー体験の向上によるコンバージョン率アップ</h3>
            
            <p className="text-white">
              最新のUI/UXデザインを導入することで、ユーザーの回遊率やサイト滞在時間が向上します。直感的なナビゲーションと明確なCTA（行動喚起）を設けることで、問い合わせや購入などのコンバージョンが増加します。
            </p>
            
            <div className="bg-cyan-900/30 border-l-4 border-cyan-400 p-5 my-6">
              <p className="m-0 text-lg font-medium text-white">データで見る効果</p>
              <p className="m-0 mt-2 text-white">あるBtoB企業では、直感的なUI/UXデザインへのリニューアル後、平均サイト滞在時間が1分23秒から3分45秒へと増加。同時に問い合わせ率が42%アップしました。</p>
            </div>

            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">2. モバイル対応による新規顧客層の開拓</h3>
            
            <p className="text-white">
              レスポンシブデザインの導入により、スマホやタブレットからのアクセスもストレスなく閲覧できるようになります。モバイルユーザーの離脱を防ぎ、検索エンジンからの流入も増やすことができます。
            </p>
            
            <div className="my-8">
              <div className="overflow-x-auto">
                <table className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="p-3 text-left text-indigo-300">デバイス</th>
                      <th className="p-3 text-left text-indigo-300">トラフィック比率</th>
                      <th className="p-3 text-left text-indigo-300">コンバージョン率(リニューアル前)</th>
                      <th className="p-3 text-left text-indigo-300">コンバージョン率(リニューアル後)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/30">
                      <td className="p-3 text-white">PC</td>
                      <td className="p-3 text-white">31%</td>
                      <td className="p-3 text-white">2.8%</td>
                      <td className="p-3 text-white">3.9%</td>
                    </tr>
                    <tr className="border-b border-slate-700/30">
                      <td className="p-3 text-white">スマートフォン</td>
                      <td className="p-3 text-white">65%</td>
                      <td className="p-3 text-white">0.9%</td>
                      <td className="p-3 text-white">2.7%</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white">タブレット</td>
                      <td className="p-3 text-white">4%</td>
                      <td className="p-3 text-white">1.2%</td>
                      <td className="p-3 text-white">2.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">※実際のWeb制作プロジェクトデータより</p>
            </div>
            
            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">3. 検索エンジン評価の向上による自然流入の増加</h3>
            
            <p className="text-white">
              最新のSEO要件に対応したサイト構造に刷新することで、Googleなどの検索エンジンからの評価が向上します。特に、ページ読み込み速度の改善やモバイルフレンドリーなデザインは、検索順位に大きく影響します。
            </p>
            
            <div className="bg-indigo-900/20 p-5 rounded-lg border border-indigo-800/30 my-6">
              <h5 className="font-bold text-indigo-300 mb-3">リニューアルで対応すべき現代のSEO要件</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-indigo-300 font-medium">01</span>
                    </div>
                    <span className="text-white font-medium">Core Web Vitals対応</span>
                  </div>
                  <p className="text-white text-sm mt-2">LCP、FID、CLS等のユーザー体験指標の最適化</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-indigo-300 font-medium">02</span>
                    </div>
                    <span className="text-white font-medium">モバイルファーストインデックス</span>
                  </div>
                  <p className="text-white text-sm mt-2">モバイル版を基準とした評価への対応</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-indigo-300 font-medium">03</span>
                    </div>
                    <span className="text-white font-medium">構造化データの実装</span>
                  </div>
                  <p className="text-white text-sm mt-2">Schema.orgに基づいた構造化マークアップの導入</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-indigo-300 font-medium">04</span>
                    </div>
                    <span className="text-white font-medium">E-E-A-T対応</span>
                  </div>
                  <p className="text-white text-sm mt-2">専門性・経験・権威性・信頼性を高めるコンテンツ設計</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">4. セキュリティ強化によるユーザー信頼性の向上</h3>
            
            <p className="text-white">
              HTTPS対応やプライバシー保護の強化は、現代のWebサイトでは必須要件です。特に個人情報を扱うフォームを設置している場合、セキュリティ対策はユーザーからの信頼獲得に直結します。
            </p>
            
            <p className="text-white">
              最新の暗号化技術と認証システムを導入することで、サイバー攻撃からサイトを守るだけでなく、顧客データの保護も確実になります。これは特にECサイトやユーザー登録が必要なサービスでは重要です。
            </p>
            
            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">5. コンテンツ管理システムの刷新による運用コスト削減</h3>
            
            <p className="text-white">
              現代のCMS（コンテンツ管理システム）は非常に使いやすく設計されており、専門知識がなくても直感的に更新できるようになっています。これにより、更新の外注コストを削減し、タイムリーな情報発信が可能になります。
            </p>
            
            <div className="bg-slate-800/50 rounded-lg p-6 my-8 border border-slate-700/30">
              <h4 className="font-bold text-white mb-4">リニューアル前後の運用コスト比較</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/30">
                  <h5 className="font-bold text-red-300 mb-3">リニューアル前</h5>
                  <ul className="space-y-2 text-white text-sm">
                    <li>• 基本的な更新に外部業者が必要</li>
                    <li>• 1回の更新で最低2万円のコスト</li>
                    <li>• 更新に3〜5営業日の時間が必要</li>
                    <li>• 時間外対応は割増料金</li>
                    <li>• レイアウト変更は大幅な追加費用</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30">
                  <h5 className="font-bold text-green-300 mb-3">リニューアル後</h5>
                  <ul className="space-y-2 text-white text-sm">
                    <li>• 社内スタッフでの更新が可能</li>
                    <li>• 定額の月額保守費用のみ</li>
                    <li>• リアルタイムで即時更新可能</li>
                    <li>• 特殊な更新以外は自社対応</li>
                    <li>• テンプレートによる簡易的なデザイン変更も可能</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* パート3: リニューアル成功事例 */}
            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">ホームページリニューアル成功事例3選</h2>
            
            <p className="text-white">
              実際のリニューアル事例から、どのような変化があったのかを具体的に見ていきましょう。ここでは、業種の異なる3つの企業の事例を紹介します。
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">事例1: 製造業（精密機器メーカー）</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアルのポイント</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>Flash使用サイトからHTML5ベースの最新技術へ移行</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>製品詳細ページに3D表示機能を追加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>多言語対応（日本語・英語・中国語）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>製品カタログPDFのダウンロード機能強化</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアル効果</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>SEO効果で検索流入が前年比185%に増加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>製品カタログダウンロード数が3倍に</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>サイト滞在時間が平均2.5倍に増加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>問い合わせフォームからの技術相談が30%増加</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/30 my-6">
              <h5 className="font-bold text-indigo-300 mb-3">主要改善指標</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">185%</p>
                  <p className="text-white text-sm">検索流入増加率</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">3.2倍</p>
                  <p className="text-white text-sm">モバイル滞在時間</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">42%</p>
                  <p className="text-white text-sm">直帰率低下</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">30%</p>
                  <p className="text-white text-sm">問い合わせ増加</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">事例2: サービス業（税理士事務所）</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアルのポイント</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>スタッフ紹介ページを充実させ、人間味のあるサイトに</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>税務Q&Aコンテンツの定期更新体制の構築</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>セミナー情報・予約機能の実装</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>顧問先専用の資料ダウンロードページの設置</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアル効果</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>問い合わせ件数が月平均3件から12件に増加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>セミナー申込のオンライン化で運営工数50%削減</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>地域キーワードでの検索順位が1ページ目に浮上</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>顧問先からの「使いやすくなった」という評価</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-900/20 p-5 rounded-lg border border-indigo-800/30 my-6">
              <h5 className="font-bold text-indigo-300 mb-3">SEO改善の詳細</h5>
              <div className="overflow-x-auto">
                <table className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="p-3 text-left text-indigo-300">キーワード</th>
                      <th className="p-3 text-center text-indigo-300">リニューアル前</th>
                      <th className="p-3 text-center text-indigo-300">リニューアル3ヶ月後</th>
                      <th className="p-3 text-center text-indigo-300">流入増加率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/30">
                      <td className="p-3 text-white">「地域名 税理士」</td>
                      <td className="p-3 text-white text-center">22位</td>
                      <td className="p-3 text-white text-center">3位</td>
                      <td className="p-3 text-green-400 text-center font-medium">+410%</td>
                    </tr>
                    <tr className="border-b border-slate-700/30">
                      <td className="p-3 text-white">「法人税 相談 地域名」</td>
                      <td className="p-3 text-white text-center">圏外</td>
                      <td className="p-3 text-white text-center">8位</td>
                      <td className="p-3 text-green-400 text-center font-medium">NEW</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white">「相続税 対策 地域名」</td>
                      <td className="p-3 text-white text-center">15位</td>
                      <td className="p-3 text-white text-center">5位</td>
                      <td className="p-3 text-green-400 text-center font-medium">+280%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-bold text-indigo-300 mt-8 mb-4">事例3: 小売業（アパレルショップ）</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアルのポイント</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>スマホ対応を最優先し、モバイルファーストで設計</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>Instagram連携による商品画像の自動表示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>実店舗の在庫状況をリアルタイム表示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▶</span>
                    <span>コーディネート提案ページの新設</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <h5 className="font-bold text-white mb-3">リニューアル効果</h5>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>モバイルユーザーのコンバージョン率が2.5倍に向上</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>サイト経由の来店予約が週平均35件増加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>ページ表示速度が2.8秒から0.9秒に改善</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>サイト経由の売上が前年比162%に増加</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-800/50 to-indigo-900/20 p-5 rounded-lg border border-slate-700/30 my-6">
              <h5 className="font-bold text-indigo-300 mb-3">モバイル最適化の成果</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <div className="bg-slate-900/50 p-4 rounded-t-lg">
                    <h6 className="text-white font-medium text-center mb-2">ページ読み込み速度</h6>
                    <div className="h-32 flex items-center justify-center">
                      <div className="relative w-full h-8">
                        <div className="absolute top-0 left-0 h-8 bg-red-800/50 rounded w-full"></div>
                        <div className="absolute top-0 left-0 h-8 bg-green-500/80 rounded" style={{ width: '32%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center">
                          <p className="text-white text-sm font-medium">68% 改善</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-b-lg">
                    <p className="text-white text-xs">2.8秒 → 0.9秒</p>
                    <p className="text-white text-xs mt-1">Core Web Vitals: Poor → Good</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-slate-900/50 p-4 rounded-t-lg">
                    <h6 className="text-white font-medium text-center mb-2">モバイルユーザー比率</h6>
                    <div className="h-32 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-slate-800/80 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-16 bg-cyan-500/60"></div>
                        <div className="absolute top-0 left-0 w-16 h-32 bg-cyan-500/60"></div>
                        <div className="absolute top-0 left-0 w-32 h-32 flex items-center justify-center">
                          <p className="text-white text-lg font-bold">72%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-b-lg">
                    <p className="text-white text-xs">リニューアル前: 58%</p>
                    <p className="text-white text-xs mt-1">リニューアル後: 72%</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-slate-900/50 p-4 rounded-t-lg">
                    <h6 className="text-white font-medium text-center mb-2">モバイルCVR</h6>
                    <div className="h-32 flex items-center justify-center">
                      <div className="relative w-full">
                        <div className="h-8 bg-indigo-900/50 rounded-lg w-24 mx-auto mb-3"></div>
                        <div className="h-16 bg-indigo-500/80 rounded-lg w-24 mx-auto"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <p className="text-white font-bold">+150%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-b-lg">
                    <p className="text-white text-xs">リニューアル前: 1.1%</p>
                    <p className="text-white text-xs mt-1">リニューアル後: 2.75%</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">ホームページリニューアルの進め方 5ステップ</h2>
            
            <p className="text-white">
              ホームページのリニューアルを成功させるためには、計画的に進めることが重要です。以下の5つのステップを順に実行していきましょう。
            </p>
            
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg overflow-hidden my-8 border border-indigo-800/30">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-6">リニューアルの5ステップ</h4>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300 border border-indigo-800/50 mx-auto">
                        STEP1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">現状分析と目標設定</h5>
                      <p className="text-white text-sm mb-3">
                        現在のサイトのアクセス解析データを確認し、問題点を洗い出します。同時に、リニューアルによって達成したい具体的な目標（問い合わせ数30%増加など）を設定します。
                      </p>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-white text-xs">
                          <span className="text-indigo-300 font-medium">ポイント：</span>
                          Google Analyticsのデータを最低6ヶ月分分析し、ユーザー行動のパターンを把握しておきましょう。特に直帰率が高いページや、逆にコンバージョンにつながりやすいページを特定することが重要です。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300 border border-indigo-800/50 mx-auto">
                        STEP2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">要件定義と設計</h5>
                      <p className="text-white text-sm mb-3">
                        新サイトに必要な機能やコンテンツを洗い出し、サイトマップやワイヤーフレームを作成します。この段階でターゲットユーザーのペルソナを設定し、ユーザージャーニーを考慮した設計を行います。
                      </p>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-white text-xs">
                          <span className="text-indigo-300 font-medium">ポイント：</span>
                          「あれもこれも」と欲張らず、優先順位をつけて最初は必要最低限の機能から始めることをおすすめします。サイトの拡張性を考慮した設計にしておけば、後から機能を追加することも可能です。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300 border border-indigo-800/50 mx-auto">
                        STEP3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">デザインと開発</h5>
                      <p className="text-white text-sm mb-3">
                        ワイヤーフレームをもとにデザインカンプを作成し、承認後にコーディングと実装を進めます。この段階でSEO対策やセキュリティ対策も組み込みます。
                      </p>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-white text-xs">
                          <span className="text-indigo-300 font-medium">ポイント：</span>
                          デザイン段階で複数のデバイス（PC、タブレット、スマホ）それぞれでの表示確認をしっかり行いましょう。また、カラーコントラストや文字サイズなど、アクセシビリティにも配慮することが重要です。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300 border border-indigo-800/50 mx-auto">
                        STEP4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">テストと公開</h5>
                      <p className="text-white text-sm mb-3">
                        開発したサイトの動作確認やユーザビリティテストを行い、問題がなければ公開します。公開時には301リダイレクトの設定や、Search Consoleへの登録など、SEOの引継ぎ対策も忘れずに。
                      </p>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-white text-xs">
                          <span className="text-indigo-300 font-medium">ポイント：</span>
                          テスト環境でさまざまなブラウザやデバイスでの動作確認を徹底し、特にフォームの動作やリンク切れがないか入念にチェックしましょう。また、公開前にGoogleのモバイルフレンドリーテストや PageSpeed Insightsでのパフォーマンスチェックも必須です。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300 border border-indigo-800/50 mx-auto">
                        STEP5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">効果測定と継続的な改善</h5>
                      <p className="text-white text-sm mb-3">
                        リニューアル後のアクセス解析を行い、設定した目標に対する成果を測定します。データをもとに継続的な改善を行うPDCAサイクルを回しましょう。
                      </p>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-white text-xs">
                          <span className="text-indigo-300 font-medium">ポイント：</span>
                          公開直後は特に注意深く動向を観察し、問題があれば即座に対応できる体制を整えておきましょう。また、定期的（最低でも月1回）のアクセス解析レポートを作成し、改善点を洗い出す習慣をつけることが長期的な成功につながります。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* パート4: リニューアル時の落とし穴と注意点 */}
            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">ホームページリニューアル時の3つの落とし穴と対策</h2>
            
            <p className="text-white">
              リニューアルを行う際に陥りがちな落とし穴とその対策についても知っておきましょう。以下の3点に特に注意が必要です。
            </p>

            <div className="my-8 space-y-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-white mb-2">落とし穴1: SEO資産の喪失</h3>
                <p className="text-white text-sm">
                  ページURLの変更や構造の大幅な変更により、それまで築いてきたSEO評価が失われ、検索順位が下落するリスクがあります。特に古いサイトで上位表示を獲得していた場合、この問題は深刻です。
                </p>
                <div className="bg-slate-900/50 p-3 mt-3 rounded">
                  <h4 className="font-medium text-red-300 mb-1">対策</h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• URLを変更する場合は必ず301リダイレクトを設定する</li>
                    <li>• 人気ページの内容は極力継承する</li>
                    <li>• 旧サイトのサイトマップを保存し、構造を参考にする</li>
                    <li>• Search ConsoleとGoogleアナリティクスの連携を確認</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-white mb-2">落とし穴2: ユーザーの混乱</h3>
                <p className="text-white text-sm">
                  デザインやナビゲーション構造を大幅に変更すると、既存ユーザーが使い方に戸惑い、結果としてコンバージョン率が一時的に低下する可能性があります。特に固定客の多いサイトでは注意が必要です。
                </p>
                <div className="bg-slate-900/50 p-3 mt-3 rounded">
                  <h4 className="font-medium text-red-300 mb-1">対策</h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• リニューアル前に既存ユーザーの使用パターンを分析</li>
                    <li>• メインの機能やコンテンツへのアクセス経路は維持</li>
                    <li>• リニューアル告知を事前に行い、変更点を説明</li>
                    <li>• サイト内にガイドやチュートリアルを設置</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-white mb-2">落とし穴3: コスト超過と納期遅延</h3>
                <p className="text-white text-sm">
                  当初の想定よりもコストが膨らんだり、予定よりも納期が遅れたりするケースは非常に多いです。特に要件が曖昧なまま開発を進めると、途中での変更や追加要望が発生し、予算や時間が超過します。
                </p>
                <div className="bg-slate-900/50 p-3 mt-3 rounded">
                  <h4 className="font-medium text-red-300 mb-1">対策</h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• 明確な要件定義書と仕様書を作成</li>
                    <li>• フェーズごとにマイルストーンを設定し進捗管理</li>
                    <li>• 必要最小限の機能からスタートし、段階的に拡張する計画を立てる</li>
                    <li>• 予算に10〜20%程度のバッファを持たせておく</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">まとめ：2025年に向けたホームページリニューアルの重要性</h2>
            
            <p className="text-white">
              この記事では、古いホームページをリニューアルすべき理由と、その効果的な進め方について解説してきました。
            </p>
            
            <p className="text-white">
              現代のデジタルマーケティング環境では、ただ「ホームページがある」というだけでは不十分です。ユーザー体験を最優先したデザイン、モバイル対応、高速な読み込み、強固なセキュリティ、そして最新のSEO対策を施したホームページが、ビジネスの成長に不可欠な要素となっています。
            </p>
            
            <p className="text-white">
              古いホームページのままでは、潜在顧客の目に留まらないだけでなく、仮に訪問されてもコンバージョンにつながりにくく、せっかくのビジネスチャンスを逃してしまいます。特に競合他社がすでに最新技術を取り入れたサイトにリニューアルしている場合、その差はさらに広がるばかりです。
            </p>
            
            <p className="text-white mb-10">
              リニューアルは単なるデザイン変更ではなく、ビジネス戦略そのものです。本記事で紹介した手順やポイントを参考に、貴社のビジネス目標達成に貢献するホームページへと生まれ変わらせてください。
            </p>
            
            <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/30 my-8">
              <p className="text-white text-sm italic">
                ※Webの技術やトレンドは日々進化しています。この記事の情報は2025年3月時点のものですので、最新の技術動向については専門家にご相談ください。
              </p>
            </div>
            
            {/* CTA セクション */}
            <div className="mt-16 mb-10 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl overflow-hidden border border-indigo-800/40">
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  古いホームページで機会損失していませんか？<br />
                  最新技術で集客力を10倍に高めるリニューアル相談
                </h2>
                
                <p className="text-white text-sm mb-6 max-w-3xl">
                  「リニューアルしたいけど何から始めればいいかわからない」
                  「予算内で最大の効果を得るにはどうすればいい？」
                  そんな悩みを抱えているなら、Stellariumの専門家にお任せください。
                  これまで100社以上のリニューアルを成功に導いた実績があります。
                  現状分析から最適な提案、そして成果を出すためのリニューアル設計まで、あなたのビジネスに合わせた戦略をご提案します。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-indigo-500 transition-all shadow-lg flex items-center justify-center"
                  >
                    Webサイト制作サービスを見る
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-transparent border-2 border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-900/30 transition-colors flex items-center justify-center"
                  >
                    無料相談してみる
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 