import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background: #eee;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: #eee;
`

export const Title = styled.h1`
  margin-left: 11px;

  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  color: #999;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10px 60px 10px;
  gap: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 5px 25px 10px;
  gap: 25px;

  height: 279px;
  width: 340px;

  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const InputContainer = styled.div``

export const Label = styled.label`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  color: #ccc;
`

export const BigInput = styled.input`
  padding-left: 13px;

  height: 45px;
  width: 320px;

  border: 1px solid #e7e7e7;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #212122;

  :focus {
    border: 1px solid #a43287;
    outline: 0;
  }

  ::placeholder {
    color: #e0e7ee;
  }
`

export const ErrorMensage = styled.p``

export const SmallInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const SmallInput = styled.input`
  height: 45px;
  width: 160px;

  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`
