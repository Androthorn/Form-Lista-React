import React, { useState } from 'react'
import ProdutoForm from './components/ProdutoForm'
import ProdutoLista from './components/ProdutoLista'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])
  const [mostrarForm, setMostrarForm] = useState(true)

  const addProduto = produto => {
    setProdutos([...produtos, produto])
  }

  return (
    <div className="App">
      {mostrarForm ? (
        <ProdutoForm addProduto={addProduto} setMostrarForm={setMostrarForm} />
      ) : (
        <ProdutoLista produtos={produtos} setMostrarForm={setMostrarForm} />
      )}
    </div>
  )
}

export default App
