import type { Metadata } from 'next'
import Link from 'next/link'
import './achievements.css'

export const metadata: Metadata = {
  title: '広告運用実績 - Stellarium Design',
  description: 'Stellarium Designの広告運用実績をご紹介します。ECサイト、B2B SaaS、不動産業界での成功事例をご覧ください。',
  openGraph: {
    title: '広告運用実績 - Stellarium Design',
    description: 'Stellarium Designの広告運用実績をご紹介します。ECサイト、B2B SaaS、不動産業界での成功事例をご覧ください。',
    type: 'website',
  },
}

export default function AchievementsPage() {
  return (
    <div className="achievements-page">
      {/* 星空背景 */}
      <div className="star-bg" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* ヘッダー */}
        <header className="text-center mb-12 md:mb-20">
          <h1 className="achievements-title">
            MISSION ARCHIVES
          </h1>
          <p className="text-lg md:text-xl text-gray-300">私の攻略実績</p>
        </header>

        {/* 実績紹介セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* 実績カード 1: ECサイト */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: 売上最大化
                </span>
                <h2 className="achievement-card-title">
                  アパレルECサイト
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      📈 ROAS
                    </span>
                    <span className="metric-value">
                      850% <span className="text-green-400 text-sm">(+240%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '85%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      💰 CPA
                    </span>
                    <span className="metric-value">
                      ¥3,200 <span className="text-green-400 text-sm">(-60%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '70%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                顧客データを活用した類似オーディエンス配信と、クリエイティブの高速PDCAを実施。P-MAXキャンペーンの導入により、コンバージョンを最大化。
              </p>
            </div>
          </div>

          {/* 実績カード 2: B2B SaaS */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: リード獲得
                </span>
                <h2 className="achievement-card-title">
                  B2B SaaS
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      👥 リード数
                    </span>
                    <span className="metric-value">
                      月150件 <span className="text-green-400 text-sm">(+400%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      💵 CPL
                    </span>
                    <span className="metric-value">
                      ¥7,500 <span className="text-green-400 text-sm">(-50%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '75%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                ホワイトペーパーをフックにしたリードジェネレーション広告を展開。役職や業種での精緻なターゲティングにより、質の高いリード獲得とCPL半減を同時に実現。
              </p>
            </div>
          </div>

          {/* 実績カード 3: 不動産 */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: 資料請求数UP
                </span>
                <h2 className="achievement-card-title">
                  不動産
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      📝 CVR
                    </span>
                    <span className="metric-value">
                      3.5% <span className="text-green-400 text-sm">(+191%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '70%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      💰 CPA
                    </span>
                    <span className="metric-value">
                      ¥11,000 <span className="text-green-400 text-sm">(-56%)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '65%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                指名検索とエリアキーワードを強化し、競合との差別化を図る広告文を作成。ランディングページの改善提案も行い、コンバージョン率を大幅に改善。
              </p>
            </div>
          </div>

          {/* 実績カード 4: MEO */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: 地域集客強化
                </span>
                <h2 className="achievement-card-title">
                  MEO対策
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      👥 月間客足数
                    </span>
                    <span className="metric-value">
                      +350% <span className="text-green-400 text-sm">(250%UP)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      🏆 地域ランキング
                    </span>
                    <span className="metric-value">
                      TOP3位 <span className="text-green-400 text-sm">(12位→3位)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '85%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                Googleマイビジネスの最適化と口コミ対策を実施。地域キーワードでの検索順位向上により、実店舗への来店客数が大幅に増加。
              </p>
            </div>
          </div>

          {/* 実績カード 5: 飲食店SNS運用 */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: ブランド認知拡大
                </span>
                <h2 className="achievement-card-title">
                  飲食店SNS運用
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      📱 フォロワー数
                    </span>
                    <span className="metric-value">
                      +3,500 <span className="text-green-400 text-sm">(数千UP)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '95%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      🌏 インバウンド対策
                    </span>
                    <span className="metric-value">
                      +280% <span className="text-green-400 text-sm">(大幅向上)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '88%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                InstagramとTikTokを活用した視覚的コンテンツ戦略を展開。多言語対応投稿でインバウンド客を獲得し、ブランド知名度を大幅に向上。
              </p>
            </div>
          </div>

          {/* 実績カード 6: ペット系EC */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: 顧客関係改善
                </span>
                <h2 className="achievement-card-title">
                  ペット系EC
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      📧 CRMブロック率
                    </span>
                    <span className="metric-value">
                      -50% <span className="text-green-400 text-sm">(半減)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '75%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      💎 CV率
                    </span>
                    <span className="metric-value">
                      +10% <span className="text-green-400 text-sm">(1割増)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '80%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                ペット愛好家の心理を理解したパーソナライズメール戦略を実施。配信頻度と内容を最適化し、顧客満足度向上とコンバージョン率改善を実現。
              </p>
            </div>
          </div>

          {/* 実績カード 7: 大阪美容サロン */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: 新規顧客獲得
                </span>
                <h2 className="achievement-card-title">
                  大阪美容サロン
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      ✨ 新規顧客数
                    </span>
                    <span className="metric-value">
                      +100% <span className="text-green-400 text-sm">(2倍)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '100%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      🗾 都市部シェア
                    </span>
                    <span className="metric-value">
                      +180% <span className="text-green-400 text-sm">(大幅拡大)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '90%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                大阪都市部の激戦区でのブランディング戦略を展開。Instagramとmeta広告を連携させ、都市部男性をターゲットとした精緻な広告配信を実施。ニッチな業態にも関わらず大幅に新規を獲得。
              </p>
            </div>
          </div>

          {/* 実績カード 8: TikTok運用 */}
          <div className="achievement-card">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="mission-tag">
                  MISSION: バイラル拡散
                </span>
                <h2 className="achievement-card-title">
                  TikTok運用
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      🎥 累計再生数
                    </span>
                    <span className="metric-value">
                      500万回+ <span className="text-green-400 text-sm">(ネットミーム)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '100%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      👥 フォロワー数
                    </span>
                    <span className="metric-value">
                      1万人 <span className="text-green-400 text-sm">(3週間)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '95%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-bold text-gray-300">
                      📺 CH登録者数
                    </span>
                    <span className="metric-value">
                      1万人+ <span className="text-green-400 text-sm">(1ヶ月)</span>
                    </span>
                  </div>
                  <div className="result-bar">
                    <div className="result-bar-inner" style={{width: '92%'}} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mt-auto">
                <strong className="text-white">【作戦概要】</strong> 
                立ち上げから3週間で350万再生のネットミームを創出。トレンドを先読みしたコンテンツ戦略により、短期間で大規模なバイラル拡散を実現。
              </p>
            </div>
          </div>

        </div>

        {/* お問い合わせセクション */}
        <section className="text-center mt-16 md:mt-24">
          <h2 className="cta-title">
            Ready for the Next Mission?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            貴社のビジネスを加速させるための最適な戦略をご提案いたします。
            司令部への通信をお待ちしております。
          </p>
          <Link href="/contact" className="cta-button">
            作戦の相談をする
          </Link>
        </section>

      </div>
    </div>
  )
} 