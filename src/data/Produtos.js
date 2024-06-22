const produtos = localStorage.getItem('produtos')
  ? JSON.parse(localStorage.getItem('produtos'))
  : []

export const addProduto = produto => {
  produtos.push(produto)
  localStorage.setItem('produtos', JSON.stringify(produtos))
}

export const getProdutos = () => produtos
