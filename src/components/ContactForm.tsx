import { type ChangeEvent, type SubmitEvent, useState } from 'react'
import ContactFormStatus from './ContactFormStatus'
import {
  ENABLE_CLIENT_VALIDATION,
  FORMCARRY_ENDPOINT,
  initialContactFormValues,
  MIN_MESSAGE_LENGTH,
  type ContactFormErrors,
  type ContactFormValues,
  validateContactForm,
} from '../lib/contact-form-validation'

const formInputClass =
  'border-input-border text-copy transition-theme focus-visible:border-primary absolute top-0 left-0 z-1 h-full w-full resize-none rounded-xl border-2 border-solid p-6 focus-visible:outline-none'

const formLabelClass = 'text-smaller bg-page transition-theme absolute -top-3 left-5 z-10 p-1'

const fieldErrorClass = 'text-smaller text-rose-700 dark:text-rose-300 -mt-5 mb-8 px-1 font-medium'
const submitButtonClass =
  'inline-flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-primary px-5 py-2.5 text-small font-medium text-page transition-theme focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-alt hover:text-page disabled:cursor-not-allowed disabled:opacity-70 w-full sm:w-auto'

type SubmitFeedback =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; message: string }
  | { state: 'error'; message: string }

function getInputClasses(hasError: boolean): string {
  return [formInputClass, hasError ? 'border-rose-500/45 focus-visible:border-rose-500' : 'bg-transparent'].join(' ')
}

function getLabelClasses(hasError: boolean): string {
  return [formLabelClass, hasError ? 'text-rose-700 dark:text-rose-300' : 'text-copy-muted'].join(' ')
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className={fieldErrorClass} role='alert'>
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [feedback, setFeedback] = useState<SubmitFeedback>({ state: 'idle' })
  const isSubmitting = feedback.state === 'submitting'

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const nextValues = {
        ...values,
        [field]: event.target.value,
      }

      setValues(nextValues)

      if (ENABLE_CLIENT_VALIDATION && errors[field]) {
        setErrors(validateContactForm(nextValues))
      }

      if (feedback.state !== 'idle') {
        setFeedback({ state: 'idle' })
      }
    }

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const nextErrors = ENABLE_CLIENT_VALIDATION ? validateContactForm(values) : {}
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFeedback({ state: 'idle' })
      return
    }

    setFeedback({ state: 'submitting' })

    try {
      const response = await fetch(FORMCARRY_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _gotcha: '',
        }),
      })

      const data = (await response.json().catch(() => null)) as { code?: number; message?: string } | null

      if (!response.ok || (typeof data?.code === 'number' && data.code !== 200)) {
        throw new Error(data?.message || 'Something went wrong while sending your message.')
      }

      setValues(initialContactFormValues)
      setErrors({})
      setFeedback({ state: 'success', message: "Thanks, I've received your message and will get back to you soon." })
    } catch (error) {
      setFeedback({
        state: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your message.',
      })
    }
  }

  return (
    <div>
      <h3 className='text-h3 mb-6 text-center lg:text-left'>Write me about your project</h3>

      <form onSubmit={handleSubmit} className='w-full' name='contactForm' noValidate aria-busy={isSubmitting}>
        <div className='absolute left-[-9999px] h-0 w-0 overflow-hidden' aria-hidden='true'>
          <label htmlFor='contact-honeypot'>Leave empty</label>
          <input type='text' id='contact-honeypot' name='_gotcha' tabIndex={-1} autoComplete='off' />
        </div>

        <div className='relative mb-8 h-16'>
          <label htmlFor='name' className={getLabelClasses(Boolean(errors.name))}>
            Full Name
          </label>
          <input
            type='text'
            placeholder='Insert your name'
            className={getInputClasses(Boolean(errors.name))}
            id='name'
            name='name'
            autoComplete='name'
            value={values.name}
            onChange={handleChange('name')}
            disabled={isSubmitting}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
        </div>
        {errors.name ? <FieldError id='name-error' message={errors.name} /> : null}

        <div className='relative mb-8 h-16'>
          <label htmlFor='email' className={getLabelClasses(Boolean(errors.email))}>
            Email
          </label>
          <input
            type='email'
            placeholder='Insert your email'
            className={getInputClasses(Boolean(errors.email))}
            id='email'
            name='email'
            autoComplete='email'
            value={values.email}
            onChange={handleChange('email')}
            disabled={isSubmitting}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
        </div>
        {errors.email ? <FieldError id='email-error' message={errors.email} /> : null}

        <div className='relative mb-8 h-44'>
          <label htmlFor='message' className={getLabelClasses(Boolean(errors.message))}>
            Message
          </label>
          <textarea
            placeholder='Describe your project'
            className={getInputClasses(Boolean(errors.message))}
            id='message'
            name='message'
            value={values.message}
            onChange={handleChange('message')}
            disabled={isSubmitting}
            minLength={MIN_MESSAGE_LENGTH}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            cols={30}
            rows={10}
            required
          />
        </div>
        {errors.message ? <FieldError id='message-error' message={errors.message} /> : null}

        {feedback.state === 'success' || feedback.state === 'error' ? (
          <ContactFormStatus kind={feedback.state} message={feedback.message} />
        ) : null}

        <button type='submit' className={submitButtonClass} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
