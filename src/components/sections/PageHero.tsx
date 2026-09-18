import { Link } from 'react-router-dom'
import { Highlight } from '../ui/Highlight'
import { Kicker } from '../ui/Kicker'

type PageHeroProps = {
  breadcrumb: string
  kicker: string
  /** Two lines; wrap the word(s) that should render in orange with <span className="text-orange-500"> yourself if needed — otherwise the whole 2nd line is highlighted. */
  heading: [string, string]
  /** Optional: highlight just one word/phrase per line instead of the whole
   *  2nd line (e.g. ['Experience.', 'Purpose.']) — opt-in per page so
   *  pages that haven't been reviewed against a reference yet keep the
   *  original whole-2nd-line-orange behavior. */
  highlight?: [string, string]
  body: string
  image: string
}

/** Shared inner-page hero used by About, Services and Projects: breadcrumb,
 *  kicker, two-line heading (2nd line in orange), body copy, background photo,
 *  and the "PEOPLE PROJECTS PROGRESS" vertical side label from the Figma.
 *  Height is 70% of the Home Hero's own height (same tiered dvh-minus-header
 *  formula, at 70dvh instead of 100dvh). */
export function PageHero({ breadcrumb, kicker, heading, highlight, body, image }: PageHeroProps) {
  return (
    <section
      className="relative flex h-[calc(70dvh-27px)] items-center overflow-hidden bg-navy-950 bg-cover bg-[position:center_65%] text-white sm:h-[calc(70dvh-29px)] md:h-[calc(70dvh-31px)] lg:h-[calc(70dvh-33px)] xl:h-[calc(70dvh-35px)] 2xl:h-[calc(70dvh-37px)]"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.85), rgba(10,20,32,0.1)), url(${image})` }}
    >
      <div className="relative mx-auto w-full max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <p className="font-body text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          &gt; {breadcrumb}
        </p>
        {/* Same tiered size as the Home Hero's kicker (Kicker's own base
            sets text-sm unconditionally, hence the ! overrides). */}
        <Kicker
          className="mt-4 text-[8px]! sm:text-[9px]! md:text-[9px]! lg:text-[10px]! xl:text-[11px]! 2xl:text-[12px]!"
          textClassName="text-white"
        >
          {kicker}
        </Kicker>
        {/* Same size/weight/line-height/spacing as the Home Hero's heading + body. */}
        <h1 className="mt-[9px] max-w-2xl font-heading text-[56px] font-extrabold uppercase leading-[1.05] sm:mt-[10px] sm:text-[60px] md:mt-[11px] md:text-[64px] lg:mt-[12px] lg:text-[68px] xl:mt-[13px] xl:text-[72px] 2xl:mt-[14px] 2xl:text-[76px]">
          {highlight ? (
            <>
              <Highlight text={heading[0]} highlight={highlight[0]} />
              <br />
              <Highlight text={heading[1]} highlight={highlight[1]} />
            </>
          ) : (
            <>
              {heading[0]}
              <br />
              <span className="text-orange-500">{heading[1]}</span>
            </>
          )}
        </h1>
        <p className="mt-[9px] max-w-xl font-body text-[16px] text-white sm:mt-[10px] sm:text-[16px] md:mt-[11px] md:text-[17px] lg:mt-[12px] lg:text-[17px] xl:mt-[13px] xl:text-[18px] 2xl:mt-[14px] 2xl:text-[19px]">
          {body}
        </p>
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
