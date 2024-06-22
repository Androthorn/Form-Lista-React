const produtos = []

export const addProduto = produto => {
  produtos.push(produto)
}

export const getProdutos = () => produtos
