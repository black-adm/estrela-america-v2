import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <>
      <footer className="bg-transparent mt-6">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <Image
                className="w-auto h-7"
                src="/logo.png"
                height={1330}
                width={10605}
                alt="logotipo"
              />
            </a>
            <p className="max-w-md mx-auto mt-4 text-medium-gray">
              Acompanhe nossos conteúdos nas redes sociais.
            </p>
            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8">
              <a 
                href="#" 
                target="_blank"
                className="flex items-center hover:p-1.5 hover:rounded-full hover:bg-gray-100 hover:translate-y-3 transition delay-150 duration-300"
              >
                <Instagram />              
              </a>

              <a 
                href="#" 
                target="_blank"
                className="flex items-center hover:p-1.5 hover:rounded-full hover:bg-gray-100 hover:translate-y-3 transition delay-150 duration-300"
              >
                <Facebook />              
              </a>
            </div>
          </div>
          <hr className="my-10 border-gray-300" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © 2024 - Estrela América. Todos os direitos reservados.
            </p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                target="_blank"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
              >
                Quem somos
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
              >
                Localização
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-sky-400"
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
