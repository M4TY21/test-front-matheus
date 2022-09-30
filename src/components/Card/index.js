import React from 'react'

import { Container, ProductImg, Title, Price } from './styles'

export function Card() {
  return (
    <Container>
      <ProductImg />

      <Title>L'Oréal</Title>

      <Price>R$ 299,00</Price>
    </Container>
  )
}
