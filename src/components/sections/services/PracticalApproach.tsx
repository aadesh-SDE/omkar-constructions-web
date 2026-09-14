import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { servicesPanel } from '../../../content/servicesPage'

export function PracticalApproach() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <div
          className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-card bg-cover bg-center p-8 text-white"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.92), rgba(10,20,32,0.35)), url(${servicesPanel.image})`,
          }}
        >
          <p className="font-heading text-xl font-bold uppercase">{servicesPanel.label}</p>
          <span className="mt-3 h-[2px] w-10 bg-orange-500" aria-hidden="true" />
          <p className="mt-4 max-w-xs font-body text-white/80">{servicesPanel.body}</p>
        </div>

        <div>
          <Kicker>{servicesPanel.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {servicesPanel.heading[0]}{' '}
            <span className="text-orange-500">{servicesPanel.heading[1]}</span>
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {servicesPanel.points.map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Icon name={p.icon} className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-ink">{p.title}</p>
                  <p className="mt-1 font-body text-sm text-ink-soft">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
