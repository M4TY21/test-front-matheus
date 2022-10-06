import React, { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

const ProductsContext = createContext({})

function ProductsProvider({ children }) {
  const [Products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    const response = await api.get()
    console.log(response.data)
    setProducts(response)
  }

  return (
    <ProductsContext.Provider value={{ Products, loading, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  return context
}

export { ProductsProvider, useProducts }
