import { 
  Boxes, Atom, FileCode2, Palette,
  Server, Database, Container, Cloud,
  Code, Paintbrush, Terminal  // Terminal を追加
} from "lucide-react"

export const techStack = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Paintbrush },
  { name: "Next.js", icon: Boxes },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Python", icon: Terminal },  // Python を追加
  { name: "TailwindCSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Git", icon: Container }, // Dockerの代わりにGitを追加
  { name: "AWS", icon: Cloud }
] 