import React from 'react'

import { Card } from '../Card'

import { Container, Title, Content } from './styles'

export function ProductsList() {
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
