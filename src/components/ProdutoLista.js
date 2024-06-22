import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getProdutos } from '../data/Produtos'

function ProdutoLista() {
  const navigate = useNavigate()
  const produtos = getProdutos()

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
          {produtos
            .sort((a, b) => a.valor - b.valor)
            .map((produto, index) => (
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
