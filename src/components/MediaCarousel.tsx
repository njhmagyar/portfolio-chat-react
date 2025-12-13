import { useState } from 'react';

import Icon from './Icon'

interface MediaCarouselProps {
  mediaUrls: string[]
}

export default function MediaCarousel({ mediaUrls }:MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const mediaElements = mediaUrls.map((url, index) => (
    url.includes(".png") ? (
      <img key={index} src={url} className="w-full rounded-xl" />
    ) : ""
  ));
  const currentMedia = mediaElements[currentIndex];

  const maxIndex = mediaUrls.length - 1;
  const goTo = (index: number) => {
    const finalIndex = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
    setCurrentIndex(finalIndex);
  }

  const CarouselDots = mediaUrls.map((_, index) => (
    <button 
      key={index}
      onClick={() => goTo(index)}
      className={`w-4 h-4 rounded-2xl ${index === currentIndex ? 'bg-gray-800 dark:bg-gray-200' : 'bg-gray-400 dark:bg-gray-600'}`}
      aria-label={`Go to item ${index + 1}`}></button>
  ))
  return (
    <div className="relative">
      {mediaUrls.length > 1 && 
      <button 
        onClick={() => goTo(currentIndex - 1)}
        className="absolute left-4 top-50 w-8 h-8 flex justify-center items-center rounded-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <Icon prefix="fas" name="arrow-left" />
      </button>}
      { currentMedia }
      {mediaUrls.length > 1 && 
      <button 
        onClick={() => goTo(currentIndex + 1)}
        className="absolute right-4 top-50 w-8 h-8 flex justify-center items-center rounded-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          <Icon prefix="fas" name="arrow-right" />
      </button>}
      {mediaUrls.length > 1 && <div className="mt-4 flex justify-center align-center no-wrap gap-2">{ CarouselDots }</div>}
    </div>
  )
}