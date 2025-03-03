import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { metadata } from "./metadata"

export { metadata }

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
            【2025年最新】TikTok運用で人材採用を成功させる求人活用術 | 事例と実践テクニック
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>2025.03.03</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>SNS運用</span>
            </div>
          </div>
          
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src="/blog/eye-catch/tiktok-recruitment.jpg"
              alt="TikTok運用による人材採用戦略"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 記事本文 */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300">
            人材採用のチャネルは常に進化しています。特に若年層を中心に爆発的な人気を誇るTikTokは、今や企業の採用活動における重要なプラットフォームとなりました。本記事では、TikTok運用を通じた効果的な求人活用方法から実践的なテクニック、成功事例まで詳しく解説します。採用担当者必見の内容です。
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            TikTokが採用活動のゲームチェンジャーになった理由
          </h2>
          
          <p>
            近年、採用市場の競争は激化の一途をたどっています。特に優秀な若手人材の獲得は企業の成長戦略において重要な課題となっています。そんな中、TikTokが採用活動における新たな可能性を開いた理由は明確です。
          </p>
          
          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">TikTokの採用活動における3つの強み</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-800/40">1</div>
                <div>
                  <p className="font-medium text-gray-200">圧倒的なリーチと若年層へのアクセス</p>
                  <p className="text-sm text-gray-400 mt-1">Z世代を中心に10億人以上のアクティブユーザーを持ち、特に若年層へのダイレクトなアクセスが可能</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-800/40">2</div>
                <div>
                  <p className="font-medium text-gray-200">本格的な企業文化の発信</p>
                  <p className="text-sm text-gray-400 mt-1">動画を通じて企業の雰囲気や社員の声などリアリティのある情報を伝えることができる</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-800/40">3</div>
                <div>
                  <p className="font-medium text-gray-200">低コストで高いエンゲージメント</p>
                  <p className="text-sm text-gray-400 mt-1">従来の求人広告に比べて低コストで大きな反響を得られる可能性が高い</p>
                </div>
              </div>
            </div>
          </div>
          
          <p>
            総務省の調査によると、20代のSNS利用率は90%を超え、その中でもTikTokは特に成長率が高いプラットフォームとなっています。また、リクルートワークス研究所の報告では、Z世代の就職活動において「企業の雰囲気や社員の様子」を重視する傾向が強いことが指摘されています。この点でも動画ベースのTikTokは大きなアドバンテージを持っています。
          </p>
          
          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-800/40 to-cyan-800/40 border-b border-blue-700/30">
                <h4 className="text-lg font-semibold text-white">年代別TikTok利用率と採用活動におけるポテンシャル</h4>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-400 font-medium">10代〜20代前半</span>
                      <span className="text-xs bg-blue-900/50 px-2 py-1 rounded-full">採用ポテンシャル：極めて高い</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">新卒採用や若手人材の獲得に最適。企業文化の発信効果が高い。</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-400 font-medium">20代後半〜30代前半</span>
                      <span className="text-xs bg-blue-900/50 px-2 py-1 rounded-full">採用ポテンシャル：高い</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">中途採用のターゲットとして効果的。専門性の高いポジションの訴求も可能。</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-400 font-medium">30代後半〜40代</span>
                      <span className="text-xs bg-blue-900/50 px-2 py-1 rounded-full">採用ポテンシャル：中程度</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">管理職や専門職の採用にも活用可能。企業ブランディングの間接効果。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            TikTok運用で求人活用を成功させるための戦略ステップ
          </h2>
          
          <p>
            TikTokを採用活動に活用する際には、単に求人情報を投稿するだけでは効果は限定的です。戦略的なアプローチが必要となります。以下では、TikTok運用を通じた求人活用を成功させるための具体的なステップを解説します。
          </p>
          
          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            1. 明確なターゲット設定とブランドボイスの確立
          </h3>
          
          <p>
            TikTokでの採用活動を始める前に、どのような人材をターゲットにするのか明確にしましょう。新卒なのか、経験者なのか、特定のスキルセットを持った人材なのか。ターゲットが明確になれば、それに合わせたコンテンツ戦略を立てることができます。
          </p>
          
          <p>
            また、企業としてのブランドボイス（トーンや語り口）を確立することも重要です。若者向けのカジュアルな語り口なのか、プロフェッショナルな印象を重視するのか。一貫したブランドボイスは視聴者に安定した印象を与え、信頼構築につながります。
          </p>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg my-8 shadow-md">
            <h4 className="font-semibold text-cyan-400 mb-4">ターゲット別TikTokコンテンツ戦略</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h5 className="text-cyan-300 font-medium mb-3">新卒向け</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 若手社員の一日</li>
                  <li>• オフィスツアー</li>
                  <li>• 研修制度の紹介</li>
                  <li>• 内定者の声</li>
                  <li>• 社員のプライベート</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h5 className="text-cyan-300 font-medium mb-3">キャリア転職者向け</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 社内のキャリアパス</li>
                  <li>• プロジェクト事例</li>
                  <li>• 技術スタックの紹介</li>
                  <li>• リモートワーク環境</li>
                  <li>• ワークライフバランス</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h5 className="text-cyan-300 font-medium mb-3">クリエイティブ職向け</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 社内デザインプロセス</li>
                  <li>• クリエイティブ会議風景</li>
                  <li>• ポートフォリオハイライト</li>
                  <li>• 制作環境のツアー</li>
                  <li>• デザイナーインタビュー</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            2. エンゲージメントを高める動画コンテンツ制作
          </h3>

          <p>
            TikTokのアルゴリズムは、視聴者の行動（視聴時間、いいね、コメント、シェア）に基づいて動画の表示回数を決定します。そのため、単に企業PRするだけではなく、視聴者の興味を引き、エンゲージメントを生むコンテンツ制作が重要です。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-4">高エンゲージメントを生むTikTok動画の5つの特徴</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-200">最初の3秒で視聴者を引き込む</p>
                  <p className="text-sm text-gray-400 mt-1">冒頭部分でインパクトのあるシーンや問いかけを入れ、スクロールされないようにする</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-200">トレンド音楽やエフェクトを活用</p>
                  <p className="text-sm text-gray-400 mt-1">流行の音楽やエフェクトを取り入れることでアルゴリズム評価が高まる</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-200">ストーリーテリング要素を含める</p>
                  <p className="text-sm text-gray-400 mt-1">「変化」や「意外性」を含んだストーリー展開で最後まで視聴を促す</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-200">テキストオーバーレイを効果的に使用</p>
                  <p className="text-sm text-gray-400 mt-1">主要なメッセージをテキストでも表示し、音声なしでも理解できるようにする</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-200">明確なCTAを含める</p>
                  <p className="text-sm text-gray-400 mt-1">求人サイトへの誘導やプロフィールのリンク確認など、次のアクションを促す</p>
                </div>
              </div>
            </div>
          </div>

          <p>
            採用TikTokの成功事例として有名なStarbucksでは、社員が実際に働いている様子や研修風景、チームの雰囲気を自然に伝える動画が高い視聴率を記録しています。特に&ldquo;Day in the life of a Starbucks barista&rdquo;（スターバックスバリスタの一日）シリーズは若年層からの応募増加に大きく貢献しました。
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            3. TikTokのアルゴリズムを理解し活用する
          </h3>

          <p>
            TikTokの強みは、フォロワー数に関係なく適切なオーディエンスに動画を表示できるアルゴリズムにあります。このアルゴリズムを理解し味方につけることで、採用ターゲットへの効果的なリーチが可能になります。
          </p>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-800/40 to-cyan-800/40 border-b border-blue-700/30">
                <h4 className="text-lg font-semibold text-white">TikTokアルゴリズムの仕組みと採用活動への活用</h4>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <h5 className="text-cyan-300 font-medium mb-2">コンテンツ評価要素</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• 視聴完了率（最重要）</li>
                      <li>• リピート視聴回数</li>
                      <li>• エンゲージメント率</li>
                      <li>• シェア数と保存数</li>
                      <li>• 滞在時間</li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <h5 className="text-cyan-300 font-medium mb-2">採用活動での活用法</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• 関連ハッシュタグの戦略的使用</li>
                      <li>• 投稿頻度の最適化（週3-5回）</li>
                      <li>• 最適な投稿時間帯の特定</li>
                      <li>• インタラクション促進質問</li>
                      <li>• ユーザー生成コンテンツの活用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>
            TikTokで重要な点は、「For You Page（FYP）」と呼ばれるパーソナライズされたフィードです。ユーザーの興味に合わせた動画が表示されるこのページに採用関連の動画が表示されることが、適切な人材へのアプローチにつながります。
          </p>

          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-5 rounded-lg my-8 border border-cyan-800/40">
            <h4 className="font-semibold text-cyan-400 mb-3">採用担当者向けTip</h4>
            <p className="text-gray-300 text-sm">
              TikTokのFYPに表示されるためのキーポイントは、「類似ユーザーの行動パターン」です。採用したい人材が興味を持ちそうなコンテンツ（業界トレンド、特定スキルの紹介、職種別のハッシュタグ）を分析し活用することで、似たような興味や能力を持つユーザーへのリーチを高めることができます。
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-6 text-cyan-300">
            TikTok採用活動の成功事例と実践テクニック
          </h2>

          <p>
            TikTokを採用活動に活用して成功を収めている企業は増加しています。以下では、具体的な成功事例とそこから学べる実践テクニックを紹介します。
          </p>

          <div className="bg-gray-800/50 rounded-lg overflow-hidden my-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">米Chipotle社の事例</h3>
                <p className="text-gray-300 mb-4">
                  ファストカジュアルチェーンのChipotleは、「Behind the Foil」キャンペーンでTikTokを活用。実際の調理プロセスや食材の準備、店舗の雰囲気を包み隠さず紹介する動画を投稿しました。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">従業員自身による本格的な紹介動画</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">トレンドチャレンジへの積極参加</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">職場環境の透明性重視</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-900/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">結果:</p>
                  <p className="text-gray-300 text-sm">応募者数が前年比87%増加。特に18-24歳からの応募が約2倍に増加。</p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-900/30">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">ワシントンポスト社の事例</h3>
                <p className="text-gray-300 mb-4">
                  伝統ある新聞社のワシントンポストは、編集部の日常や記者の仕事を面白おかしく紹介するTikTok動画で若手ジャーナリスト採用に成功しました。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">記者のリアルな仕事風景の共有</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">ユーモアと専門性のバランス</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-400">ニュース業界の裏側紹介</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-900/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">結果:</p>
                  <p className="text-gray-300 text-sm">インターンシップ応募が150%増加。特にデジタルメディア分野の人材獲得に成功。</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            これらの成功事例から学ぶ実践テクニック
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50">
              <h4 className="text-cyan-300 font-medium mb-3">1. 企業文化の本質的な発信</h4>
              <p className="text-sm text-gray-300">
                単なる求人情報ではなく、実際の職場の雰囲気や社員の日常を見せることで、文化的フィット感を重視する現代の求職者の心を掴みます。特に若い世代は「自分がその環境に馴染めるか」を重視する傾向があります。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50">
              <h4 className="text-cyan-300 font-medium mb-3">2. 社員を主役にした動画制作</h4>
              <p className="text-sm text-gray-300">
                人事担当者ではなく、実際の社員（特に応募者と年齢が近い社員）が出演することで親近感と信頼性が増します。社員の率直な声や体験談を共有することで、リアルな企業像を伝えられます。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50">
              <h4 className="text-cyan-300 font-medium mb-3">3. ハッシュタグ戦略の最適化</h4>
              <p className="text-sm text-gray-300">
                #転職 #新卒採用などの一般的なタグに加え、#営業の一日 #エンジニアの日常など職種別タグ、また#WorkPlaceCulture #JobShadowingなど業界特化型タグを効果的に組み合わせます。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50">
              <h4 className="text-cyan-300 font-medium mb-3">4. インタラクティブ要素の活用</h4>
              <p className="text-sm text-gray-300">
                質問箱機能やコメント欄でのQ&A対応、視聴者からのリクエストに応じた動画制作など、双方向のコミュニケーションを意識します。これにより潜在的な応募者との対話が生まれます。
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            TikTok採用で避けるべき5つの失敗
          </h3>

          <div className="space-y-6 my-8">
            <div className="flex items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-400">1. 過度に作り込まれた企業PRビデオ</h4>
                <p className="text-sm text-gray-300 mt-1">
                  プロ制作の高品質な映像は、むしろTikTokでは不自然に映りがち。リアルで自然な映像の方が若者に響きます。完璧さよりも親近感を重視しましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-400">2. トレンドの無理な取り入れ</h4>
                <p className="text-sm text-gray-300 mt-1">
                  企業文化や業界にそぐわないトレンドを無理に真似ると不自然で逆効果に。企業のブランドイメージに合うトレンドだけを選んで取り入れましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-400">3. 一方的なコンテンツの垂れ流し</h4>
                <p className="text-sm text-gray-300 mt-1">
                  投稿するだけで視聴者とのインタラクションがない運用は効果が低下。コメントへの返信やフォロワーからのリクエストに応える双方向のコミュニケーションを心がけましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-400">4. 過度な美化や現実との乖離</h4>
                <p className="text-sm text-gray-300 mt-1">
                  職場環境や業務内容を実際より良く見せようとすると、入社後のギャップで早期退職を招く恐れも。リアルな姿を見せつつポジティブな側面を強調するバランスが重要です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-400">5. ハッシュタグの過剰使用</h4>
                <p className="text-sm text-gray-300 mt-1">
                  関連性の低い人気ハッシュタグを大量に使うと、アルゴリズムから質の低いコンテンツと判断される可能性が高まります。5-7個の関連性の高いタグに絞りましょう。
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-300">
            TikTok採用活動の効果測定と長期戦略
          </h2>

          <p>
            TikTokを採用活動に活用する際には、一時的なブームとしてではなく、長期的な採用戦略の一環として位置づけることが重要です。そのためには、効果測定と継続的な改善サイクルが不可欠となります。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg my-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-blue-300">TikTok採用活動の主要KPI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h4 className="text-cyan-300 font-medium mb-3">エンゲージメント指標</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 視聴完了率</li>
                  <li>• いいね・コメント数</li>
                  <li>• シェア数</li>
                  <li>• フォロワー増加率</li>
                  <li>• プロフィールクリック数</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h4 className="text-cyan-300 font-medium mb-3">コンバージョン指標</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 採用サイト流入数</li>
                  <li>• 応募フォーム完了数</li>
                  <li>• TikTok経由の応募者数</li>
                  <li>• TikTok経由の選考通過率</li>
                  <li>• TikTok経由の採用コスト</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-700/50">
                <h4 className="text-cyan-300 font-medium mb-3">長期的効果指標</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 採用ブランド認知度の変化</li>
                  <li>• 応募者の質的変化</li>
                  <li>• 採用難易度の変化</li>
                  <li>• 採用サイクルの短縮度</li>
                  <li>• 入社後の定着率への影響</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-blue-300">
            TikTok採用を総合的な採用戦略に組み込む方法
          </h3>

          <p>
            TikTokは単独の採用チャネルとしてではなく、総合的な採用戦略の一要素として位置づけることで最大限の効果を発揮します。以下は、TikTokを他の採用活動と連携させるためのアプローチです。
          </p>

          <div className="relative my-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-800/40 to-cyan-800/40 border-b border-blue-700/30">
                <h4 className="text-lg font-semibold text-white">クロスチャネル採用戦略</h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-cyan-300 font-medium mb-3">TikTokと他メディアの連携</h5>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>LinkedIn・Twitterで公式TikTokアカウントを告知</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>人気TikTok動画を採用サイトに埋め込み</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>TikTok動画から詳細情報へ誘導する仕組み</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>面接候補者にTikTokアカウントの案内</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-cyan-300 font-medium mb-3">社内コラボレーション</h5>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>人事部とマーケティング部の共同運用体制</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>各部署から「TikTokアンバサダー」を任命</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>従業員の自発的参加を促す社内キャンペーン</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-900/50 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-cyan-400 text-xs">→</span>
                        </div>
                        <span>TikTok活用の事例共有と社内勉強会の実施</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-5 rounded-lg my-8 border border-cyan-800/40">
            <h4 className="font-semibold text-cyan-400 mb-3">採用担当者のための実践チェックリスト</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">TikTokビジネスアカウントの設定と最適化</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">初期コンテンツ（5-8本）の企画と準備</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">トレンド・ハッシュタグのリサーチと活用計画</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">社内TikTok運用ガイドラインの作成</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">KPIと効果測定方法の設定</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">応募者追跡システムとTikTok流入の連携設定</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2" />
                <span className="ms-2 text-gray-300">四半期ごとのコンテンツ計画と評価サイクル確立</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-6 text-cyan-300">
            まとめ：TikTok採用の未来展望
          </h2>

          <p>
            今後、TikTokに代表されるショート動画プラットフォームは採用活動においてさらに重要度を増していくでしょう。特に若手人材獲得において、視覚的で直感的なコミュニケーションの重要性は高まる一方です。
          </p>

          <p>
            企業が考慮すべき重要なポイントは、TikTokを単なる「若者向けの一時的なトレンド」と捉えず、次世代のコミュニケーションプラットフォームとして戦略的に活用する視点を持つことです。
          </p>

          <p>
            採用TikTokの成功の鍵は、高度なテクニックやアルゴリズムの理解というよりも、リアルな企業文化を魅力的に発信する真実性にあります。実際の社員が主役となり、自社の働き方や価値観を自然に伝えることができれば、適性の高い候補者との出会いを促進できるでしょう。
          </p>

          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-lg p-8 border border-cyan-800/40 shadow-lg mt-10">
            <h3 className="text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              TikTok採用活動でお悩みですか？
            </h3>
            <p className="text-gray-300 mb-2 text-center">
              自社のTikTok運用戦略や採用活動にお悩みの企業様へ
            </p>
            <p className="text-gray-300 mb-6 text-center">
              戦略立案から実際の運用まで、あなたのビジネスに最適な<br />TikTok採用活用をトータルでサポートします。
            </p>
            <div className="text-center">
              <Link 
                href="/services/sns-service" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <span>SNS運用サービスを詳しく見る</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 