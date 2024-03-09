import Image from 'next/image'
import Link from 'next/link'

import { Heart, MapPin, ShoppingBag } from 'lucide-react'
import { AddressButton } from './address/address-button'
import { SocialBanner } from './marketing/social-banner'
import { Menu } from './menu'
import { SearchInput } from './search-input'

export function Header() {
  return (
    <>
      <SocialBanner />
      <header className="bg-medium-blue w-full h-auto pt-1">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <div className="w-full flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-5 w-full lg:h-6 lg:w-auto"
                src="/logo-white.png"
                height={1330}
                width={10605}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden sm:pr-8 sm:flex sm:items-center lg:pr-32">
            <SearchInput />
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="flex gap-6 px-4 sm:pr-5 lg:px-0 lg:pr-12">
              <Link href="/favoritos" title="favoritos">
                <Heart className="text-white size-5 lg:size-6 hover:fill-primary-red" />
              </Link>

              <Link href="/carrinho" title="carrinho">
                <ShoppingBag className="text-white size-5 lg:size-6 hover:fill-orange-400" />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center">
              <div className="p-1 lg:p-1.5 rounded-full border-2">
                <MapPin
                  className="text-white size-4 lg:size-5"
                  strokeWidth={2}
                />
              </div>

              <AddressButton />
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
