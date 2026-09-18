import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

/** Centers content and applies the site's standard max-width + side gutters.
 *  Uses all 6 Tailwind tiers (base/sm/md/lg/xl/2xl) — xl carries the given
 *  53px spec, the rest step by ±8px per tier. */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]',
        className,
      )}
      {...props}
    />
  )
}
