import type { Metadata } from "next"
import Image from "next/image"
import { PenTool, FileText, Video, Newspaper } from "lucide-react"

export const metadata: Metadata = {
  title: 'セールスライティングサービス | Web制作 あおい',
  description: 'プロのライターとして、動画台本からプレスリリースまで、あらゆる文章で成果を出すライティングサービスを提供します。',
  keywords: ['セールスライティング', 'コピーライティング', 'プレスリリース', '動画台本', 'メディア出稿'],
}

export default function WritingService() {
  const services = [
    {
      title: "セールスコピー作成",
      description: "商品やサービスの価値を最大限に引き出し、購買意欲を高めるコピーを作成します。",
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      title: "プレスリリース制作",
      description: "社団法人や企業の価値を効果的に伝え、メディアに取り上げられやすいプレスリリースを作成します。",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "動画台本作成",
      description: "視聴者の心を掴む、魅力的な動画コンテンツの台本を作成します。",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "メディア出稿",
      description: "大手メディア、ネット新聞、業界専門メディアなど、最適なメディアへの出稿をサポートします。",
      icon: <Newspaper className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            セールスライティングサービス
          </h1>
          <p className="text-xl text-gray-300">
            言葉の力で、あなたのビジネスを成功に導きます
          </p>
        </div>

        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/9]">
          <Image
            src="/images/zunda-pic.png"
            alt="セールスライティングサービスのイメージ"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                プロフェッショナルライティング
              </h2>
              <p className="text-lg text-gray-200">
                動画台本からプレスリリースまで、幅広いライティングに対応
              </p>
            </div>
          </div>
        </div>

        {/* サービス内容 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 実績セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            制作実績
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">社団法人のプレスリリース</h3>
              <p className="text-gray-300">全国紙や業界専門メディアに掲載され、団体の認知度が大幅に向上。新規会員数増加に貢献。</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">ベンチャー企業の新規サービス</h3>
              <p className="text-gray-300">プレスリリースとメディア出稿の連携により、サービス認知度向上とユーザー獲得に成功。</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">大手メディア出稿支援</h3>
              <p className="text-gray-300">全国紙やネット新聞への効果的な出稿により、ブランド価値向上とリード獲得を実現。</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">実績の一例</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>社団法人の活動PRによる会員数30%増加</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>スタートアップの新規サービス認知度200%向上</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>業界専門メディアでの連載記事による問い合わせ増加</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ネット新聞への戦略的出稿によるCV率向上</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8">
              豊富な実績を活かし、あなたのビジネスに最適なPR戦略をご提案いたします
            </p>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>お問い合わせ</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
} 