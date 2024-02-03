import Image from 'next/image'
import { SocialBanner } from './social-banner'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <>
      <SocialBanner />
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
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

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <div className="flex gap-6 pr-16">
              <Link href="/favoritos" title="favoritos">
                <Heart className="hover:fill-red-400" />
              </Link>

              <Link href="/carrinho" title="carrinho">
                <ShoppingBag className="hover:fill-orange-400" />
              </Link>
            </div>

            <Link href="/login">
              <button className="bg-[#ff6900] py-1.5 px-6 rounded-full text-sm font-semibold leading-6 text-white hover:bg-orange-400 focus:bg-orange-400">
                Login
              </button>
            </Link>
          </div>
        </nav>
        {/* Responsivo */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
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
          </div>
        </div>
      </header>
    </>
  )
}
