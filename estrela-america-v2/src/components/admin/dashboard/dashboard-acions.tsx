import React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Copy, Info, MoreHorizontal, Settings2, Trash } from 'lucide-react'
import { DashboardEditProduct } from './product/dashboard-edit-product'

interface DashboardActionsProps {
  paymentId: string
}

const DashboardActions: React.FC<DashboardActionsProps> = ({ paymentId }) => {
  const handleCopyId = () => {
    navigator.clipboard.writeText(paymentId)
  }

  return (
    <div className="flex items-end justify-end mr-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 flex">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="inline-flex items-center gap-1.5 text-xs"
            onClick={handleCopyId}
          >
            <Copy className="size-3" />
            Copiar ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="inline-flex items-center gap-1.5 text-xs">
            <Info className="size-3.5" />
            Ver detalhes
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 flex">
            <span className="sr-only">Abrir menu</span>
            <Settings2 className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="inline-flex items-center gap-1.5 text-xs"
            onClick={handleCopyId}
          >
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

export default DashboardActions
