import { z } from 'zod'

export const validateProductFormSchema = z.object({
  name: z
    .string()
    .min(3, 'O nome deve possuir no minímo 3 caracteres.')
    .max(60, 'O nome não pode ser maior que 60 caracteres.'),
  description: z
    .string()
    .min(5, 'A descrição não pode ser menor que 5 caracteres.')
    .max(80, 'A descrição não pode ser maior que 80 caracteres.'),
  price: z.string().min(1, 'O preço não pode ser menor que R$ 1,00.'),
  imageSrc: z
    .string()
    .min(5, 'A URL da imagem não pode ser menor que 5 caracteres.')
    .max(80, 'A URL da imagem não pode ser maior que 80 caracteres.'),
  imageAlt: z
    .string()
    .min(3, 'A legenda deve possuir no minímo 3 caracteres.')
    .max(30, 'A legenda não pode ser maior que 30 caracteres.'),
  category: z
    .string()
    .min(3, 'A categoria deve possuir no minímo 3 caracteres.')
    .max(30, 'A categoria não pode ser maior que 30 caractreres.'),
})
