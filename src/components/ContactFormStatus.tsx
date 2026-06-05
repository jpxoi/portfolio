import { AlertCircle, InfoCircle } from '@boxicons/react'

type Props = {
  kind: 'success' | 'error'
  message: string
}

export default function ContactFormStatus({ kind, message }: Props) {
  const isSuccess = kind === 'success'

  return (
    <div
      className={`text-small mb-6 rounded-2xl border px-4 py-4 ${
        isSuccess
          ? 'border-primary/25 bg-primary/8 text-copy'
          : 'border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-200'
      }`}
      role={isSuccess ? 'status' : 'alert'}
    >
      <div className='flex items-start gap-3'>
        <span
          className={`mt-0.5 inline-flex shrink-0 ${isSuccess ? 'text-primary' : 'text-rose-700 dark:text-rose-200'}`}
          aria-hidden='true'
        >
          {isSuccess ? (
            <InfoCircle className='size-5' color='currentColor' />
          ) : (
            <AlertCircle className='size-5' color='currentColor' />
          )}
        </span>
        <div>
          <p className='font-medium'>{isSuccess ? 'Message sent' : 'Unable to send message'}</p>
          <p className='mt-1 opacity-90'>{message}</p>
        </div>
      </div>
    </div>
  )
}
