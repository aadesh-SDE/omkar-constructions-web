import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4

// Sizes match the Figma file's type scale exactly (Figma px × 2): H1 76px,
// H2 54px, H3 28px, H4 24px at desktop width, scaled down for smaller screens.
const levelClasses: Record<HeadingLevel, string> = {
  1: 'text-3xl leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl',
  2: 'text-2xl leading-[1.1] tracking-tight sm:text-3xl',
  3: 'text-xl leading-snug lg:text-2xl',
  4: 'text-lg leading-snug',
}

type HeadingProps = {
  level?: HeadingLevel
  className?: string
} & Omit<ComponentPropsWithoutRef<ElementType>, 'className'>

/** Brand heading style. Use the `text-orange-500` class on a child <span>
 *  to highlight a word, matching the Figma headline pattern. */
export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Component = `h${level}` as ElementType
  return (
    <Component
      className={clsx(
        'font-heading font-bold text-ink',
        levelClasses[level],
        className,
      )}
      {...props}
    />
  )
}
