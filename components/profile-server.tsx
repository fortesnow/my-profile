import { Website, ProfileData } from './types'

const defaultWebsites: Website[] = [
  { icon: "/icons/note-pic.svg", name: "note", url: "https://note.com/hareharesky" },
  { icon: "/icons/aozaki-pic.svg", name: "Anime", url: "https://youtu.be/0YaUlkcpoXw?si=KGwDQklCCVXDvTdO" },
  { icon: "/icons/instagram-pic.svg", name: "Instagram", url: "https://www.instagram.com/stellariumix/" },
  { icon: "/icons/line-pic.svg", name: "LINE", url: "https://lin.ee/ATZ4bog" },
]

export async function ProfileServer(): Promise<ProfileData> {
  const profileData: ProfileData = {
    name: "あおい",
    bio: `実業や経営面で培った思考を垂れ流しています。
売上販促全般的にやり過ぎて万事屋みたいになってます投稿内容で察してください
事業者向けnoteを書いてます読んで損する内容はないです。
連絡や相談は各SNS媒体までお願いします
‪⿻スキルとキャリア
◾︎SNS＆広告運用┊︎ Webデザイン ┊︎ プログラマー ┊︎SEO&コンテンツ┊︎`,
    websites: defaultWebsites,
  }

  return profileData
} 