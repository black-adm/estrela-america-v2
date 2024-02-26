import { Search } from 'lucide-react'
import { Button } from './ui/button'

export function SearchInput() {
  return (
    <div className="w-full bg-white rounded-full">
      <div className="w-64 lg:w-[400px] h-8 lg:h-9 flex justify-between items-end rounded-full">
        <input
          type="text"
          placeholder="Pesquisar produtos ..."
          className="rounded-full w-full ml-2.5 pb-2.5 px-4 text-xs text-zinc-700 font-light outline-none placeholder:text-xs"
        />
        <Button className="h-8 lg:h-9 bg-primary-orange hover:bg-orange-300 rounded-none rounded-r-full">
          <Search className="size-3 lg:size-4" />
        </Button>
      </div>
    </div>
  )
}
