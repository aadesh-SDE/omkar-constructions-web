import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Highlight } from '../ui/Highlight'
import { Icon } from '../ui/Icon'
import { Kicker } from '../ui/Kicker'

type CtaBannerProps = {
  kicker: string
  /** One or two lines; if two, the 2nd renders in orange. */
  heading: string | [string, string]
  body: string
  cta: string
  image: string
  /** For a single-line heading: substring to render in orange in place
   *  (e.g. "Project" in "Have a Project in Mind?"). Ignored for two-line headings. */
  highlight?: string
}

/** The recurring "Let's Build Together" CTA banner: dark photo background,
 *  kicker, heading, body, button. Reused (with different copy/photo) on
 *  Home, About, Services and Projects. */
export function CtaBanner({ kicker, heading, body, cta, image, highlight }: CtaBannerProps) {
  const lines = Array.isArray(heading) ? heading : [heading]
  return (
    <section
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center py-16 text-white lg:py-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark-to-light wash so the white copy on the left stays readable
          over whatever's in the photo, fading out toward the CTA button. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" aria-hidden="true" />
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="relative mx-auto flex max-w-[1524px] flex-col gap-6 px-[21px] sm:px-[29px] md:px-[37px] lg:flex-row lg:items-center lg:justify-between lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div>
          <Kicker rulePosition="after" textClassName="text-white" className="text-[14px]! font-normal!">
            {kicker}
          </Kicker>
          <h2 className="mt-3 font-heading text-3xl font-semibold lg:text-4xl">
            {lines[1] ? (
              <>
                {lines[0]} <span className="text-orange-500">{lines[1]}</span>
              </>
            ) : highlight ? (
              <Highlight text={lines[0]} highlight={highlight} />
            ) : (
              lines[0]
            )}
          </h2>
          <p className="mt-2 max-w-lg font-body text-white/70">{body}</p>
        </div>
        <Button
          as={Link}
          to="/contact"
          variant="primary"
          className="shrink-0 self-end py-[18px]! lg:self-auto"
        >
          {cta}
          <Icon name="arrow-right" className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
