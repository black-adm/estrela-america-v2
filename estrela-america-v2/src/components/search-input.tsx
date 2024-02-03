import { Search } from 'lucide-react'
import { Button } from './ui/button'

export function SearchInput() {
  return (
    <>
      <div className="w-[420px] h-auto border-2 border-gray-200 rounded-full">
        <div className="flex justify-between items-end w-full">
          <input
            type="text"
            placeholder="Pesquisar produtos ..."
            className="ml-3 py-1 pl-3 outline-none"
          />
          <div>
            <Button className="hover:bg-[#0693e3] rounded-none rounded-r-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
