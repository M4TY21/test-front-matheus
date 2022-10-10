import React, { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

const ProductsContext = createContext({})

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    const response = await api.get()
    setProducts(response.data.items)
    setLoading(false)
  }

  async function fetchValues() {
    const response = await api.get()
    setValues(response.data)
    setLoading(false)
  }

  return (
    <ProductsContext.Provider value={{ products, values, loading, fetchProducts, fetchValues }}>
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  return context
}

export { ProductsProvider, useProducts }
