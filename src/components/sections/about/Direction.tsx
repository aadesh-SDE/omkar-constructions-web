import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { direction } from '../../../content/about'

export function Direction() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Kicker>{direction.kicker}</Kicker>
        <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
          {direction.heading[0]}{' '}
          <span className="text-orange-500">{direction.heading[1]}</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[direction.vision, direction.mission].map((card, i) => (
            <div key={card.title} className="rounded-card bg-paper p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Icon name={i === 0 ? 'gauge' : 'trophy'} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 font-body text-sm text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
