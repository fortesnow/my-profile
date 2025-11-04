import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { metadata } from "./metadata";

export { metadata };

export default function BlogPost() {
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
            LP制作を独学で成功させる完全ロードマップ｜初心者が陥りがちな失敗と対策
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>2025.03.04</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>LP制作</span>
            </div>
          </div>
          
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src="/blog/eye-catch/lp-self-study-roadmap.jpg"
              alt="LP制作を独学で成功させる完全ロードマップ"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 記事本文 */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300">
            LP（ランディングページ）制作は、Webマーケティングにおいて非常に重要な役割を果たします。しかし、専門的な知識がない初心者が独学でLP制作を始めると、思わぬ失敗に陥ることも少なくありません。本記事では、LP制作を独学で成功させるための具体的なロードマップを示し、初心者が陥りがちな失敗とその対策を詳しく解説します。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            LP制作を独学で学ぶメリットとデメリット
          </h2>

          <p>
            LP制作を独学で学ぶことには、コスト削減や自分のペースで学べるなどのメリットがありますが、一方で体系的な知識が不足しがちで、非効率な学習や誤った知識の習得というリスクも伴います。
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-green-400 mb-4">メリット</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 自分のペースで学習できる</li>
                <li>• コストを抑えられる</li>
                <li>• 幅広いスキルが身につく</li>
                <li>• 自分のペースで実践的に学べる</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-red-400 mb-4">デメリット</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 学習の方向性が定まりにくい</li>
                <li>• 誤った知識を身につけるリスク</li>
                <li>• フィードバックが得られにくい</li>
                <li>• モチベーション維持が難しい</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            LP制作を独学で成功させるためのロードマップ
          </h2>

          <p>
            LP制作を独学で成功させるためには、体系的な学習ロードマップを作成し、段階的にスキルを習得していくことが重要です。以下では、初心者が効率よくLP制作を学ぶための具体的なステップを紹介します。
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg my-10">
            <div className="px-6 py-4 bg-gradient-to-r from-cyan-800/40 to-blue-800/40 border-b border-cyan-700/30">
              <h4 className="text-lg font-semibold text-white">LP制作独学ロードマップ</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyan-900/50 w-10 h-10 rounded-full flex items-center justify-center text-cyan-400 mr-4">1</div>
                  <div>
                    <p className="font-medium text-gray-200">基礎知識の習得</p>
                    <p className="text-sm text-gray-400 mt-1">HTML/CSSの基本、LPの役割や構成要素を理解する</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4">2</div>
                  <div>
                    <p className="font-medium text-gray-200">デザインスキルの習得</p>
                    <p className="text-sm text-gray-400 mt-1">デザインツール（Figmaなど）の使い方、UI/UXの基本を学ぶ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-800/40">3</div>
                  <div>
                    <p className="font-medium text-gray-200">実践的なLP制作</p>
                    <p className="text-sm text-gray-400 mt-1">実際にLPを作成し、公開してフィードバックを得る</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-800/40">4</div>
                  <div>
                    <p className="font-medium text-gray-200">分析と改善</p>
                    <p className="text-sm text-gray-400 mt-1">アクセス解析ツールを使い、LPの効果を分析して改善を繰り返す</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            LP制作を独学で行う際に陥りがちな失敗とその対策
          </h2>

          <p>
            LP制作を独学で進める際、多くの初心者が共通して陥りがちな失敗があります。ここでは、特に注意すべき失敗例とその具体的な対策を過去の事例や
            今まで相談されてきたケースをもとに紹介します。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            1. ターゲット設定の曖昧さ
          </h3>

          <p>
            LP制作において最も重要なのは、ターゲットユーザーを明確に設定することです。ターゲットが曖昧なまま制作を進めると、訴求力が弱くなり、コンバージョン率が低下します。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              健康食品を販売するLPを運用していたクライアントは、ターゲットを「健康に興味がある人」と漠然と設定しました。その結果、具体的な悩みやニーズに響かない内容となり、広告運用をしても成果が出ず、広告費用対効果（ROAS）が著しく低下しました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・ターゲットユーザーの具体的なペルソナを設定する</li>
              <li>・ターゲットの悩みやニーズを深掘りし、明確な訴求ポイントを設定する</li>
              <li>・ターゲットに響く言葉や表現をリサーチし、LPに反映する</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            2. デザインの一貫性の欠如
          </h3>

          <p>
            LPのデザインは、ユーザーの第一印象を決定づける重要な要素です。デザインに一貫性がないと、ユーザーの信頼を失い、離脱率が高まります。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              美容サロンのLPが中々成果が出ない...と悩んでいたケースでは、複数のデザインテンプレートを組み合わせて使用しました。その結果、色使いやフォント、レイアウトに統一感がなく、訪問者が混乱してしまい、離脱率が高くなりました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・ブランドカラーやフォントを事前に決定し、一貫して使用する</li>
              <li>・デザインガイドラインを作成し、全ページで統一する</li>
              <li>・デザインツール（Figmaなど）で事前にワイヤーフレームを作成し、全体の統一感を確認する</li>
            </ul>
          </div>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-b border-purple-700/30">
                <h4 className="text-lg font-semibold text-white">LPデザイン統一のためのチェックリスト</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-300">
                  <li>✅ カラーパレットを決定し、全ページで統一しているか</li>
                  <li>✅ フォントの種類とサイズを統一しているか</li>
                  <li>✅ ボタンやCTAのデザインを統一しているか</li>
                  <li>✅ 画像やアイコンのスタイルを統一しているか</li>
                  <li>✅ レスポンシブデザインでスマホ表示を確認しているか</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            3. SEO対策の不足
          </h3>

          <p>
            LP制作においてSEO対策を怠ると、検索エンジンからの流入が見込めず、広告運用に依存した集客になってしまいます。SEOを意識したコンテンツ作成が重要です。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              健康食品やメディアコンテンツを精力的に運営していたクライアントは、LPは画像ベースでこーディングをほぼしておらず、
              SEOを意識せずにLPを作成しました。その結果、検索エンジンからの流入がほとんどなく、広告運用に依存した集客となり、広告費が膨らみました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・ターゲットキーワードを明確に設定し、自然にコンテンツに盛り込む</li>
              <li>・タイトルタグやメタディスクリプションを最適化する</li>
              <li>・ページの読み込み速度を最適化し、ユーザー体験を向上させる</li>
              <li>・内部リンクや外部リンクを適切に設置する</li>
            </ul>
          </div>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-b border-purple-700/30">
                <h4 className="text-lg font-semibold text-white">SEO対策の基本チェックリスト</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-300">
                  <li>✅ タイトルタグとメタディスクリプションにキーワードを含めているか</li>
                  <li>✅ 見出しタグ（H1〜H3）を適切に使用しているか</li>
                  <li>✅ 画像にalt属性を設定しているか</li>
                  <li>✅ ページ速度を最適化しているか</li>
                  <li>✅ モバイルフレンドリーなデザインになっているか</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            4. CTA（行動喚起）の弱さ
          </h3>

          <p>
            LPの目的は訪問者に特定の行動を促すことです。しかし、CTA（行動喚起）が弱いと、訪問者は次の行動を起こさずに離脱してしまいます。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              CTAボタンをページの最下部にのみ設置したケース。その結果、当たり前ですが訪問者がCTAに気づかず、コンバージョン率が低迷しました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・CTAボタンをファーストビューや中間地点など複数箇所に設置する</li>
              <li>・CTAボタンの色やサイズを目立つようにデザインする</li>
              <li>・CTAの文言を具体的で魅力的なものにする（例：「無料で試す」「今すぐ資料請求」）</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            5. コンテンツの情報過多
          </h3>

          <p>
            LPは訪問者に必要な情報を簡潔に伝えることが重要です。情報が多すぎると訪問者が混乱し、離脱率が高まります。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              積極的にLPや広告運用を採用取り入れていた相談相手は、サービスの特徴やメリットをすべて盛り込もうとしました。その結果、情報が多すぎて訪問者が混乱し、離脱率が高くなりました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・伝えたいメッセージを絞り込み、シンプルに伝える</li>
              <li>・重要な情報を視覚的に強調し、メリハリをつける</li>
              <li>・情報を整理し、箇条書きや表を活用して視認性を高める</li>
            </ul>
          </div>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-b border-purple-700/30">
                <h4 className="text-lg font-semibold text-white">LPに掲載すべき情報の優先順位</h4>
              </div>
              <div className="p-6">
                <table className="w-full text-left">
                  <thead className="text-sm text-gray-400 uppercase bg-gray-900/50">
                    <tr>
                      <th className="px-4 py-3">優先度</th>
                      <th className="px-4 py-3">情報の種類</th>
                      <th className="px-4 py-3">具体例</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 font-medium text-cyan-400">高</td>
                      <td className="px-4 py-3 text-gray-300">商品・サービスのメリット</td>
                      <td className="px-4 py-3 text-gray-400">具体的な効果、ベネフィット</td>
                    </tr>
                    <tr className="bg-gray-900/50">
                      <td className="px-4 py-3 font-medium text-cyan-400">中</td>
                      <td className="px-4 py-3 text-gray-300">お客様の声・実績</td>
                      <td className="px-4 py-3 text-gray-400">レビュー、導入事例</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 font-medium text-cyan-400">中</td>
                      <td className="px-4 py-3 text-gray-300">よくある質問</td>
                      <td className="px-4 py-3 text-gray-400">FAQ</td>
                    </tr>
                    <tr className="bg-gray-900/50">
                      <td className="px-4 py-3 font-medium text-cyan-400">低</td>
                      <td className="px-4 py-3 text-gray-300">会社概要・詳細情報</td>
                      <td className="px-4 py-3 text-gray-400">会社概要、沿革など</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            6. モバイル対応の不足
          </h3>

          <p>
            現在、LPへのアクセスの多くはスマートフォンからです。モバイル対応が不十分だと、ユーザー体験が悪化し、離脱率が高まります。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-red-400 mb-4">失敗事例</h4>
            <p className="text-gray-300 mb-4">
              コスメを主軸とした美容メーカーは動的な動きや要素ばかりに拘りを追求した
              LPを意識して制作していましたが結果としてスマホでの表示が崩れモバイルユーザーの離脱率が非常に高くなりました。
            </p>
            <h4 className="font-semibold text-green-400 mb-4">改善策</h4>
            <ul className="space-y-2 text-gray-300">
              <li>・レスポンシブデザインを採用し、スマホ表示を最適化する</li>
              <li>・スマホでの表示速度を改善するために画像を最適化する</li>
              <li>・スマホでの操作性を考慮し、ボタンやリンクをタップしやすくする</li>
            </ul>
          </div>

          {/* 追加セクション */}
          <h2 className="text-2xl font-bold mt-16 mb-6 text-cyan-300">
            LP制作は作ってからがスタートライン
          </h2>

          <p>
            LP制作において最も重要なのは、実は公開後の改善と質の向上です。多くの人が「LPを作って公開したら終わり」と考えがちですが、実際はそこからが本当のスタートラインです。効果的なLPを作るためには、継続的な改善と最適化が不可欠です。
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg my-10">
            <div className="px-6 py-4 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-b border-purple-700/30">
              <h4 className="text-lg font-semibold text-white">LP公開後の改善ポイント</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-900/50 w-10 h-10 rounded-full flex items-center justify-center text-purple-400 mr-4">1</div>
                  <div>
                    <p className="font-medium text-gray-200">アクセス解析の実施</p>
                    <p className="text-sm text-gray-400 mt-1">Google Analytics等を使い、ユーザーの行動を分析</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4">2</div>
                  <div>
                    <p className="font-medium text-gray-200">A/Bテストの実施</p>
                    <p className="text-sm text-gray-400 mt-1">異なるデザインや文言をテストし、効果を比較</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4 border border-purple-800/40">3</div>
                  <div>
                    <p className="font-medium text-gray-200">ユーザーフィードバックの収集</p>
                    <p className="text-sm text-gray-400 mt-1">アンケートやヒートマップでユーザーの声を収集</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4 border border-purple-800/40">4</div>
                  <div>
                    <p className="font-medium text-gray-200">継続的なコンテンツ更新</p>
                    <p className="text-sm text-gray-400 mt-1">最新情報や成功事例を随時追加</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            効果的なLPは一度で完成するものではありません。ユーザーの反応を分析し、データに基づいた改善を繰り返すことで、徐々に最適な形に近づけていくことが重要です。このプロセスを継続的に行うことで、LPのコンバージョン率を向上させ、ビジネスの成果を最大化することができます。
          </p>

          {/* 既存のまとめセクション */}
          <h2 className="text-2xl font-bold mt-16 mb-6 text-cyan-300">
            まとめ：LP制作を独学で成功させるために
          </h2>

          <p>
            LP制作を独学で成功させるためには、明確なターゲット設定、デザインの一貫性、SEO対策、強力なCTA、情報の整理、モバイル対応など、さまざまなポイントを押さえる必要があります。これらのポイントを意識し、段階的にスキルを習得していくことで、初心者でも効果的なLPを制作できるようになります。
          </p>

          <p className="mt-4">
            また、LP制作は一度作って終わりではありません。公開後もアクセス解析を行い、訪問者の行動を分析し、改善を繰り返すことで、より高い成果を得ることができます。
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg my-10">
            <div className="px-6 py-4 bg-gradient-to-r from-cyan-800/40 to-blue-800/40 border-b border-cyan-700/30">
              <h4 className="text-lg font-semibold text-white">LP制作を独学で成功させるためのポイントまとめ</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-300">
                <li>✅ 明確なターゲット設定とペルソナ作成</li>
                <li>✅ デザインの一貫性を保つ</li>
                <li>✅ SEO対策を意識したコンテンツ作成</li>
                <li>✅ 強力で明確なCTAを設置する</li>
                <li>✅ 情報を整理し、視認性を高める</li>
                <li>✅ モバイル対応を徹底する</li>
                <li>✅ 公開後の分析と改善を継続する</li>
              </ul>
            </div>
          </div>

          {/* CTA セクション */}
          <div className="bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-xl p-8 mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">LP制作でお困りですか？プロにお任せください！</h3>
              <p className="text-gray-200 mb-6">
                Stellariumでは、成果に直結する高品質なLP制作サービスを提供しています。デザインからSEO対策、広告運用まで一貫してサポートし、あなたのビジネスの成長を加速させます。
              </p>
              
              <div className="bg-gray-900/40 p-6 rounded-lg mb-8 text-left">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">StellariumのLP制作サービスの特徴</h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ターゲットに響くデザインとコンテンツ設計</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>SEOを意識したコンテンツ作成と最適化</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>モバイル最適化と高速表示の実現</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>公開後の分析と改善サポート</span>
                  </li>
                </ul>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300"
              >
                <span>LP制作サービスの詳細を見る</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-400">まずは無料相談から。お気軽にお問い合わせください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 