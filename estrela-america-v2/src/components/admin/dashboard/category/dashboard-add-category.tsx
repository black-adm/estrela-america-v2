'use client'

import { Info, Loader2, Plus, Tag } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { api } from '@/lib/axios'
import { validateCategoryFormSchema } from '@/schemas/category-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

type ValidateCategoryForm = z.infer<typeof validateCategoryFormSchema>

export function DashboardAddCategory() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors = {} },
  } = useForm<ValidateCategoryForm>({
    resolver: zodResolver(validateCategoryFormSchema),
  })

  async function createCategory() {
    setIsLoading(true)
    const formData = { name: watch('name') }

    await api
      .post('/categories', formData)
      .then(() => {
        setIsLoading(false)
        toast.success('Categoria cadastrado com sucesso!')
        window.location.href = '/admin/dashboard'
      })
      .catch(() => {
        setIsLoading(false)
        toast.error('Erro ao cadastrar categoria!')
      })
  }

  return (
    <div className="pt-10 px-2 flex justify-between items-center">
      <div className="px-3 text-sm text-muted-foreground tracking-wide">
        <p>
          Se preferir,
          <br />
          crie uma nova categoria.
        </p>
      </div>

      <Dialog>
        <DialogTrigger asChild className="flex items-center">
          <Button className="w-20 text-xs bg-primary-orange hover:bg-orange-300">
            Criar
            <Plus className="ml-1.5 h-5 w-5" />
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

          <form
            onSubmit={handleSubmit(createCategory)}
            className="grid gap-4 py-4 w-full"
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                className="col-span-3 w-full placeholder:text-xs"
                placeholder="Nome da categoria"
                {...register('name')}
              />
            </div>
            {errors.name && (
              <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
                <Info className="h-4 w-4" />
                {errors.name.message}
              </span>
            )}

            <DialogFooter className="pt-4 pr-8">
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
                disabled={isLoading}
                className={`bg-medium-blue hover:text-primary-orange hover:bg-slate-900 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="inline-flex animate-spin size-4 text-white mr-2" />
                    <span>Cadastrando ...</span>
                  </>
                ) : (
                  <span>Cadastrar categoria</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
