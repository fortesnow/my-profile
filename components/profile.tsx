'use client'

import * as React from "react"
import Image from "next/image"
import { SkillsSection } from "../components/ui/SkillsSection"
import { ProfileData } from './types'
import { Target, Code2, BarChart2, Users, PieChart } from "lucide-react"

// インタラクティブな要素のみを含むClient Component
export default function ProfileClient({ data }: { data: ProfileData }) {
  const skills = [
    { name: "SNS & 広告運用", level: 90 },
    { name: "Webデザイン", level: 85 },
    { name: "プログラミング", level: 80 },
    { name: "SEO & コンテンツ", level: 88 },
    { name: "前を向く誇り", level: 100 },
  ]

  const services = [
    {
      title: "LP制作",
      description: "戦略的なデザインと効果的なコピーライティングで、成果の出るLPを制作します。",
      icon: Target,
      link: "/lp-service"
    },
    {
      title: "コーディング",
      description: "モダンな技術とクリーンなコードで、保守性の高いWebサイトを構築します。",
      icon: Code2,
      link: "/coding-service"
    },
    {
      title: "広告運用",
      description: "データドリブンな運用で広告効果を最大化。Google/Meta広告の運用代行からLPとの連携まで。",
      icon: BarChart2,
      link: "/ads-service"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      {/* Header */}
      <div
        className="relative h-72 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/aoko-pic.jpg')`,
          backgroundPosition: "50% 20%", // 背景画像を上に寄せる
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-500 to-purple-500 transform -skew-y-3" />
      </div>

      {/* Profile Content */}
      <div className="relative px-6 pb-8 -mt-32"> {/* -mt-40 を -mt-32 に変更して上に寄せる */}
        {/* Profile Picture */}
        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/aoko-pic.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-1 rounded-full text-xs font-semibold tracking-wider">
            VISIONARY
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            商いは、信用と信頼が一番の宝物
          </p>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 name-font">
            {data.name}
          </h1>
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

        {/* SkillsSection component */}
        <SkillsSection skills={skills} />

        {/* 私の強みセクション */}
        <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            私の強み
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
        <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
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
                    <span>無料相談する</span>
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
        <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
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
                    <span>無料相談する</span>
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
        <section className="mt-16 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
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
                    <span>無料相談する</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}