import { ResumeType } from '../api'

interface ResumeHeaderProps {
  resume: ResumeType
}

export default function ResumeHEader({ resume }: ResumeHeaderProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-text dark:text-white">
        {resume.title}
      </h1>
      <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        {resume.subtitle}
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        {resume.summary}
      </p>
    </header>
  )
}