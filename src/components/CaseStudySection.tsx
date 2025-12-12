import { SectionType } from "../api";

import MediaCarousel from "./MediaCarousel";

interface CaseStudySectionProps {
  section: SectionType
}

export default function CaseStudySection({ section }:CaseStudySectionProps) {
  return (
    <section className="container mx-auto p-4 max-w-4xl">
      {section.media_urls.length  && <MediaCarousel mediaUrls={ section.media_urls } />}
      <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">
        { section.title }
      </h2>
      <p className="text-lg mb-4 text-gray-900 dark:text-gray-100 word-break white-space">
        { section.content }
      </p>
    </section>
  )
}