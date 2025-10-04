"use client"

import Image from "next/image"
import { Users, MessageSquare, LineChart } from "lucide-react"
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from "react-icons/fa"
import { generateServiceSchema } from "@/components/schema"

// SNS運用サービスの特徴を定義
const snsServiceFeatures = [
  '各種SNSの戦略的運用でブランド価値を向上',
  'ターゲット層に響くコンテンツ戦略',
  'フォロワー増加・エンゲージメント向上',
  'X(旧Twitter)・Instagram・TikTokの運用代行',
  'ブランディングと集客に効果的なコンテンツ戦略',
  '効果測定・継続的な改善',
  'ユーザーとの積極的なコミュニケーション',
  'データに基づく改善提案'
];

// 構造化データを生成
const generateSNSServiceSchema = () => generateServiceSchema({
  name: 'SNS運用サービス',
  description: 'X(旧Twitter)・Instagram・TikTokなどのSNS運用代行。ブランディングと集客に効果的なコンテンツ戦略を提供します。',
  category: 'マーケティング',
  features: snsServiceFeatures,
  url: 'https://www.stellarium.jp/services/sns-service'
});

export default function SNSService() {
  const snsServiceSchema = generateSNSServiceSchema();

  const features = [
    {
      title: "フォロワー増加施策",
      description: "ターゲット層に響くコンテンツ戦略で、質の高いフォロワーを増やします。",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "エンゲージメント向上",
      description: "ユーザーとの積極的なコミュニケーションで、エンゲージメント率を向上させます。",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "分析・レポーティング",
      description: "データに基づく改善提案と、詳細な分析レポートを提供します。",
      icon: <LineChart className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            SNS運用サービス
          </h1>
          <p className="text-xl text-gray-300">
            戦略的なSNSマーケティングで、ブランド価値を高めます
          </p>
        </div>

        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/9]">
          <Image
            src="/images/zunda-pic.png"
            alt="SNS運用サービスのイメージ"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                SNSマーケティングのプロフェッショナル
              </h2>
              <p className="text-lg text-gray-200">
                戦略立案から運用まで、一貫したSNSマーケティングをサポート
              </p>
            </div>
          </div>
        </div>

        {/* 特徴セクション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            サービスの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対応SNSプラットフォーム */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            対応SNSプラットフォーム
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FaInstagram className="w-8 h-8 text-[#E1306C]" />
                <h3 className="text-xl font-semibold text-cyan-400">Instagram</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・フィード投稿</li>
                <li>・ストーリーズ</li>
                <li>・リール</li>
                <li>・ハッシュタグ戦略</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FaTwitter className="w-8 h-8 text-[#1DA1F2]" />
                <h3 className="text-xl font-semibold text-cyan-400">Twitter</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・ツイート運用</li>
                <li>・フォロワー施策</li>
                <li>・トレンド分析</li>
                <li>・エンゲージメント向上</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FaFacebookF className="w-8 h-8 text-[#1877F2]" />
                <h3 className="text-xl font-semibold text-cyan-400">Facebook</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・ページ運用</li>
                <li>・コミュニティ管理</li>
                <li>・イベント告知</li>
                <li>・広告連携</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <FaTiktok className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-cyan-400">TikTok</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>・動画制作</li>
                <li>・トレンド対応</li>
                <li>・ハッシュタグ戦略</li>
                <li>・インフルエンサー連携</li>
              </ul>
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
              あなたのビジネスに最適なSNS戦略をご提案いたします
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

        {/* AI/LLM最適化のための構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(snsServiceSchema)
          }}
        />
      </div>
    </div>
  )
} 