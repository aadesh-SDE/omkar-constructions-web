import { useState } from 'react'
import { Button } from '../../ui/Button'

// TODO: replace with the real Web3Forms access key (create one free at
// https://web3forms.com — no backend needed, it emails submissions straight
// to Omkar's inbox).
const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <Field label="Email Address" name="email" type="email" required />
      <Field label="What do you need?" name="message" as="textarea" rows={5} required />

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="font-body text-sm text-orange-600">
          Thanks — we've received your message and will get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="font-body text-sm text-red-600">
          Something went wrong sending that. Please try again, or reach us directly using the
          details alongside this form.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  as = 'input',
  rows,
  required,
}: {
  label: string
  name: string
  type?: string
  as?: 'input' | 'textarea'
  rows?: number
  required?: boolean
}) {
  const sharedClasses =
    'w-full rounded-lg border border-line bg-paper px-4 py-2.5 font-body text-sm text-ink outline-none transition-colors focus:border-orange-500'
  return (
    <label className="block">
      <span className="mb-1.5 block font-body text-sm font-medium text-ink-soft">{label}</span>
      {as === 'textarea' ? (
        <textarea name={name} rows={rows} required={required} className={sharedClasses} />
      ) : (
        <input type={type} name={name} required={required} className={sharedClasses} />
      )}
    </label>
  )
}
