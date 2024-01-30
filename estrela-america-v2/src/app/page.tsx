import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 space-y-24">
      <Image
        className="h-10 w-auto"
        src="/logo.png"
        height={1330}
        width={10605}
        alt="logo"
      />
      <h1 className="text-4xl font-bold">Olá, seja bem vindo</h1>
    </main>
  )
}
