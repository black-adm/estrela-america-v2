import Image from 'next/image'
import { Whatsapp } from './logo-whatsapp'

export function Slider() {
  return (
    <div className="container bg-white max-w-7xl rounded-xl flex flex-col px-6 py-4 mx-auto space-y-6 md:mb-16 md:h-128 md:py-10 md:flex-row md:items-center md:space-x-6">
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          <button className="w-3 h-3 mx-2 bg-primary-blue rounded-full md:mx-0 focus:outline-none"></button>
          <button className="w-3 h-3 mx-2 bg-primary-silver rounded-full md:mx-0 focus:outline-none hover:bg-primary-blue"></button>
          <button className="w-3 h-3 mx-2 bg-primary-silver rounded-full md:mx-0 focus:outline-none hover:bg-primary-blue"></button>
          <button className="w-3 h-3 mx-2 bg-primary-silver rounded-full md:mx-0 focus:outline-none hover:bg-primary-blue"></button>
        </div>

        <div className="max-w-lg md:mx-12 md:order-2">
          <h1 className="text-3xl font-medium tracking-wide text-primary-orange md:text-4xl">
            Personalize do seu jeito
          </h1>
          <p className="mt-4 text-gray-600 pr-4">
            Traga sua personalidade para nossos produtos com o melhor prazo de
            entrega do mercado.
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 py-2.5 px-8 rounded-lg bg-black hover:opacity-80">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                </svg>
              </span>
              <span className="text-white">Fazer um orçamento</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <Image
          width={500}
          height={449}
          className="object-contain bg-primary-silver w-full h-full max-w-2xl rounded-lg"
          src="/garrafatermica.png"
          alt="garrfas-termicas-personalizadas"
        />
      </div>
    </div>
  )
}
