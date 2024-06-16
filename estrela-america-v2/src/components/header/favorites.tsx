import { HeartIcon } from 'lucide-react'
import Link from 'next/link'

export function Favorites() {
  return (
    <>
      <Link href="#" title="favoritos">
        <HeartIcon className="text-white size-5 lg:size-6 hover:fill-primary-red hover:text-primary-red" />
      </Link>
    </>
  )
}
