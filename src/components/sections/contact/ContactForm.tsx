import { useState } from 'react'
import { footerContact } from '../../../content/nav'
import { Button } from '../../ui/Button'

const CONTACT_INBOX = footerContact.email
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_INBOX}`

type Status = 'idle' | 'submitting' | 'success' | 'error'

function isSubmitSuccess(result: { success?: boolean | string }) {
  return result.success === true || result.success === 'true'
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    if (String(data.get('_honey') ?? '').trim()) {
      setStatus('success')
      form.reset()
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          _replyto: email,
          _subject: `New project inquiry from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const result = (await res.json()) as { success?: boolean | string }
      if (isSubmitSuccess(result)) {
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
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <Field label="Email Address" name="email" type="email" required />
      <Field label="What do you need?" name="message" as="textarea" rows={5} required />

      <div className="flex justify-center">
        <Button
          type="submit"
          variant="primary"
          size="sm"
          className="h-[46px]! w-1/2 px-0! py-0! text-[13px]! sm:h-[48px]! sm:text-[14px]! md:h-[50px]! md:text-[15px]!"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

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
