import Image from "next/image";
// import Link from "next/link"; // 未使用のためコメントアウト
import { 
  PenTool, 
  FileText, 
  Newspaper, 
  Video
} from "lucide-react";

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

  const achievements = [
    {
      title: "大手メーカー様",
      description: "新商品のプレスリリースを全国紙に掲載。認知度が150%向上し、商品の売上に貢献。",
      period: "2023年12月",
    },
    {
      title: "IT企業様",
      description: "サービスローンチに向けたLP制作とコピーライティング。CVR35%改善を実現。",
      period: "2023年10月",
    },
    {
      title: "士業事務所様",
      description: "ブログ記事のリライトによりオーガニック流入が2倍に増加。新規問い合わせ数も向上。",
      period: "2023年8月",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 pt-32">
        {/* ヒーローセクション */}
        <div className="text-center mb-16 pt-4">
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

        {/* プレスリリース代行サービスセクション */}
        <section className="mb-20 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            プレスリリース代行サービス
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-400">
                社団法人・ベンチャー企業向け<br />プレスリリース作成・配信
              </h3>
              <p className="text-gray-300 leading-relaxed">
                全国紙やオンラインメディアでの多数の掲載実績を持つプロフェッショナルが、企業価値の向上とブランド認知の拡大をサポートします。
              </p>
              <div className="flex items-center gap-4 text-cyan-400">
                <span className="font-bold">料金：¥220,000（税込）</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-2">詳しいサービス内容をご確認ください</p>
              </div>
              <a
                href="/writing-service/press-release"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <span>サービス詳細へ</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            制作実績
          </h2>
          {/* 主要実績 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <p className="text-sm text-gray-400">{achievement.period}</p>
              </div>
            ))}
          </div>
          {/* 既存の実績一覧 */}
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