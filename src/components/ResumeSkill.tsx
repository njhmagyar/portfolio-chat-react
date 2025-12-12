import { SkillType } from '../api'

interface ResumeSkillProps {
  skill: SkillType
}

export default function ResumeSkill({ skill }: ResumeSkillProps) {
  return (
    <li className="mb-1">
      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 dark:text-gray-200 rounded-sm">
        {skill.name }
      </span>
    </li>
  )
}