import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { metadata } from "./metadata";

// メタデータをエクスポート
export { metadata };

export default function BlogPost() {
  // デバッグ用のコンソールログ
  console.log("TikTok記事ページがロードされました");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-32">
        {/* 記事ナビゲーション */}
        <Link href="/blog" className="flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ブログ一覧に戻る
        </Link>

        {/* 記事ヘッダー */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            法人がTikTokをやるべき7つの理由|ビジネス成長を加速させる戦略的活用法
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>2025.03.05</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>SNS運用</span>
            </div>
          </div>
          
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src="/blog/eye-catch/tiktok-business-benefits.webp"
              alt="法人がTikTokをやるべき理由"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 記事本文 */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300">
            TikTokは若年層を中心に爆発的な人気を誇るショートムービープラットフォームです。個人利用のイメージが強いTikTokですが、実は法人企業にとっても見逃せないマーケティングチャネルとなっています。本記事では、法人企業がTikTokを活用すべき具体的な理由と、ビジネス成長を加速させる戦略的な活用法を徹底解説します。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            なぜ今、法人企業がTikTokに注目すべきなのか
          </h2>

          <p>
            TikTokは世界で10億人以上のユーザーを抱える巨大プラットフォームへと成長しました。日本国内でも若年層を中心に利用者が急増し、Z世代やミレニアル世代へのリーチに欠かせないメディアとなっています。
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg my-10">
            <div className="px-6 py-4 bg-gradient-to-r from-cyan-800/40 to-blue-800/40 border-b border-cyan-700/30">
              <h4 className="text-lg font-semibold text-white">TikTokの市場規模と成長率</h4>
            </div>
            <div className="p-6">
              <div className="relative h-60">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-1/4 h-20 bg-cyan-600/60 rounded-t-md mx-1 relative">
                    <div className="absolute bottom-full left-0 right-0 text-center text-sm text-cyan-300 mb-1">2021年</div>
                    <div className="absolute top-full left-0 right-0 text-center text-sm text-gray-400 mt-1">3.5億人</div>
                  </div>
                  <div className="w-1/4 h-32 bg-cyan-600/70 rounded-t-md mx-1 relative">
                    <div className="absolute bottom-full left-0 right-0 text-center text-sm text-cyan-300 mb-1">2022年</div>
                    <div className="absolute top-full left-0 right-0 text-center text-sm text-gray-400 mt-1">6.5億人</div>
                  </div>
                  <div className="w-1/4 h-44 bg-cyan-600/80 rounded-t-md mx-1 relative">
                    <div className="absolute bottom-full left-0 right-0 text-center text-sm text-cyan-300 mb-1">2023年</div>
                    <div className="absolute top-full left-0 right-0 text-center text-sm text-gray-400 mt-1">8.5億人</div>
                  </div>
                  <div className="w-1/4 h-56 bg-cyan-600/90 rounded-t-md mx-1 relative">
                    <div className="absolute bottom-full left-0 right-0 text-center text-sm text-cyan-300 mb-1">2024年</div>
                    <div className="absolute top-full left-0 right-0 text-center text-sm text-gray-400 mt-1">10億人+</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-400 mt-8">
                TikTokのグローバルユーザー数推移（出典: 各種マーケティングレポートを基に作成）
              </div>
            </div>
          </div>

          <p>
            企業向けSNSとしてInstagramやTwitter(X)が注目される中、TikTokはまだ参入障壁が低く、競合が少ない状態です。このタイミングでの参入は大きなアドバンテージとなります。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            法人企業がTikTokをやるべき7つの理由
          </h2>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            1. 爆発的なリーチ力と高いバイラル性
          </h3>

          <p>
            TikTokの最大の特徴は、フォロワー数に関わらず動画が拡散する可能性がある点です。独自のアルゴリズムにより、高品質なコンテンツであれば新規アカウントでも大きなリーチを獲得できます。これは他のSNSプラットフォームとは一線を画す特徴であり、法人企業にとって大きなメリットとなります。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-4">TikTokのリーチ力を示す数字</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• TikTokユーザーの平均セッション時間：10.85分（他のSNSより長い）</li>
              <li>• 日本国内の月間アクティブユーザー数：約2,000万人</li>
              <li>• ハッシュタグチャレンジへの平均参加率：4.5%（Instagram比で約2倍）</li>
              <li>• ブランド認知度向上効果：広告出稿比で約1.7倍</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            2. 若年層へのアプローチに最適
          </h3>

          <p>
            TikTokユーザーの約60%がZ世代（10代後半〜20代前半）で、ミレニアル世代も含めると全体の80%以上を占めています。若年層をターゲットにしたい企業にとって、TikTokは必須のプラットフォームとなりつつあります。
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-cyan-400 mb-4">TikTokを利用するメリット</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 若年層消費者との直接的なコミュニケーション</li>
                <li>• トレンドへの早期アクセスと活用</li>
                <li>• ブランドの若返りと新規顧客層の獲得</li>
                <li>• リアルな反応とフィードバックの収集</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-blue-400 mb-4">TikTokユーザーの年齢層分布</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-24 text-sm">10-19歳:</div>
                  <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full" style={{width: "32%"}}></div>
                  </div>
                  <div className="w-12 text-right text-sm">32%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm">20-29歳:</div>
                  <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full" style={{width: "29%"}}></div>
                  </div>
                  <div className="w-12 text-right text-sm">29%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm">30-39歳:</div>
                  <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full" style={{width: "21%"}}></div>
                  </div>
                  <div className="w-12 text-right text-sm">21%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm">40歳以上:</div>
                  <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full" style={{width: "18%"}}></div>
                  </div>
                  <div className="w-12 text-right text-sm">18%</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            3. 低コストで高いエンゲージメントを実現
          </h3>

          <p>
            TikTokの特徴的なアルゴリズムにより、広告費をかけずともオーガニックなリーチが得られやすいのが大きな魅力です。自社製品やサービスを紹介する15秒の短い動画でも、適切なハッシュタグとトレンドを押さえることで大きな反響を得られます。
          </p>

          <p>
            実際に、Instagram広告と比較した場合、同等のリーチを得るためのコストが約30%低いというデータもあります。スタートアップや中小企業など、マーケティング予算に制約のある企業にとって、コストパフォーマンスの高いプラットフォームと言えるでしょう。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            4. ブランド認知度の向上に効果的
          </h3>

          <p>
            TikTokは「発見」を重視したプラットフォーム設計になっています。ユーザーは自分がフォローしていないアカウントの動画も「おすすめ」として表示される「For You Page」で多くの時間を過ごします。この特性により、ブランドの認知拡大に非常に効果的です。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-4">成功事例:飲食業界での活用例</h4>
            <p className="text-gray-300 mb-4">
              あるラーメンチェーンがメニュー開発の裏側を15秒の動画で紹介したところ、2週間で500万再生を突破。店舗への来客数が前月比約20%増加し、特に投稿で紹介した新メニューの注文数が大幅に増加した。若年層の新規顧客獲得に成功している。
            </p>
            <div className="mt-4 text-sm text-gray-400">
              ※マーケティング効果測定調査（2023年）より
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            5. 親しみやすいブランドイメージの構築
          </h3>

          <p>
            TikTokの特徴である「カジュアルで親しみやすい」コンテンツは、堅苦しいイメージのある企業や業界にとって、ブランドイメージを柔らかくする絶好の機会となります。特にBtoB企業やサービス業など、直接消費者と接点が少ない業種こそ、TikTokを通じて親しみやすさを演出できるメリットがあります。
          </p>

          <p>
            実際に金融機関や保険会社などが、難しい金融知識をわかりやすく伝える「ファイナンシャルリテラシー向上」コンテンツでTikTokを活用し、若年層との接点を増やしています。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            6. 採用活動やエンプロイヤーブランディングに効果的
          </h3>

          <p>
            TikTokは商品やサービスの宣伝だけでなく、社内の雰囲気や企業文化を発信するのにも最適です。オフィス内の様子や社員の日常、社内イベントなどを発信することで、「この会社で働きたい」と思わせる採用ブランディングとしても機能します。
          </p>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-b border-purple-700/30">
                <h4 className="text-lg font-semibold text-white">TikTokを活用した採用活動の効果</h4>
              </div>
              <div className="p-6">
                <table className="w-full text-left">
                  <thead className="text-sm text-gray-400 uppercase bg-gray-900/50">
                    <tr>
                      <th className="px-4 py-3">効果指標</th>
                      <th className="px-4 py-3">TikTok活用前</th>
                      <th className="px-4 py-3">TikTok活用後</th>
                      <th className="px-4 py-3">増加率</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 text-gray-300">採用サイト訪問数</td>
                      <td className="px-4 py-3 text-gray-400">5,200/月</td>
                      <td className="px-4 py-3 text-cyan-400">12,800/月</td>
                      <td className="px-4 py-3 text-green-400">+146%</td>
                    </tr>
                    <tr className="bg-gray-900/50">
                      <td className="px-4 py-3 text-gray-300">応募数</td>
                      <td className="px-4 py-3 text-gray-400">320/月</td>
                      <td className="px-4 py-3 text-cyan-400">720/月</td>
                      <td className="px-4 py-3 text-green-400">+125%</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 text-gray-300">採用コスト</td>
                      <td className="px-4 py-3 text-gray-400">15万円/人</td>
                      <td className="px-4 py-3 text-cyan-400">8万円/人</td>
                      <td className="px-4 py-3 text-green-400">-47%</td>
                    </tr>
                    <tr className="bg-gray-900/50">
                      <td className="px-4 py-3 text-gray-300">Z世代の応募率</td>
                      <td className="px-4 py-3 text-gray-400">22%</td>
                      <td className="px-4 py-3 text-cyan-400">48%</td>
                      <td className="px-4 py-3 text-green-400">+118%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-400 mt-3 text-right">※IT企業複数社の平均値（2023年調査）</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            7. 競合との差別化要素になりうる
          </h3>

          <p>
            現状、TikTokを活用している企業はInstagramやTwitter(X)と比較するとまだ少数です。特に日本国内の中小企業やBtoB企業では参入障壁が高いと誤解されている面もあり、参入企業は限定的です。そのため、今TikTokに参入することで業界内での差別化要素となり得ます。
          </p>

          <p>
            特に保守的なイメージの強い業界（金融、不動産、製造業など）でTikTokを活用することで、「先進的な企業」というイメージ構築に役立ちます。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            法人企業がTikTokで成功するための戦略
          </h2>

          <p>
            TikTokの特性を理解し、効果的に活用するためには適切な戦略が必要です。以下では、法人企業がTikTokで成功するための具体的な戦略を紹介します。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            1. 企業らしさを捨て、エンターテインメント重視のコンテンツ制作
          </h3>

          <p>
            TikTokは「企業のプロモーション」を見るプラットフォームではなく、「楽しい動画」を見るプラットフォームです。企業色の強いプロモーション動画は避け、ユーザーを楽しませるコンテンツ制作に重点を置きましょう。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-4">エンターテインメント重視のコンテンツ例</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• オフィス内での面白い出来事</li>
              <li>• 製品開発の裏側（失敗エピソードも含む）</li>
              <li>• 社員の隠れた特技披露</li>
              <li>• トレンド曲に合わせた製品紹介</li>
              <li>• 業界の専門用語をわかりやすく解説</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            2. 投稿頻度と一貫性の維持
          </h3>

          <p>
            TikTokでは、アルゴリズムの特性上、定期的な投稿が重要です。理想的には週2〜3回の投稿頻度を維持することで、アカウントの認知度と信頼性を高めることができます。長期的な視点でコンテンツカレンダーを作成し、投稿の一貫性を保ちましょう。
          </p>
          
          <p>
            また、投稿のテイストや雰囲気に一貫性を持たせることで、フォロワーの期待感を高め、リピート視聴につなげることができます。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            3. トレンドの活用と独自性の両立
          </h3>

          <p>
            TikTokの大きな特徴は、流行のダンスや音楽、チャレンジなどのトレンドが次々と生まれることです。これらのトレンドに乗りつつも、自社の製品やサービス、企業文化を絡めた独自性のあるコンテンツを制作することが重要です。
          </p>
          
          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-4">トレンドを活用した成功事例</h4>
            <p className="text-gray-300 mb-4">
              あるオフィス家具メーカーは「オフィスチェア選びあるある」を当時流行していた「Things that just make sense」フォーマットで紹介し、通常の広告投稿の10倍以上のエンゲージメントを獲得。結果的に公式サイトへのアクセスが3倍に増加し、問い合わせ数も大幅に増加した。
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            4. 社内リソースの効果的な活用
          </h3>

          <p>
            専門のクリエイターを雇わなくても、社内の若手社員を中心にTikTok運用チームを結成することで、コストを抑えながら効果的な運用が可能です。特にZ世代の社員は日常的にTikTokを利用しているケースが多く、トレンドの理解やコンテンツ制作のセンスを持っていることが多いです。
          </p>
          
          <p>
            経営層や広報担当者だけでなく、様々な部署のスタッフを巻き込むことで、多角的な視点からのコンテンツ制作が可能になります。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            法人TikTok活用の注意点と課題
          </h2>

          <p>
            TikTokの活用にはメリットが多い一方で、いくつかの注意点や課題も存在します。これらを理解し、適切に対応することが成功への鍵となります。
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-red-400 mb-4">主な課題</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 企業としての品位とエンターテインメント性の両立</li>
                <li>• 投稿頻度の維持とリソース確保</li>
                <li>• ROI（投資対効果）の測定の難しさ</li>
                <li>• 経営層の理解と承認の獲得</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-green-400 mb-4">解決策</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 明確なガイドラインとレビュープロセスの確立</li>
                <li>• 社内横断的なコンテンツ制作チームの結成</li>
                <li>• 具体的なKPIの設定と定期的な効果測定</li>
                <li>• 成功事例の共有とパイロットプロジェクトの実施</li>
              </ul>
            </div>
          </div>

          <p>
            特に保守的な業界や大企業では、「TikTokのようなカジュアルなプラットフォームは企業イメージに合わない」という懸念から導入に二の足を踏むケースも少なくありません。しかし、適切なガイドラインとコンテンツ戦略を構築することで、企業の品位を保ちながらも効果的な活用が可能です。
          </p>

          <h2 className="text-2xl font-bold mt-16 mb-6 text-cyan-300">
            まとめ：TikTok活用は法人企業の新たな成長エンジンになる
          </h2>

          <p>
            TikTokは単なるエンターテインメントプラットフォームではなく、法人企業にとって若年層へのリーチ、ブランド認知度の向上、採用活動の強化など多くのビジネスメリットをもたらすマーケティングチャネルです。特に参入障壁が低い現在は、競合との差別化を図る絶好の機会と言えるでしょう。
          </p>

          <p className="mt-4">
            重要なのは、TikTokの特性を理解し、「企業らしさ」よりも「エンターテインメント性」を重視したコンテンツ戦略を構築することです。また、単発的な取り組みではなく、継続的な投稿と効果測定を通じて、長期的な成果を目指すことが重要です。
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg my-10">
            <div className="px-6 py-4 bg-gradient-to-r from-cyan-800/40 to-blue-800/40 border-b border-cyan-700/30">
              <h4 className="text-lg font-semibold text-white">TikTok活用のポイントまとめ</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-300">
                <li>✅ エンターテインメント性を重視したコンテンツ制作</li>
                <li>✅ 週2〜3回の一貫した投稿頻度の維持</li>
                <li>✅ トレンドの活用と自社の独自性の両立</li>
                <li>✅ 社内の若手人材を中心としたチーム編成</li>
                <li>✅ 明確なKPIの設定と定期的な効果測定</li>
                <li>✅ 長期的な視点でのコンテンツ戦略立案</li>
                <li>✅ 企業イメージと調和したガイドラインの設定</li>
              </ul>
            </div>
          </div>

          {/* CTA セクション */}
          <div className="bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-xl p-8 mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">TikTokマーケティングでお困りですか？プロにご相談ください</h3>
              <p className="text-gray-200 mb-6">
                Stellariumでは、法人企業向けのTikTokマーケティング支援サービスを提供しています。戦略立案からアカウント運用、コンテンツ制作まで一貫してサポートし、御社のビジネス成長を加速させます。
              </p>
              
              <div className="bg-gray-900/40 p-6 rounded-lg mb-8 text-left">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">Stellariumが選ばれる理由</h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>TikTok専門チームによる戦略的アプローチ</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>業界・企業文化に合わせたオーダーメイドのコンテンツ制作</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>トレンド分析と効果測定による継続的な改善</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>多様な業界での支援実績とノウハウの蓄積</span>
                  </li>
                </ul>
              </div>
              
              <Link
                href="/services/sns-service"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300"
              >
                <span>無料相談のお申し込み</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-400">初回相談は完全無料。御社のTikTok活用戦略をプロがアドバイスします。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 