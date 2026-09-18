import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type KickerProps = ComponentPropsWithoutRef<'p'> & {
  /** Which side of the text the accent rule renders on. Every existing call
   *  site relies on the 'before' default (matches the original Figma pull);
   *  the Hero section's own reference has it after the text instead. */
  rulePosition?: 'before' | 'after'
  /** Overrides the label's default orange-500 text color (e.g. the Home
   *  "Our Services" kicker uses a dark gray instead). The accent rule
   *  itself always stays orange regardless of this override. */
  textClassName?: string
}

/** Small uppercase eyebrow label with a short accent rule, e.g. "OUR SERVICES". */
export function Kicker({
  className,
  children,
  rulePosition = 'before',
  textClassName = 'text-orange-500',
  ...props
}: KickerProps) {
  const rule = <span className="h-[2px] w-6 bg-orange-500" aria-hidden="true" />
  return (
    <p
      className={clsx(
        'inline-flex items-center gap-2 font-heading text-sm font-semibold tracking-[0.14em] uppercase',
        textClassName,
        className,
      )}
      {...props}
    >
      {rulePosition === 'before' && rule}
      {children}
      {rulePosition === 'after' && rule}
    </p>
  )
}
