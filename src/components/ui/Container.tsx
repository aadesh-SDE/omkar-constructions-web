import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

/** Centers content and applies the site's standard max-width + side gutters. */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto w-full max-w-[1524px] px-6 lg:px-[53px]', className)}
      {...props}
    />
  )
}
