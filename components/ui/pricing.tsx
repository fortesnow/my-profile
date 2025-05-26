"use client";

import { buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
// import confetti from "canvas-confetti";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "料金プラン",
  description = "お客様のニーズに合わせた最適なプランをご用意しています。\n全てのプランで高品質なLP制作と継続的なサポートを提供します。",
}: PricingProps) {
  const isMonthly = true; // 常に月額表示
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          {title}
        </h2>
        <p className="text-gray-300 text-lg whitespace-pre-line max-w-3xl mx-auto">
          {description}
        </p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-gray-900/50 backdrop-blur-md text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-cyan-500 border-2 shadow-lg shadow-cyan-500/20" : "border-cyan-500/20",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold text-sm">
                  おすすめ
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                                 <span className="text-4xl font-bold tracking-tight text-cyan-400">
                   ¥{(isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)).toLocaleString()}
                 </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">
                  〜
                </span>
              </div>

              <p className="text-xs leading-5 text-gray-400 mb-6">
                基本料金
              </p>

              <ul className="mt-5 gap-3 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-left text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-6 border-gray-700" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-cyan-500 hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent hover:from-cyan-600 hover:to-purple-600"
                    : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-4 text-xs leading-5 text-gray-400">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 