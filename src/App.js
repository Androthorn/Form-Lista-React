import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProdutoForm from './components/ProdutoForm'
import ProdutoLista from './components/ProdutoLista'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])

  const addProduto = produto => {
    setProdutos([...produtos, produto])
  }

  const router = createBrowserRouter([
    { path: 'addProduto', element: <ProdutoForm addProduto={addProduto} /> },
    { path: '*', element: <ProdutoLista produtos={produtos} /> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
