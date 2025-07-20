import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export const StellariumServiceSection: React.FC = () => {
  return (
    <section className="mt-16 mb-8" id="services">
      <div className="bg-gradient-to-br from-gray-900/60 to-blue-900/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-cyan-500/20">
        {/* ヘッドライン */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            SERVICE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* サービス一覧 */}
        <div className="space-y-12">
          {/* フロントエンド商品 */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              初回限定
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                【初回限定】SNSアカウント超速診断＆改善戦略レポート
              </h3>
              <p className="text-cyan-400 font-semibold mb-4">
                まずはリスクなく専門家の視点を試したい方へ
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                現状のアカウントをプロが徹底分析し、競合比較や具体的な改善アクションプランを詳細なレポートでご提出。
                明日から何をすべきかが明確になり、もう一人で悩む必要がなくなります。
              </p>
            </div>

            {/* 提供内容 */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">提供内容</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "現状分析と課題の明確化",
                  "競合アカウント調査", 
                  "具体的な改善アクションプラン",
                  "3ヶ月後の目標達成ロードマップ",
                  "1時間のオンライン解説コンサルティング付き"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 価格と特典 */}
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50,000円（税込）</div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="#contact-form-a" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                改善する
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}; 