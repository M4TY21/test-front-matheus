import React from 'react'

import { ProductsProvider } from './hooks/products'
import { Cart } from './pages/Cart'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ProductsProvider>
      <GlobalStyle />
      <Cart />
    </ProductsProvider>
  )
}

export default App
