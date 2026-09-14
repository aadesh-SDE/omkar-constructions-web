import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { strengths } from '../../../content/about'

export function Strengths() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Kicker>What We Bring</Kicker>
        <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
          Strengths That <span className="text-orange-500">Matter</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-card bg-paper p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-1 font-body text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
