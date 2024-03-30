import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-medium-blue to-slate-950 w-full h-screen flex flex-col justify-center items-center">
      <Image
        src="/logo-white.png"
        className="w-auto h-7"
        width={4096}
        height={514}
        alt="logotipo"
      />

      <div className="py-5 flex flex-col justify-center items-center">
        <Image
          src="/404.png"
          className="w-2/5"
          width={450}
          height={450}
          alt="404 not found"
        />

        <h2 className="text-2xl sm:text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-orange to-orange-400">
          Página não encontrada
        </h2>
        <p className="text-white text-sm sm:text-base font-medium">
          Você tentou acessar uma rota que não existe.
        </p>
      </div>

      <Link
        href="/"
        className="mt-3 bg-primary-blue text-sm text-white py-2 px-5 rounded-md hover:bg-sky-300"
      >
        Voltar para o inicio
      </Link>
    </div>
  )
}
