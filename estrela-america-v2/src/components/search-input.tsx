import { Search } from 'lucide-react'
import { Button } from './ui/button'

export function SearchInput() {
  return (
    <div className="w-full bg-white rounded-full">
      <div className="w-80 lg:w-[420px] h-auto border-2 border-gray-200 rounded-full">
        <div className="flex justify-between items-end w-full">
          <input
            type="text"
            placeholder="Pesquisar produtos ..."
            className="w-full ml-2.5 py-1.5 px-4 text-sm text-zinc-600 font-light lg:text-base lg:mb-0 outline-none placeholder:text-sm"
          />
          <div>
            <Button className="bg-slate-900 hover:bg-primary-orange focus:bg-primary-orange rounded-none rounded-r-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
