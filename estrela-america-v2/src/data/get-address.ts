import { Address } from '@/types/address'

const addressApi = 'https://viacep.com.br/ws'

export async function getAddress(cep: string): Promise<Address> {
  const request = await fetch(`${addressApi}/${cep}/json/`)

  if (!request.ok) throw new Error('Erro ao buscar o endereço.')

  const address = await request.json()

  return {
    cep: address.cep,
    logradouro: address.logradouro,
    bairro: address.bairro,
    localidade: address.localidade,
    uf: address.uf,
  }
}
