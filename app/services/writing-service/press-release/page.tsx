import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'プレスリリース代行サービス | 社団法人・ベンチャー企業向け | Web制作 あおい',
  description: '社団法人やベンチャー企業向けのプレスリリース作成代行サービス。企業ブランディングから大手メディアへの露出まで、多数の実績を持つプロフェッショナルが対応します。',
  keywords: ['プレスリリース', '代行', '社団法人', 'ベンチャー企業', 'メディア露出', '企業ブランディング'],
}

export default function PressReleasePage() {
  const mediaResults = [
    { 
      name: "プレジデントオンライン＆小学館", 
      image: "/images/press-release.jpeg",
      description: "全国紙での掲載実績" 
    },
    { 
      name: "その他メディア", 
      image: "/images/press-release2.jpeg",
      description: "お客様からの高評価\n24社以上のメディアに掲載" 
    },
    { 
      name: "毎日新聞", 
      image: "/images/press-release3.jpeg",
      description: "その他大手ネット新聞への掲載" 
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* ヒーローセクション */}
        <section className="text-center mb-20 pt-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text relative z-10">
            メディアに響くプレスリリースで<br />
            企業価値を高める
          </h1>
          <p className="text-xl text-gray-300 mb-12 md:mb-24 leading-relaxed relative z-10">
            全国紙からオンラインメディアまで<br />
            多数掲載実績を持つプロフェッショナルが<br className="md:hidden" />
            あなたの企業の魅力を発信します
          </p>

          {/* メインビジュアル */}
          <div className="absolute top-20 inset-x-0 w-full mx-auto opacity-30 max-w-[280px] md:max-w-2xl aspect-square md:aspect-[16/9]">
            <Image
              src="/images/zunda-pic.png"
              alt="プレスリリース代行サービス"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20 relative z-10 mt-24 md:mt-36">
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              主な掲載実績メディア
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 mb-12">
              <div className="bg-gray-900/50 p-4 rounded-lg">講談社</div>
              <div className="bg-gray-900/50 p-4 rounded-lg">毎日新聞</div>
              <div className="bg-gray-900/50 p-4 rounded-lg">東洋経済</div>
              <div className="bg-gray-900/50 p-4 rounded-lg">NewsPicks</div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
                <p className="text-3xl font-bold text-cyan-400 mb-2">50+</p>
                <p className="text-gray-300">掲載メディア数</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
                <p className="text-3xl font-bold text-cyan-400 mb-2">200%</p>
                <p className="text-gray-300">平均認知度向上率</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
                <p className="text-3xl font-bold text-cyan-400 mb-2">100%</p>
                <p className="text-gray-300">メディア掲載率</p>
              </div>
            </div>
          </div>
        </section>

        {/* 実績紹介セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            掲載実績・お客様の声
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20">
            <div className="grid md:grid-cols-3 gap-8">
              {mediaResults.map((media, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                  <div className="mb-4">
                    <Image
                      src={media.image}
                      alt={`${media.name}での掲載実績`}
                      width={400}
                      height={300}
                      className="w-full rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                      {media.name}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {media.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* メディア掲載一覧 */}
            <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">主な掲載メディア</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <div>・講談社</div>
                <div>・毎日新聞</div>
                <div>・時事通信社</div>
                <div>・産業経済新聞社</div>
                <div>・東洋経済</div>
                <div>・NewsPicks</div>
                <div>・楽天など</div>
              </div>
            </div>

            {/* クライアントの声 */}
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                お客様の声
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
                  <p className="text-gray-300 mb-4">
                    「プレスリリース配信後、問い合わせが大幅に増加。メディアからの取材依頼も複数いただき、認知度向上に大きく貢献しました。」
                  </p>
                  <p className="text-cyan-400 text-sm">- 社団法人 A様</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
                  <p className="text-gray-300 mb-4">
                    「専門的な内容を分かりやすく伝えていただき、業界メディアでの掲載も実現。新規顧客の獲得につながりました。」
                  </p>
                  <p className="text-cyan-400 text-sm">- ベンチャー企業 B様</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス特徴 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            選ばれる3つの理由
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                1. プロフェッショナルによる戦略的な文章作成
              </h3>
              <p className="text-gray-300">
                プロのセールスライターとしての能力で、御社の強みを最大限に引き出し、メディアに響く表現で訴求します。
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                2. 大手メディアでの掲載実績
              </h3>
              <p className="text-gray-300 leading-relaxed">
                全国紙やオンラインメディアでの多数の掲載実績を持つプロフェッショナルが、企業価値の向上とブランド認知の拡大をサポートします。
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                3. ブランディングによる事業成長
              </h3>
              <p className="text-gray-300">
                メディア露出を通じた認知度拡大と企業価値向上により、事業規模の拡大と新たなビジネスチャンスの創出を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* 料金プラン */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            料金プラン
          </h2>
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md p-8 rounded-lg border-4 border-cyan-500/20">
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-cyan-400 mb-4">¥220,000</p>
              <p className="text-gray-400">(税込)</p>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-300">含まれるサービス：</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>プレスリリース原稿作成（取材含む）</li>
                <li>メディアリスト作成</li>
                <li>配信代行</li>
                <li>掲載後のレポート作成</li>
                <li>2回までの修正対応</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            まずはご相談ください
          </h2>
          <p className="text-gray-300 mb-8">
            プレスリリースの効果や具体的な進め方について、無料でご相談いただけます。
          </p>
          <a
            href="https://lin.ee/ATZ4bog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            <span>無料相談を予約する</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  )
} 