import { Facebook, Instagram, MousePointerClick } from 'lucide-react'
import Link from 'next/link'
import { Whatsapp } from './logo-whatsapp'

export function SocialBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#8ed1fc] to-[#bee9e8] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#caf0f8] to-[#bde0fe] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <div className="flex space-x-10 items-center">
          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
          >
            <Whatsapp />
          </Link>

          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
          >
            <Instagram className="h-[23px] w-[23px] hover:h-5 hover:w-5 hover:text-[#ff6900]" />
          </Link>

          <Link
            href="#"
            className="hover:translate-x-2 transition-transform ease-in duration-200"
          >
            <Facebook className="h-[23px] w-[23px] hover:h-5 hover:w-5 hover:text-[#ff6900]" />
          </Link>
        </div>

        <div className="hidden sm:inline-flex sm:items-center sm:gap-1 sm:pl-10">
          <strong className="font-semibold text-sm leading-6 text-gray-900">
            Nossos canais de atendimento
          </strong>
          <MousePointerClick className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}
