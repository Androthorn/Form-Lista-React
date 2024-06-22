import React from 'react'
import ProdutoItem from './ProdutoItem'

function ProdutoLista({ produtos, setMostrarForm }) {
  const produtosOrdenados = produtos.slice().sort((a, b) => a.valor - b.valor)

  return (
    <div>
      <button onClick={() => setMostrarForm(true)}>
        Cadastrar Novo Produto
      </button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtosOrdenados.map((produto, index) => (
            <ProdutoItem key={index} produto={produto} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProdutoLista
