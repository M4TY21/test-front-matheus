import React from 'react'

import { useNavigate } from 'react-router-dom'

import { PriceContainer } from '../../components/PriceContainer'
import { ProductsList } from '../../components/ProductsList'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Cart() {
  const navigation = useNavigate()

  function handleNavigateToPayment() {
    navigation('/payment')
  }

  return (
    <Container>
      <Header route="SACOLA" />
      <Content>
        <ProductsList />
        <PriceContainer />
        <Button onClick={handleNavigateToPayment}>SEGUIR PARA O PAGAMENTO</Button>
      </Content>
    </Container>
  )
}
