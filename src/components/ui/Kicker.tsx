import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

/** Small uppercase eyebrow label with a short accent rule, e.g. "OUR SERVICES". */
export function Kicker({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(
        'inline-flex items-center gap-2 font-heading text-sm font-semibold tracking-[0.14em] text-orange-500 uppercase',
        className,
      )}
      {...props}
    >
      <span className="h-[2px] w-6 bg-orange-500" aria-hidden="true" />
      {children}
    </p>
  )
}
