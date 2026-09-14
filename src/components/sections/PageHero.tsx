import { Link } from 'react-router-dom'
import { Kicker } from '../ui/Kicker'

type PageHeroProps = {
  breadcrumb: string
  kicker: string
  /** Two lines; wrap the word(s) that should render in orange with <span className="text-orange-500"> yourself if needed — otherwise the whole 2nd line is highlighted. */
  heading: [string, string]
  body: string
  image: string
}

/** Shared inner-page hero used by About, Services and Projects: breadcrumb,
 *  kicker, two-line heading (2nd line in orange), body copy, background photo,
 *  and the "PEOPLE PROJECTS PROGRESS" vertical side label from the Figma. */
export function PageHero({ breadcrumb, kicker, heading, body, image }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center py-24 text-white lg:py-32"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.88), rgba(10,20,32,0.55)), url(${image})` }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-body text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          &gt; {breadcrumb}
        </p>
        <Kicker className="mt-4 text-orange-500">{kicker}</Kicker>
        <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold leading-[1.1] lg:text-5xl">
          {heading[0]}
          <br />
          <span className="text-orange-500">{heading[1]}</span>
        </h1>
        <p className="mt-4 max-w-xl font-body text-white/75">{body}</p>
      </div>

      <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 lg:right-10 lg:block">
        <div className="flex items-center gap-3">
          <span className="h-24 w-px bg-white/30" aria-hidden="true" />
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-white/70 [writing-mode:vertical-lr]">
            PEOPLE PROJECTS PROGRESS
          </p>
        </div>
      </div>
    </section>
  )
}
