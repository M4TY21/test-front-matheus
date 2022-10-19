import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;

  border: 0;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;

  color: #fff;

  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #d45a00;
  }
`
