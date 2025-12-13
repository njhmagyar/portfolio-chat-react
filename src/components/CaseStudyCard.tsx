import { Link } from 'react-router-dom';
import { CaseStudyType } from '../api'

interface CaseStudyCardProps {
  caseStudy: CaseStudyType
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg mb-8">
              <h2 className="text-base/7 font-semibold text-indigo-600">{ caseStudy.project.title }</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{caseStudy.title}</p>
              <p className="mt-6 mb-8 text-lg/8 text-gray-700">{ caseStudy.description }</p>
              <Link
                to={`case-studies/${caseStudy.slug}`}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read More
              </Link>
            </div>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10"
                >
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">{metric.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <img width="2432" height="1442" src={caseStudy.hero_image} alt="Product screenshot" className="w-3xl max-w-none sm:w-228 md:-ml-4 lg:-ml-0" />
        </div>
      </div>
    </div>
  )
}