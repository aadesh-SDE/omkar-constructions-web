import { clsx } from 'clsx'
import type { ReactNode } from 'react'

const hexClipPath =
  'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

type HexBadgeProps = {
  /** Big top line, e.g. "17-18" */
  value: ReactNode
  /** Smaller line(s) under the value, e.g. "Years of Experience" */
  label: ReactNode
  className?: string
}

/** The hexagon stat badge motif from the pamphlet/Figma
 *  (e.g. "17-18 Years of Experience"). Navy hexagon, orange value, white label. */
export function HexBadge({ value, label, className }: HexBadgeProps) {
  return (
    <div
      className={clsx(
        'flex aspect-square w-36 flex-col items-center justify-center gap-1 bg-navy-900 p-4 text-center sm:w-44',
        className,
      )}
      style={{ clipPath: hexClipPath }}
    >
      <span className="font-heading text-xl font-extrabold text-orange-500 sm:text-2xl">
        {value}
      </span>
      <span className="font-heading text-2xs font-semibold tracking-wide text-white uppercase">
        {label}
      </span>
    </div>
  )
}

type HexFrameProps = {
  src: string
  alt: string
  className?: string
}

/** Hexagon-cropped photo frame, matching the pamphlet's image treatment. */
export function HexFrame({ src, alt, className }: HexFrameProps) {
  return (
    <div
      className={clsx('aspect-square bg-orange-500 p-1.5', className)}
      style={{ clipPath: hexClipPath }}
    >
      <div
        className="h-full w-full overflow-hidden bg-navy-900"
        style={{ clipPath: hexClipPath }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
