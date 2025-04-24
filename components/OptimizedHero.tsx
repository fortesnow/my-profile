import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const OptimizedHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 touch-manipulation mobile-touch-spacing-lg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-purple-200 opacity-30 blur-xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-200 opacity-20 blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div 
          className="mb-4"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={0}
          variants={fadeIn}
        >
          <Image 
            src="/logo-simplified.svg" 
            alt="ロゴ" 
            width={60} 
            height={60} 
            className="mx-auto"
          />
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold mb-2 text-gray-800"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={1}
          variants={fadeIn}
        >
          あなたのサロンを輝かせる<br />広告運用サポート
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-6"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={2}
          variants={fadeIn}
        >
          集客に悩む美容室オーナーのための<br />結果重視のマーケティング支援
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={3}
          variants={fadeIn}
        >
          <Link href="/contact" className="inline-block mobile-touch-target touch-area bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full py-3 px-8 shadow-lg transition-transform duration-200 transform hover:scale-105">
            相談してみる
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs mb-2">詳しく見る</span>
          <div className="w-1 h-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-blue-400 animate-pulse rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OptimizedHero; 