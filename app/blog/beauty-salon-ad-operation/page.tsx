import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { FaChartLine, FaBullseye, FaPaintBrush, FaMoneyBillWave, FaSearchDollar, FaLaptopCode, FaHandshake, FaExclamationTriangle, FaCheckCircle, FaExternalLinkAlt, FaInfoCircle, FaUsers } from 'react-icons/fa';
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BeautySalonAdOperationPage() {
  // 記事の基本情報
  const publishedDate = "2025-03-27";
  const category = "広告運用";
  const authorName = "Stellarium マーケティング";
  const authorIconPath = "/images/zunda-pic.png";
  const eyeCatchImagePath = "/blog/eye-catch/beauty-salon-ad-operation.jpg"; // 仮のアイキャッチ画像パス
  const eyeCatchAlt = "美容院の広告運用イメージ";
  const articleTitle = "【集客2倍】美容院の広告運用完全ガイド｜失敗しない7つの戦略と実践テクニック";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* --- ファーストビュー (chiropractic-seo-strategy のデザインに合わせる) --- */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        {/* 背景画像 */}
        <Image
          src={eyeCatchImagePath}
          alt={eyeCatchAlt}
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* コンテンツコンテナ */}
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
          {/* ブログ一覧に戻るリンク */}
          <Link
            href="/blog"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>ブログ一覧に戻る</span>
          </Link>

          {/* カテゴリタグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs font-medium rounded-full border border-purple-700/30">
              {category}
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              美容院・美容室
            </span>
            <span className="px-3 py-1 bg-slate-800/50 text-white text-xs font-medium rounded-full border border-slate-700/30">
              集客戦略
            </span>
          </div>

          {/* タイトル */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
            {articleTitle}
          </h1>

          {/* 著者情報と日付 */}
          <div className="flex items-center mt-6 text-white">
            <div className="flex items-center">
              <Image
                src={authorIconPath}
                alt="著者アイコン"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span>{authorName}</span>
            </div>
            <span className="mx-3">|</span>
            <span>{publishedDate.replace(/-/g, '.')}</span>
          </div>
        </div>
      </div>
      {/* --- ファーストビューここまで --- */}

      {/* --- 記事本文エリア --- */}
      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": articleTitle,
            "image": `https://stellarium.jp${eyeCatchImagePath}`,
            "author": {
              "@type": "Organization",
              "name": authorName,
              "url": "https://stellarium.jp"
            },
            "publisher": {
              "@type": "Organization",
              "name": authorName,
              "logo": {
                "@type": "ImageObject",
                "url": `https://stellarium.jp${authorIconPath}`
              }
            },
            "datePublished": publishedDate,
            "dateModified": publishedDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://stellarium.jp/blog/beauty-salon-ad-operation` // TODO: 公開時に正しいURLに修正
            },
            "description": '美容院の広告運用で失敗したくないオーナー必見！Meta広告・Google広告・ホットペッパー等を活用し、費用対効果を最大化する7つの戦略と実践テクニックをプロが徹底解説。'
          })
        }}
      />

      {/* コンテナと本文スタイル */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <article className="prose prose-lg prose-invert max-w-4xl mx-auto text-slate-300 prose-headings:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-yellow-300 prose-blockquote:border-l-cyan-500 prose-li:marker:text-cyan-400 prose-table:border-slate-700 prose-thead:border-b-slate-600 prose-tr:border-slate-700 mt-0">

          {/* 導入 */}
          <div className="mb-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg shadow-inner">
            <p className="text-lg leading-relaxed mb-4">
              「広告を出してるのに全然予約が増えない…」<br />
              「どの広告媒体を使えばいいのか分からない…」<br />
              「広告費ばかりかさんで利益が出ない…」
            </p>
            <p className="text-lg leading-relaxed mb-4">
              美容院のオーナーや店長のあなた 今こんな悩みを抱えていませんか？
              競争が激しい美容業界で新規顧客を獲得し続けるのは本当に大変ですよね。
              <strong className="text-yellow-400">でも諦めるのはまだ早い。正しい広告運用を知れば集客は確実に増やせます。</strong>
            </p>
            <p className="text-lg leading-relaxed">
              この記事では数々の美容院の集客を支援してきた僕たちが <strong className="text-yellow-400">美容院の広告運用で失敗しないための具体的な戦略と実践テクニック</strong>を徹底的に解説します。
              読み終わる頃にはあなたのサロンの広告運用に対するモヤモヤが晴れ 明確なアクションプランが見えているはずです。
              <strong className="text-yellow-400">集客を2倍にする</strong> そのための第一歩をここから踏み出しましょう。
            </p>
          </div>

          {/* 目次 */}
          <div className="my-10 p-6 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <h2 className="text-xl font-semibold mb-4 mt-0 text-cyan-400">目次</h2>
            <ol className="space-y-1 list-decimal list-inside">
              <li><a href="#why-ads" className="text-cyan-400 hover:text-cyan-300 no-underline">なぜ今、美容院に広告運用が必要なのか？</a></li>
              <li><a href="#media" className="text-cyan-400 hover:text-cyan-300 no-underline">美容院でよく使われる広告媒体とその特徴</a></li>
              <li><a href="#strategies" className="text-cyan-400 hover:text-cyan-300 no-underline">失敗しない！美容院の広告運用7つの戦略</a></li>
              <li><a href="#tips" className="text-cyan-400 hover:text-cyan-300 no-underline">【実践テクニック】費用対効果を高めるコツ</a></li>
              <li><a href="#cautions" className="text-cyan-400 hover:text-cyan-300 no-underline">広告運用を成功させるための注意点</a></li>
              <li><a href="#cta" className="text-cyan-400 hover:text-cyan-300 no-underline">もう広告運用で悩みたくないあなたへ</a></li>
            </ol>
          </div>

          {/* --- ここから本文 --- */}

          <section id="why-ads" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center"><FaChartLine className="mr-3 text-cyan-400" />なぜ今、美容院に広告運用が必要なのか？</h2>
            <p className="mb-8 text-lg leading-relaxed">
              「うちは技術力で勝負してるから広告なんて…」そう思っている方もいるかもしれません。
              しかし現代の美容業界において 広告運用はもはや<strong className="text-yellow-400">生き残りのための必須戦略</strong>と言っても過言ではありません。その理由を具体的に見ていきましょう。
            </p>

            <div className="space-y-8">
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-yellow-400" />1. 競争激化と新規顧客獲得の難しさ</h3>
                  <p className="text-slate-300 leading-relaxed">
                    ご存知の通り 美容院の数はコンビニよりも多いと言われるほど飽和状態です。
                    ただ待っているだけでは新規のお客様はなかなか来てくれません。
                    <strong className="text-yellow-400">自ら積極的に情報を届け 存在を知ってもらう必要</strong>があるのです。
                    広告は数ある美容院の中からあなたのサロンを選んでもらうための重要な手段となります。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaBullseye className="mr-2 text-yellow-400" />2. ターゲット層への効率的なアプローチ</h3>
                  <p className="text-slate-300 leading-relaxed">
                    現代の広告プラットフォームは非常に進化しており 年齢 性別 地域 興味関心などで<strong className="text-yellow-400">ターゲットを細かく絞り込んで広告を配信</strong>できます。
                    例えば「20代後半の女性で、〇〇駅周辺に住んでいて、ファッションに関心が高い人」といった具合です。
                    これにより 無駄な広告費を抑え 見込み客に効率的にアプローチすることが可能になります。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaSearchDollar className="mr-2 text-yellow-400" />3. 費用対効果の高い集客手段</h3>
                  <p className="text-slate-300 leading-relaxed">
                    チラシやフリーペーパーなどの従来の広告手法に比べ Web広告は<strong className="text-yellow-400">少額から始められ 効果測定がしやすい</strong>というメリットがあります。
                    クリック単価やコンバージョン単価をリアルタイムで把握し 改善を繰り返すことで 費用対効果を継続的に高めていくことが可能です。
                    「広告＝高い」というイメージはもう古いのです。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="media" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center"><FaLaptopCode className="mr-3 text-cyan-400" />美容院でよく使われる広告媒体とその特徴</h2>
            <p className="mb-8 text-lg leading-relaxed">
              美容院の広告運用でよく使われる主な媒体とその特徴をまとめました。
              それぞれのメリット・デメリットを理解し あなたのサロンに合った媒体を選ぶことが重要です。
            </p>

            {/* 広告媒体比較表 */}
            <div className="overflow-x-auto">
              <Table className="w-full border border-slate-700">
                <TableHeader>
                  <TableRow className="border-b border-slate-600 bg-slate-800/50">
                    <TableHead className="w-[150px]">広告媒体</TableHead>
                    <TableHead>主な特徴</TableHead>
                    <TableHead>メリット</TableHead>
                    <TableHead>デメリット</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableCell className="font-semibold align-top pt-4">Meta広告 (Instagram/Facebook)</TableCell>
                    <TableCell className="align-top pt-4">ビジュアル訴求が得意。詳細なターゲティングが可能。</TableCell>
                    <TableCell className="align-top pt-4">・視覚的に魅力を伝えやすい<br />・潜在顧客へのリーチ<br />・比較的低コスト</TableCell>
                    <TableCell className="align-top pt-4">・運用ノウハウが必要<br />・効果が出るまで時間</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableCell className="font-semibold align-top pt-4">Google広告 (リスティング/P-MAX)</TableCell>
                    <TableCell className="align-top pt-4">検索キーワードに連動。顕在顧客にアプローチ。</TableCell>
                    <TableCell className="align-top pt-4">・今すぐ客にリーチ<br />・地域ターゲティング<br />・効果測定しやすい</TableCell>
                    <TableCell className="align-top pt-4">・競合が多いと単価高<br />・設定がやや複雑</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableCell className="font-semibold align-top pt-4">ホットペッパービューティー広告</TableCell>
                    <TableCell className="align-top pt-4">美容系ポータルサイト。予約意欲の高いユーザーが多い。</TableCell>
                    <TableCell className="align-top pt-4">・予約に直結しやすい<br />・ブランド認知向上<br />・掲載プランが豊富</TableCell>
                    <TableCell className="align-top pt-4">・掲載料が比較的高め<br />・価格競争になりやすい</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableCell className="font-semibold align-top pt-4">LINE広告</TableCell>
                    <TableCell className="align-top pt-4">幅広い年齢層にリーチ。友だち追加でリピート促進。</TableCell>
                    <TableCell className="align-top pt-4">・国内ユーザー数No.1<br />・再来店促進に有効<br />・メッセージ配信可能</TableCell>
                    <TableCell className="align-top pt-4">・広告感が強いと敬遠<br />・クリエイティブ重要</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableCell className="font-semibold align-top pt-4">TikTok広告</TableCell>
                    <TableCell className="align-top pt-4">若年層中心。動画でトレンド感を演出。</TableCell>
                    <TableCell className="align-top pt-4">・10～20代に強い<br />・拡散力が高い<br />・新しい顧客層開拓</TableCell>
                    <TableCell className="align-top pt-4">・動画制作スキル必要<br />・ターゲット層が限定的</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              <FaInfoCircle className="inline mr-1" /> どの媒体が最適かは サロンのターゲット層や目標によって異なります。複数の媒体を組み合わせることも有効です。
            </p>
          </section>

          <section id="strategies" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center"><FaCheckCircle className="mr-3 text-cyan-400" />失敗しない！美容院の広告運用7つの戦略</h2>
            <p className="mb-8 text-lg leading-relaxed">
              広告媒体を選んだら 次はいよいよ具体的な運用戦略です。
              やみくもに広告を出すだけではお金をドブに捨てるようなもの。
              ここで紹介する7つの戦略を押さえ 確実に成果につなげましょう。
            </p>

            <div className="space-y-8">
              {/* 戦略カード */}
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">1.</span>明確な目標設定 (KGI/KPI)</h3>
                  <p className="text-slate-300 leading-relaxed">
                    まず「広告運用で何を達成したいのか」を具体的に決めます。
                    例えば「新規予約数を月20件増やす (KGI)」そのためには「広告経由のWebサイトアクセス数を月500件にする (KPI)」「予約率を4%にする (KPI)」といった具合です。
                    <strong className="text-yellow-400">目標が明確でなければ 施策の評価も改善もできません。</strong>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">2.</span>ペルソナ設定とターゲティング精度向上</h3>
                  <p className="text-slate-300 leading-relaxed">
                    「どんなお客様に来てほしいか」を具体的に描きましょう (ペルソナ設定)。
                    年齢、性別、職業、ライフスタイル、髪の悩み、価値観などを詳細に設定します。
                    <strong className="text-yellow-400">ペルソナが明確になれば 広告のターゲティング精度が格段に上がり</strong> 無駄打ちが減ります。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">3.</span>魅力的なクリエイティブ制作</h3>
                  <p className="text-slate-300 leading-relaxed">
                    広告の顔となる画像、動画、キャッチコピーは超重要です。
                    ターゲットの心に響く<strong className="text-yellow-400">「自分ごと」と感じさせるクリエイティブ</strong>を目指しましょう。
                    単に綺麗なスタイル写真だけでなく 施術のビフォーアフター、お客様の声、サロンの雰囲気、スタッフの人柄などが伝わるものが効果的です。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">4.</span>適切な予算配分と入札戦略</h3>
                  <p className="text-slate-300 leading-relaxed">
                    広告予算は目標達成に必要なコンバージョン数と想定されるコンバージョン単価から逆算して決めます。
                    最初から大きな予算を投じるのではなく <strong className="text-yellow-400">少額でテストを繰り返し 効果の高い広告に予算を集中</strong>させていくのが賢明です。
                    入札戦略も媒体の特性や目標に合わせて最適化が必要です。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">5.</span>効果測定と分析 (ツール活用)</h3>
                  <p className="text-slate-300 leading-relaxed">
                    広告は「出して終わり」ではありません。Google Analyticsなどのツールを使って<strong className="text-yellow-400">クリック率、コンバージョン率、費用対効果などを定期的に測定・分析</strong>し 改善を繰り返す (PDCAサイクル) ことが成功の鍵です。
                    どの広告が効果的で どこに問題があるのかをデータに基づいて判断しましょう。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">6.</span>LP（ランディングページ）の最適化</h3>
                  <p className="text-slate-300 leading-relaxed">
                    せっかく広告をクリックしてもらっても 遷移先のLPが魅力的でなければ予約にはつながりません。
                    広告のメッセージとLPの内容を一致させ <strong className="text-yellow-400">ユーザーが求める情報 (施術内容、料金、アクセス、予約方法など) を分かりやすく提示</strong>し スムーズに予約まで誘導する設計が必要です (LPO)。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><span className="text-cyan-400 mr-2 font-bold">7.</span>予約システムとの連携</h3>
                  <p className="text-slate-300 leading-relaxed">
                    広告からLPへ誘導し 最終的に予約してもらうためには<strong className="text-yellow-400">スムーズな予約体験</strong>が不可欠です。
                    オンライン予約システムを導入し LPから簡単に予約できる導線を確保しましょう。
                    電話予約のみだと 機会損失につながる可能性があります。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="tips" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center"><FaMoneyBillWave className="mr-3 text-cyan-400" />【実践テクニック】費用対効果を高めるコツ</h2>
            <p className="mb-8 text-lg leading-relaxed">
              基本的な戦略を押さえた上で さらに費用対効果を高めるための実践的なコツをいくつか紹介します。
              これらを活用すれば より少ない予算で大きな成果を出すことも可能です。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaPaintBrush className="mr-2 text-green-400" />A/Bテストの実施</h3>
                  <p className="text-slate-300 leading-relaxed">
                    広告のクリエイティブ (画像、コピー) やLPのデザインなどを<strong className="text-yellow-400">複数パターン用意し どちらがより効果的かをテスト</strong>します。
                    小さな改善の積み重ねが 大きな成果につながります。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaBullseye className="mr-2 text-green-400" />リターゲティング広告の活用</h3>
                  <p className="text-slate-300 leading-relaxed">
                    一度あなたのWebサイトを訪れたものの 予約に至らなかったユーザーに対して<strong className="text-yellow-400">再度広告を表示</strong>する手法です。
                    関心度の高いユーザーに再アプローチできるため 費用対効果が高い傾向にあります。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaUsers className="mr-2 text-green-400" />顧客リストを活用した類似オーディエンス配信</h3>
                  <p className="text-slate-300 leading-relaxed">
                    既存顧客のデータ (メールアドレスなど) を活用し <strong className="text-yellow-400">その顧客と似た特徴を持つユーザーに広告を配信</strong>します。
                    新規顧客の中でも 質の高い見込み客にアプローチできます。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><FaHandshake className="mr-2 text-green-400" />口コミ・レビューとの連携</h3>
                  <p className="text-slate-300 leading-relaxed">
                    良い口コミやレビューは<strong className="text-yellow-400">強力な信頼性の証</strong>です。
                    広告クリエイティブやLPに顧客の声を活用することで 説得力が増し 予約率向上につながります。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="cautions" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center"><FaExclamationTriangle className="mr-3 text-cyan-400" />広告運用を成功させるための注意点</h2>
            <p className="mb-8 text-lg leading-relaxed">
              最後に 広告運用を進める上で注意すべき点をいくつかお伝えします。
              これらを守らないと 成果が出ないどころか ペナルティを受ける可能性もあります。
            </p>

            <ul className="list-disc pl-6 my-4 space-y-4 text-white">
              <li>
                <strong className="text-yellow-400">広告規約の遵守:</strong> 各広告媒体には利用規約やガイドラインがあります。特に美容・健康分野は表現に厳しい制限がある場合が多いです (医療広告ガイドライン等も参照)。規約違反は広告停止のリスクがあります。
              </li>
              <li>
                <strong className="text-yellow-400">誇大広告・景品表示法への配慮:</strong> 「必ず治る」「No.1」といった根拠のない表現や 過度な割引表示は法律に抵触する可能性があります。誤解を招かない 正確で誠実な表現を心がけましょう。
              </li>
              <li>
                <strong className="text-yellow-400">効果測定の継続:</strong> 広告は一度設定したら終わりではありません。市場や競合の状況は常に変化します。定期的に効果を測定し 改善を続けることが長期的な成功につながります。
              </li>
              <li>
                <strong className="text-yellow-400">(外部委託する場合) 代理店選びは慎重に:</strong> もし広告運用を外部に委託する場合は 実績や専門性 料金体系などをしっかり比較検討しましょう。「丸投げ」ではなく 目的や戦略を共有し 協力して進める姿勢が重要です。
              </li>
            </ul>
          </section>

          {/* --- CTAセクション --- */}
          <section id="cta" className="mt-20 mb-12 text-center">
            <Card className="bg-gradient-to-br from-purple-900/70 via-indigo-900/70 to-blue-900/70 border border-indigo-700 shadow-xl shadow-indigo-500/20 overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                {/* 装飾要素 */}
                <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-400 animate-gradient-x">
                  もう広告運用で悩みたくない<br className="sm:hidden" />美容院オーナーのあなたへ
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  ここまで読んで「広告運用の重要性は分かったけど、やっぱり自分でやるのは難しそう…」
                  「もっと本業のサロンワークに集中したい！」と感じていませんか？<br />
                  <strong className="text-yellow-300">その気持ち、痛いほど分かります。</strong> 広告運用は専門知識と時間が必要な、まさにプロの領域なのです。
                </p>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                  私たちステラリウムは、美容院をはじめとする多くの店舗ビジネスの広告運用を成功に導いてきた<strong className="text-yellow-300">Webマーケティングの専門家集団</strong>です。
                  あなたのサロンの状況と目標を徹底的にヒアリングし、最適な広告戦略の立案から実行、改善まで<strong className="text-yellow-300">ワンストップでサポート</strong>します。<br />
                  <strong className="text-yellow-300">もう無駄な広告費を垂れ流すのはやめませんか？</strong> プロの力で、あなたのサロンの集客を加速させましょう！
                </p>

                {/* ボタン */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-auto"
                  >
                    <Link href="/services/ad-operation"> {/* 適切なサービスページへのリンク */}
                      広告運用サービスを見る
                      <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-300 font-bold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-auto"
                  >
                    <Link href="/contact">
                      無料で相談してみる
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-slate-400">ご相談は無料です。無理な営業は一切いたしませんので、安心してお問い合わせください。</p>
              </CardContent>
            </Card>
          </section>

        </article>
      </div>
      {/* --- 記事本文エリアここまで --- */}
    </div>
  );
} 