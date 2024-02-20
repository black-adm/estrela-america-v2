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
      <header className="bg-medium-blue w-full h-auto pt-2">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
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
                <Heart className="text-white fill-primary-red hover:fill-red-400" />
              </Link>

              <Link href="/carrinho" title="carrinho">
                <ShoppingBag className="text-white fill-slate-950 hover:fill-orange-400" />
              </Link>
            </div>

            <div className="flex items-center">
              <MapPin
                size={34}
                className="text-white fill-slate-950"
                strokeWidth={1}
              />

              <div className="flex flex-col items-center w-[100px]">
                <p className="text-xs leading-6 uppercase text-white">
                  Enviar para
                </p>
                <button className="text-sm font-light underline text-cyan-300 hover:text-sky-400">
                  <strong>Novo endereço</strong>
                </button>
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
