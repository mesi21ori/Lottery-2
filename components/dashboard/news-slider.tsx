'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react'
import { NewsItem, getAllNews } from '@/lib/news-data'
import NewsCard from './news-card'

type NewsSliderProps = {
  items?: NewsItem[]
  options?: EmblaOptionsType
  title?: string
  className?: string
}

export default function NewsSlider({
  items = getAllNews().slice(0, 6),
  options = { loop: true, align: 'start' },
  title = 'Latest Lottery News',
  className = ''
}: NewsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  if (!items.length) return null

  return (
    <section aria-label={title} className={`relative ${className}`}>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Latest</p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-black text-white hover:bg-red-600 hover:border-red-600 dark:border-gray-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-black text-white hover:bg-red-600 hover:border-red-600 dark:border-gray-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_100%]"
              aria-roledescription="slide"
              aria-label={`${item.title}`}
            >
              <NewsCard item={item} variant="featured" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between md:hidden">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-black text-white hover:bg-red-600 hover:border-red-600 dark:border-gray-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-black text-white hover:bg-red-600 hover:border-red-600 dark:border-gray-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`inline-flex h-2.5 w-2.5 items-center justify-center rounded-full transition ${
              index === selectedIndex ? 'bg-red-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
