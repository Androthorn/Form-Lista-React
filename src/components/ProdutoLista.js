import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProdutoLista({ produtos }) {
  const navigate = useNavigate()
  const produtosOrdenados = [].slice().sort((a, b) => a.valor - b.valor)

  return (
    <div>
      <button onClick={() => navigate('addProduto')}>
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
