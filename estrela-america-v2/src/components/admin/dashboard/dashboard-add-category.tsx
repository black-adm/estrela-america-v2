import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { PlusCircleIcon, Tag } from 'lucide-react'

export function DashboardAddCategory() {
  return (
    <Dialog>
      <DialogTrigger asChild className="flex items-center">
        <Button className="w-20 text-xs bg-primary-orange hover:bg-orange-300">
          Criar
          <PlusCircleIcon className="ml-1.5 h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="inline-flex items-center text-primary-orange gap-1.5 pb-2">
            <Tag className="size-5" />
            Criar uma categoria
          </DialogTitle>
          <DialogDescription className="px-1">
            As categorias servem para agrupar produtos. <br />
            Etiquetas que deixam os produtos no mesmo contexto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              className="col-span-3 w-full placeholder:text-xs"
              placeholder="Nome da categoria"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="secondary"
              className="w-full text-medium-blue bg-white border border-medium-blue hover:bg-gray-100 hover:border-none hover:text-primary-orange"
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="w-full bg-medium-blue hover:text-primary-orange hover:bg-slate-900"
          >
            Cadastrar categoria
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
