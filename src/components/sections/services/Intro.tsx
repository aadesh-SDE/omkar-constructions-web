import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { servicesIntro } from '../../../content/servicesPage'

export function Intro() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <Kicker>{servicesIntro.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {servicesIntro.heading[0]}{' '}
            <span className="text-orange-500">{servicesIntro.heading[1]}</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-ink-soft">{servicesIntro.body}</p>
        </div>

        <blockquote className="relative rounded-card bg-mist p-6">
          <Icon name="quote" className="h-8 w-8 text-orange-400" />
          <p className="mt-3 font-heading text-lg font-medium text-ink italic">
            {servicesIntro.quote}
          </p>
          <p className="mt-3 font-body text-sm font-semibold text-ink-soft uppercase">
            — {servicesIntro.quoteAttribution}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
