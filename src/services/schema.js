import * as yup from 'yup'

export const schema = yup.object().shape({
  numberCard: yup.number('Invalid Field').min(15, 'Invalid Field').required('Invalid Field'),
  name: yup.string('Invalid Field').required('Invalid Field'),
  venciment: yup.string('Invalid Field').min(6, 'Invalid Field').required('Invalid Field'),
  cvv: yup.number('Invalid Field').min(3, 'Invalid Field').required('Invalid Field')
})
