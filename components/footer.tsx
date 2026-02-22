import Link from "next/link"

export default function Footer() {
  const services = [
    {
      title: "LP制作サービス",
      href: "/services#lp-service",
      category: "Webデザイン"
    },
    {
      title: "爆速コーディングサービス",
      href: "/services#coding-service",
      category: "開発"
    },
    {
      title: "広告運用サービス",
      href: "/services#ads-service",
      category: "マーケティング"
    },
    {
      title: "SNS運用サービス",
      href: "/services#sns-service",
      category: "マーケティング"
    },
    {
      title: "SEO対策サービス",
      href: "/services#seo-service",
      category: "マーケティング"
    },
    {
      title: "MEO対策サービス",
      href: "/services#meo-service",
      category: "マーケティング"
    },
    {
      title: "受託開発サービス",
      href: "/services#development-service",
      category: "開発"
    },
    {
      title: "セールスライティングサービス",
      href: "/services#copywriting-service",
      category: "コンテンツ"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* サービス一覧 */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4">サービス</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 最新記事 */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4">最新記事</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/notion-api-usage" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  Notion API でできること - ビジネスを自動化する11の活用例 (2025.02.27)
                </Link>
              </li>
              <li>
                <Link href="/blog/homepage-success" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  結果の出るホームページの作り方 (2025.02.22)
                </Link>
              </li>
              <li>
                <Link href="/blog/lp-development" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  LPはただ作るだけではダメ！ (2025.02.16)
                </Link>
              </li>
            </ul>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  実績
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200/80 hover:text-cyan-400 transition-colors text-sm">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4">お問い合わせ</h3>
            <p className="text-blue-200/80 text-sm mb-4">
              ご相談・お見積もりは無料です。お気軽にお問い合わせください。
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg py-2 px-6 text-sm hover:opacity-90 transition-opacity"
            >
              お問い合わせする
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-blue-200/60 text-sm">
            © 2025 Stellarium あおい. All rights reserved.
          </p>
          <p className="text-blue-200/40 text-xs mt-2">
            運営者: 潮田　碧
          </p>
        </div>
      </div>
    </footer>
  );
}
