'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

interface ProductCardProps {
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
  index: number;
}

export default function ProductCard({
  productId,
  name,
  price,
  originalPrice,
  description,
  features,
  isPopular = false,
  badge,
  index,
}: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('エラーが発生しました。もう一度お試しください。');
      }
    } catch {
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 1 }}
      whileInView={
        isDesktop
          ? {
              y: isPopular ? -20 : 0,
              opacity: 1,
              x: index === 2 ? -30 : index === 0 ? 30 : 0,
              scale: index === 0 || index === 2 ? 0.94 : 1.0,
            }
          : {}
      }
      viewport={{ once: true }}
      transition={{
        duration: 1.6,
        type: 'spring',
        stiffness: 100,
        damping: 30,
        delay: 0.4,
        opacity: { duration: 0.5 },
      }}
      className={cn(
        'rounded-2xl border-[1px] p-6 bg-gray-900/50 backdrop-blur-md text-center lg:flex lg:flex-col lg:justify-center relative',
        isPopular
          ? 'border-cyan-500 border-2 shadow-lg shadow-cyan-500/20'
          : 'border-cyan-500/20',
        'flex flex-col',
        !isPopular && 'mt-5',
        index === 0 || index === 2
          ? 'z-0 transform translate-x-0 translate-y-0'
          : 'z-10',
        index === 0 && 'origin-right',
        index === 2 && 'origin-left'
      )}
    >
      {badge && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
          <Star className="text-white h-4 w-4 fill-current" />
          <span className="text-white ml-1 font-sans font-semibold text-sm">
            {badge}
          </span>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <p className="text-lg font-semibold text-white mb-2">{name}</p>

        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="mt-6 flex items-center justify-center gap-x-2">
          {originalPrice && (
            <span className="text-xl text-gray-500 line-through">
              ¥{originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-4xl font-bold tracking-tight text-cyan-400">
            ¥{price.toLocaleString()}
          </span>
        </div>

        <p className="text-xs leading-5 text-gray-400 mb-6">買い切り（税込）</p>

        <ul className="mt-5 gap-3 flex flex-col">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
              <span className="text-left text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <hr className="w-full my-6 border-gray-700" />

        <button
          onClick={handlePurchase}
          disabled={loading}
          className={cn(
            'group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter',
            'inline-flex items-center justify-center rounded-md px-4 py-2 h-10',
            'transform-gpu ring-offset-current transition-all duration-300 ease-out',
            'hover:ring-2 hover:ring-cyan-500 hover:ring-offset-1',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isPopular
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent hover:from-cyan-600 hover:to-purple-600'
              : 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700'
          )}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            '購入する'
          )}
        </button>

        <p className="mt-4 text-xs leading-5 text-gray-400">
          Stripeによる安全な決済
        </p>
      </div>
    </motion.div>
  );
}
