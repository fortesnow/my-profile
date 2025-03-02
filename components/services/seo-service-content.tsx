import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export default function SEOServiceContent({}: Props) {
  // SEOサービス固有のコンポーネント
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">SEO対策の主な項目</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-800/30">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">オンページSEO</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">キーワード最適化</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">コンテンツ品質向上</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">メタタグ最適化</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">内部リンク構造の改善</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-cyan-800/30">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">テクニカルSEO</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">ページ表示速度の最適化</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">モバイルフレンドリー対応</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">構造化データの実装</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span className="text-gray-300">コアウェブバイタル最適化</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-cyan-800/30">
        <h3 className="text-xl font-semibold text-white mb-4">検索順位改善の実績</h3>
        <p className="text-gray-300 mb-4">
          当社のSEO対策サービスでは、多くのクライアント様の検索順位を大幅に改善してきました。
          競合が多いキーワードでも、効果的な戦略と継続的な改善により、上位表示を実現しています。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-900/70 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-cyan-400">+156%</p>
            <p className="text-sm text-gray-400">オーガニック流入</p>
          </div>
          <div className="bg-gray-900/70 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-cyan-400">TOP3</p>
            <p className="text-sm text-gray-400">主要キーワード</p>
          </div>
          <div className="bg-gray-900/70 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-cyan-400">+42%</p>
            <p className="text-sm text-gray-400">コンバージョン率</p>
          </div>
          <div className="bg-gray-900/70 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-cyan-400">-35%</p>
            <p className="text-sm text-gray-400">直帰率</p>
          </div>
        </div>
      </div>
    </div>
  );
} 