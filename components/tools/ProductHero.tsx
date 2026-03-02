'use client';

import { motion } from 'framer-motion';

export default function ProductHero() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
          MCP Server Tools
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Claude AIと連携して広告運用を自動化する
          <br className="hidden sm:block" />
          MCPサーバーツールを買い切りで提供します。
        </p>
        <p className="mt-4 text-gray-400">
          購入後、GitHubプライベートリポジトリへのアクセス権が自動で付与されます。
        </p>
      </motion.div>
    </section>
  );
}
