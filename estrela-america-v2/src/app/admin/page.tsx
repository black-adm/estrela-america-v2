import Image from 'next/image'
import Link from 'next/link'

import { AdminForm } from './admin-form'

export default function AdminPage() {
  return (
    <>
      <div className="bg-pattern bg-cover bg-no-repeat pt-12 sm:pt-24 h-screen w-full">
        <div className="bg-white py-10 px-16 border-2 border-gray-100 mx-auto flex w-full flex-col justify-center space-y-6 rounded-md sm:w-[480px]">
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
            <h1 className="text-2xl font-semibold tracking-tight">
              Acesso de administrador
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com as suas credenciais de acesso.
            </p>
          </div>
          <AdminForm />
          <p className="pt-4 px-8 text-center text-xs text-muted-foreground">
            © 2024 Estrela América do Sul ™ <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  )
}
