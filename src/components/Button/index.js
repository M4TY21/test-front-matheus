import React from 'react'

import { Container } from './styles'

export function Button({ title, link }) {
  return <Container to={link}>{title}</Container>
}
