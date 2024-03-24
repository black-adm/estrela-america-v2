import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <>
      <footer className="bg-white mt-5">
        <div className="container p-5 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="/">
              <Image
                className="w-auto h-6 sm:h-7"
                src="/logo.png"
                height={1330}
                width={10605}
                alt="logotipo"
              />
            </a>
            <p className="max-w-md mx-auto mt-4 text-medium-gray text-sm sm:font-medium sm:text-base">
              Acompanhe nossos conteúdos nas redes sociais.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-8">
              <a
                href="https://www.instagram.com/estrelaamerica25/"
                target="_blank"
                className="flex items-center hover:p-1.5 hover:rounded-full hover:bg-silver"
              >
                <Instagram />
              </a>

              <a
                href="https://www.facebook.com/estrelaamericadosul"
                target="_blank"
                className="flex items-center hover:p-1.5 hover:rounded-full hover:bg-silver"
              >
                <Facebook />
              </a>
            </div>
          </div>
          <hr className="my-10 border-gray-300" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2024 - Estrela América. Todos os direitos reservados.
            </p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs sm:text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
              >
                Quem somos
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs sm:text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
              >
                Localização
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs sm:text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
              >
                Termos e Condições
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
