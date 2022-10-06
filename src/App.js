import React from 'react'

import { ProductsProvider } from './hooks/products'
import { AppRoutes } from './routes'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ProductsProvider>
      <GlobalStyle />
      <AppRoutes />
    </ProductsProvider>
  )
}

export default App
