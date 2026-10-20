import { useState } from 'react'
import {
  CONTACT_FORM_URL,
  focusFirstError,
  isHoneypotFilled,
  submitToAppsScript,
  validateRequired,
  withoutError,
  type FieldErrors,
  type SubmitStatus,
} from '../../../lib/forms'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'

const REQUIRED_FIELDS = {
  name: 'Please enter your full name.',
  phone: 'Please enter your phone number.',
  email: 'Please enter your email address.',
  message: 'Please tell us what you need.',
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (isHoneypotFilled(data)) {
      setStatus('success')
      form.reset()
      return
    }

    const fieldErrors = validateRequired(data, REQUIRED_FIELDS)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length) {
      setStatus('idle')
      focusFirstError(form, fieldErrors)
      return
    }

    setStatus('submitting')
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    try {
      const ok = await submitToAppsScript(CONTACT_FORM_URL, {
        name,
        phone,
        email,
        message,
      })
      if (ok) {
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
    <form
      onSubmit={handleSubmit}
      onInput={(e) => {
        const { name } = e.target as HTMLInputElement
        if (errors[name]) setErrors((prev) => withoutError(prev, name))
      }}
      noValidate
      className="space-y-4"
    >
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Full Name" name="name" required error={errors.name} />
        <FormField label="Phone Number" name="phone" type="tel" required error={errors.phone} />
      </div>
      <FormField label="Email Address" name="email" type="email" required error={errors.email} />
      <FormField
        label="What do you need?"
        name="message"
        as="textarea"
        rows={5}
        required
        error={errors.message}
      />

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
