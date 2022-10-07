import React from 'react'

import { Container, ProductImg, Content, Title, Price } from './styles'

export function Card({ imageUrl, name, price }) {
  return (
    <Container>
      <ProductImg src={imageUrl} />

      <Content>
        <Title>{name}</Title>

        <Price>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
      </Content>
    </Container>
  )
}
