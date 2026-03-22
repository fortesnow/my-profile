import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Stellarium あおい',
  description: '特定商取引法に基づく表記ページです。',
  alternates: {
    canonical: 'https://www.stellarium.jp/legal/tokushoho',
  },
};

export default function TokushohoPage() {
  const items = [
    { label: '販売業者', value: 'Stellarium' },
    { label: '代表者', value: '潮田 碧' },
    {
      label: '所在地',
      value: '請求があった場合に遅滞なく開示いたします。',
    },
    {
      label: '電話番号',
      value: '請求があった場合に遅滞なく開示いたします。',
    },
    {
      label: 'メールアドレス',
      value: 'bluesnow@stellarium.jp',
    },
    {
      label: '販売価格',
      value: '各商品ページに記載しております。',
    },
    {
      label: '商品代金以外の必要料金',
      value: 'なし',
    },
    {
      label: '支払方法',
      value: 'クレジットカード（Stripe決済）',
    },
    {
      label: '支払時期',
      value: '商品購入時に即時決済',
    },
    {
      label: '商品の引渡し時期',
      value:
        'デジタル商品：決済完了後、即時提供いたします。サービス（広告運用等）：契約内容に基づき、別途ご案内いたします。',
    },
    {
      label: '返品・交換・キャンセル',
      value:
        'デジタル商品の性質上、購入後の返品・返金・キャンセルはお受けしておりません。商品に不具合がある場合は、メールにてお問い合わせください。',
    },
    {
      label: '動作環境',
      value:
        '各商品ページに記載の動作環境をご確認ください。',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== items.length - 1
                        ? 'border-b border-cyan-500/10'
                        : ''
                    }
                  >
                    <th className="text-left text-cyan-400 text-sm font-semibold py-4 px-6 w-1/3 align-top whitespace-nowrap">
                      {item.label}
                    </th>
                    <td className="text-blue-200/80 text-sm py-4 px-6">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tools"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              商品一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
