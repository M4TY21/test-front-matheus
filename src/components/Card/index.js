import React from 'react'

import { Container, ProductImg, Content, Title, Price } from './styles'

export function Card() {
  return (
    <Container>
      <ProductImg src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />

      <Content>
        <Title>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</Title>

        <Price>R$ 225,90</Price>
      </Content>
    </Container>
  )
}
