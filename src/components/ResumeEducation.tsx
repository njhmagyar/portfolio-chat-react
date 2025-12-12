import { EducationType } from '../api'

interface ResumeEducationProps {
  education: EducationType
}

export default function ResumeEducation({ education }: ResumeEducationProps) {
  return (
    <li>
      <p className="w-full flex justify-between align-center text-lg">
        <strong>{ education.title}</strong>
        <span>{ education.subtitle }</span>
      </p>
    </li>
  )
}