import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 15px;
  gap: 9px;

  height: 129px;
  width: 341px;

  border-radius: 3px;
  border: 1px solid #ccc;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.h2`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  color: #212122;
`

export const Discount = styled.h2`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  color: #ff7800;
`

export const TotalPrice = styled.h2`
  margin-top: 8px;

  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  color: #212122;
`
