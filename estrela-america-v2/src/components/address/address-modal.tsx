'use client'

import { Address, getAddress } from '@/data/get-address'
import { useQuery } from '@tanstack/react-query'
import { MapPinnedIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { AddressSkeleton } from './address-skeleton'

export function AddressModal() {
  const [cep, setCep] = useState('')
  const {
    data: address,
    error,
    isLoading,
  } = useQuery<Address, Error>({
    queryKey: ['address'],
    queryFn: async () => getAddress(cep),
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCep(e.target.value)
  }

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="inline-flex items-center gap-1 text-black font-medium">
            <MapPinnedIcon />
            Cadastrar endereço
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="text"
              maxLength={11}
              value={cep}
              className="col-span-4"
              onChange={handleInputChange}
              placeholder="Digite o seu CEP"
            />
          </div>

          <div className="flex flex-col items-center">
            {error && (
              <p className="relative text-xs font-medium text-primary-red">
                Ocorreu um erro ao buscar o endereço.
              </p>
            )}
            {isLoading && <AddressSkeleton />}

            {address && (
              <table className="pt-1 space-y-2 text-sm">
                <th>Enderço: {address.logradouro}</th>
                <th>Bairro: {address.bairro}</th>
                <th>Cidade: {address.localidade}</th>
                <th>UF: {address.uf}</th>
              </table>
            )}
          </div>
        </div>
        <DialogFooter className="flex items-center gap-3">
          <Link
            href="/"
            className="font-semibold text-sm text-medium-blue hover:underline"
          >
            Cancelar
          </Link>
          <Button
            type="submit"
            className="bg-primary-orange hover:bg-orange-400"
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  )
}
