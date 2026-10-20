import { whyWorkWithUs } from '../../../content/careers'
import { Icon } from '../../ui/Icon'

/** Right-hand column of the Careers apply section: benefits card plus a photo
 *  card with an overlaid tagline. */
export function WhyWorkWithUs() {
  const { heading, body, items, promo } = whyWorkWithUs
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-card bg-mist p-6">
        <h3 className="font-heading text-lg font-bold text-ink">{heading}</h3>
        <p className="mt-2 font-body text-2xs text-ink-soft">{body}</p>
        <ul className="mt-6 space-y-5">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              <div>
                <p className="font-heading text-base font-bold text-ink">{item.title}</p>
                <p className="mt-0.5 font-body text-2xs text-ink-soft">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex min-h-[220px] items-end rounded-card bg-navy-950 bg-cover bg-center p-6"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.85), rgba(10,20,32,0.1)), url(${promo.image})`,
        }}
      >
        <div>
          <span className="block h-[2px] w-8 bg-orange-500" aria-hidden="true" />
          <p className="mt-3 max-w-[16ch] font-heading text-xl font-bold leading-tight text-white">
            {promo.heading}
          </p>
        </div>
      </div>
    </div>
  )
}
