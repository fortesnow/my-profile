import * as React from "react"
import Image from "next/image"
import { ProfileData } from './types'
import { BarChart2, Users, PieChart, MessageSquare, LineChart, Code, Layout, Server, Database } from "lucide-react"
import Link from "next/link"

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
  const skills = [
    { name: "WEBサイト制作＆LP制作", level: 90 },
    { name: "SNS & 広告運用", level: 90 },
    { name: "Webデザイン", level: 85 },
    { name: "プログラミング", level: 90 },
    { name: "SEO & コンテンツ", level: 95 },
    { name: "前を向く誇り", level: 100 },
  ]

  const services = [
    {
      title: "受託開発サービス",
      description: "フロントエンドからバックエンド、インフラまで、フルスタックな開発サービスを提供。最新技術を活用した高品質な開発を実現します。",
      icon: <Code className="w-6 h-6" />,
      href: "/development-service",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "LP制作サービス",
      description: "目的達成に特化したランディングページを制作。商品やサービスの魅力を最大限に引き出し、高いコンバージョン率を実現します。",
      icon: <Layout className="w-6 h-6" />,
      href: "/lp-service",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "爆速コーディングサービス",
      description: "最短当日対応可能。高品質なコードと迅速な納品で、あなたのビジネスを加速させます。",
      icon: <Code className="w-6 h-6" />,
      href: "/coding-service",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      title: "広告運用サービス",
      description: "効率的な運用と継続的な改善で、広告費用対効果（ROAS）を最大化します。",
      icon: <BarChart2 className="w-6 h-6" />,
      href: "/ads-service",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      title: "SEO対策サービス",
      description: "戦略的なSEO施策で、Googleでの検索順位を上げ、オーガニック流入を増やします。",
      icon: <Layout className="w-6 h-6" />,
      href: "/seo-service",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      title: "SNS運用サービス",
      description: "ブランド価値を高め、ファンを増やす効果的なSNS運用戦略を提供します。",
      icon: <Users className="w-6 h-6" />,
      href: "/sns-service",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      title: "セールスライティングサービス",
      description: "動画台本からプレスリリースまで、あらゆる文章で成果を出すライティングを提供します。",
      icon: <Layout className="w-6 h-6" />,
      href: "/writing-service",
      gradient: "from-cyan-500 to-purple-500",
    },
  ]

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

            {/* Skills Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400
                [text-shadow:2px_2px_0_theme(colors.cyan.900)]"
              >
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-md p-4 
                    border-2 border-cyan-200 [box-shadow:4px_4px_0_theme(colors.cyan.900)]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* メディアコンテンツセクション */}
            <section className="py-16 px-6" id="media">
              <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  メディアコンテンツ
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-900/20">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">最新の記事</h3>
                    <div>
                      <span className="text-gray-400 text-sm">2025.02.27</span>
                      <a 
                        href="/blog/notion-api-usage" 
                        className="block text-white hover:text-cyan-400 transition-colors mt-1"
                      >
                        Notion API でできること - ビジネスを自動化する11の活用例
                      </a>
                      <a 
                        href="/blog" 
                        className="inline-flex items-center text-cyan-400 mt-4 text-sm"
                      >
                        すべての記事を見る 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-900/20">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">メディア掲載</h3>
                    <a 
                      href="https://note.com" 
                      target="_blank" 
                      className="block"
                    >
                      <span className="text-gray-400">note</span>
                      <div className="text-white hover:text-cyan-400 transition-colors mt-1">
                        Web制作とマーケティングの実践知識
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* わたしの強みセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                わたしの強み
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-cyan-400">包括的なマルチスキル</h3>
                      <p className="text-gray-300 leading-relaxed">
                        SNS運用、Webデザイン、プログラミング、SEOなど、デジタルマーケティングに必要な幅広いスキルを保有。複合的な視点でプロジェクトを推進できます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-cyan-400">実践的な経験</h3>
                      <p className="text-gray-300 leading-relaxed">
                        実業での経験を活かした実践的なアプローチが可能。理論だけでなく、実際のビジネスシーンで効果を発揮する施策を提案できます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-cyan-400">迅速な対応力</h3>
                      <p className="text-gray-300 leading-relaxed">
                        デジタルマーケティングの急速な変化に対応し、最新のトレンドやテクノロジーを素早くキャッチアップ。クライアントのニーズに柔軟に対応します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LP制作サービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                LP制作サービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      成果を出すためのLP制作
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      戦略的なデザインと効果的なコピーライティングで、
                      確実に成果を出すLPを制作いたします。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">戦略的なデザイン設計</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">CVR最適化</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">レスポンシブ対応</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">詳しいサービス内容はこちら</p>
                      <p className="text-sm text-gray-400">料金プランや制作の流れをご確認いただけます</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/lp-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* コーディングサービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                爆速コーディングサービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      スピード × クオリティ
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      最短当日対応可能。高品質なコードと
                      迅速な納品で、あなたのビジネスを加速させます。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">最短当日納品対応</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">保守性の高いクリーンコード</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">パフォーマンス最適化</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                      <p className="text-cyan-400 font-semibold mb-2">対応技術スタック</p>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">まずはご相談ください</p>
                      <p className="text-sm text-gray-400">最短納期とお見積りをご案内いたします</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/coding-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 広告運用サービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                広告運用サービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      データドリブンな広告運用
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      効率的な運用と継続的な改善で、
                      広告費用対効果（ROAS）を最大化します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <BarChart2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">ROAS改善</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">ターゲティング最適化</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <PieChart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">詳細なレポーティング</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                      <p className="text-cyan-400 font-semibold mb-2">対応広告媒体</p>
                      <div className="flex flex-wrap gap-2">
                        {['Google広告', 'Meta広告', 'LINE広告', 'TikTok広告'].map((ad) => (
                          <span key={ad} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                            {ad}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">まずはご相談ください</p>
                      <p className="text-sm text-gray-400">現状の課題と改善プランをご提案いたします</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/ads-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO対策サービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                SEO対策サービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      検索上位表示で集客力アップ
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      戦略的なSEO施策で、Googleでの検索順位を
                      上げ、オーガニック流入を増やします。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">検索順位改善</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                        <span className="text-gray-300">キーワード戦略</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">コンテンツ最適化</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">詳しいサービス内容はこちら</p>
                      <p className="text-sm text-gray-400">SEO対策の具体的な施策をご確認いただけます</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/seo-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SNS運用サービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                SNS運用サービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      戦略的なSNSマーケティング
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      ブランド価値を高め、ファンを増やす
                      効果的なSNS運用戦略を提供します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">フォロワー増加施策</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">エンゲージメント向上</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <LineChart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">分析・レポーティング</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">まずはご相談ください</p>
                      <p className="text-sm text-gray-400">SNSマーケティング戦略をご提案いたします</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/sns-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 受託開発サービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                受託開発サービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      フルスタック開発
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      フロントエンドからバックエンド、インフラまで、
                      最新技術を活用した高品質な開発を提供します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">フロントエンド開発</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">バックエンド開発</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <Database className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300">インフラ構築</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">まずはご相談ください</p>
                      <p className="text-sm text-gray-400">お客様のニーズに合わせた最適な開発プランをご提案します</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/development-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* セールスライティングサービスセクション */}
            <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md p-8 border-4 border-cyan-200 [box-shadow:8px_8px_0_theme(colors.cyan.900)]">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                セールスライティングサービス
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      プロのライティングで成果を最大化
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      動画台本からプレスリリースまで、
                      あらゆる文章で成果を出すライティングを提供します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">セールスコピー作成</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                          </svg>
                        </div>
                        <span className="text-gray-300">プレスリリース制作</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">動画台本作成</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-300 mb-2">まずはご相談ください</p>
                      <p className="text-sm text-gray-400">あなたのビジネスに最適な文章表現をご提案します</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/writing-service"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>サービス詳細へ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="https://lin.ee/ATZ4bog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <span>お問い合わせ</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* サービス一覧セクション */}
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  サービス一覧
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-md rounded-lg p-3 md:p-6 border border-cyan-500/20"
                    >
                      <div className={`bg-gradient-to-br ${service.gradient} p-3 rounded-lg w-fit mb-4`}>
                        <div className="w-4 h-4 md:w-6 md:h-6">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-cyan-400">{service.title}</h3>
                      <p className="text-xs md:text-base text-gray-300 mb-3 md:mb-6 line-clamp-3">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-xs md:text-base text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        詳しく見る
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  )
}