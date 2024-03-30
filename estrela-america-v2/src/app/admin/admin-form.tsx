'use client'

import { useQuery } from '@tanstack/react-query'
import { AlertCircle, Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { ValidateAuthForm, validateAuthFormSchema } from '@/schemas/auth-schema'
import { User } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'

type AdminFormProps = React.HTMLAttributes<HTMLDivElement>

export function AdminForm({ className, ...props }: AdminFormProps) {
  const { toast } = useToast()
  const router = useRouter()

  const { handleSubmit, register, watch } = useForm<ValidateAuthForm>({
    resolver: zodResolver(validateAuthFormSchema),
  })

  const formData = {
    email: watch('email'),
    password: watch('password'),
  }

  const { error, isLoading, refetch } = useQuery<User, null>({
    queryKey: ['user'],
    enabled: false,
  })

  async function handleAuthentication() {
    try {
      await refetch()
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
              className="placeholder:text-xs placeholder:tracking-wide"
              placeholder="admin@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              maxLength={30}
              disabled={isLoading}
              {...register('email')}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              className="placeholder:text-xs placeholder:tracking-wide"
              placeholder="***********"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              maxLength={20}
              disabled={isLoading}
              {...register('password')}
            />
          </div>
          {error && (
            <p className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
              <AlertCircle className="h-4 w-4" />
              Erro ao realizar login, verifique as credenciais!
            </p>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary-orange"
          >
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Fazer login
          </Button>
        </div>
      </form>
    </div>
  )
}
