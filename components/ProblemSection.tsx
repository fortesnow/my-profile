import React from "react";
import { Clock, DollarSign, Compass, Users } from "lucide-react";

interface Problem {
  icon: "clock" | "money" | "compass" | "users";
  text: string;
}

const iconMap = {
  clock: Clock,
  money: DollarSign,
  compass: Compass,
  users: Users,
};

const problems: Problem[] = [
  {
    icon: "clock",
    text: "SNS運用に多くの時間を取られているが、売上につながっている実感がない。"
  },
  {
    icon: "money",
    text: "広告費をかけているのに、期待したほどの効果が出ていない。"
  },
  {
    icon: "compass",
    text: "何から手をつければ良いのか、マーケティングの優先順位がわからない。"
  },
  {
    icon: "users",
    text: "良い商品・サービスなのに、本当に届けたい顧客層に知ってもらえていない。"
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-gradient-to-br from-gray-900/60 to-blue-900/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-cyan-500/20">
        {/* ヘッドライン */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            こんなことで悩んでいませんか？
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* 悩み一覧 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon];
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* まとめ */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              その悩み、Stellariumが解決の「道しるべ」を示します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 