import type { Metadata } from "next"
import Image from "next/image"
import { Cpu, Bot, Wand2, Sparkles, Code, Zap, PanelRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'AI開発サービス | SaaS構築・業務自動化 | Web制作 あおい',
  description: 'NotionやDifyを活用したAIアプリケーション開発、カスタムSaaS構築サービス。最新のAI技術で、あなたのビジネスをスマートに自動化します。',
}

export default function AiServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* ヒーローセクション */}
        <section className="text-center mb-20 pt-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text relative z-10">
            AI開発サービス
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed relative z-10">
            最新のAI技術で<br />
            あなたのビジネスを次のレベルへ
          </p>

          {/* メインビジュアル */}
          <div className="absolute top-20 inset-x-0 w-full mx-auto opacity-40 max-w-[280px] md:max-w-2xl aspect-square md:aspect-[16/9]">
            <Image
              src="/images/zunda-pic.png"
              alt="AI開発サービス"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* サービス概要カード */}
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md p-8 rounded-lg border border-[4px] border-cyan-500/20 [image-rendering:pixelated] relative z-10 mt-24 md:mt-36">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-cyan-500/30 [image-rendering:pixelated]">
                <Cpu className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <p className="text-cyan-400">AI開発</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-purple-500/30 [image-rendering:pixelated]">
                <Bot className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <p className="text-purple-400">自動化</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-cyan-500/30 [image-rendering:pixelated]">
                <Wand2 className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <p className="text-cyan-400">SaaS構築</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border-[2px] border-purple-500/30 [image-rendering:pixelated]">
                <Sparkles className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <p className="text-purple-400">カスタマイズ</p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス詳細セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:2px_2px_0_#0f172a]">
            提供サービス
          </h2>
          
          <div className="space-y-8">
            {/* SaaS構築サービス */}
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [image-rendering:pixelated] [box-shadow:6px_6px_0_rgba(8,145,178,0.2)]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-4 rounded-lg [image-rendering:pixelated] flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">SaaS構築サービス</h3>
                  <p className="text-gray-300 mb-4">
                    カスタムSaaSアプリケーションを短期間・低コストで構築。AIを活用した業務効率化ツールやデータ分析プラットフォームを提供します。
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xl">■</span>
                      <span>業務管理システム</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 text-xl">■</span>
                      <span>カスタムCRMツール</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xl">■</span>
                      <span>業界特化型ダッシュボード</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Notion最適化サービス */}
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-purple-500/20 [image-rendering:pixelated] [box-shadow:6px_6px_0_rgba(168,85,247,0.2)]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-4 rounded-lg [image-rendering:pixelated] flex items-center justify-center">
                  <PanelRight className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">Notion最適化サービス</h3>
                  <p className="text-gray-300 mb-4">
                    NotionをAIとAPIで拡張し、強力な業務自動化ツールへ変身させます。マクロとインテグレーションで生産性を飛躍的に向上。
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 text-xl">■</span>
                      <span>自動データ収集・整理</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xl">■</span>
                      <span>AIレポート自動生成</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 text-xl">■</span>
                      <span>外部サービス連携</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Difyアプリケーション開発 */}
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [image-rendering:pixelated] [box-shadow:6px_6px_0_rgba(8,145,178,0.2)]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-4 rounded-lg [image-rendering:pixelated] flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Difyアプリケーション開発</h3>
                  <p className="text-gray-300 mb-4">
                    Difyプラットフォームを活用したカスタムAIアプリケーションを開発。LLMを活用した高度なビジネスソリューションを実現します。
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xl">■</span>
                      <span>カスタムAIチャットボット</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 text-xl">■</span>
                      <span>テキスト分析ツール</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xl">■</span>
                      <span>自動コンテンツ生成システム</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Notionで実現できる機能例 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:2px_2px_0_#0f172a]">
            Notionで実現できる機能例
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-cyan-500/20 [image-rendering:pixelated] hover:border-cyan-500/40 transition-all">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">自動データ整理・分類システム</h3>
              <p className="text-gray-300 text-sm">
                大量のデータを自動的に整理・分類し、アクセス可能なデータベースを構築。情報検索の時間を大幅に削減できます。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-purple-500/20 [image-rendering:pixelated] hover:border-purple-500/40 transition-all">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">AI文書要約・分析ツール</h3>
              <p className="text-gray-300 text-sm">
                長文レポートや記事を自動要約し、重要ポイントを抽出。会議前の準備時間を短縮し、意思決定を迅速化します。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-cyan-500/20 [image-rendering:pixelated] hover:border-cyan-500/40 transition-all">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">自動応答メールシステム</h3>
              <p className="text-gray-300 text-sm">
                顧客からの問い合わせに自動応答するシステムを構築。FAQベースの回答生成で、サポート業務の負担を軽減します。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-purple-500/20 [image-rendering:pixelated] hover:border-purple-500/40 transition-all">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">タスク自動優先順位付け</h3>
              <p className="text-gray-300 text-sm">
                プロジェクトタスクの優先度を自動で判定し、チームの作業効率を向上。締切や重要度に基づいた最適な作業順序を提案します。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-cyan-500/20 [image-rendering:pixelated] hover:border-cyan-500/40 transition-all">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">会議議事録の自動生成</h3>
              <p className="text-gray-300 text-sm">
                会議の録音から自動的に議事録を生成し、タスクや決定事項を抽出。フォローアップを効率化し、情報共有をスムーズにします。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border-[2px] border-purple-500/20 [image-rendering:pixelated] hover:border-purple-500/40 transition-all">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">データ可視化ダッシュボード</h3>
              <p className="text-gray-300 text-sm">
                ビジネスデータをリアルタイムで可視化し、インサイトを提供。経営判断や戦略立案に必要な情報を一目で把握できます。
              </p>
            </div>
          </div>
        </section>
        
        {/* 料金プラン */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:2px_2px_0_#0f172a]">
            料金プラン
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {/* 統合プラン */}
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-purple-500/20 [image-rendering:pixelated] [box-shadow:6px_6px_0_rgba(168,85,247,0.2)] hover:translate-y-[-4px] transition-transform relative">
              <div className="absolute top-[-12px] right-[-12px] bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-lg border-[2px] border-white/20 [image-rendering:pixelated]">
                カスタム開発
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">AI開発プラン</h3>
                <p className="text-3xl font-bold text-white mb-2">¥100,000〜</p>
                <p className="text-sm text-gray-400">(税込・要件により変動)</p>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span>NotionやDifyを活用したAIアプリケーション</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400 text-xl">▶</span>
                  <span>業務効率化・自動化システム</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span>外部サービス連携</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400 text-xl">▶</span>
                  <span>カスタムデザイン</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span>2週間〜1ヶ月の納期</span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="https://lin.ee/ATZ4bog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold border-[2px] border-white/20 [image-rendering:pixelated] hover:scale-105 transition-transform"
                >
                  お見積り依頼
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* 導入事例 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 [text-shadow:2px_2px_0_#0f172a]">
            導入事例
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [image-rendering:pixelated]">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">個人事業主 K様</h3>
              <p className="text-gray-300 mb-4">
                Notionを活用した顧客管理システムを構築。AIによる自動メール返信機能とタスク割り当てを実装し、一人で複数のプロジェクトを効率的に管理できるようになりました。作業時間が週あたり15時間削減されました。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-purple-500/20 [image-rendering:pixelated]">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">不動産管理会社様</h3>
              <p className="text-gray-300 mb-4">
                物件データの自動収集・分析システムを構築。Notion APIとAIを活用し、市場動向のレポートを自動生成。営業活動の効率が40%向上しました。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-cyan-500/20 [image-rendering:pixelated]">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">マーケティング会社様</h3>
              <p className="text-gray-300 mb-4">
                DifyベースのAIコンテンツ生成ツールを開発。クライアント別にカスタマイズされたコンテンツ提案が可能に。制作時間が60%削減されました。
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border-[4px] border-purple-500/20 [image-rendering:pixelated]">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">社団法人様</h3>
              <p className="text-gray-300 mb-4">
                会員データ管理システムをカスタムSaaSとして開発。会員情報や活動履歴、会費管理などを一元管理でき、事務局の業務効率が大幅に向上。新規会員獲得にも貢献しました。
              </p>
            </div>
          </div>
        </section>
        
        {/* お問い合わせ */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md p-8 rounded-lg border-[4px] border-purple-500/20 [image-rendering:pixelated] max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8">
              最新のAI技術でビジネスの課題を解決します。<br />
              お気軽にお問い合わせください。
            </p>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold border-[2px] border-white/20 hover:scale-105 transition-transform"
            >
              無料相談を予約する
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}