import React from 'react'

import { Header } from '../../components/Header'
import { ProductsList } from '../../components/ProductsList'

import { Container } from './styles'

export function Cart() {
  return (
    <Container>
      <Header />
      <ProductsList />
    </Container>
  )
}
