import Link from "next/link"

  <div className="mt-4">
    <h3 className="font-semibold text-cyan-400 mb-2">最新記事</h3>
    <ul className="space-y-2">
      <li>
        <Link href="/blog/notion-api-usage" className="hover:text-cyan-400 transition-colors">
          Notion API でできること - ビジネスを自動化する11の活用例 (2025.02.27)
        </Link>
      </li>
      <li>
        <Link href="/blog/homepage-success" className="hover:text-cyan-400 transition-colors">
          結果の出るホームページの作り方 (2025.02.22)
        </Link>
      </li>
      <li>
        <Link href="/blog/lp-development" className="hover:text-cyan-400 transition-colors">
          LPはただ作るだけではダメ！ (2025.02.16)
        </Link>
      </li>
    </ul>
  </div> 