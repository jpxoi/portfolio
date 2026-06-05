import { type ChangeEvent, type SubmitEvent, useState } from 'react'

const FORMCARRY_ENDPOINT = 'https://formcarry.com/s/IdMAAJSEpJf'
const MIN_MESSAGE_LENGTH = 25
const ENABLE_CLIENT_VALIDATION = false

const formInputClass =
  'border-input-border text-copy transition-theme focus-visible:border-primary absolute top-0 left-0 z-1 h-full w-full resize-none rounded-xl border-2 border-solid p-6 focus-visible:outline-none'

const formLabelClass = 'text-smaller bg-page transition-theme absolute -top-3 left-5 z-10 p-1'

const fieldErrorClass = 'text-smaller text-rose-700 dark:text-rose-300 -mt-5 mb-8 px-1 font-medium'
const submitButtonClass =
  'inline-flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-primary px-5 py-2.5 text-small font-medium text-page transition-theme focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-alt hover:text-page disabled:cursor-not-allowed disabled:opacity-70 w-full sm:w-auto'

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

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
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const nextValues = {
        ...values,
        [field]: event.target.value,
      }

      setValues(nextValues)

      if (ENABLE_CLIENT_VALIDATION && errors[field]) {
        setErrors(validate(nextValues))
      }

      if (submitState !== 'idle') {
        setSubmitState('idle')
        setStatusMessage('')
      }
    }

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const nextErrors = ENABLE_CLIENT_VALIDATION ? validate(values) : {}
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('idle')
      setStatusMessage('')
      return
    }

    setSubmitState('submitting')
    setStatusMessage('')

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

      setValues(initialValues)
      setErrors({})
      setSubmitState('success')
      setStatusMessage("Thanks, I've received your message and will get back to you soon.")
    } catch (error) {
      setSubmitState('error')
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong while sending your message.')
    }
  }

  return (
    <div>
      <h3 className='text-h3 mb-6 text-center lg:text-left'>Write me about your project</h3>

      <form onSubmit={handleSubmit} className='w-full' name='contactForm' noValidate>
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
            minLength={MIN_MESSAGE_LENGTH}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            cols={30}
            rows={10}
            required
          />
        </div>
        {errors.message ? <FieldError id='message-error' message={errors.message} /> : null}

        {statusMessage ? (
          <div
            className={`text-small mb-6 rounded-2xl border px-4 py-4 ${
              submitState === 'success'
                ? 'border-primary/25 bg-primary/8 text-copy'
                : 'border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-200'
            }`}
            role={submitState === 'error' ? 'alert' : 'status'}
          >
            <div className='flex items-start gap-3'>
              <span
                className={`text-small mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full font-semibold ${
                  submitState === 'success'
                    ? 'bg-primary/12 text-primary'
                    : 'bg-rose-500/15 text-rose-700 dark:text-rose-200'
                }`}
                aria-hidden='true'
              >
                {submitState === 'success' ? 'i' : '!'}
              </span>
              <div>
                <p className='font-medium'>{submitState === 'success' ? 'Message sent' : 'Unable to send message'}</p>
                <p className='mt-1 opacity-90'>{statusMessage}</p>
              </div>
            </div>
          </div>
        ) : null}

        <button type='submit' className={submitButtonClass} disabled={submitState === 'submitting'}>
          {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
