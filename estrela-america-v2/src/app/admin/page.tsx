import Image from 'next/image'
import Link from 'next/link'

import { HeroPattern } from '@/app/admin/hero-pattern'
import { AdminForm } from './admin-form'

export default function AdminPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-medium-blue pt-12 sm:pt-24 xl:pt-44 h-screen w-full">
        <div className="relative z-10 py-10 px-16 mx-auto flex w-full flex-col justify-center space-y-6 rounded-md sm:w-[480px] md:px-20">
          <div className="w-full flex justify-center">
            <Link href="/">
              <Image
                className="h-5 w-full"
                src="/logo.png"
                height={1330}
                width={10605}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex flex-col space-y-2 text-center py-4">
            <h1 className="text-2xl text-white font-semibold tracking-tight">
              Acesso de administrador
            </h1>
            <p className="text-sm text-orange-200">
              Entre com as suas credenciais de acesso.
            </p>
          </div>
          <AdminForm />
          <p className="pt-4 px-8 text-center text-xs text-muted-foreground">
            © 2024 Estrela América do Sul ™ <br />
            Todos os direitos reservados.
          </p>
        </div>
        <HeroPattern />
      </div>
    </>
  )
}
