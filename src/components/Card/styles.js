import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  gap: 11px;

  height: 90px;
  width: 100%;

  border: 1px solid #eee;
  border-radius: 3px;
`

export const ProductImg = styled.img`
  width: 65px;
  height: 65px;
`

export const Content = styled.div`
  gap: 15px;
`

export const Title = styled.h2`
  height: 45px;

  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #212122;
`

export const Price = styled.h3`
  color: #212122;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`
