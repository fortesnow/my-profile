'use client';

import React from 'react';
import { Code, Layout, BarChart2, LineChart, MessageSquare, ArrowRight, Twitter, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// サービス情報の型定義
interface ServiceItem {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  href: string;
}

export default function ServicesGrid() {
  // サービス一覧
  const services: ServiceItem[] = [
    {
      icon: <Layout className="w-4 h-4" />,
      category: "Webデザイン",
      title: "LP制作サービス",
      description: "目的達成に特化したランディングページを制作。商品やサービスの魅力を最大限に引き出し、高いコンバージョン率を実現します。",
      href: "/lp-service",
    },
    {
      icon: <Code className="w-4 h-4" />,
      category: "開発",
      title: "爆速コーディングサービス",
      description: "最短当日対応可能。高品質なコードと迅速な納品で、あなたのビジネスを加速させます。",
      href: "/services/coding-service",
    },
    {
      icon: <BarChart2 className="w-4 h-4" />,
      category: "マーケティング",
      title: "広告運用サービス",
      description: "Google・Meta・X・TikTokなど各種広告プラットフォームの運用代行。ROIを最大化する広告戦略を提案します。",
      href: "https://www.stellarium.jp/services/ads-service",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      category: "マーケティング",
      title: "SNS運用サービス",
      description: "X(旧Twitter)・Instagram・TikTokなどのSNS運用代行。ブランディングと集客に効果的なコンテンツ戦略を提供します。",
      href: "/services/sns-service",
    },
    {
      icon: <LineChart className="w-4 h-4" />,
      category: "マーケティング",
      title: "SEO対策サービス",
      description: "検索エンジンからの自然流入を増やし、持続的な集客を実現。コンテンツ戦略からテクニカルSEOまで総合的に対応します。",
      href: "/services/seo-service",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      category: "マーケティング",
      title: "MEO対策サービス",
      description: "Googleマップでの上位表示を実現し、地域密着型ビジネスの集客を強化。店舗への来店数増加をサポートします。",
      href: "/services/meo-service",
    },
    {
      icon: <Code className="w-4 h-4" />,
      category: "開発",
      title: "受託開発サービス",
      description: "Webアプリ、業務システム、ECサイトなど、お客様のニーズに合わせたシステム開発を提供します。",
      href: "/services/development-service",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      category: "コンテンツ",
      title: "セールスライティングサービス",
      description: "購買意欲を高めるコピーライティングで、コンバージョン率を向上。お客様の商品・サービスの魅力を最大限に伝えます。",
      href: "/services/writing-service",
    },
  ];

  return (
    <div className="w-full py-12 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          サービス一覧
        </h2>
        
        {/* 外枠全体に点線の境界線を追加 */}
        <div className="border border-dashed border-white/30">
          <div id="grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              // グリッドレイアウトでの位置を計算
              const rowCount = Math.ceil(services.length / 3);
              const colCount = 3;
              
              const row = Math.floor(index / colCount) + 1;  // 1から始まる行番号
              const col = (index % colCount) + 1;  // 1から始まる列番号
              
              // 最後の行と列の判定
              const isLastRow = row === rowCount;
              const isLastCol = col === colCount || (isLastRow && index === services.length - 1);
              
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={cn(
                    "relative w-full p-6 hover:bg-muted/10 transition-all duration-150 group/item",
                    
                    // 常に右と下に破線を表示（最後の行/列以外）
                    "border-dashed border-white/30",
                    
                    // 下の境界線
                    {
                      "border-b": !isLastRow,
                    },
                    
                    // 右の境界線
                    {
                      "border-r": !isLastCol,
                    }
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="group-hover/item:animate-pulse">{service.icon}</span>
                      <h3 className="text-blue-300 text-sm font-medium">{service.category}</h3>
                    </div>
                    <ArrowRight className="size-4 opacity-0 scale-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:-translate-x-0 group-hover/item:scale-100 transition-all duration-150" />
                  </div>
                  <h1 className="text-xl font-semibold tracking-tight mb-2 text-white">{service.title}</h1>
                  <p className="text-blue-200/80 text-sm">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 