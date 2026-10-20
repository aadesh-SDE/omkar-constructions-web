import { clsx } from 'clsx'

const baseClasses =
  'w-full rounded-lg border bg-paper px-4 py-2.5 font-body text-sm text-ink outline-none transition-colors'

type FormFieldProps = {
  label: string
  name: string
  type?: string
  as?: 'input' | 'textarea' | 'select'
  rows?: number
  required?: boolean
  /** Options for `as="select"`; a disabled "Select…" placeholder is prepended. */
  options?: string[]
  /** Show an orange asterisk after the label of required fields. */
  markRequired?: boolean
  /** Validation message; renders a red border and the message under the field. */
  error?: string
}

/** Labelled form control shared by the Contact and Careers forms. */
export function FormField({
  label,
  name,
  type = 'text',
  as = 'input',
  rows,
  required,
  options = [],
  markRequired,
  error,
}: FormFieldProps) {
  const errorId = `${name}-error`
  const controlProps = {
    id: name,
    name,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: clsx(
      baseClasses,
      error ? 'border-red-600 focus:border-red-600' : 'border-line focus:border-orange-500',
    ),
  }
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-body text-sm font-medium text-ink-soft">
        {label}
        {required && markRequired && <span className="text-orange-500"> *</span>}
      </label>
      {as === 'textarea' ? (
        <textarea rows={rows} {...controlProps} />
      ) : as === 'select' ? (
        <select defaultValue="" {...controlProps}>
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...controlProps}
          {...(type === 'tel' && {
            // Phone numbers are capped at 10 digits; anything else typed or
            // pasted (spaces, dashes, letters) is stripped as the user types.
            // No maxLength: it would truncate a pasted "+91 98765 43210"
            // before the non-digits are removed.
            inputMode: 'numeric' as const,
            onInput: (e: React.FormEvent<HTMLInputElement>) => {
              const el = e.currentTarget
              let digits = el.value.replace(/\D/g, '')
              const pasted = (e.nativeEvent as InputEvent).inputType === 'insertFromPaste'
              if (pasted && digits.length > 10) digits = digits.replace(/^(91|0)/, '')
              el.value = digits.slice(0, 10)
            },
          })}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1 font-body text-2xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
