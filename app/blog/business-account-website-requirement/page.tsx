import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { BiTime } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';

export const metadata: Metadata = {
  title: '法人口座の開設や融資申請でホームページは必要？実務家が解説する真実',
  description: '法人口座の開設や事業融資の申請時にホームページは必要なのか、実務家の視点から徹底解説。審査に与える影響や、ホームページがない場合の対応策、効果的なホームページの作り方まで網羅。',
  openGraph: {
    title: '法人口座の開設や融資申請でホームページは必要？実務家が解説する真実',
    description: '法人口座の開設や事業融資の申請時にホームページは必要なのか、実務家の視点から徹底解説。審査に与える影響や、ホームページがない場合の対応策、効果的なホームページの作り方まで網羅。',
    images: ['/blog/eye-catch/business-account-website-requirement.png'],
    url: 'https://www.stellarium.jp/blog/business-account-website-requirement',
    type: 'article',
  },
};

export default function BusinessAccountWebsiteRequirement() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
      <div className="space-y-8">
        {/* ヒーローセクション */}
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/blog/eye-catch/business-account-website-requirement.png"
            alt="法人口座と融資申請におけるホームページの必要性"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              法人口座の開設や融資申請でホームページは必要？実務家が解説する真実
            </h1>
            <div className="flex items-center text-white text-sm space-x-4">
              <span className="flex items-center">
                <MdDateRange className="mr-1" />
                2025.03.15
              </span>
              <span className="flex items-center">
                <BiTime className="mr-1" />
                読了時間: 約10分
              </span>
            </div>
          </div>
        </div>

        {/* 導入部 */}
        <div className="prose prose-lg max-w-none">
          <p>
            法人口座の開設や融資申請のタイミングで「ホームページは必須ですか？」という質問をよく受けます。結論からいうと、<strong>法的には必須ではありませんが、審査において大きなアドバンテージになる</strong>ことは間違いありません。
          </p>
          
          <p>
            特に近年、銀行や金融機関はインターネット上の情報を活用した独自の審査フローを構築しています。法人格の信頼性や事業の実態を確認する手段として、ホームページの確認は標準的な手順になりつつあるのです。
          </p>

          <p>
            この記事では、実際の審査担当者の視点も交えながら、法人口座開設と融資申請それぞれのケースでのホームページの必要性と、もしホームページがない場合の対処法、そして審査を通過しやすいホームページの作り方まで解説します。
          </p>
        </div>

        {/* 目次 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">目次</h2>
          <ul className="space-y-2">
            <li>
              <a href="#bank-account" className="text-blue-600 hover:underline">
                1. 法人口座開設時にホームページは必要？審査の実態
              </a>
            </li>
            <li>
              <a href="#financing" className="text-blue-600 hover:underline">
                2. 事業融資申請でホームページが審査に与える影響
              </a>
            </li>
            <li>
              <a href="#no-website" className="text-blue-600 hover:underline">
                3. ホームページがない場合の対応策
              </a>
            </li>
            <li>
              <a href="#effective-website" className="text-blue-600 hover:underline">
                4. 審査を通過しやすいホームページの要素
              </a>
            </li>
            <li>
              <a href="#case-studies" className="text-blue-600 hover:underline">
                5. 実例から見る成功パターンと失敗パターン
              </a>
            </li>
            <li>
              <a href="#conclusion" className="text-blue-600 hover:underline">
                6. まとめ：ホームページは「義務」ではなく「強力な武器」
              </a>
            </li>
          </ul>
        </div>

        {/* セクション1: 法人口座開設時にホームページは必要？審査の実態 */}
        <div id="bank-account" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. 法人口座開設時にホームページは必要？審査の実態</h2>
          
          <p>
            まず結論から言えば、法人口座の開設において<strong>ホームページは法的要件ではありません</strong>。銀行法や金融機関の規定上、法人口座開設の必須条件としてホームページの存在は明記されていません。
          </p>

          <p>
            しかし実態として、特に2018年以降、マネーロンダリング対策の強化により、銀行の審査は格段に厳しくなりました。この流れの中で、多くの銀行は「事業実態の確認」をより重視するようになり、その確認手段の一つとしてホームページの有無やその内容をチェックする傾向が強まっています。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">銀行によって異なる審査基準</h3>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 my-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">銀行タイプ</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ホームページの重要度</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">審査の特徴</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">メガバンク</td>
                  <td className="px-4 py-3 whitespace-nowrap">高い</td>
                  <td className="px-4 py-3">ウェブ上の情報を含む総合的な審査、特に反社会的勢力との関連性チェックが厳格</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">地方銀行</td>
                  <td className="px-4 py-3 whitespace-nowrap">中程度</td>
                  <td className="px-4 py-3">地域密着型で対面での信頼関係も重視、ホームページは補助的役割</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">ネット銀行</td>
                  <td className="px-4 py-3 whitespace-nowrap">非常に高い</td>
                  <td className="px-4 py-3">オンライン上の情報が主な判断材料、ホームページの有無が審査の大きな分岐点になることも</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">信用金庫</td>
                  <td className="px-4 py-3 whitespace-nowrap">低～中程度</td>
                  <td className="px-4 py-3">人的つながりや地域での評判が重視される傾向、ホームページよりも実績や人脈が効く</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            私が経験した事例では、メガバンクでの法人口座開設時に担当者から「御社のホームページを拝見しましたが、事業内容が明確でしたので審査もスムーズに進みそうです」と言われたことがあります。逆に、ネット銀行では「ホームページが確認できない場合は、追加で事業計画書や取引実績の提出をお願いしています」と最初から言われるケースもありました。
          </p>

          <p>
            つまり、ホームページは法人口座開設の<strong>絶対条件ではありませんが、あることで審査がスムーズになる重要な要素</strong>と言えるでしょう。特にネット銀行や設立間もない法人の場合は、ホームページの存在が与えるメリットは大きいです。
          </p>
        </div>

        {/* セクション2: 事業融資申請でホームページが審査に与える影響 */}
        <div id="financing" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">2. 事業融資申請でホームページが審査に与える影響</h2>
          
          <p>
            融資審査においては、ホームページの有無や内容が与える影響はさらに大きくなります。融資の審査では「返済能力」と「事業の継続性・将来性」が重点的に評価されますが、ホームページはこれらを判断する材料の一つとして機能します。
          </p>

          <div className="bg-blue-50 p-5 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">融資審査におけるホームページの評価ポイント</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>事業の透明性</strong>：事業内容、サービス、料金体系などが明確に記載されているか</li>
              <li><strong>市場性の確認</strong>：ターゲット市場や競合との差別化ポイントが明示されているか</li>
              <li><strong>社会的信頼性</strong>：会社概要、代表者情報、所在地など基本情報の開示</li>
              <li><strong>事業実績</strong>：導入事例や顧客の声、メディア掲載などの実績表示</li>
              <li><strong>将来への投資姿勢</strong>：ホームページへの投資自体が事業への姿勢を表す</li>
            </ul>
          </div>

          <p>
            融資担当者は限られた時間の中で多くの申請を審査しなければなりません。そのため、ホームページを見れば事業の概要を素早く把握できることは、審査側にとって大きなメリットなのです。特に日本政策金融公庫などの公的融資では、事業計画の実現可能性を判断する上で、ウェブ上での情報発信は重要な判断材料となります。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">融資の種類別ホームページの重要度</h3>
          
          <p>
            融資の種類によっても、ホームページの重要性は変わってきます。一般的に、以下のような傾向があります：
          </p>

          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">運転資金の場合</h4>
              <p className="text-sm">既に事業実績がある場合は、財務諸表や取引実績が重視され、ホームページの影響力は相対的に小さめ。</p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">設備投資資金の場合</h4>
              <p className="text-sm">将来の成長性を評価する要素として、事業モデルの説明が詳しいホームページは高評価につながりやすい。</p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">創業融資の場合</h4>
              <p className="text-sm">実績がない分、事業計画の信頼性が重要。ホームページでの事業説明が審査通過の鍵を握ることも。</p>
            </div>
          </div>

          <p>
            私自身、創業期に日本政策金融公庫から融資を受ける際、担当者から「ホームページを見せていただいたおかげで事業内容がよく理解できました」と言われ、スムーズに審査が進んだ経験があります。逆に、ホームページを持たずに融資申請をした知人は、事業内容の説明に何度も時間を取られ、審査期間が長引いたと聞いています。
          </p>
        </div>

        {/* セクション3: ホームページがない場合の対応策 */}
        <div id="no-website" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">3. ホームページがない場合の対応策</h2>
          
          <p>
            ホームページがあることのメリットは大きいですが、様々な事情でホームページを持っていない、あるいは急に用意できない場合もあるでしょう。そんな時の対応策をご紹介します。
          </p>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border-l-4 border-green-500 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">法人口座開設の場合の代替策</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>詳細な事業計画書の提出</li>
                <li>既存取引先からの推薦状や取引履歴の提示</li>
                <li>固定電話や事務所の賃貸契約書などの実態証明</li>
                <li>税務署への開業届や法人登記簿謄本などの公的書類</li>
                <li>業界団体への加入証明</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">融資申請の場合の代替策</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>詳細な資金計画と返済計画の提出</li>
                <li>将来の事業展開を視覚的に示す資料</li>
                <li>パンフレットや印刷物での事業紹介</li>
                <li>顧客からの推薦状や契約書</li>
                <li>業界内での評判や実績を示す第三者評価</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">簡易的なウェブプレゼンスを作る方法</h3>

          <p>
            ホームページの本格的な制作は時間がかかりますが、審査までに最低限のウェブプレゼンスを作ることは可能です。以下の方法を検討してみてください：
          </p>

          <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">ビジネスプロフィールの活用</h4>
              <p className="text-sm">Google マイビジネスやYahoo!プレイスなどの無料ビジネスプロフィールを作成・充実させる。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">SNSの活用</h4>
              <p className="text-sm">FacebookページやInstagramビジネスアカウントを作成し、事業内容や実績を投稿する。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">簡易LP作成サービス</h4>
              <p className="text-sm">Wixなどの無料ウェブサイトビルダーで1ページだけの簡易サイトを短時間で作成する。</p>
            </div>
          </div>

          <p>
            私のクライアントで、融資審査直前にホームページの必要性を感じた経営者がいました。彼は1週間という短期間でWixを使って基本情報だけの1ページサイトを作成し、それを見た融資担当者からは「急いで作られたことは分かりますが、事業に対する真剣さが伝わってきました」と好印象を得ました。最低限の情報を揃えるだけでも、何もないよりは断然良いのです。
          </p>
        </div>

        {/* セクション4: 審査を通過しやすいホームページの要素 */}
        <div id="effective-website" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">4. 審査を通過しやすいホームページの要素</h2>
          
          <p>
            せっかくホームページを作るなら、審査でプラスに評価される要素を押さえておきたいものです。以下に、法人口座開設と融資審査の両方で高評価を得やすいホームページの要素をまとめました。
          </p>

          <div className="relative overflow-hidden my-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">審査通過に効果的なホームページの5つの要素</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <div>
                    <h4 className="font-semibold">明確な会社情報</h4>
                    <p className="text-sm mt-1">法人名、所在地、代表者名、設立年、資本金、事業内容など基本情報を詳細かつ正確に記載。特に住所は登記上の住所と一致させる。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <div>
                    <h4 className="font-semibold">具体的な事業内容の説明</h4>
                    <p className="text-sm mt-1">サービス内容、商品、料金体系、提供プロセスなどを具体的に説明。抽象的な表現だけでなく、実際のビジネスモデルが伝わる内容に。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <div>
                    <h4 className="font-semibold">信頼性を示す要素</h4>
                    <p className="text-sm mt-1">許認可情報、加盟団体、受賞歴、メディア掲載実績、顧客の声など、第三者からの評価や公的な裏付けとなる情報。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <div>
                    <h4 className="font-semibold">明確な問い合わせ手段</h4>
                    <p className="text-sm mt-1">電話番号（固定電話が望ましい）、メールアドレス、問い合わせフォームなど、複数の連絡手段を提示。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <div>
                    <h4 className="font-semibold">プロフェッショナルなデザインと使いやすさ</h4>
                    <p className="text-sm mt-1">見た目の洗練さより情報の分かりやすさと整理が重要。専門性や誠実さが伝わるデザインを心がける。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">避けるべき要素</h3>
          
          <p>
            逆に、審査担当者に悪印象を与えかねない要素もあります。以下は避けるべきポイントです：
          </p>

          <div className="my-6 bg-red-50 p-5 rounded-lg border border-red-100">
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>曖昧な事業内容</strong>：「様々なサービスを提供」などの具体性のない説明</li>
              <li><strong>過度な誇大表現</strong>：「業界No.1」「驚異の実績」など根拠のない自己主張</li>
              <li><strong>情報の不一致</strong>：登記情報と異なる住所や会社名の表記</li>
              <li><strong>連絡先情報の不足</strong>：携帯電話番号のみの記載や問い合わせ手段の制限</li>
              <li><strong>不自然なSEO対策</strong>：キーワードの不自然な羅列や隠しテキスト</li>
              <li><strong>放置されたサイト</strong>：更新日時が古い、リンク切れが多いなど管理不足の印象</li>
            </ul>
          </div>

          <p>
            私が過去に関わった事例では、融資が通らなかった企業のホームページを分析したところ、上記の「避けるべき要素」のうち3つ以上に該当していました。特に問題だったのは、会社概要ページに記載された住所と登記簿上の住所が異なっていたことです。これは単なるミスだったのですが、審査担当者からは「基本情報の正確性に疑問が生じた」と指摘されていました。
          </p>
        </div>

        {/* セクション5: 実例から見る成功パターンと失敗パターン */}
        <div id="case-studies" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">5. 実例から見る成功パターンと失敗パターン</h2>
          
          <p>
            ここでは、実際の経験から導き出した、法人口座開設と融資申請におけるホームページ活用の成功パターンと失敗パターンを紹介します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-3">成功パターン</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-lg">事例1: IT企業の創業融資</h4>
                <p className="mt-2">
                  創業間もないIT企業が日本政策金融公庫に融資申請。技術的な事業内容を分かりやすく図解したホームページを事前に準備。複雑なビジネスモデルが視覚的に理解でき、担当者から高評価を受け、申請額満額の融資が実現しました。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">事例2: 飲食店の法人口座開設</h4>
                <p className="mt-2">
                  新規オープン前の飲食店が、店舗の内装工事の様子やメニュー開発過程をブログ形式でホームページに掲載。事業の実態と熱意が伝わり、大手銀行での口座開設がスムーズに完了。担当者からは「準備の様子が見えて安心した」とコメントがありました。
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-3">失敗パターン</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-lg">事例1: コンサルティング会社の融資申請</h4>
                <p className="mt-2">
                  ホームページには抽象的な表現ばかりで具体的なサービス内容や料金体系の記載がなく、実績も「多数の企業をサポート」など曖昧な表現のみ。銀行からは「事業の実態が見えない」と追加資料を何度も求められ、審査が長期化しました。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">事例2: 不動産投資会社の口座開設</h4>
                <p className="mt-2">
                  テンプレートサイトをそのまま使用し、「XX株式会社」などのダミーテキストが残っていたり、連絡先が携帯電話のみだったりと不備が多いホームページ。審査担当者の不信感を招き、追加書類の提出や面談を繰り返すことになりました。
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">成功事例からの学び</h3>
          
          <p>
            これらの事例から得られる教訓は明確です。銀行や融資機関は「この事業は本当に存在し、継続的に運営できるのか」「資金は適切に使われ、返済能力はあるのか」を判断したいのです。ホームページは、その判断材料を提供する重要なツールとなります。
          </p>

          <p>
            成功パターンに共通するのは、<strong>具体性、透明性、一貫性</strong>です。抽象的な表現ではなく、実際のサービス内容や価格、実績を具体的に示し、企業としての誠実さや専門性が伝わるホームページが高評価を得ています。
          </p>
        </div>

        {/* セクション6: まとめ */}
        <div id="conclusion" className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">6. まとめ：ホームページは「義務」ではなく「強力な武器」</h2>
          
          <p>
            この記事を通して解説してきたように、法人口座開設や融資申請においてホームページは法的な必須要件ではありませんが、あれば審査をスムーズに進める強力な武器となります。
          </p>

          <p>
            特に重要なのは以下のポイントです：
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>ホームページは事業の透明性と信頼性を示す重要なツール</li>
            <li>内容の具体性と正確性が審査では最も評価される</li>
            <li>ホームページがない場合は代替策を用意する</li>
            <li>一時的な審査対策ではなく、長期的な事業成長のための資産として考える</li>
          </ul>

          <p>
            最後に、ホームページ制作を検討する際の実践的なアドバイスをいくつか：
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h3 className="text-xl font-semibold mb-3">実践アドバイス</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>審査対策だけのホームページではなく、顧客にも価値を提供できる内容を</li>
              <li>予算や時間に制約がある場合は、まず必要最低限のページから始める（会社概要・サービス内容・問い合わせ）</li>
              <li>デザインの華やかさより情報の正確性と分かりやすさを優先する</li>
              <li>定期的な更新計画を立て、「放置サイト」にならないようにする</li>
            </ul>
          </div>

          <p>
            現代のビジネス環境において、ホームページはもはや「あれば便利」というレベルではなく、事業の基本インフラとなりつつあります。法人口座開設や融資申請をスムーズに進めるためだけでなく、顧客獲得や事業成長のためにも、適切なホームページの準備をお勧めします。
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              融資審査に通るホームページ、ステラリウムが制作します
            </h2>
            <p className="text-white text-lg mb-6">
              ただのデザインだけでなく、銀行や金融機関の審査基準を熟知したプロフェッショナルが、融資獲得や法人口座開設に最適化されたホームページを制作。あなたのビジネスの成長をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/website-development" 
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors text-center"
              >
                ホームページ制作サービスを見る
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-center"
              >
                まずは無料相談する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 