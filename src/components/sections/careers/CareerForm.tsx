import { useState } from 'react'
import { careerFormOptions } from '../../../content/careers'
import {
  CAREERS_FORM_URL,
  fileToBase64,
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
  location: 'Please enter your current location.',
  position: 'Please select the position you are applying for.',
  experience: 'Please select your total experience.',
  notice_period: 'Please select your notice period.',
  about: 'Please tell us a little about yourself.',
}

const RESUME_TYPES = ['.pdf', '.doc', '.docx']
const RESUME_MAX_BYTES = 5 * 1024 * 1024

function resumeError(file: File | null) {
  if (!file || file.size === 0) return 'Please upload your resume.'
  const name = file.name.toLowerCase()
  if (!RESUME_TYPES.some((ext) => name.endsWith(ext))) return 'Resume must be a PDF, DOC or DOCX file.'
  if (file.size > RESUME_MAX_BYTES) return 'Resume must be 5 MB or smaller.'
  return null
}

export function CareerForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [fileName, setFileName] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (isHoneypotFilled(data)) {
      setStatus('success')
      form.reset()
      setFileName(null)
      return
    }

    const fieldErrors = validateRequired(data, REQUIRED_FIELDS)
    const resume = data.get('attachment') as File | null
    const fileError = resumeError(resume)
    if (fileError) fieldErrors.attachment = fileError
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length) {
      setStatus('idle')
      focusFirstError(form, fieldErrors)
      return
    }

    const fields = Object.fromEntries(
      Object.keys(REQUIRED_FIELDS).map((key) => [key, String(data.get(key) ?? '').trim()]),
    )

    setStatus('submitting')
    try {
      const ok = await submitToAppsScript(CAREERS_FORM_URL, {
        ...fields,
        resume: { name: resume!.name, type: resume!.type, data: await fileToBase64(resume!) },
      })
      if (ok) {
        setStatus('success')
        form.reset()
        setFileName(null)
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
        <FormField label="Full Name" name="name" required markRequired error={errors.name} />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          required
          markRequired
          error={errors.phone}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Email Address"
          name="email"
          type="email"
          required
          markRequired
          error={errors.email}
        />
        <FormField
          label="Current Location"
          name="location"
          required
          markRequired
          error={errors.location}
        />
      </div>
      <FormField
        label="Position You're Applying For"
        name="position"
        as="select"
        options={careerFormOptions.positions}
        required
        markRequired
        error={errors.position}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Total Experience"
          name="experience"
          as="select"
          options={careerFormOptions.experience}
          required
          markRequired
          error={errors.experience}
        />
        <FormField
          label="Notice Period"
          name="notice_period"
          as="select"
          options={careerFormOptions.noticePeriod}
          required
          markRequired
          error={errors.notice_period}
        />
      </div>
      <FormField
        label="Tell us about yourself"
        name="about"
        as="textarea"
        rows={4}
        required
        markRequired
        error={errors.about}
      />

      <div>
        <label
          className={`flex cursor-pointer items-center gap-4 rounded-lg border border-dashed bg-mist px-4 py-4 transition-colors hover:border-orange-500 ${
            errors.attachment ? 'border-red-600' : 'border-line'
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 16V4M6 10l6-6 6 6M4 20h16" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block font-body text-sm font-medium text-ink">
              {fileName ?? 'Upload Resume'}
              {!fileName && <span className="text-orange-500"> *</span>}
            </span>
            <span className="block font-body text-2xs text-ink-faint">PDF, DOC or DOCX (Max 5 MB)</span>
          </span>
          <input
            type="file"
            name="attachment"
            accept={RESUME_TYPES.join(',')}
            required
            aria-invalid={errors.attachment ? true : undefined}
            aria-describedby={errors.attachment ? 'attachment-error' : undefined}
            className="sr-only"
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] ?? null
              setFileName(file?.name ?? null)
              const error = file ? resumeError(file) : null
              setErrors((prev) => {
                const next = withoutError(prev, 'attachment')
                return error ? { ...next, attachment: error } : next
              })
            }}
          />
        </label>
        {errors.attachment && (
          <p id="attachment-error" className="mt-1 font-body text-2xs text-red-600">
            {errors.attachment}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="h-[46px]! px-8! py-0! text-[13px]! sm:h-[48px]! sm:text-[14px]! md:h-[50px]! md:text-[15px]!"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Application →'}
      </Button>

      {status === 'success' && (
        <p className="font-body text-sm text-orange-600">
          Thanks — we've received your application and will get in touch if there's a suitable
          opportunity.
        </p>
      )}
      {status === 'error' && (
        <p className="font-body text-sm text-red-600">
          Something went wrong sending your application. Please try again, or email your resume
          to us directly.
        </p>
      )}
    </form>
  )
}
