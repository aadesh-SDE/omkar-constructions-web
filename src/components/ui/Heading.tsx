import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4

const levelClasses: Record<HeadingLevel, string> = {
  1: 'text-4xl leading-[1.08] tracking-tight lg:text-6xl',
  2: 'text-3xl leading-[1.12] tracking-tight lg:text-4xl',
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
