import React, { useEffect } from 'react'

import { useProducts } from '../../hooks/products'

import { Container, Content, Price, Discount, TotalPrice } from './styles'

export function PriceContainer() {
  const { values, fetchPrices } = useProducts()

  return (
    <Container>
      <Content>
        <Price>PRODUTOS</Price>
        <Price>R$ 624,80</Price>
      </Content>

      <Content>
        <Price>FRETE</Price>
        <Price>R$ 5,30</Price>
      </Content>

      <Content>
        <Discount>DESCONTO</Discount>
        <Discount>- R$ 30,00</Discount>
      </Content>

      <Content>
        <TotalPrice>TOTAL</TotalPrice>
        <TotalPrice>R$ 30,00</TotalPrice>
      </Content>
    </Container>
  )
}
