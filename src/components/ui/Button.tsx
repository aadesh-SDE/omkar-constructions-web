import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'outline-light' | 'ghost'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500',
  outline:
    'border border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:outline-navy-900',
  'outline-light':
    'border border-white/40 text-white hover:bg-white hover:text-navy-900 focus-visible:outline-white',
  ghost: 'text-navy-900 hover:text-orange-600 focus-visible:outline-navy-900',
}

type ButtonOwnProps<T extends ElementType> = {
  as?: T
  variant?: ButtonVariant
  className?: string
}

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

/** Shared CTA button. Renders as a <button> by default; pass `as={Link}`
 *  (or "a") plus its props (e.g. `to`/`href`) to use it as a link. */
export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button'
  return (
    <Component
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3',
        'font-heading text-md font-semibold tracking-wide uppercase',
        'transition-colors duration-200 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
