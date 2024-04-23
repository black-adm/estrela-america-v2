import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Settings2, Trash } from 'lucide-react'
import { DashboardEditProduct } from './product/dashboard-edit-product'

const DashboardOperations = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 flex">
            <span className="sr-only">Abrir menu</span>
            <Settings2 className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem className="inline-flex items-center gap-1.5 text-xs">
            <DashboardEditProduct />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="inline-flex items-center gap-1.5 text-xs">
            <Trash className="size-3.5" />
            Deletar produto
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DashboardOperations
