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
      description: "メディアに取り上げられやすい、説得力のあるプレスリリースを作成します。",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "動画台本作成",
      description: "視聴者の心を掴む、魅力的な動画コンテンツの台本を作成します。",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "メディア出稿",
      description: "大手メディアや新聞への効果的な出稿をサポートします。",
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
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">大手企業のプレスリリース</h3>
              <p className="text-gray-300">多数のメディアに掲載され、商品認知度が150%向上</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">商品紹介動画の台本</h3>
              <p className="text-gray-300">再生回数100万回を達成し、売上が200%増加</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">ブランドキャッチコピー</h3>
              <p className="text-gray-300">認知度向上とブランドイメージの確立に貢献</p>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8">
              あなたのビジネスに最適な文章表現をご提案いたします
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