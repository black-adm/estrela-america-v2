import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export type Categories = {
  id: string
  name: string
}

export async function categoriesData(): Promise<Categories[]> {
  try {
    const response = await api.get('/categories', {
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status !== 200) throw new Error('Erro ao buscar dados da API')

    const categories = await response.data
    return categories
  } catch (err) {
    console.error(err)
    throw new Error('Erro ao buscar dados da api')
  }
}

export const useCategories = () => {
  const { data } = useQuery<Categories[], Error>({
    queryKey: ['categories'],
    queryFn: async () => {
      return categoriesData()
    },
  })

  return data || []
}
