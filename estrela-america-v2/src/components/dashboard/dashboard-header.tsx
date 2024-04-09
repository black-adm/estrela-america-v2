import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function DashboardHeader() {
  return (
    <>
      <header className="w-screen h-auto p-3.5 bg-gradient-to-r from-medium-blue to-slate-900">
        <div className="flex justify-between items-center px-5 sm:px-8 lg:px-12">
          <div className="flex items-center sm:pl-4 lg:pl-8">
            <Image
              className="h-5 w-full"
              src="/logo-white.png"
              height={1330}
              width={10605}
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-4 sm:pr-4 lg:pr-8">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 bg-primary-orange text-white uppercase text-xs py-2 px-3.5 rounded-md hover:opacity-70"
            >
              <LogOut className="size-4" />
              Sair
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-gradient-to-r from-primary-orange via-[#ffbc42] to-[#fe621d] p-[2px]" />
    </>
  )
}
