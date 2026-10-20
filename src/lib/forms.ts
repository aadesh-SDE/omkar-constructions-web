// Web app URLs of the two Google Apps Script deployments that email form
// submissions to omkarconstruction155@gmail.com (source in apps-script/).
// Paste each deployment's ".../exec" URL here.
export const CONTACT_FORM_URL =
  'https://script.google.com/macros/s/AKfycbwmmQzmnNRR5Zc7ziZlS7DlcWIaKS4NQ_SemKuv4HaajfBYPWNoDYkDqRNp5_M_Ydid/exec'
export const CAREERS_FORM_URL =
  'https://script.google.com/macros/s/AKfycbyJu1UET90c6D5jHCv-l-p4XUhbm5faVJtE69DLtDmji9A1kR8TT3jFvxAK7kwM_fl5/exec'

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

/** Honeypot: real users never see or fill the `_honey` field. */
export function isHoneypotFilled(data: FormData) {
  return Boolean(String(data.get('_honey') ?? '').trim())
}

export type FieldErrors = Record<string, string>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Checks each named field is filled (ignoring surrounding whitespace), plus
 *  basic email/phone format. `fields` maps field name → message shown when
 *  it's empty. Returns an empty object when everything is valid. */
export function validateRequired(data: FormData, fields: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {}
  for (const [name, message] of Object.entries(fields)) {
    const value = String(data.get(name) ?? '').trim()
    if (!value) errors[name] = message
    else if (name === 'email' && !EMAIL_PATTERN.test(value))
      errors[name] = 'Please enter a valid email address.'
    else if (name === 'phone' && !/^\d{10}$/.test(value))
      errors[name] = 'Please enter a 10-digit phone number.'
  }
  return errors
}

/** Returns `errors` without the entry for `name` (used to clear a field's
 *  message as soon as the user edits it). */
export function withoutError(errors: FieldErrors, name: string): FieldErrors {
  const next = { ...errors }
  delete next[name]
  return next
}

/** Moves focus to the first invalid control so keyboard and screen-reader
 *  users land on the problem. */
export function focusFirstError(form: HTMLFormElement, errors: FieldErrors) {
  const first = Object.keys(errors)[0]
  if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus()
}

/** POSTs a form to a Google Apps Script web app (see apps-script/*.gs) and
 *  resolves true when the script reports the email was sent. Sent as
 *  text/plain so the browser makes a "simple" request with no CORS
 *  preflight, which Apps Script can't answer. */
export async function submitToAppsScript(url: string, payload: Record<string, unknown>) {
  if (!url) throw new Error('Form endpoint URL is not configured.')
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const result = (await res.json()) as { success?: boolean }
  return result.success === true
}

/** Reads a file as base64 (without the data: URL prefix) for JSON upload. */
export function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '')
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}
