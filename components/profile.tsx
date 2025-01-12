'use client'

import * as React from "react"
import Image from "next/image"

interface Website {
  icon: string | null
  name: string
  url: string
}

interface ProfileData {
  name: string
  bio: string
  websites: Website[]
}

const defaultWebsites: Website[] = [
  { icon: "/icons/note-pic.svg", name: "note", url: "https://note.com/hareharesky" },
  { icon: "/icons/aozaki-pic.svg", name: "Anime", url: "https://youtu.be/0YaUlkcpoXw?si=KGwDQklCCVXDvTdO" },
  { icon: "/icons/instagram-pic.svg", name: "Instagram", url: "https://www.instagram.com/stellariumix/" },
  { icon: "/icons/line-pic.svg", name: "LINE", url: "https://lin.ee/ATZ4bog" },
]

export default function Profile() {
  const [profileData] = React.useState<ProfileData>({
    name: "あおい",
    bio: `実業や経営面で培った思考を垂れ流しています。
売上販促全般的にやり過ぎて万事屋みたいになってます投稿内容で察してください
事業者向けnoteを書いてます読んで損する内容はないです。
連絡や相談は各SNS媒体までお願いします
‪⿻スキルとキャリア
◾︎SNS＆広告運用┊︎ Webデザイン ┊︎ プログラマー ┊︎SEO&コンテンツ┊︎`,
    websites: defaultWebsites
  })

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      {/* Header */}
      <div className="relative h-80 bg-cover bg-center overflow-hidden" style={{ 
        backgroundImage: `url('/images/aoko-pic.jpg')`,
        backgroundPosition: '50% 30%'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-500 to-purple-500 transform -skew-y-3" />
      </div>

      {/* Profile Content */}
      <div className="relative px-6 pb-12 -mt-40">
        {/* Profile Picture */}
        <div className="relative mb-8">
          <div className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/aoko-pic.jpg" 
              alt="Profile" 
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-1 rounded-full text-xs font-semibold tracking-wider">
            VISIONARY
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            信用が一番の宝物
          </p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 name-font">{profileData.name}</h1>
          <div className="flex justify-center flex-wrap gap-6 mt-6">
            {profileData.websites.map((website, index) => (
              <a 
                key={index} 
                href={website.url || "#"}
                className="group relative"
                title={website.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  {website.icon ? (
                    <Image src={website.icon} alt={website.name} width={24} height={24} />
                  ) : (
                    <div className="w-6 h-6 text-cyan-400">🌐</div>
                  )}
                </div>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800/90 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {website.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {profileData.bio && (
          <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-purple-400" />
            <p className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">{profileData.bio}</p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-500/20 to-purple-500/20 transform rotate-45 translate-x-8 translate-y-8" />
          </div>
        )}
      </div>
    </div>
  )
}