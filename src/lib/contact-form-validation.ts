export const MIN_MESSAGE_LENGTH = 25
export const FORMCARRY_ENDPOINT = 'https://formcarry.com/s/IdMAAJSEpJf'

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export const initialContactFormValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell me a bit about your project.'
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${MIN_MESSAGE_LENGTH} characters.`
  }

  return errors
}
