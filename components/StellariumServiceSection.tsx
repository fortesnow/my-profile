import React from "react";

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

        {/* サービス一覧は別のコンポーネント(ServicesGrid)で管理されます */}
      </div>
    </section>
  );
}; 