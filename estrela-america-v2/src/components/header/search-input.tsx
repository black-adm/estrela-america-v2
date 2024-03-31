'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q

    if (!query) return null
    router.push(`/produtos/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white flex w-80 items-center gap-3 rounded-full px-4 py-2 ring-primary-orange"
    >
      <Search className="size-4 text-primary-orange" />
      <input
        name="q"
        defaultValue={query ?? ''}
        className="flex-1 text-xs text-muted-foreground outline-none placeholder:text-muted-foreground placeholder:text-xs"
        required
      />
    </form>
  )
}
