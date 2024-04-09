export type Products = {
  id: string
  name: string
  price: number
  createdAt: string
  category: string
}

export async function productsData(): Promise<Products[]> {
  try {
    const response = await fetch('http://localhost:3333/products')
    const products = await response.json()
    return products
  } catch (err) {
    console.error(err)
    throw new Error('Erro ao buscar dados da api')
  }
}
