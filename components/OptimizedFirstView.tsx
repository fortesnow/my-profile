import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';

const OptimizedFirstView = () => {
  return (
    <div className="relative h-[90vh] md:h-[95vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* 背景のぼかし効果 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute top-60 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            美容サロン集客<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              次のステージへ
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-6">
            サロン経営者様の集客でお悩みの方へ。<br />
            プロの運用であなたのサロンを輝かせます。
          </p>
          
          {/* モバイルでも表示する実績指標 (コンパクト版) */}
          <motion.div 
            className="mb-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-500">クリック率</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900">5.2%</p>
                <p className="text-xs text-green-600">業界2.3倍</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">CVR</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900">12.8%</p>
                <p className="text-xs text-green-600">業界1.8倍</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">満足度</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-green-600">継続率95%↑</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact"
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg py-3 px-6 shadow-lg transform transition-transform hover:scale-105 mobile-touch-target"
            >
              <span>今すぐ相談する</span>
              <HiArrowNarrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/blog"
              className="flex items-center justify-center bg-white text-gray-900 border border-gray-300 font-medium rounded-lg py-3 px-6 shadow-sm hover:bg-gray-50 transform transition-transform hover:scale-105 mobile-touch-target"
            >
              <span>事例を見る</span>
            </Link>
          </div>
        </motion.div>
        
        {/* デスクトップの詳細実績指標 - モバイルでは非表示 */}
        <motion.div 
          className="hidden md:flex absolute bottom-8 left-0 right-0 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="text-center">
              <p className="text-gray-500 text-sm">平均クリック率</p>
              <p className="text-3xl font-bold text-gray-900">5.2%</p>
              <p className="text-sm text-green-600">業界平均の2.3倍</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">平均CVR</p>
              <p className="text-3xl font-bold text-gray-900">12.8%</p>
              <p className="text-sm text-green-600">業界平均の1.8倍</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">顧客満足度</p>
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-green-600">継続率95%以上</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* モバイル専用のCTA - より目立つように改善 */}
      <motion.div 
        className="md:hidden fixed bottom-4 left-4 right-4 bg-white shadow-xl rounded-lg p-4 touch-manipulation z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-sm font-medium text-gray-800 mb-2">
          初回カウンセリング予約受付中
        </p>
        <Link 
          href="/contact"
          className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg py-3 text-center shadow-sm mobile-touch-target"
        >
          まずは相談してみる
        </Link>
      </motion.div>
    </div>
  );
};

export default OptimizedFirstView; 