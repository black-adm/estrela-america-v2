'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useRef, useState } from 'react'

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
      <Carousel
        plugins={[plugin.current]}
        className="flex justify-center w-full sm:max-w-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {urls.map((url, index) => (
            <CarouselItem key={index}>
              <div className=" w-screen h-full mx-auto sm:w-full sm:h-[460px]">
                <div className="flex aspect-auto items-center justify-center">
                  <Image src={url} width={1900} height={890} alt="Banner" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
