'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { useState, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function BannerCarousel() {
  const [urls] = useState([
    '/banner-pronta-entrega.png',
    '/banner-novidades.png',
    '/banner-promo.png',
    '/banner-personalizado.png',
  ])

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <>
      <div className="bg-gray-50 sm:p-12 flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full sm:max-w-7xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {urls.map((url, index) => (
              <CarouselItem key={index}>
                <div className=" w-screen h-full mx-auto sm:w-full sm:h-auto">
                  <div className="flex aspect-auto items-center justify-center">
                    <Image
                      className="sm:rounded-xl"
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
        </Carousel>
      </div>
    </>
  )
}
