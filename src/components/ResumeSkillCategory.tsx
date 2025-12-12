import { SkillCategoryType } from '../api';

import ResumeSkill from './ResumeSkill'

interface ResumeSkillCategoryProps {
  category: SkillCategoryType
}

export default function ResumeSkillCategory({ category }: ResumeSkillCategoryProps) {
  const SkillListItems = category.skills.map(skill => (
    <ResumeSkill key={skill.id} skill={skill} />
  ))
  return (
    <li>
      <div className="text-gray-900 dark:text-gray-100 mb-8 flex justify-start item-start wrap gap-2">
        <h4 className="text-xl font-bold min-w-[calc(100px)]">
          { category.name }
        </h4>
        <ul className="flex justify-start align-center flex-wrap gap-2">
          { SkillListItems }
        </ul>
      </div>
    </li>
  )
}