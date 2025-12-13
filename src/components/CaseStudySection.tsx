import { SectionType } from "../api";

import MediaCarousel from "./MediaCarousel";

interface CaseStudySectionProps {
  section: SectionType
}

export default function CaseStudySection({ section }:CaseStudySectionProps) {
  return (
    <section className="mx-auto lg:px-8 my-20 lg:my-0 lg:min-h-[600px] lg:flex lg:justify-between lg:items-center lg:gap-8">
      <div className="lg:px-0 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <p className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400 capitalize">{section.section_type}</p>
        <h2 className="mt-2 text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          { section.title }
        </h2>
        <p className="text-lg mb-4 text-gray-900 dark:text-gray-100 word-break white-space">
          { section.content }
        </p>
      </div>
      {section.media_urls.length > 0 && <div className="lg:max-w-xl"><MediaCarousel mediaUrls={section.media_urls} /></div>}
    </section>
  )
}