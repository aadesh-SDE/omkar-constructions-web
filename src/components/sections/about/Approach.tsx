import { Kicker } from '../../ui/Kicker'
import { approach } from '../../../content/about'

export function Approach() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <div
          className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-card bg-cover bg-center p-8 text-white"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.92), rgba(10,20,32,0.35)), url(${approach.panelImage})`,
          }}
        >
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
            {approach.panelLabel}
          </p>
          <span className="mt-3 h-[2px] w-10 bg-orange-500" aria-hidden="true" />
          <p className="mt-4 max-w-xs font-heading text-lg font-semibold">
            {approach.panelHeading}
          </p>
        </div>

        <div>
          <Kicker>{approach.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {approach.heading[0]}{' '}
            <span className="text-orange-500">{approach.heading[1]}</span>
          </h2>
          <p className="mt-4 font-body text-ink-soft">{approach.body}</p>
        </div>
      </div>
    </section>
  )
}
