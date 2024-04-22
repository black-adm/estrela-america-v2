'use client'

import { Label } from '@/components/ui/label'
import { Categories, useCategories } from '@/data/categories-data'
import { Info } from 'lucide-react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ValidateProductForm } from '../product/dashboard-add-product'

interface DashboardSelectCategoryProps {
  register: UseFormRegister<ValidateProductForm>
  errors?: FieldErrors<ValidateProductForm>
  selectedCategory: string
}

export function DashboardSelectCategory({
  register,
  errors,
  selectedCategory,
}: DashboardSelectCategoryProps) {
  const categories: Categories[] = useCategories()

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(event.target.value)
    register('category', { value: event.target.value })
  }

  return (
    <div className="grid items-center gap-2 pt-1 pb-8">
      <Label htmlFor="category" className="text-left ml-1">
        Categoria
      </Label>

      <div className="grid grid-cols-3 items-center gap-x-3">
        <select
          id="category"
          className="col-span-3 w-full text-sm p-1.5 border border-primary-silver rounded-md"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Selecione a categoria</option>
          {categories?.length ? (
            categories.map((category) => (
              <option
                key={category.id}
                value={category.name}
                className="text-sm"
              >
                {category.name}
              </option>
            ))
          ) : (
            <option disabled>Nenhuma categoria cadastrada.</option>
          )}
        </select>
      </div>
      {errors?.category && (
        <span className="pl-2 flex items-center gap-x-1.5 text-xs font-medium tracking-tight text-primary-red">
          <Info className="h-4 w-4" />
          {errors.category?.message}
        </span>
      )}
    </div>
  )
}
