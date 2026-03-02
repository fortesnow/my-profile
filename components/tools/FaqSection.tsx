'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'MCPサーバーとは何ですか？',
    answer:
      'MCP（Model Context Protocol）は、Claude AIなどのLLMが外部サービスと連携するための標準プロトコルです。MCPサーバーを導入することで、AIが直接広告プラットフォームを操作できるようになります。',
  },
  {
    question: '購入後のアクセス方法を教えてください',
    answer:
      '購入時にGitHubユーザー名をご入力いただきます。決済完了後、自動的にGitHubプライベートリポジトリへの招待が送信されます。GitHubの通知またはメールからリポジトリにアクセスしてください。',
  },
  {
    question: 'セットアップは難しいですか？',
    answer:
      'リポジトリ内に詳細なセットアップガイドを用意しています。基本的にはClaudeのMCP設定にサーバー情報を追加するだけで使い始められます。不明点があれば導入サポートもご利用いただけます。',
  },
  {
    question: 'アップデートは含まれますか？',
    answer:
      'はい。リポジトリへのアクセス権がある限り、最新のアップデートをpullしてご利用いただけます。APIの変更や機能追加は継続的に行います。',
  },
  {
    question: '返金は可能ですか？',
    answer:
      '本商品はデジタルコンテンツの特性上、購入後の返金には対応しておりません。ご購入前にご不明な点がございましたら、お気軽にお問い合わせください。',
  },
];

export default function FaqSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        よくあるご質問
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">
              {faq.question}
            </h3>
            <p className="text-gray-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
