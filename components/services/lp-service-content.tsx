import Image from "next/image";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export default function LPServiceContent({ service }: Props) {
  // LPサービス固有のコンポーネント
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-cyan-300 mb-8">制作の流れ</h2>
      
      <div className="space-y-8">
        {service.customContent?.process.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-cyan-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span className="text-cyan-400 font-bold text-xl">{index + 1}</span>
            </div>
            <div>
              <p className="text-xl text-gray-200">{step}</p>
            </div>
          </div>
        ))}
      </div>
      
      {service.customContent?.casestudy && service.customContent.casestudy.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-cyan-300 mt-16 mb-8">事例紹介</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.customContent.casestudy.map((case_study, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden border border-cyan-800/30">
                <div className="relative h-48 w-full">
                  <Image
                    src={case_study.image}
                    alt={case_study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{case_study.title}</h3>
                  <p className="text-cyan-300 font-medium">{case_study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 