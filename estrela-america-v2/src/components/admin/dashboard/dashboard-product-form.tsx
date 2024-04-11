import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Info } from 'lucide-react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { DashboardAddCategory } from './dashboard-add-category'
import { ValidateProductForm } from './dashboard-add-product'

interface DashboardProductFormProps {
  register: UseFormRegister<ValidateProductForm>
  errors: FieldErrors<ValidateProductForm>
}

export function DashboardProductForm({
  register,
  errors,
}: DashboardProductFormProps) {
  return (
    <>
      <div className="grid gap-4 py-8">
        <div className="grid grid-cols-3 items-center gap-2 px-2">
          <Label htmlFor="name" className="text-left">
            Nome
          </Label>
          <Input
            placeholder="Nome do produto"
            className="col-span-3 placeholder:text-xs"
            maxLength={60}
            {...register('name')}
          />
        </div>
        {errors.name && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.name.message}
          </span>
        )}

        <div className="grid grid-cols-3 items-center gap-2 px-2">
          <Label htmlFor="description" className="text-left">
            Descrição
          </Label>
          <Input
            placeholder="Descrição do produto"
            className="col-span-3 placeholder:text-xs"
            maxLength={80}
            {...register('description')}
          />
        </div>
        {errors.description && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.description.message}
          </span>
        )}

        <div className="grid grid-cols-3 items-center gap-2 px-2">
          <Label htmlFor="price" className="text-left">
            Preço
          </Label>
          <Input
            placeholder="Valor do produto"
            className="col-span-3 placeholder:text-xs"
            maxLength={8}
            {...register('price')}
          />
        </div>
        {errors.price && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.price.message}
          </span>
        )}

        <div className="grid grid-cols-3 items-center gap-2 px-2">
          <Label htmlFor="imageSrc" className="text-left">
            Imagem
          </Label>
          <Input
            placeholder="URL da imagem"
            className="col-span-3 placeholder:text-xs"
            maxLength={80}
            {...register('imageSrc')}
          />
        </div>
        {errors.imageSrc && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.imageSrc.message}
          </span>
        )}

        <div className="grid grid-cols-3 items-center gap-2 px-2">
          <Label htmlFor="imageAlt" className="text-left">
            Legenda
          </Label>
          <Input
            placeholder="Exemplo:   Caneca azul"
            className="col-span-3 placeholder:text-xs"
            maxLength={30}
            {...register('imageAlt')}
          />
        </div>
        {errors.imageAlt && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.imageAlt.message}
          </span>
        )}

        <div className="grid items-center gap-2 px-2">
          <Label htmlFor="category" className="text-left">
            Categoria
          </Label>
          <div className="grid grid-cols-4 items-center gap-x-3 pr-1">
            <Input
              placeholder="Categoria do produto"
              className="col-span-3 placeholder:text-xs w-full"
              maxLength={30}
              {...register('category')}
            />
            <DashboardAddCategory />
          </div>
        </div>
        {errors.category && (
          <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.category.message}
          </span>
        )}
      </div>
    </>
  )
}
