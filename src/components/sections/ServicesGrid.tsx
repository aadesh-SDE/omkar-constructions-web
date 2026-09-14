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
}

export function ServicesGrid({ kicker, heading, variant, viewAllHref }: ServicesGridProps) {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 max-w-xl font-heading text-2xl font-bold text-ink sm:text-3xl">
              {heading}
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-card border border-line bg-paper"
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
                <h3 className="font-heading text-base font-bold text-ink">{service.name}</h3>
                <p className="mt-2 font-body text-sm text-ink-soft">
                  {variant === 'full' ? service.description : service.summary}
                </p>
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
