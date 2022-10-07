import React from 'react'

import { PriceContainer } from '../../components/PriceContainer'
import { ProductsList } from '../../components/ProductsList'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Cart() {
  return (
    <Container>
      <Header route="SACOLA" />
      <Content>
        <ProductsList />
        <PriceContainer />
      </Content>
    </Container>
  )
}
