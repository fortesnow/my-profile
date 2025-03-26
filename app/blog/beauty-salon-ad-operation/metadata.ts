import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【集客2倍】美容院の広告運用完全ガイド｜失敗しない7つの戦略と実践テクニック',
  description: '美容院の広告運用で失敗したくないオーナー必見！Meta広告・Google広告・ホットペッパー等を活用し、費用対効果を最大化する7つの戦略と実践テクニックをプロが徹底解説。',
  keywords: ['美容院 広告運用', '美容室 集客', 'サロン 広告', 'Meta広告 美容院', 'Google広告 美容院', 'ホットペッパービューティー 広告', '美容院 マーケティング'],
  openGraph: {
    title: '【集客2倍】美容院の広告運用完全ガイド｜失敗しない7つの戦略と実践テクニック',
    description: '美容院の広告運用で集客を倍増させる具体的な戦略を解説。費用対効果を高め、新規顧客を獲得するための実践的ノウハウが満載です。',
    type: 'article',
    url: 'https://www.stellarium.jp/blog/beauty-salon-ad-operation', // TODO: 公開時に正しいURLに修正
    images: [
      {
        url: '/blog/eye-catch/beauty-salon-ad-operation.jpg', // 仮のOGP画像パス
        width: 1200,
        height: 630,
        alt: '美容院の広告運用ガイド',
      },
    ],
    siteName: 'ステラリウム | Webサイト制作・Webマーケティング',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【集客2倍】美容院の広告運用完全ガイド｜失敗しない7つの戦略と実践テクニック',
    description: '美容院の広告運用で集客を倍増させる具体的な戦略を解説。費用対効果を高め、新規顧客を獲得するための実践的ノウハウが満載です。',
    images: ['/blog/eye-catch/beauty-salon-ad-operation.jpg'], // 仮のTwitterカード画像パス
    // creator: '@your_twitter_handle', // 必要であれば設定
  },
}; 