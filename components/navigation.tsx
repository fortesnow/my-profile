'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // スクロール検知の最適化（useCallbackで関数をメモ化）
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])
  
  // スクロール検知の追加
  useEffect(() => {
    // パフォーマンス向上のためpassiveオプションを追加
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // メニュー開閉時にスクロール固定
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { label: "Home", href: "/" },
    { 
      label: "サービス", 
      href: "/services",
      items: [
        { name: "受託開発", href: "/services/development-service" },
        { name: "LP制作", href: "/services/lp-service" },
        { name: "コーディング", href: "/services/coding-service" },
        { name: "広告運用", href: "/services/ads-service" },
        { name: "SEO対策", href: "/services/seo-service" },
        { name: "SNS運用", href: "/services/sns-service" },
        { name: "Webサイト制作", href: "/services/website-service" },
        { name: "セールスライティング", href: "/services/writing-service" },
        { name: "AI開発", href: "/services/ai-service" },
      ]
    },
    { label: "ブログ", href: "/blog" },
    { label: "お問い合わせ", href: "/contact" },
  ]

  // モバイルメニューを閉じる関数
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* 固定ヘッダー - スクロール状態によってサイズ変更 */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300 ${
          scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className={`flex justify-between items-center h-full`}>
            {/* ロゴ - スクロール時にサイズ変更 */}
            <Link 
              href="/" 
              className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 touch-area ${
                scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
              }`}
              aria-label="ホームページへ戻る"
            >
              Stellarium
            </Link>

            {/* PCメニュー */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.items ? (
                    <>
                      <Link 
                        href={item.href || "#"} 
                        className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                        aria-expanded={hoveredItem === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                      </Link>
                      <AnimatePresence>
                        {hoveredItem === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-64 bg-gray-900/95 backdrop-blur-md py-4 rounded-lg shadow-xl"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ハンバーガーメニュー - タップターゲット拡大 */}
            <button
              className="p-2 flex items-center justify-center w-12 h-12 text-cyan-400 hover:text-cyan-300 transition-colors md:hidden touch-manipulation touch-area"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 relative">
                <span className={`absolute w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute w-full h-0.5 bg-current top-2 transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* フルスクリーンメニュー（モバイル用）- タップ領域拡大 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* メニューコンテンツ - 全画面表示 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-50 bg-gray-900 shadow-xl md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-gray-800/50 text-cyan-400 w-10 h-10 flex items-center justify-center touch-area"
                  aria-label="メニューを閉じる"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="container mx-auto flex flex-col h-[calc(100vh-80px)]">
                <nav className="px-4 py-2 flex-grow">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <div key={index} className="border-b border-cyan-500/20 pb-4">
                        {item.items ? (
                          <>
                            <h2 className="text-xl font-bold text-cyan-400 mb-2">
                              <Link 
                                href={item.href || "#"} 
                                onClick={closeMenu}
                                className="block py-3 px-2 rounded-lg touch-manipulation hover:bg-gray-800/50"
                              >
                                {item.label}
                              </Link>
                            </h2>
                            <ul className="pl-2 space-y-1">
                              {item.items.map((subItem, subIndex) => (
                                <motion.li
                                  key={subIndex}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.05 * subIndex, duration: 0.2 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors block py-3 px-3 rounded-lg touch-manipulation hover:bg-gray-800/50"
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.05 * index, duration: 0.2 }}
                          >
                            <Link
                              href={item.href}
                              className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors block py-3 px-2 rounded-lg touch-manipulation hover:bg-gray-800/50"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
                
                {/* 追加のCTAボタン */}
                <div className="px-4 pb-8">
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg py-4 text-center shadow-md mobile-touch-target"
                    >
                      今すぐ相談する
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 