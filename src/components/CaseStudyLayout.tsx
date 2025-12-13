import { Link } from 'react-router-dom'

import { CaseStudyType } from '../api'
import { Prose } from './Prose'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: CaseStudyType
  children: React.ReactNode
}) {

  return (
    <>
    <div className="relative isolate pt-14">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="xl:relative mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <Link
            to="/"
            aria-label="Go back to home"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>
          <p className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">{caseStudy.project.title}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            {caseStudy.title}
          </h1>
          <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
            {caseStudy.description}
          </p>
        </div>
        <dl className="mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 dark:text-white">
          {caseStudy.metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6 dark:border-white/10"
            >
              <dt className="text-sm/6">{metric.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <article className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <img src={caseStudy.hero_image} className="w-full my-32" />
      <Prose className="mt-8" data-mdx-content>
        {children}
      </Prose>
    </article>
    </>
  )
}
