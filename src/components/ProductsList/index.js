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
        {products.map((item) => (
          <Card
            key={item.product.sku}
            imageUrl={item.product.imageObjects[0].medium}
            name={item.product.name}
            price={item.product.priceSpecification.price}
          />
        ))}
      </Content>
    </Container>
  )
}
