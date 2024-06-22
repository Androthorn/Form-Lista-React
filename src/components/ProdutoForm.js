import React, { useState } from 'react'

function ProdutoForm({ addProduto, setMostrarForm }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [disponivelVenda, setDisponivelVenda] = useState('sim')

  const handleSubmit = e => {
    e.preventDefault()
    addProduto({ nome, descricao, valor: parseFloat(valor), disponivelVenda })
    setMostrarForm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Nome do Produto:
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        {' '}
        Descrição do produto:
        <input
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />
      </label>
      <br />
      <label>
        {' '}
        Valor do Produto:
        <input
          type="number"
          value={valor}
          onChange={e => setValor(e.target.value)}
        />
      </label>
      <br />
      <label>
        {' '}
        Disponível para venda?
        <select
          value={disponivelVenda}
          onChange={e => setDisponivelVenda(e.target.value)}>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </label>
      <br />
      <button type="submit">Adicionar Produto</button>
    </form>
  )
}

export default ProdutoForm
