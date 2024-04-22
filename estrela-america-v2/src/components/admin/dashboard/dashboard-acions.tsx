import React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Copy, Info, MoreHorizontal } from 'lucide-react'

interface DashboardActionsProps {
  paymentId: string
}

const DashboardActions: React.FC<DashboardActionsProps> = ({ paymentId }) => {
  const handleCopyId = () => {
    navigator.clipboard.writeText(paymentId)
  }

  return (
    <div>
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
            Copiar SKU
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="inline-flex items-center gap-1.5 text-xs">
            <Info className="size-3.5" />
            Ver detalhes
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DashboardActions
