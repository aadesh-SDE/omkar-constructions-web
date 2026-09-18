import { Link } from 'react-router-dom'
import { Highlight } from '../../ui/Highlight'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeFeaturedProjects } from '../../../content/projects'

export function FeaturedProjects() {
  return (
    <section className="bg-mist py-16 lg:py-24">
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="mx-auto max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker rulePosition="after" textClassName="text-[#555555]">
              Featured Projects
            </Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
              <Highlight text="Projects That Drive Progress" highlight="Drive Progress" />
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
            <article key={project.name} className="overflow-hidden rounded-card">
              <div className="aspect-[982/456] overflow-hidden">
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-[30px] font-heading text-[22px] font-bold text-ink">
                {project.name}
              </h3>
              <p className="mt-[12px] flex items-center gap-2 font-body text-sm text-ink">
                <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-ink" />
                {project.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
