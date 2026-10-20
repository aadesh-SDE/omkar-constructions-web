import { careerBand } from '../../../content/careers'
import { Highlight } from '../../ui/Highlight'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'

/** Navy closing band on the Careers page: heading on the left, four stats on
 *  the right (same value/label treatment as the Home StatsBar, inverted). */
export function CareerBand() {
  const { kicker, heading, highlight, body, image, stats } = careerBand
  return (
    <section
      className="bg-navy-950 bg-cover bg-center py-16 text-white lg:py-20"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.95), rgba(10,20,32,0.75)), url(${image})`,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-[1.05]">
            {heading[0]}
            <br />
            <Highlight text={heading[1]} highlight={highlight} />
          </h2>
          <p className="mt-4 max-w-md font-body text-xs text-white/70">{body}</p>
        </div>

        <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={`flex flex-col items-center px-4 text-center ${
                i > 0 ? 'sm:border-l sm:border-white/15' : ''
              }`}
            >
              <Icon name={stat.icon} className="h-6 w-6 text-orange-500" />
              <p className="mt-3 font-heading text-xl font-bold">{stat.value}</p>
              <p className="mt-1 font-body text-2xs text-white/60">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
