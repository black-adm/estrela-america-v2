import { Facebook, Instagram, MousePointerClick } from 'lucide-react'
import Link from 'next/link'
import { Whatsapp } from './logo-whatsapp'

export function SocialBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-br from-[#0693e3] to-via-400 to-cyan-400 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <div className="flex space-x-10 items-center">
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
            <Instagram className="h-[23px] w-[23px] text-white hover:p-1 hover:rounded-full hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>

          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
            title="facebook"
          >
            <Facebook className="h-[23px] w-[23px] text-white hover:p-1 hover:rounded-full hover:bg-orange-100 hover:text-[#fe7f2d]" />
          </Link>
        </div>

        <div className="hidden sm:inline-flex sm:items-center sm:gap-1 sm:pl-10">
          <strong className="font-semibold text-sm leading-6 text-white">
            Nossos canais de atendimento
          </strong>
          <MousePointerClick className="w-5 h-5 text-lime-200" />
        </div>
      </div>
    </div>
  )
}
