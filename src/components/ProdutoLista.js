import React from 'react'

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
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{produto.valor?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProdutoLista
