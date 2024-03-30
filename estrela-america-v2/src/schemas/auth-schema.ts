import { z } from 'zod'

export const validateAuthFormSchema = z.object({
  email: z
    .string()
    .min(1, 'digite um endereço de e-mail válido.')
    .email('formato de e-mail inválido.'),
  password: z
    .string()
    .min(1, 'o campo de senha é obrigatório.')
    .min(6, 'a senha precisa de no mínimo 6 caracteres.'),
})

export type ValidateAuthForm = z.infer<typeof validateAuthFormSchema>
