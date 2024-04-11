import { z } from 'zod'

export const validateCategoryFormSchema = z.object({
  name: z
    .string()
    .min(3, 'O nome da categoria deve possuir no minímo 3 caracteres.')
    .max(30, 'O nome da categoria não pode ser maior que 30 caractreres.'),
})
