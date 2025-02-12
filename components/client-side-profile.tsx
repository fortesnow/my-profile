'use client'

import Image from "next/image"
import { Website } from './types'

interface ClientSideProfileProps {
  profileImage: string
  name: string
  websites: Website[]
}

export default function ClientSideProfile({ profileImage, name, websites }: ClientSideProfileProps) {
  return (
    <>
      {/* Profile Picture - インタラクティブな要素を含む部分 */}
      <div className="relative mb-6">
        <div 
          className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300"
          role="img"
          aria-label="あおいのプロフィール画像"
        >
          <Image
            src={profileImage}
            alt="Profile"
            width={160}
            height={160}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
          bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-1 rounded-full text-xs font-semibold tracking-wider"
        >
          <span>VISIONARY</span>
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
          {name}
        </h1>
        {/* SNSアイコン */}
        <div className="flex justify-center gap-4 mb-6">
          {websites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={site.icon || ''}
                alt={site.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
} 