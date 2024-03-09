'use client'

import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { AddressModal } from './address-modal'

export function AddressButton() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="pl-2.5 pb-1.5 flex items-center w-24">
            <span className="flex flex-col text-[10px] leading-6 uppercase text-white">
              Enviar para
              <button className="p-0 text-[10px] lg:text-xs font-extrabold underline text-[#ffbc42] hover:text-orange-400">
                novo endereço
              </button>
            </span>
          </div>
        </DialogTrigger>
        <AddressModal />
      </Dialog>
    </QueryClientProvider>
  )
}
