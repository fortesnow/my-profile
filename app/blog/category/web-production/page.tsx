import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WebProductionCategoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Web制作カテゴリーの記事一覧
          </h1>
          <p className="text-gray-300 mb-4">
            Web制作に関する最新のトレンドやテクニックを紹介します。LP制作、コーディング、デザインなど、Web制作に役立つ情報をまとめています。
          </p>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>ブログトップに戻る</span>
          </Link>
        </div>

        <div className="space-y-8">
          {/* ここに記事一覧を表示 */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-cyan-300">
              <Link href="/blog/lp-production-flow" className="hover:underline">
                LP制作の流れを徹底解説｜成功するランディングページの作り方
              </Link>
            </h2>
            <p className="text-gray-300">
              LP（ランディングページ）制作の正しい流れをステップバイステップで解説します。
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
              <span>2025.03.05</span>
              <span>Web制作</span>
            </div>
          </div>

          {/* 他の記事も同様に追加 */}
        </div>
      </div>
    </div>
  );
} 