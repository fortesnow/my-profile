import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX, HiHome, HiInformationCircle, HiDocumentText, HiMail } from 'react-icons/hi';

const MobileOptimizedNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // パフォーマンス向上のためuseCallbackでハンドラをメモ化
  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;
    
    // 上にスクロールした時は表示
    if (currentScrollPosition < lastScrollPosition) {
      setIsVisible(true);
    } 
    // 下にスクロールした時かつ100px以上スクロールしたら非表示
    else if (currentScrollPosition > 100 && currentScrollPosition - lastScrollPosition > 10) {
      setIsVisible(false);
      setIsOpen(false); // メニューを閉じる
    }
    
    setLastScrollPosition(currentScrollPosition);
  }, [lastScrollPosition]);

  useEffect(() => {
    // パフォーマンス向上のためpassiveオプションを追加
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // メニュー開閉時のスクロール制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'ホーム', href: '/', icon: <HiHome className="w-5 h-5" /> },
    { name: '私たちについて', href: '/about', icon: <HiInformationCircle className="w-5 h-5" /> },
    { name: 'ブログ', href: '/blog', icon: <HiDocumentText className="w-5 h-5" /> },
    { name: 'お問い合わせ', href: '/contact', icon: <HiMail className="w-5 h-5" /> },
  ];

  // 背景モーションバリアント
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // メニューモーションバリアント
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' }
  };

  return (
    <>
      <motion.header 
        className="fixed w-full top-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm touch-manipulation"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="touch-area py-2 px-1">
            <span className="font-bold text-xl text-gray-800">ProfileMe</span>
          </Link>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full touch-area mobile-touch-target w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ背景 */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            {/* メニューコンテンツ */}
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs bg-white pt-16 touch-manipulation overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center touch-area"
                  aria-label="メニューを閉じる"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="container mx-auto px-4 pt-2">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.2 }}
                    >
                      <Link 
                        href={item.href}
                        className="flex items-center p-4 touch-area mobile-touch-target rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMenu}
                      >
                        {item.icon}
                        <span className="ml-3 font-medium">{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <motion.div 
                className="fixed bottom-8 left-0 right-0 flex justify-center px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 w-full touch-area mobile-touch-target text-white font-semibold rounded-lg py-4 px-8 shadow-lg text-center"
                  onClick={closeMenu}
                >
                  相談してみる
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileOptimizedNav; 