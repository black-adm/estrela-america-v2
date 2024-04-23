'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { Info } from 'lucide-react'
import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ValidateProductForm } from './dashboard-add-product'

interface DashboardProductFormProps {
  register: UseFormRegister<ValidateProductForm>
  errors: FieldErrors<ValidateProductForm>
}

function formatPriceInput(value: string): string {
  const numericString = value.replace(/\D/g, '')
  if (numericString.length < 2) return value

  const lastTwoDigits = numericString.slice(-2)
  const numberPart = numericString.slice(0, -2)
  const formattedNumber =
    numberPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '.' + lastTwoDigits

  return formattedNumber
}

export function DashboardProductForm({
  register,
  errors,
}: DashboardProductFormProps) {
  const [price, setPrice] = useState('')

  const handleInputPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const formattedValue = formatPriceInput(event.target.value)
    setPrice(formattedValue)
    register('price', {
      value: formattedValue,
    })
  }

  return (
    <>
      <div className="grid gap-4 pt-8 pb-5">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="name" className="text-left">
              Nome
            </Label>
            <Input
              placeholder="Nome do produto"
              className="w-52 placeholder:text-xs"
              maxLength={60}
              {...register('name')}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="price" className="text-left">
              Preço
            </Label>
            <Input
              placeholder="Valor"
              className="w-28 placeholder:text-xs"
              inputMode="numeric"
              maxLength={8}
              value={price}
              onChange={handleInputPriceChange}
            />
          </div>
        </div>
        {errors.name && (
          <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.name.message}
          </span>
        )}
        {errors.price && (
          <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.price.message}
          </span>
        )}

        <div className="grid grid-cols-3 items-center gap-2 px-1">
          <Label htmlFor="description" className="text-left">
            Descrição
          </Label>
          <Textarea
            placeholder="Descrição do produto"
            className="col-span-3 placeholder:text-xs"
            maxLength={80}
            {...register('description')}
          />
        </div>
        {errors.description && (
          <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.description.message}
          </span>
        )}

        <div className="grid grid-cols-4 w-full items-center gap-2 pt-2 px-1">
          <Label htmlFor="imageSrc" className="text-left">
            Imagem
          </Label>
          <Input
            placeholder="URL da imagem"
            className="col-span-3 placeholder:text-xs"
            maxLength={80}
            {...register('imageSrc')}
          />

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
        {errors.imageSrc && (
          <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.imageSrc.message}
          </span>
        )}
        {errors.imageAlt && (
          <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
            <Info className="h-4 w-4" />
            {errors.imageAlt.message}
          </span>
        )}
      </div>
    </>
  )
}
