import Image from 'next/image'
import { SocialBanner } from './social-banner'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { SearchInput } from './search-input'
import { Menu } from './menu'

export function Header() {
  return (
    <>
      <SocialBanner />
      <header className="bg-white pt-2">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <div className="w-full flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-6 w-auto"
                src="/logo.png"
                height={1330}
                width={10605}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden w-full md:pr-12 md:flex md:items-center lg:pr-32">
            <SearchInput />
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
            <div className="flex gap-6 px-8 lg:px-0 lg:pr-12">
              <Link href="/favoritos" title="favoritos">
                <Heart className="hover:fill-red-400" />
              </Link>

              <Link href="/carrinho" title="carrinho">
                <ShoppingBag className="hover:fill-orange-400" />
              </Link>
            </div>

            <Link href="/login" className="hidden lg:flex">
              <button className="bg-black py-1.5 px-6 rounded-full text-sm font-semibold leading-6 text-white hover:bg-primary-blue focus:bg-primary-blue">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <Menu />
    </>
  )
}
