import React from 'react'

import { Formik } from 'formik'
import { schema } from '../../services/schema'

import { PriceContainer } from '../../components/PriceContainer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import {
  BigInput,
  InputContainer,
  Container,
  Content,
  ErrorMensage,
  Form,
  FormContainer,
  Label,
  Title,
  SmallInputContainer,
  SmallInput
} from './styles'

export function Payment() {
  return (
    <Container>
      <Header route="PAGAMENTO" />

      <Content>
        <Title>CARTÃO DE CRÉDITO</Title>

        <Formik
          initialValues={{ numberCard: '', name: '', venciment: '', CVV: '' }}
          validationSchema={schema}
          onChange={({ values }) => {
            console.log('afsddsa')
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormContainer>
                <InputContainer>
                  <Label>Número do cartão:</Label>
                  <BigInput
                    placeholder="____.____.____.____"
                    name="numberCard"
                    value={values.numberCard}
                    maxLength="19"
                    onChange={handleChange}
                  />
                  {errors.numberCard && touched.numberCard && (
                    <ErrorMensage>{errors.numberCard}</ErrorMensage>
                  )}
                </InputContainer>

                <InputContainer>
                  <Label>Nome do Titular:</Label>
                  <BigInput
                    placeholder="Como no cartão"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && <ErrorMensage>{errors.name}</ErrorMensage>}
                </InputContainer>

                <SmallInputContainer>
                  <InputContainer>
                    <Label>Validade (mês/ano):</Label>
                    <SmallInput />
                  </InputContainer>

                  <InputContainer>
                    <Label>CVV:</Label>
                    <SmallInput />
                  </InputContainer>
                </SmallInputContainer>
              </FormContainer>

              <PriceContainer />

              <Button title="FINALIZAR O PEDIDO" type="submit" />
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
