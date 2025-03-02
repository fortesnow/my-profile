import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import LPServiceContent from '@/components/services/lp-service-content';
import SEOServiceContent from '@/components/services/seo-service-content';
import DevelopmentServiceContent from '@/components/services/development-service-content';
import AdsServiceContent from '@/components/services/ads-service-content';

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'サービスが見つかりません | Stellarium マーケティング',
    }
  }
  
  return {
    title: `${service.title} | Stellarium マーケティング`,
    description: service.description,
  }
}

export default function ServicePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  // 特定のサービスタイプに基づいてカスタムコンテンツをレンダリング
  const renderCustomContent = () => {
    switch (service.id) {
      case 'lp-service':
        return <LPServiceContent service={service} />;
      case 'seo-service':
        return <SEOServiceContent service={service} />;
      case 'development-service':
        return <DevelopmentServiceContent service={service} />;
      case 'ads-service':
        return <AdsServiceContent service={service} />;
      // 他のケース...
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/services" className="flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          サービス一覧に戻る
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          {service.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-10">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
            {service.category}
          </span>
        </div>
        
        {/* サービスイメージ */}
        <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden bg-gradient-to-r from-blue-800/50 to-purple-800/50">
          <Image 
            src={service.thumbnail} 
            alt={service.title} 
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              {service.shortDescription}
            </h2>
          </div>
        </div>

        {/* サービス詳細 */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead">
            {service.description}
          </p>
          
          <h2 className="text-2xl font-bold text-cyan-300 mt-12">サービスの特徴</h2>
          
          <ul className="space-y-4 my-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-cyan-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-cyan-400 font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-gray-200">{feature}</p>
                </div>
              </li>
            ))}
          </ul>
          
          {/* サービス固有のカスタムコンテンツ */}
          {renderCustomContent()}
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-800/50 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {service.title}について詳しく知りたい方へ
            </h2>
            
            <p className="text-gray-300 mb-8">
              具体的な料金やプロジェクトの進め方、事例などについて詳しくご説明いたします。
              お気軽にお問い合わせください。
            </p>
            
            <Link 
              href="https://lin.ee/ATZ4bog"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              無料相談を予約する
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 