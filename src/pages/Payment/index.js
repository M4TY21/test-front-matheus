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
  YupMessage,
  Form,
  FormContainer,
  Label,
  Title,
  SmallInputContainer,
  SmallInput
} from './styles'

export function Payment() {
  function formatNumberCard(e) {
    const valueLength = e.target.value.length
    if (valueLength === 3 || valueLength === 7 || valueLength === 11) {
      e.target.value += '.'
    }
  }

  function formatVenciment(e) {
    const valueLength = e.target.value.length
    if (valueLength === 2) {
      e.target.value += '/'
    }
  }

  return (
    <Container>
      <Header route="PAGAMENTO" />

      <Content>
        <Title>CARTÃO DE CRÉDITO</Title>

        <Formik
          initialValues={{ numberCard: '', name: '', venciment: '', cvv: '' }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormContainer>
                <InputContainer>
                  <Label>Número do cartão:</Label>
                  <BigInput
                    placeholder="____.____.____.____"
                    name="numberCard"
                    maxLength={15}
                    type="text"
                    onKeyPress={(e) => {
                      handleChange(e)
                      formatNumberCard(e)
                    }}
                  />
                  {errors.numberCard && touched.numberCard && (
                    <YupMessage>{errors.numberCard[0]}</YupMessage>
                  )}
                </InputContainer>

                <InputContainer>
                  <Label>Nome do Titular:</Label>
                  <BigInput
                    placeholder="Como no cartão"
                    name="name"
                    type="text"
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && <YupMessage>{errors.name[0]}</YupMessage>}
                </InputContainer>

                <SmallInputContainer>
                  <InputContainer>
                    <Label>Validade (mês/ano):</Label>
                    <SmallInput
                      placeholder="__/____"
                      name="venciment"
                      type="text"
                      maxLength={7}
                      onKeyPress={(e) => {
                        handleChange(e)
                        formatVenciment(e)
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label>CVV:</Label>
                    <SmallInput
                      placeholder="___"
                      name="cvv"
                      type="text"
                      maxLength={3}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </SmallInputContainer>
              </FormContainer>

              <PriceContainer />

              <Button type="submit" disblable={isSubmitting}>
                FINALIZAR O PAGAMENTO
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
