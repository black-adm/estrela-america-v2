import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export type Products = {
  id: string
  name: string
  price: number
  createdAt: string
  category: string
}

export async function productsData(): Promise<Products[]> {
  try {
    const response = await api.get('/products', {
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status !== 200) throw new Error('Erro ao buscar dados da API')

    const products = await response.data
    return products
  } catch (err) {
    console.error(err)
    throw new Error('Erro ao buscar dados da api')
  }
}

export const useProducts = () => {
  const { data } = useQuery<Products[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      return productsData()
    },
  })

  return data || []
}
