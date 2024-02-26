'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Whatsapp } from './logo-whatsapp'

interface SliderProps {
  color: string
  index: number
}

export function Slider() {
  const images = [
    '/garrafas-termicas.png',
    '/garrafas-coloridas.png',
    '/garrafas-customizadas.png',
    '/garrafa-rosa.png',
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [currentColor, setCurrentColor] = useState('primary-silver')

  const handleChange = ({ color, index }: SliderProps) => {
    setCurrentColor(color)
    setCurrentImage(index)
  }

  return (
    <div
      className={`container bg-white max-w-6xl rounded-xl flex flex-col px-6 py-4 mx-auto space-y-6 md:mb-16 md:h-128 md:py-10 md:flex-row md:items-center md:space-x-6 bg-${currentColor}`}
    >
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-2 rounded-full md:mx-0 focus:outline-none hover:bg-black ${
                currentImage === index ? 'bg-black' : 'bg-primary-silver'
              }`}
              onClick={() => handleChange({ color: 'black', index })}
            ></button>
          ))}
        </div>

        <div className="max-w-lg md:mx-12 md:order-2">
          <h1 className="text-3xl font-medium tracking-wide text-primary-orange md:text-4xl">
            Personalize do seu jeito
          </h1>
          <p className="mt-4 text-gray-600 pr-4">
            Traga sua personalidade para nossos produtos com o melhor prazo de
            entrega do mercado.
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 py-2.5 px-8 rounded-lg bg-green-400 text-black hover:opacity-80">
              <span>
                <Whatsapp />
              </span>
              <span>Fazer um orçamento</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <Image
          width={500}
          height={449}
          className="object-contain bg-primary-silver w-full h-full max-w-2xl rounded-lg"
          src={images[currentImage]}
          alt={`garrafas-termicas-personalizadas-${currentImage}`}
        />
      </div>
    </div>
  )
}
