import { api } from '@/lib/axios'

export class CategoryService {
  static async getAll() {
    const request = await api.get('/getCategorias')

    if (request.status !== 200) {
      throw new Error('Erro ao buscar categorias! Tente novamente.')
    }

    const response = request.data
    return response.results
  }

  static async getById(id: string) {
    const url = `/getCategorias?Ids=${id}`
    const request = await api.get(url)

    if (request.status !== 200) {
      throw new Error('Erro ao buscar categoria! Tente novamente.')
    }

    const response = request.data
    return response.results
  }

  static async getByName(name: string) {
    const url = `/getCategorias?Nomes=${name}`
    const request = await api.get(url)

    if (request.status !== 200) {
      throw new Error('Erro ao buscar categoria! Tente novamente.')
    }

    const response = request.data
    return response.results
  }
}
