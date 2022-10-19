import * as yup from 'yup'

export const schema = yup.object().shape({
  numberCard: yup
    .string('Invalid Field')
    .min(15, 'Invalid Field')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Invalid Field'),
  name: yup.string('Invalid Field').required('Invalid Field'),
  venciment: yup.string('Invalid Field').min(6, 'Invalid Field').required('Invalid Field'),
  cvv: yup.string('Invalid Field').min(3, 'Invalid Field').required('Invalid Field')
})
