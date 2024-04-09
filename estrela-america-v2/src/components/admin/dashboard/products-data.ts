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
    const response = await fetch('http://localhost:3333/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) throw new Error('Erro ao buscar dados da API')

    const products = await response.json()
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
