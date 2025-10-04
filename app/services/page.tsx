import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, /* getAllCategories */ } from "@/lib/services";
import { generateServiceSchema } from "@/components/schema";

// サービス一覧ページの構造化データ
function generateServicesListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Stellariumサービス一覧',
    description: 'Web制作、マーケティング、コンテンツ制作など、ビジネス成長に必要なサービスをワンストップで提供します。',
    url: 'https://www.stellarium.jp/services',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        url: `https://www.stellarium.jp/services/${service.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Stellarium'
        },
        serviceType: service.category
      }
    }))
  };
}

export const metadata: Metadata = {
  title: "サービス一覧 | Stellarium マーケティング",
  description: "Web制作、マーケティング、コンテンツ制作など、ビジネス成長に必要なサービスをワンストップで提供します。",
  keywords: "Web制作, LP制作, SEO対策, 広告運用, コーディング, AI開発, セールスライティング",
};

export default function ServicesPage() {
  // カテゴリーを特定の順序で取得
  const categories = ["マーケティング", "デザイン", "開発", "コンテンツ"];

  const servicesListSchema = generateServicesListSchema();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          サービス一覧
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          マーケティングからデザイン、Web制作まで、ビジネス成長に必要なサービスを
          ワンストップで提供します
        </p>

        {/* カテゴリー別にサービスを表示（特定の順序で） */}
        {categories.map((category) => {
          // このカテゴリに属するサービスがなければスキップ
          const categoryServices = services.filter(service => service.category === category);
          if (categoryServices.length === 0) return null;
          
          return (
            <div key={category} className="mb-20">
              <h2 className="text-2xl font-bold text-cyan-300 mb-8 pb-2 border-b border-cyan-800/50">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <Link 
                    href={`/services/${service.slug}`} 
                    key={service.id}
                    className="group bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 z-10" />
                      <Image
                        src={service.thumbnail}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        {service.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 flex-1">
                        {service.shortDescription}
                      </p>
                      
                      <div className="space-y-3">
                        {/* 金額表示部分を削除 */}
                        {/* <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">料金</span>
                          <span className="text-cyan-300 font-medium">{service.price}</span>
                        </div> */}
                        
                        <ul className="space-y-2">
                          {service.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="text-cyan-400 mr-2">✓</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 text-right">
                        <span className="text-cyan-400 text-sm font-medium group-hover:underline inline-flex items-center">
                          詳細を見る
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-800/50 mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            お気軽にご相談ください
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            サービスの詳細や料金について、お客様のビジネスに最適なソリューションをご提案いたします。
            まずはお気軽にお問い合わせください。
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

      {/* AI/LLM最適化のための構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesListSchema)
        }}
      />
    </main>
  );
} 