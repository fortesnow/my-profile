"use client";

import type { Service } from "@/lib/services";
import Image from "next/image";
import { BarChart, Target, TrendingUp } from "lucide-react";

type Props = {
  service: Service;
};

export function InteractiveFeature() {
  // インタラクティブな要素
  return (
    <button onClick={() => console.log('Clicked')}>
      詳細を見る
    </button>
  );
}

export function StaticServiceContent() {
  const platforms = [
    {
      name: "Google広告",
      description: "検索連動型広告、ディスプレイ広告、YouTube広告など、Googleのプラットフォームを活用した広告運用",
      image: "/services/google-ads.jpg",
    },
    {
      name: "Meta広告",
      description: "Facebook広告、Instagram広告を活用したターゲティング精度の高い広告運用",
      image: "/services/meta-ads.jpg",
    },
    {
      name: "YouTube広告",
      description: "動画コンテンツを活用した認知拡大とコンバージョン獲得のための広告運用",
      image: "/services/youtube-ads.jpg",
    },
  ];

  const caseStudies = [
    {
      title: "美容クリニック",
      result: "広告費用対効果200%改善",
      description: "ターゲット設定とクリエイティブの最適化により、同じ予算で2倍の問い合わせ数を獲得",
    },
    {
      title: "ECサイト",
      result: "ROAS 350%達成",
      description: "商品フィードの最適化と自動入札戦略の調整により、広告費用に対して3.5倍の売上を実現",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">広告運用プラットフォーム</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden border border-cyan-800/30">
            <div className="relative h-48 w-full">
              <Image
                src={platform.image}
                alt={platform.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{platform.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">{platform.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-cyan-300 mb-8 mt-16">広告運用のメリット</h2>
      
      <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-full mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">高度なターゲティング</h3>
            <p className="text-gray-300">
              年齢、性別、興味関心など様々な属性でターゲットを絞り、適切なユーザーにのみ広告を表示
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-full mb-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">データ分析と改善</h3>
            <p className="text-gray-300">
              日々のパフォーマンスデータを分析し、継続的に広告効果を最適化
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">費用対効果の最大化</h3>
            <p className="text-gray-300">
              予算の無駄を削減し、効果の高い広告にリソースを集中することで投資対効果を向上
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">運用事例</h2>
      
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-800/30">
            <div className="flex items-start">
              <div className="bg-cyan-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-cyan-400 font-bold text-xl">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-300 font-medium mb-2">{study.result}</p>
                <p className="text-gray-300">{study.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-cyan-800/30">
        <h3 className="text-xl font-semibold text-white mb-4">広告運用の流れ</h3>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-cyan-500/20 text-cyan-300 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <div>
              <p className="text-lg font-medium text-gray-200">ヒアリング・目標設定</p>
              <p className="text-gray-400">ビジネスの現状や課題、目標について詳細にヒアリングします。</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-cyan-500/20 text-cyan-300 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <div>
              <p className="text-lg font-medium text-gray-200">戦略立案</p>
              <p className="text-gray-400">広告プラットフォーム、ターゲット設定、予算配分などの戦略を立案します。</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-cyan-500/20 text-cyan-300 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
            <div>
              <p className="text-lg font-medium text-gray-200">広告出稿・運用開始</p>
              <p className="text-gray-400">クリエイティブ制作、入札設定を行い広告を開始します。</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-cyan-500/20 text-cyan-300 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
            <div>
              <p className="text-lg font-medium text-gray-200">データ分析・改善</p>
              <p className="text-gray-400">日々のデータを分析し、継続的に運用を改善します。</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-cyan-500/20 text-cyan-300 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
            <div>
              <p className="text-lg font-medium text-gray-200">レポーティング</p>
              <p className="text-gray-400">定期的に詳細な運用レポートを提出し、今後の戦略について提案します。</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

// デフォルトエクスポートを追加
export default function AdsServiceContent({ service }: Props) {
  // 既存のコンポーネントロジックを使用
  return (
    <div className="mt-16">
      {/* 既存のコンテンツをここに */}
    </div>
  );
} 