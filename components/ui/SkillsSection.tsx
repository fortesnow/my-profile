import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
}

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

