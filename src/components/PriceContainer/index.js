import React, { useEffect } from 'react'

import { useProducts } from '../../hooks/products'

import { Container, Content, Price, Discount, TotalPrice } from './styles'

export function PriceContainer() {
  const { values, fetchValues } = useProducts()

  useEffect(() => {
    fetchValues()
  }, [])

  return (
    <Container>
      <Content>
        <Price>PRODUTOS</Price>
        <Price>
          {values.subTotal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Price>
      </Content>

      <Content>
        <Price>FRETE</Price>
        <Price>
          {values.shippingTotal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Price>
      </Content>

      <Content>
        <Discount>DESCONTO</Discount>
        <Discount>
          - {values.discount?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Discount>
      </Content>

      <Content>
        <TotalPrice>TOTAL</TotalPrice>
        <TotalPrice>
          {values.total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </TotalPrice>
      </Content>
    </Container>
  )
}
