import Image from 'next/image'
import Link from 'next/link'

import { SocialBanner } from './social-banner'
import { Heart, ShoppingBag, MapPin } from 'lucide-react'
import { SearchInput } from './search-input'
import { Menu } from './menu'

export function Header() {
  return (
    <>
      <SocialBanner />
      <header className="bg-medium-blue w-full h-auto pt-1">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <div className="w-full flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-6 w-auto"
                src="/logo-white.png"
                height={1330}
                width={10605}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden md:pr-12 md:flex md:items-center lg:pr-32">
            <SearchInput />
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
            <div className="flex gap-6 px-8 lg:px-0 lg:pr-12">
              <Link href="/favoritos" title="favoritos">
                <Heart className="text-white hover:fill-primary-red" />
              </Link>

              <Link href="/carrinho" title="carrinho">
                <ShoppingBag className="text-white hover:fill-orange-400" />
              </Link>
            </div>

            <div className="flex items-center">
              <div className="p-1.5 rounded-full border-2">
                <MapPin size={20} className="text-white" strokeWidth={2} />
              </div>

              <div className="pl-2.5 pb-1.5 flex items-center w-24">
                <span className="flex flex-col text-[10px] leading-6 uppercase text-white">
                  Enviar para
                  <button className="p-0 text-xs font-extrabold underline text-[#ffbc42] hover:text-orange-400">
                    novo endereço
                  </button>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden sm:flex sm:justify-center sm:items-center">
          <Menu />
        </div>
        <div className="bg-gradient-to-r from-primary-orange via-[#ffbc42] to-[#fe621d] p-[2px] sm:p-[2.5px]" />
      </header>
    </>
  )
}
