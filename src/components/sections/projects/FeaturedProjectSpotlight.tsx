import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { featuredProject } from '../../../content/projects'

export function FeaturedProjectSpotlight() {
  return (
    <section className="bg-navy-900 py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:px-8">
        <div>
          <Kicker className="text-orange-500">Featured Project</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase lg:text-3xl">
            Transforming Terrain into <span className="text-orange-500">Opportunity</span>
          </h2>
          <p className="mt-3 max-w-sm font-body text-white/70">{featuredProject.description}</p>
          <Button variant="outline-light" className="mt-5">
            View Project Details
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>

        <img
          src={featuredProject.image}
          alt=""
          className="aspect-[4/3] w-full rounded-card object-cover"
        />

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          {featuredProject.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                <Icon name={stat.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-base font-bold text-white">{stat.value}</p>
                <p className="font-body text-xs text-white/60">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
