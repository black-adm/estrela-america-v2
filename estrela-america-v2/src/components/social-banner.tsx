import { Facebook, Instagram, MousePointerClick, Phone } from 'lucide-react'
import Link from 'next/link'
import { Whatsapp } from './logo-whatsapp'

export function SocialBanner() {
  return (
    <div className="hidden sm:relative sm:isolate sm:flex items-center gap-x-6 overflow-hidden bg-gradient-to-br from-primary-orange to-orange-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <div className="flex justify-start text-center pr-16">
          <Link href="#">
            <span className="flex justify-center items-center gap-2 text-white text-[13px] leading-4 font-semibold hover:underline focus:underline">
              <Phone className="h-4 w-4 text-black" />
              11 4002-8922
            </span>
          </Link>
        </div>

        <div className="inline-flex sm:items-center sm:gap-1 sm:pr-10">
          <strong className="font-semibold text-sm leading-6 text-white">
            Nossos canais de atendimento
          </strong>
          <MousePointerClick className="w-5 h-5 text-black" />
        </div>

        <div className="flex space-x-8 items-center">
          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
            title="whatsapp"
          >
            <Whatsapp />
          </Link>

          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
            title="instagram"
          >
            <Instagram className="h-5 w-5 text-black hover:p-1 hover:rounded-full hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>

          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
            title="facebook"
          >
            <Facebook className="h-5 w-5 text-black hover:p-1 hover:rounded-full hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
