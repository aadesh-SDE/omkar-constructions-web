import { Highlight } from '../ui/Highlight'
import { Icon } from '../ui/Icon'
import { Kicker } from '../ui/Kicker'
import { services } from '../../content/services'

type ServicesGridProps = {
  kicker: string
  heading: string
  /** "home": compact cards, short summary, no per-card CTA, section-level "View All" link.
   *  "full": bigger cards with icon badge, longer description and a "View Details" link. */
  variant: 'home' | 'full'
  viewAllHref?: string
  /** Trailing phrase of `heading` to render in orange, matching the Figma accent pattern. */
  highlight?: string
}

export function ServicesGrid({ kicker, heading, variant, viewAllHref, highlight }: ServicesGridProps) {
  return (
    <section className="bg-paper py-16 lg:py-24">
      {/* Container width/padding matches every other section exactly
          (max-w-[1524px] + 6-tier side padding) — this section previously
          used the unrelated max-w-7xl scale, which misaligned its left/right
          edges against every other section on the page. */}
      <div className="mx-auto max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker textClassName={variant === 'home' ? 'text-[#555555]' : undefined}>
              {kicker}
            </Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
              {highlight ? <Highlight text={heading} highlight={highlight} /> : heading}
            </h2>
          </div>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              View All Services
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-card border border-line bg-paper shadow-[0px_2px_10px_0px_#DDDDDD]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {variant === 'full' && (
                  <span
                    className="absolute bottom-0 left-4 flex h-11 w-11 translate-y-1/2 items-center justify-center bg-orange-500 text-white"
                    style={{
                      clipPath:
                        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    }}
                  >
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                )}
              </div>
              <div className={variant === 'full' ? 'p-5 pt-8' : 'p-5'}>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="min-h-[54px] font-heading text-[21px] leading-tight font-bold text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-[11px] font-body text-[14px] font-normal text-ink-soft">
                      {variant === 'full' ? service.description : service.summary}
                    </p>
                  </div>
                  {variant === 'home' && (
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500"
                      aria-hidden="true"
                    >
                      <Icon name="arrow-right" className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
                {variant === 'full' && (
                  <a
                    href={`/services#${service.slug}`}
                    className="mt-3 inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    View Details
                    <Icon name="arrow-right" className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
