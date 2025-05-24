import * as React from "react"
import Image from "next/image"
import { ProfileData } from './types'
import { motion } from "framer-motion"
import ServicesGrid from "./ServicesGrid"

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
  // アニメーション用のバリアント
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <main>
        <article>
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

            {/* わたしの強みセクション - 漫画風デザイン */}
            <motion.section 
              id="my-strengths-manga"
              className="mt-16 p-8 rounded-xl"
              style={{
                background: "linear-gradient(135deg,#fff 0%,#fdf6ff 100%)"
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 text-center text-gray-800"
                style={{ fontFamily: "'Bangers','Anime Ace',sans-serif" }}
                variants={itemVariants}
              >
                わたしの強み
              </motion.h2>
              
              <motion.div 
                className="flex flex-col md:flex-row gap-4 relative"
                variants={containerVariants}
              >
                {/* 漫画パネル1: 包括的なマルチスキル */}
                <motion.div 
                  className="flex-1 bg-white p-0 rounded-lg overflow-hidden relative border-[3px] border-black transform"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/manga1.png"
                      alt="ノートPCを掲げ、幅広いスキルを示すマーケターのイラスト"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      包括的なマルチスキル
                    </h3>
                    <p className="text-gray-700 text-sm text-center">
                      SNS運用、Webデザイン、プログラミング、SEOなど、デジタルマーケティングに必要な幅広いスキルを保有し複合的な戦略を提起実地します
                    </p>
                  </div>
                </motion.div>
                
                {/* 漫画パネル2: 実践的な経験 */}
                <motion.div 
                  className="flex-1 bg-white p-0 rounded-lg overflow-hidden relative border-[3px] border-black transform"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/manga2.png"
                      alt="ダッシュボードを指差し、実践的な分析を行うマーケターのイラスト"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      実践的な経験
                    </h3>
                    <p className="text-gray-700 text-sm text-center">
                      実業での経験を活かした実践的なアプローチが可能！理論だけでなく、実際のビジネスシーンで効果を発揮する施策を提案！
                    </p>
                  </div>
                </motion.div>
                
                {/* 漫画パネル3: 迅速な対応力 */}
                <motion.div 
                  className="flex-1 bg-white p-0 rounded-lg overflow-hidden relative border-[3px] border-black transform"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/manga3.png"
                      alt="クライアントとハイタッチし、迅速な成果を祝うイラスト"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      迅速な対応力
                    </h3>
                    <p className="text-gray-700 text-sm text-center">
                      経験を活かして、潜在的な需要からニーズを深堀り。目的に応じて逆算した筋道を柔軟に整地します
                    </p>
                  </div>
                </motion.div>

                {/* マンガ風装飾 - スピードライン */}
                <div className="absolute -top-4 -right-4 w-24 h-24 pointer-events-none opacity-30">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="2" />
                    <line x1="20" y1="10" x2="90" y2="80" stroke="black" strokeWidth="2" />
                    <line x1="30" y1="10" x2="90" y2="70" stroke="black" strokeWidth="2" />
                    <line x1="40" y1="10" x2="90" y2="60" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none opacity-30 transform rotate-180">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="2" />
                    <line x1="20" y1="10" x2="90" y2="80" stroke="black" strokeWidth="2" />
                    <line x1="30" y1="10" x2="90" y2="70" stroke="black" strokeWidth="2" />
                    <line x1="40" y1="10" x2="90" y2="60" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
              </motion.div>
            </motion.section>

            {/* その他のプロフィールコンテンツがあればここに追加 */}
          </div>
        </article>
      </main>
    </div>
  )
}