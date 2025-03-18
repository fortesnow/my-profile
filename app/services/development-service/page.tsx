"use client"

import Image from "next/image"
// 二重インポートを削除
// import '@hackernoon/pixel-icon-library/fonts/iconfont.css';
// Lucide Reactのアイコンは不要になるので削除
// import { Code, Server, Database, Layout } from "lucide-react"

export default function DevelopmentServicePage() {
  const services = [
    {
      title: "フルスタック開発",
      description: "フロントエンドからバックエンドまで、一貫した開発体制でシステム構築を提供します。",
      icon: <i className="hn hn-bracket text-2xl"></i>,
    },
    {
      title: "サーバー構築・運用",
      description: "AWSやGCPを活用したクラウドインフラの設計から運用保守まで対応します。",
      icon: <i className="hn hn-aws text-2xl"></i>,
    },
    {
      title: "データベース設計",
      description: "効率的なデータ構造の設計と、パフォーマンスを考慮した実装を行います。",
      icon: <i className="hn hn-table text-2xl"></i>,
    },
    {
      title: "UI/UX設計",
      description: "使いやすさと見た目の美しさを両立したインターフェース設計を提供します。",
      icon: <i className="hn hn-grid text-2xl"></i>,
    },
  ]

  const techStacks = [
    {
      category: "フロントエンド",
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"],
    },
    {
      category: "バックエンド",
      techs: ["Node.js", "Python", "Go", "PHP", "Ruby"],
    },
    {
      category: "インフラ",
      techs: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "データベース",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 pt-32">
        {/* ヒーローセクション */}
        <div className="text-center mb-16 pt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            受託開発サービス
          </h1>
          <p className="text-xl text-gray-300">
            フロントエンドからバックエンドまで、あらゆる開発ニーズにお応えします
          </p>
        </div>

        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/9]">
          <Image
            src="/images/zunda-pic.png"
            alt="受託開発サービスのイメージ"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                フルスタック開発
              </h2>
              <p className="text-lg text-gray-200">
                最新技術を活用した高品質な開発を提供
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

        {/* 開発実績セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            開発実績
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20">
            <div className="space-y-8">
              {/* プロジェクト概要 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                    会員管理システム開発
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    データベース設計からUI/UX、デプロイまでを一貫して担当。
                    短期間での開発要件に応え、高品質なSaaSアプリケーションを実現しました。
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">プロジェクト概要</h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• 会員情報の一括管理システム</li>
                      <li>• 検索・フィルタリング機能</li>
                      <li>• 権限管理システム</li>
                      <li>• レスポンシブ対応</li>
                      <li>• クラウドベースの運用</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/app-sample.png"
                      alt="会員管理システムのスクリーンショット"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/app-sample2.png"
                      alt="会員管理システムの詳細画面"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 技術詳細 */}
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                    <i className="hn hn-table text-2xl"></i>
                  </div>
                  <span className="text-gray-300">データベース設計・構築</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                    <i className="hn hn-grid text-2xl"></i>
                  </div>
                  <span className="text-gray-300">モダンなUI/UX設計</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                    <i className="hn hn-aws text-2xl"></i>
                  </div>
                  <span className="text-gray-300">クラウドインフラ構築</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            技術スタック
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              まずはご相談ください
            </h2>
            <p className="text-gray-300 mb-8">
              お客様のニーズに合わせた最適な開発プランをご提案いたします
            </p>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>お問い合わせ</span>
              <i className="hn hn-chevron-right text-xl ml-2"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
} 