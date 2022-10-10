import React from 'react'

import { PriceContainer } from '../../components/PriceContainer'
import { ProductsList } from '../../components/ProductsList'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Cart() {
  return (
    <Container>
      <Header route="SACOLA" />
      <Content>
        <ProductsList />
        <PriceContainer />
        <Button title="SEGUIR PARA O PAGAMENTO" />
      </Content>
    </Container>
  )
}
