import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduto } from '../data/Produtos'

function ProdutoForm() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [disponivelVenda, setDisponivelVenda] = useState('sim')
  const [erroValidacao, setErroValidacao] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (nome === '') {
      return setErroValidacao({ nome: 'Campo obrigatório' })
    }
    addProduto({ nome, descricao, valor: parseFloat(valor), disponivelVenda })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Produto:
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className={erroValidacao?.nome ? 'input-error' : ''}
        />
      </label>
      {erroValidacao?.nome && (
        <span className="input-error-message">{erroValidacao.nome}</span>
      )}
      <label>
        Descrição do produto:
        <input
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />
      </label>
      <label>
        Valor do Produto:
        <input
          type="number"
          value={valor}
          onChange={e => setValor(e.target.value)}
        />
      </label>
      <label>
        Disponível para venda?
        <select
          value={disponivelVenda}
          onChange={e => setDisponivelVenda(e.target.value)}>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </label>
      <button type="submit">Adicionar Produto</button>
      <button onClick={() => navigate('/')}>Voltar</button>
    </form>
  )
}

export default ProdutoForm
