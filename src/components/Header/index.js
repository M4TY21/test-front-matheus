import React from 'react'

import { Container, Navigation } from './styles'

export function Header({ route }) {
  const routes = [
    { name: 'SACOLA', route: '/' },
    { name: 'PAGAMENTO', route: '/payment' },
    { name: 'CONFIRMAÇÃO', route: '/confirm' }
  ]
  return (
    <Container>
      {routes.map((item, index) => (
        <Navigation key={index} $atualRoute={item.name === route ? true : false} to={item.route}>
          {item.name}
        </Navigation>
      ))}
    </Container>
  )
}
