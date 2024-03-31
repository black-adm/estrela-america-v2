import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <Image
        src="/banner-produtos.png"
        width={1640}
        height={624}
        alt="Banner de produtos"
      />
      <footer className="bg-medium-blue mt-6 pb-5">
        <div className="container p-6 max-w-5xl mx-auto w-full">
          <div className="pt-3 flex items-center justify-between text-center">
            <Link href="/">
              <Image
                className="w-auto h-6 sm:h-7"
                src="/logo-rodape.png"
                height={1330}
                width={10605}
                alt="logotipo"
              />
            </Link>

            <section className="flex gap-x-7">
              <p className="text-white text-sm font-medium">
                Acompanhe nossos conteúdos nas redes sociais.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://www.instagram.com/estrelaamerica25/"
                  target="_blank"
                  className="flex items-center text-white"
                >
                  <Instagram className="size-5 hover:text-primary-orange" />
                </a>

                <a
                  href="https://www.facebook.com/estrelaamericadosul"
                  target="_blank"
                  className="flex items-center text-white"
                >
                  <Facebook className="size-5 hover:text-primary-orange" />
                </a>
              </div>
            </section>
          </div>

          <hr className="my-6 border-primary-orange" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-xs sm:text-sm text-white">
              © 2024 - Estrela América. Todos os direitos reservados.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs text-white transition-colors duration-300 hover:underline hover:text-light-blue"
              >
                Quem somos
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs text-white transition-colors duration-300 hover:underline hover:text-light-blue"
              >
                Localização
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-2 text-xs text-white transition-colors duration-300 hover:underline hover:text-light-blue"
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
