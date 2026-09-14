import { Icon } from '../../ui/Icon'
import { homeStats } from '../../../content/home'

// A plain full-width bar directly below the hero (NOT a floating/overlapping
// card as I'd first built it) — confirmed by exact Figma Y-coordinates: the
// hero section ends exactly where this one begins. 4 equal columns, divided
// by hairline borders, 46px vertical padding (23px Figma × 2).
export function StatsBar() {
  return (
    <section className="bg-navy-900 py-[46px] text-white">
      <div className="mx-auto grid max-w-[1524px] grid-cols-2 px-6 sm:grid-cols-4 lg:px-[107px]">
        {homeStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center gap-[24px] py-4 sm:py-0 ${
              i > 0 ? 'sm:border-l sm:border-white/10 sm:pl-6' : ''
            }`}
          >
            <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-white/5">
              <Icon name={stat.icon} className="h-6 w-6 text-orange-500" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-white">{stat.value}</p>
              <p className="mt-[10px] font-body text-sm text-white/60">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
