'use client'

import { useState, useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function BannerCarousel() {
  const [urls, setUrls] = useState([
    '/banner-pronta-entrega.png',
    '/banner-novidades.png',
    '/banner-promo.png',
    '/banner-personalizado.png',
  ])

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const handleNext = () =>
    setUrls((prevUrls) => [...prevUrls.slice(1), prevUrls[0]])

  const handlePrevious = () =>
    setUrls((prevUrls) => [
      prevUrls[prevUrls.length - 1],
      ...prevUrls.slice(0, -1),
    ])

  return (
    <>
      <div className="bg-slate-900 flex justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          className="max-w-6xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {urls.map((url, index) => (
              <CarouselItem key={index}>
                <div className="w-auto h-[520px]">
                  <div className="flex aspect-auto items-center justify-center">
                    <Image
                      src={url}
                      width={1900}
                      height={890}
                      alt="Banner"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            onClick={handlePrevious} 
            className="bg-black text-white" 
          />
          <CarouselNext 
            onClick={handleNext}
            className="bg-black text-white"
          />
        </Carousel>
      </div>
    </>
  )
}
