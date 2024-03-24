'use client'

import { Address, getAddress } from '@/data/get-address'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { MapPinnedIcon } from 'lucide-react'
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
  const [inputFilled, setInputFilled] = useState(false)

  const {
    data: address,
    error,
    isLoading,
  } = useQuery<Address, Error>({
    queryKey: ['address'],
    queryFn: async () => getAddress(cep),
    enabled: inputFilled,
  })

  function formatAddressValue(cep: string) {
    cep = cep.replace(/\D/g, '')
    cep = cep.replace(/^(\d{5})(\d{1,3})/, '$1-$2')
    return cep
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value
    value = formatAddressValue(value)
    setCep(value)
    setInputFilled(value.length === 9)
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
        <div className="grid gap-4 pt-4 pb-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="text"
              className="col-span-4"
              placeholder="Digite o seu CEP"
              maxLength={9}
              value={cep}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col items-center">
            {inputFilled && (
              <>
                {error && (
                  <p className="relative text-xs font-medium text-primary-red">
                    Ocorreu um erro ao buscar o endereço.
                  </p>
                )}
                {isLoading && <AddressSkeleton />}
                {address && (
                  <form className="pt-3 flex flex-col space-y-2 w-full ">
                    <div className="w-full flex justify-between items-center gap-3">
                      <strong className="text-sm">Endereço</strong>
                      <Input
                        type="text"
                        className="bg-primary-silver w-72 text-black text-sm"
                        value={address.logradouro}
                        disabled
                      />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <strong className="text-sm">Número</strong>
                      <Input
                        type="text"
                        className="ml-5 w-16 text-black text-sm"
                      />
                      <Input
                        type="text"
                        className="w-52 text-black text-sm"
                        placeholder="Complemento"
                      />
                    </div>
                    <div className="w-full flex justify-between items-center gap-3">
                      <strong className="text-sm">Bairro</strong>
                      <Input
                        type="text"
                        className="bg-primary-silver w-72 text-black text-sm"
                        value={address.bairro}
                        disabled
                      />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <strong className="text-sm">Cidade</strong>
                      <Input
                        type="text"
                        className="bg-primary-silver w-40 text-black text-sm"
                        value={address.localidade}
                        disabled
                      />

                      <Input
                        type="text"
                        className="bg-primary-silver w-20 text-black text-sm"
                        value={address.uf}
                        disabled
                      />
                    </div>
                    <DialogFooter className="flex items-center pt-2 gap-3">
                      <Button
                        type="submit"
                        className="bg-primary-orange hover:bg-orange-400"
                      >
                        Salvar
                      </Button>
                    </DialogFooter>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </>
  )
}
