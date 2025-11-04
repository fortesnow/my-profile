import * as React from "react"
import Image from "next/image"
import { ProfileData } from './types'
import ServicesGrid from "./ServicesGrid"
import { AnimatedTestimonials } from "./ui/animated-testimonials"
import { Hero } from "./ui/animated-hero"

interface Website {
  icon: string
  name: string
  url: string
}

const defaultWebsites: Website[] = [
  { icon: "/icons/note-pic.svg", name: "note", url: "https://note.com/hareharesky" },
  { icon: "/icons/aozaki-pic.svg", name: "Anime", url: "https://youtu.be/0YaUlkcpoXw?si=KGwDQklCCVXDvTdO" },
  { icon: "/icons/instagram-pic.svg", name: "Instagram", url: "https://www.instagram.com/stellariumix/" },
  { icon: "/icons/line-pic.svg", name: "LINE", url: "https://lin.ee/ATZ4bog" },
  { icon: "/icons/threads-pic.svg", name: "Threads", url: "https://www.threads.net/@stellariumix" },
]

export default function Profile({ data }: { data: ProfileData }) {
  // 強みデータ - Animated Testimonials形式
  const strengths = [
    {
      name: "包括的なマルチスキル",
      designation: "デジタルマーケティングの総合力",
      quote: "SNS運用、Webデザイン、プログラミング、SEOなど、デジタルマーケティングに必要な幅広いスキルを保有し複合的な戦略を提起実地します。技術と創造性を融合させた独自のアプローチで、クライアントのビジネス成長を支援します。",
      src: "/images/manga1.png"
    },
    {
      name: "実践的な経験",
      designation: "現場で培った実用的知識",
      quote: "実業での経験を活かした実践的なアプローチが可能！理論だけでなく、実際のビジネスシーンで効果を発揮する施策を提案！経営視点からの戦略的思考と、現場での実行力を兼ね備えています。",
      src: "/images/manga2.png"
    },
    {
      name: "迅速な対応力",
      designation: "柔軟性と課題解決能力",
      quote: "経験を活かして、潜在的な需要からニーズを深堀り。目的に応じて逆算した筋道を柔軟に整地します。変化の激しいデジタル市場において、スピーディーかつ的確な判断で最適解を導き出します。",
      src: "/images/manga3.png"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <main>
        <article>
          {/* Hero Section */}
          <Hero />

          {/* Header */}
          <div
            className="relative h-72 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url('/images/aoko-pic.jpg')`,
              backgroundPosition: "50% 20%",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-500 to-purple-500 transform -skew-y-3" />
          </div>

          {/* Profile Content */}
          <div className="relative px-6 pb-8 -mt-32">
            {/* Profile Picture */}
            <div className="relative mb-6">
              <div 
                className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300"
                role="img"
                aria-label="あおいのプロフィール画像"
              >
                <Image
                  src="/images/aoko-pic.jpg"
                  alt="Profile"
                  width={160}
                  height={160}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-1 rounded-full text-xs font-semibold tracking-wider"
              >
                <span>VISIONARY</span>
              </div>
            </div>

            <div className="text-center mb-4">
              <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400
                [text-shadow:2px_2px_0_theme(colors.cyan.900)]"
              >
                商いは、信用と信頼が一番の宝物
              </p>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                {data.name}
              </h1>
              {/* SNSアイコン */}
              <div className="flex justify-center gap-4 mb-6">
                {defaultWebsites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={site.icon}
                      alt={site.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <a href="https://note.com/hareharesky" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/note-pic.jpg"
                  alt="公式noteに飛びます"
                  width={480}
                  height={640}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            {/* 広告運用の専門家画像とLINEボタン */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/dog-suit.png"
                  alt="広告運用の専門家"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-6 shadow-lg border border-cyan-500/20">
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-white font-bold text-xl">
                    テスター募集中
                  </p>
                  <a
                    href="https://lin.ee/ATZ4bog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00B900] text-white px-8 py-3 rounded-full font-bold text-base hover:opacity-90 transition-all duration-300 shadow-lg flex items-center space-x-2 group hover:scale-105"
                  >
                    <span>詳しくはLINEから</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {data.bio && (
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-purple-400" />
                <p className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {data.bio}
                </p>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-500/20 to-purple-500/20 transform rotate-45 translate-x-8 translate-y-8" />
              </div>
            )}



            {/* サービス一覧セクション */}
            <section className="mt-8">
              <ServicesGrid />
            </section>

            {/* わたしの強みセクション - Animated Testimonials */}
            <section className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                わたしの強み
                </h2>
                  </div>
              <AnimatedTestimonials 
                testimonials={strengths} 
                autoplay={true}
                className="py-8"
              />
            </section>

            {/* その他のプロフィールコンテンツがあればここに追加 */}
          </div>
        </article>
      </main>
    </div>
  )
}