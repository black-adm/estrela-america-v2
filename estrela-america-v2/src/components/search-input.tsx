import { Search } from 'lucide-react'
import { Button } from './ui/button'

export function SearchInput() {
  return (
    <div className="w-full bg-white rounded-full">
      <div className="w-80 lg:w-[420px] h-auto border border-white rounded-full">
        <div className="flex justify-between items-end w-full">
          <input
            type="text"
            placeholder="Pesquisar produtos ..."
            className="w-full ml-2.5 pb-2 px-4 text-xs text-zinc-700 font-light lg:text-sm outline-none placeholder:text-xs"
          />
          <div>
            <Button className="bg-primary-orange hover:bg-orange-500 rounded-none rounded-r-full">
              <Search className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
