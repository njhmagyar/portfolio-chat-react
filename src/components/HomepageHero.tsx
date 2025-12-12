import headshot from '../assets/headshot.jpeg'
import TickerTape from './TickerTape'

interface HomepageHeroProps {
  isLightMode: boolean
}

export default function HomepageHero({ isLightMode }: HomepageHeroProps) {
  return (
    <section
      className="snap-start lg:h-[calc(100vh-7rem)] lg:flex items-center justify-center lg:relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>
      <div className="container mx-auto px-4 lg:px-8 xl:px-0 lg:flex flex-wrap lg:flex-row-reverse lg:h-full lg:max-h-[calc(500px)] relative z-10">
        <div className="py-16 lg:py-0 flex items-center justify-center w-full lg:w-1/2">
          <img src={headshot} className="rounded-3xl w-full lg:w-auto lg:h-full mx-auto lg:ml-auto lg:mr-0 object-cover" />
        </div>
        <div className="lg:flex lg:flex-col justify-between h-full w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-text dark:text-white">
              Nathan<br />Haynes-Magyar
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Product Designer & Full-Stack Developer
            </p>
          </div>
          <div className="lg:mt-auto flex flex-col space-y-3 lg:space-x-4 lg:space-y-0 lg:flex-row">
            <a href="" className="w-full lg:w-auto px-8 py-4 text-lg font-medium text-center text-white bg-blue-500 rounded-md">
              View Projects
            </a>
            <a href="" className="w-full lg:w-auto px-8 py-4 text-lg font-medium text-center text-gray-500 dark:text-gray-400 rounded-md">
              Chat with My Clone
            </a>
          </div>
        </div>
      </div>
      <div className="my-8 lg:my-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:h-16">
        <TickerTape isLightMode={isLightMode} />
      </div>
    </section>
  )
}