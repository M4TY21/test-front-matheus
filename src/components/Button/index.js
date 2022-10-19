import React from 'react'

import { Container } from './styles'

export function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
