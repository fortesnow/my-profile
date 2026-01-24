import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: 'サービス一覧 | Stellarium あおい',
  description: 'Webデザイン、開発、マーケティング、コンテンツ制作など、ビジネス成長をサポートする各種サービスを提供しています。',
  keywords: [
    'Webデザイン',
    'LP制作',
    'コーディング',
    '広告運用',
    'SNS運用',
    'SEO対策',
    'MEO対策',
    '受託開発',
    'セールスライティング',
  ],
  alternates: {
    canonical: 'https://www.stellarium.jp/services'
  },
  openGraph: {
    title: 'サービス一覧 | Stellarium あおい',
    description: 'Webデザイン、開発、マーケティング、コンテンツ制作など、ビジネス成長をサポートする各種サービスを提供しています。',
    url: 'https://www.stellarium.jp/services',
    siteName: 'Stellarium',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="pt-24 pb-12">
        <ServicesGrid />
      </div>
    </main>
  );
}

