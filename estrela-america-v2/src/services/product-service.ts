import { api } from '@/lib/axios'

export class ProductService {
  static async getAll() {
    const request = await api.get('/getProdutos')

    if (request.status !== 200) {
      throw new Error(
        'Não foi possível obter todos os produtos! Tente novamente.',
      )
    }

    const response = request.data
    return response.results
  }

  static async getById(id: string) {
    const url = `/getProdutos?Ids=${id}`
    const request = await api.get(url)

    if (request.status !== 200) {
      throw new Error('Erro ao buscar o produto! Tente novamente.')
    }

    const response = request.data
    return response.results
  }

  static async getByName(name: string) {
    const url = `/getProdutos?Nomes=${name}`
    const request = await api.get(url)

    if (request.status !== 200) {
      throw new Error('Erro ao buscar o produto! Tente novamente.')
    }

    const response = request.data
    return response.results
  }

  static async getByCategory(id: string) {
    const url = `/getProdutos?CategoriaIds=${id}`
    const request = await api.get(url)

    if (request.status !== 200) {
      throw new Error('Erro ao buscar o produto! Tente novamente.')
    }

    const response = request.data
    return response.results
  }
}
