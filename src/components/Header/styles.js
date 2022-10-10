import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;

  width: 100%;
  min-height: 40px;

  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  background: #fff;
`

export const Navigation = styled(Link)`
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-decoration: none;

  color: ${({ $atualRoute }) => ($atualRoute ? '#ff7800' : '#CCC')};
  cursor: pointer;
`
