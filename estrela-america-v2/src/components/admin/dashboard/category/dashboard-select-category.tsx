'use client'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Categories, useCategories } from '@/data/categories-data'
import { Info } from 'lucide-react'
import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ValidateProductForm } from '../product/dashboard-add-product'
import { DashboardAddCategory } from './dashboard-add-category'

interface DashboardSelectCategoryProps {
  register: UseFormRegister<ValidateProductForm>
  errors: FieldErrors<ValidateProductForm>
}

export function DashboardSelectCategory({
  register,
  errors,
}: DashboardSelectCategoryProps) {
  const categories: Categories[] = useCategories()
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryChange = (event: React.FormEvent<HTMLDivElement>) => {
    const selectedValue = (event.target as HTMLSelectElement).value
    setSelectedCategory(selectedValue)
    register('category', { value: selectedValue })
  }

  return (
    <div className="grid items-center gap-2 px-2 pb-7">
      <Label htmlFor="category" className="text-left">
        Categoria
      </Label>

      <div className="grid grid-cols-4 items-center gap-x-3 pr-1">
        <Select>
          <SelectTrigger className="col-span-3 w-full">
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>

          {categories?.length ? (
            <SelectContent>
              <SelectGroup>
                {categories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                    onChange={handleCategoryChange}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          ) : (
            <span>Nenhuma categoria cadastrada.</span>
          )}
        </Select>
        <DashboardAddCategory />
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
