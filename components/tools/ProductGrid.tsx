'use client';

import ProductCard from './ProductCard';

const products = [
  {
    productId: 'meta-ads',
    name: 'Meta Ads MCP Server',
    price: 50000,
    description:
      'Claude AIからMeta広告（Facebook/Instagram）を直接操作。キャンペーン作成から最適化、レポート取得まで完全自動化。',
    features: [
      'キャンペーン・広告セットの作成/編集/管理',
      'パフォーマンスレポートの自動取得',
      'カスタムオーディエンスの作成・管理',
      '画像/動画アセットの管理',
      'Instagram広告との連携',
      'GitHubプライベートリポジトリへのアクセス',
    ],
  },
  {
    productId: 'bundle',
    name: 'Meta + Google Ads セット',
    price: 80000,
    originalPrice: 100000,
    description:
      '両方のMCPサーバーをお得なセット価格で。広告運用をクロスプラットフォームで完全自動化。',
    features: [
      'Meta Ads MCPの全30機能',
      'Google Ads MCPの全32機能',
      '¥20,000 お得なセット割引',
      'クロスプラットフォーム運用',
      '両リポジトリへのアクセス',
      '優先サポート付き',
    ],
    isPopular: true,
    badge: 'おすすめ',
  },
  {
    productId: 'google-ads',
    name: 'Google Ads MCP Server',
    price: 50000,
    description:
      'Claude AIからGoogle広告を直接操作。検索・ディスプレイ・P-MAXキャンペーンの管理を完全自動化。',
    features: [
      'キャンペーンの作成/編集/入札管理',
      'レスポンシブ検索広告の作成・編集',
      'キーワード・除外キーワード管理',
      'サイトリンク・コールアウト拡張',
      'GAQL直接クエリ対応',
      'GitHubプライベートリポジトリへのアクセス',
    ],
  },
];

export default function ProductGrid() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={product.productId} {...product} index={index} />
        ))}
      </div>
    </section>
  );
}
