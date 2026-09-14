import { Link } from 'react-router-dom'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeFeaturedProjects } from '../../../content/projects'

export function FeaturedProjects() {
  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>Featured Projects</Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
              Projects That Drive Progress
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            View All Projects
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-[26px] sm:grid-cols-3">
          {homeFeaturedProjects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-card bg-paper">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-[20px] font-heading text-base font-bold text-ink">
                {project.name}
              </h3>
              <p className="mt-[20px] flex items-center gap-1 font-body text-sm text-ink-faint">
                <Icon name="pin" className="h-3.5 w-3.5" />
                {project.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
