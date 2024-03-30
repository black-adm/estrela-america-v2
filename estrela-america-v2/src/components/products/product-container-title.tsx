import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ProductContainerTitleProps {
  title: string
  titleStrong: string
  navigate: string
}

export function ProductContainerTitle({
  title,
  titleStrong,
  navigate,
}: ProductContainerTitleProps) {
  return (
    <div className="mx-auto max-w-6xl px-7 flex items-center justify-between pt-10 pb-4 lg:pb-8">
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
        <strong className="text-primary-blue pl-1.5">{titleStrong}</strong>
        <hr className="border-b-2 border-primary-blue w-full" />
      </h2>
      <Link
        href={navigate}
        className="inline-flex items-center gap-1 text-xs uppercase text-primary-blue hover:underline hover:text-sky-400"
      >
        Ver mais
        <ChevronRight />
      </Link>
    </div>
  )
}
