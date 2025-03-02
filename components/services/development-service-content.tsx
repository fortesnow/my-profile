import type { Service } from "@/lib/services";
import Image from "next/image";
import { Code, Database, Server } from "lucide-react";

type Props = {
  service: Service;
};

export default function DevelopmentServiceContent({}: Props) {
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
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">開発実績</h2>
      
      <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20 mb-12">
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
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300">データベース設計・構築</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300">モダンなUI/UX設計</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300">クラウドインフラ構築</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 技術スタック */}
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">技術スタック</h2>
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
    </div>
  );
} 