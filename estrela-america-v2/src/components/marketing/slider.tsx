'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'
import { LogoWhatsapp } from '../logo-whatsapp'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'

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
  const sendWhatsappMessage = `https://api.whatsapp.com/send?phone=5511950513210&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20produtos%20que%20visualizei%20no%20site.`

  const handleChange = ({ color, index }: SliderProps) => {
    setCurrentColor(color)
    setCurrentImage(index)
    console.log(currentColor)
  }

  return (
    <div className="py-10">
      <Card className="max-w-[1092px] mx-auto w-full h-[410px]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center pl-16">
            <CardHeader className="text-2xl text-primary-orange font-extrabold">
              Personalize do seu jeito
            </CardHeader>

            <CardDescription className="text-lg text-muted-foreground">
              Traga sua personalidade para os nossos produtos <br />
              com o melhor prazo de entrega do mercado.
            </CardDescription>

            <div className="pt-6 flex justify-start">
              <Link href={sendWhatsappMessage} target="_blank">
                <button className="flex items-center gap-2 py-2.5 px-6 sm:px-8 text-sm sm:text-base rounded-lg bg-green-400 text-black hover:opacity-80">
                  <LogoWhatsapp className="size-6" />
                  <span>Fazer um orçamento</span>
                </button>
              </Link>
            </div>
          </div>

          <CardContent className="flex-1 bg-primary-silver">
            <div className="flex flex-col items-center justify-center w-full h-auto sm:h-96">
              <div className="w-80 pt-10">
                <Image
                  width={500}
                  height={449}
                  className="object-contain w-full h-full rounded-lg"
                  src={images[currentImage]}
                  alt={`garrafas-termicas-personalizadas-${currentImage}`}
                />
              </div>

              <div className="pt-8 flex justify-center order-2 gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 mx-2 rounded-full md:mx-0 focus:outline-none hover:bg-black 
                      ${currentImage === index ? 'bg-black' : 'bg-orange-300'}`}
                    onClick={() => handleChange({ color: 'black', index })}
                  ></button>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
