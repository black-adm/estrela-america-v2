import Image from 'next/image'
import Link from 'next/link'

import { Heart, ShoppingCart } from 'lucide-react'
import { Suspense } from 'react'
import { SocialBanner } from '../marketing/social-banner'
import { Menu } from './menu'
import { SearchInput } from './search-input'

export function Header() {
  return (
    <>
      <SocialBanner />
      <header className="bg-medium-blue flex flex-col items-center pt-5">
        <div className="max-w-5xl w-full flex items-center justify-between ">
          <Link href="/">
            <Image
              className="h-5 w-full lg:h-6 lg:w-auto"
              src="/logo-white.png"
              height={1330}
              width={10605}
              alt="logo"
            />
          </Link>
          <Suspense>
            <SearchInput />
          </Suspense>

          <div className="flex items-center">
            <div className="flex gap-6">
              <Link href="#" title="favoritos">
                <Heart className="text-white size-5 lg:size-6 hover:fill-primary-red hover:text-primary-red" />
              </Link>

              <Link href="#" title="carrinho">
                <ShoppingCart className="text-white size-5 lg:size-6 hover:fill-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:pt-5 sm:pb-2 sm:flex sm:justify-center sm:items-center">
          <Menu />
        </div>
      </header>
      <div className="bg-gradient-to-r from-primary-orange via-[#ffbc42] to-[#fe621d] p-[2px] sm:p-[2.5px]" />
    </>
  )
}
