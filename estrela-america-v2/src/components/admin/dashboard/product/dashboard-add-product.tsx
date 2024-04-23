'use client'

import { Button } from '@/components/ui/button'
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
import { validateProductFormSchema } from '@/schemas/product-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '@/lib/axios'
import { Loader2, Plus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'
import { DashboardAddCategory } from '../category/dashboard-add-category'
import { DashboardSelectCategory } from '../category/dashboard-select-category'
import { DashboardProductForm } from './dashboard-product-form'

export type ValidateProductForm = z.infer<typeof validateProductFormSchema>

export function DashboardAddProduct() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors = {} },
  } = useForm<ValidateProductForm>({
    resolver: zodResolver(validateProductFormSchema),
    shouldUnregister: true,
  })

  async function createProduct() {
    setIsLoading(true)
    const formData = {
      name: watch('name'),
      description: watch('description'),
      price: parseInt(watch('price')),
      imageSrc: watch('imageSrc'),
      imageAlt: watch('imageAlt'),
      category: watch('category'),
    }

    await api
      .post('/products', formData)
      .then(() => {
        setIsLoading(false)
        toast.success('Produto cadastrado com sucesso!')
      })
      .catch(() => {
        setIsLoading(false)
        toast.error('Erro ao cadastrar produto!')
      })
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="flex items-center">
        <Button variant="outline" className=" hover:text-primary-orange">
          Adicionar
          <Plus className="ml-2 h-4 w-4" />
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

        <form onSubmit={handleSubmit(createProduct)}>
          <DashboardProductForm register={register} errors={errors} />
          <DashboardSelectCategory
            register={register}
            errors={errors}
            selectedCategory={watch('category')}
          />

          <SheetFooter>
            <SheetClose asChild>
              <Button
                variant="secondary"
                className="text-medium-blue bg-white border border-medium-blue hover:bg-gray-100 hover:border-none hover:text-primary-orange"
              >
                Voltar
              </Button>
            </SheetClose>
            <Button
              type="submit"
              disabled={isLoading}
              className={`bg-medium-blue hover:text-primary-orange hover:bg-slate-900 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <Loader2 className="inline-flex animate-spin size-4 text-white" />
              ) : (
                <span>Registrar produto</span>
              )}
            </Button>
          </SheetFooter>
        </form>

        <DashboardAddCategory />
        <Toaster richColors />
      </SheetContent>
    </Sheet>
  )
}
