import type { Metadata } from 'next';
import ProductHero from '@/components/tools/ProductHero';
import ProductGrid from '@/components/tools/ProductGrid';
import FaqSection from '@/components/tools/FaqSection';

export const metadata: Metadata = {
  title: 'MCPサーバーツール | Stellarium あおい',
  description:
    'Claude AIで広告運用を自動化。Meta Ads MCP、Google Ads MCPサーバーを販売中。買い切りでGitHubリポジトリにアクセス。',
  alternates: {
    canonical: 'https://www.stellarium.jp/tools',
  },
  openGraph: {
    title: 'MCPサーバーツール | Stellarium あおい',
    description:
      'Claude AIで広告運用を自動化。Meta Ads MCP、Google Ads MCPサーバーを販売中。',
    url: 'https://www.stellarium.jp/tools',
    siteName: 'Stellarium',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="pt-24 pb-12">
        <ProductHero />
        <ProductGrid />
        <FaqSection />
      </div>
    </main>
  );
}
