'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { ValidateAuthForm, validateAuthFormSchema } from '@/schemas/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock } from 'lucide-react'

type AdminFormProps = React.HTMLAttributes<HTMLDivElement>

export function AdminForm({ className, ...props }: AdminFormProps) {
  const { toast } = useToast()
  const router = useRouter()

  const { handleSubmit, register } = useForm<ValidateAuthForm>({
    resolver: zodResolver(validateAuthFormSchema),
  })

  async function handleAuthentication() {
    try {
      toast({
        description: 'Login realizado com sucesso.',
      })
      router.push('/admin/dashboard')
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Credenciais inválidas!',
      })
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(handleAuthentication)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-white placeholder:text-xs placeholder:tracking-wide border-primary-blue focus:border-primary-orange"
              placeholder="admin@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              maxLength={30}
              {...register('email')}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              className="bg-white placeholder:text-xs placeholder:tracking-wide border-primary-blue focus:border-primary-orange"
              placeholder="***********"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              maxLength={20}
              {...register('password')}
            />
          </div>

          <Button
            type="submit"
            className="inline-flex items-center gap-1.5 bg-primary-orange mt-5 hover:bg-primary-blue"
          >
            <Lock className="size-4" />
            Fazer login
          </Button>
        </div>
      </form>
    </div>
  )
}
