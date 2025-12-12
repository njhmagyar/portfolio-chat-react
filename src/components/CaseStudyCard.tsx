import { Link } from 'react-router-dom';
import { CaseStudyType } from '../api'

interface CaseStudyCardProps {
  caseStudy: CaseStudyType
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <section className="snap-start lg:h-[calc(100vh-7rem)] container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
        <img src={caseStudy.hero_image} className="w-full rounded-xl" />
      </div>
      <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
        <div className="flex flex-col w-full mt-4">
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            { caseStudy.title }
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">{ caseStudy.description }</p>
          <Link to={`case-studies/${caseStudy.slug}`} className="w-full lg:w-fit px-8 py-4 text-lg font-medium text-center text-white bg-blue-500 rounded-md">
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  )
}