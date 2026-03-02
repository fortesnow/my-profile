import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '購入完了 | Stellarium あおい',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
              ご購入ありがとうございます
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              決済が正常に完了しました。
            </p>
            <p className="text-gray-400 mb-8">
              GitHubアカウントに招待メールが送信されます。
              <br />
              メールまたはGitHubの通知をご確認ください。
            </p>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 mb-8 text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                次のステップ
              </h3>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>GitHubの招待を承認する</li>
                <li>リポジトリをクローンする</li>
                <li>READMEのセットアップガイドに従う</li>
                <li>Claude AIでMCPサーバーを使い始める</li>
              </ol>
            </div>
            <Link
              href="/tools"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg py-3 px-8 hover:opacity-90 transition-opacity"
            >
              ツールページに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
