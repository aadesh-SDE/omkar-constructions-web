import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { Container } from './Container'

type SectionTone = 'paper' | 'mist' | 'navy'

const toneClasses: Record<SectionTone, string> = {
  paper: 'bg-paper text-ink',
  mist: 'bg-mist text-ink',
  navy: 'bg-navy-900 text-white',
}

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  tone?: SectionTone
  /** Set false to lay out children directly, without the default Container wrapper. */
  contained?: boolean
}

/** Standard full-width page section: background tone + consistent vertical rhythm. */
export function Section({
  tone = 'paper',
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx('py-16 lg:py-24', toneClasses[tone], className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
