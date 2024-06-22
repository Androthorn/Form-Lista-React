import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProdutoForm from './components/ProdutoForm'
import ProdutoLista from './components/ProdutoLista'

import './App.css'

function App() {
  const router = createBrowserRouter([
    { path: 'addProduto', element: <ProdutoForm /> },
    { path: '*', element: <ProdutoLista /> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
