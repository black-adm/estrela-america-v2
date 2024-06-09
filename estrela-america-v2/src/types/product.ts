export type Product = {
  id: string
  nome: string
  descricao: string
  preco: number
  quantidade: number
  imageSrc: string
  imageAlt: string
  categoria: {
    id: string
    nome: string
    dataCriacao: string
  }
}
