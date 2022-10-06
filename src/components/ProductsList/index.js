import React, { useEffect } from 'react'
import { useProducts } from '../../hooks/products'

import { Card } from '../Card'

import { Container, Title, Content } from './styles'

export function ProductsList() {
  const { products, fetchProducts } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Container>
      <Title>PRODUTOS</Title>

      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  )
}
