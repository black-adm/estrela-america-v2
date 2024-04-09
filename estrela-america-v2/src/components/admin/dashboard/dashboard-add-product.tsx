import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { DashboardAddCategory } from './dashboard-add-category'

export function DashboardAddProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="hover:text-primary-orange">
          Adicionar
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-primary-orange">
            Cadastrar produto
          </SheetTitle>
          <SheetDescription>
            Preencha corretamente todos os dados para finalizar o cadastro.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <div className="grid grid-cols-3 items-center gap-2 px-2">
            <Label htmlFor="name" className="text-left">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Nome do produto"
              className="col-span-3 placeholder:text-xs"
              maxLength={60}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2 px-2">
            <Label htmlFor="description" className="text-left">
              Descrição
            </Label>
            <Input
              id="description"
              placeholder="Descrição do produto"
              className="col-span-3 placeholder:text-xs"
              maxLength={80}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2 px-2">
            <Label htmlFor="price" className="text-left">
              Preço
            </Label>
            <Input
              id="price"
              placeholder="Valor do produto"
              className="col-span-3 placeholder:text-xs"
              maxLength={8}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2 px-2">
            <Label htmlFor="imageSrc" className="text-left">
              Imagem
            </Label>
            <Input
              id="imageSrc"
              placeholder="URL da imagem"
              className="col-span-3 placeholder:text-xs"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2 px-2">
            <Label htmlFor="imageAlt" className="text-left">
              Legenda
            </Label>
            <Input
              id="imageAlt"
              placeholder="Exemplo:   Caneca azul"
              className="col-span-3 placeholder:text-xs"
            />
          </div>

          <div className="grid items-center gap-2 px-2">
            <Label htmlFor="category" className="text-left">
              Categoria
            </Label>
            <div className="grid grid-cols-4 items-center gap-x-3 pr-1">
              <Input
                id="category"
                placeholder="Categoria do produto"
                className="col-span-3 placeholder:text-xs w-full"
              />
              <DashboardAddCategory />
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              variant="secondary"
              className="text-medium-blue bg-white border border-medium-blue hover:bg-gray-100 hover:border-none hover:text-primary-orange"
            >
              Voltar
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-medium-blue hover:text-primary-orange hover:bg-slate-900"
            >
              Registrar produto
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
