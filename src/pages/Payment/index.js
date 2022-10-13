import React from 'react'

import { PriceContainer } from '../../components/PriceContainer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { schema } from '../../services/schema'

import {
  BigInput,
  Container,
  Content,
  ErrorInput,
  Form,
  FormContainer,
  Label,
  Title
} from './styles'
import { Formik } from 'formik'

export function Payment() {
  return (
    <Container>
      <Header route="PAGAMENTO" />
      <Content>
        <Title>CARTÃO DE CRÉDITO</Title>

        <Form
          initialValues={{ numberCard: '', name: '', venciment: '', CVV: '' }}
          validationSchema={schema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <Label>Número do cartão:</Label>
                <BigInput
                  placeholder="____.____.____.____"
                  name="numberCard"
                  value={values.numberCard}
                  maxLength="19"
                />
                {errors.numberCard && touched.numberCard && (
                  <ErrorInput>{errors.numberCard}</ErrorInput>
                )}

                <Label>Nome do Titular:</Label>
                <BigInput placeholder="Como no cartão" name="name" value={values.name} />
                {errors.name && touched.name && <ErrorInput>{errors.name}</ErrorInput>}
              </FormContainer>

              <PriceContainer />

              <Button title="FINALIZAR O PEDIDO" type="submit" />
            </form>
          )}
        </Form>
      </Content>
    </Container>
  )
}
