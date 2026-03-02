import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '購入キャンセル | Stellarium あおい',
  robots: { index: false, follow: false },
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
              購入がキャンセルされました
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              決済は行われていません。
              <br />
              ご質問がございましたらお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg py-3 px-8 hover:opacity-90 transition-opacity"
              >
                ツールページに戻る
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-gray-800 text-white font-medium rounded-lg py-3 px-8 border border-gray-600 hover:bg-gray-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
