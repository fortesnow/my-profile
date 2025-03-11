'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

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

  return (
    <>
      {/* 固定ヘッダー */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* ロゴ */}
            <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Stellarium マーケティング
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
                      <Link href={item.href || "#"} className="text-gray-300 hover:text-cyan-400 transition-colors py-2">
                        {item.label}
                      </Link>
                      {hoveredItem === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
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

            {/* ハンバーガーメニュー */}
            <button
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-5 relative">
                <span className={`absolute w-full h-0.5 bg-current transition-all ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute w-full h-0.5 bg-current top-2 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute w-full h-0.5 bg-current transition-all ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* フルスクリーンメニュー（モバイル用） */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md md:hidden"
          >
            <div className="container mx-auto px-4 py-20">
              <nav className="space-y-8">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-cyan-500/20 pb-4">
                    {item.items ? (
                      <>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4">
                          <Link href={item.href || "#"} onClick={() => setIsOpen(false)}>
                            {item.label}
                          </Link>
                        </h2>
                        <ul className="space-y-4">
                          {item.items.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 * subIndex }}
                            >
                              <Link
                                href={subItem.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors block"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          href={item.href}
                          className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 