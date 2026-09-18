import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'outline-light' | 'ghost'
type ButtonSize = 'lg' | 'sm'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500',
  outline:
    'border border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:outline-navy-900',
  'outline-light':
    'border border-white/40 text-white hover:bg-white hover:text-navy-900 focus-visible:outline-white',
  ghost: 'text-navy-900 hover:text-orange-600 focus-visible:outline-navy-900',
}

// Exact Figma measurements (×2): the hero/CTA buttons pad 34px on every
// side; the header's compact "Get a Quote" pads 25px vertical / 36px horizontal.
const sizeClasses: Record<ButtonSize, string> = {
  lg: 'px-[34px] py-[34px]',
  sm: 'px-[36px] py-[25px]',
}

type ButtonOwnProps<T extends ElementType> = {
  as?: T
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

/** Shared CTA button. Renders as a <button> by default; pass `as={Link}`
 *  (or "a") plus its props (e.g. `to`/`href`) to use it as a link. */
export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button'
  return (
    <Component
      className={clsx(
        // Corner radius and gap are exact Figma values (×2): 5px radius →
        // 10px, and 9px icon/text gap → 18px. Buttons are NOT pills.
        // Label style is Roboto Bold (weight 700), title case — NOT
        // uppercase: the Figma text layers are literally "Get a Quote" /
        // "Explore Our Services" etc, no uppercase transform.
        'inline-flex items-center justify-center gap-[18px] rounded-[10px]',
        'font-body text-md leading-none font-bold',
        'transition-colors duration-200 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
