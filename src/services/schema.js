import * as yup from 'yup'

export const schema = yup.object().shape({
  numberCard: yup.string().min(),
  name: yup.string(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date()
  })
})
