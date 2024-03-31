import { Facebook, Instagram, MousePointerClick, Phone } from 'lucide-react'
import { LogoWhatsapp } from '../logo-whatsapp'

import Link from 'next/link'

export function SocialBanner() {
  const contactPhone = '11950513210'
  const messageDescription =
    'Olá,%20gostaria%20de%20mais%20informações%20dos%20produtos%20cadastrados%20no%20site.'
  const sendWhatsappMessage = `https://wa.me//55${contactPhone}?text=${messageDescription}`

  return (
    <div className="hidden sm:relative sm:isolate sm:flex items-center gap-x-6 overflow-hidden bg-primary-orange px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <div className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <div className="flex justify-start text-center pr-16">
          <Link href="tel:+5511950513210" target="_blank">
            <span className="flex justify-center items-center gap-1.5 text-white text-xs leading-4 font-semibold hover:underline focus:underline">
              <Phone className="size-4 text-black" />
              11 95051-3210
            </span>
          </Link>
        </div>

        <div className="inline-flex sm:items-center sm:gap-1 sm:pr-10">
          <strong className="font-semibold text-xs leading-6 text-white">
            Nossos canais de atendimento
          </strong>
          <MousePointerClick className="size-4 text-black" />
        </div>

        <div className="flex space-x-8 items-center">
          <Link
            href={sendWhatsappMessage}
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in duration-200"
            title="whatsapp"
          >
            <LogoWhatsapp className="size-5 fill-black hover:p-1 hover:rounded-full hover:bg-orange-100 hover:fill-[#fe7f2d]" />
          </Link>

          <Link
            href="https://www.instagram.com/estrelaamerica25/"
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in duration-200"
            title="instagram"
          >
            <Instagram className="size-4 text-black hover:p-1 hover:rounded-full hover:size-5 hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>

          <Link
            href="https://www.facebook.com/estrelaamericadosul"
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in duration-200"
            title="facebook"
          >
            <Facebook className="size-4 text-black hover:p-1 hover:rounded-full hover:size-5 hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
