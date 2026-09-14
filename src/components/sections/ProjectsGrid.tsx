import { useState } from 'react'
import { Icon } from '../ui/Icon'
import { projectFilters, projects } from '../../content/projects'

/** Full project grid used on the Projects page: filter tabs, search box,
 *  and all project cards (photo, location, name, arrow link). Filtering is
 *  client-side only — there's no backend, per the project's tech-stack decision. */
export function ProjectsGrid() {
  const [filter, setFilter] = useState('All Projects')
  const [query, setQuery] = useState('')

  const visible = projects.filter((p) => {
    const matchesFilter = filter === 'All Projects' || p.category === filter
    const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase())
    return matchesFilter && matchesQuery
  })

  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-orange-500 text-white'
                  : 'bg-mist text-ink-soft hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {f}
            </button>
          ))}

          <label className="ml-auto flex items-center gap-2 rounded-full border border-line px-4 py-2 text-ink-soft">
            <Icon name="search" className="h-4 w-4" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Projects..."
              className="w-40 bg-transparent font-body text-sm text-ink outline-none placeholder:text-ink-faint sm:w-56"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-card border border-line"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <p className="flex items-center gap-1 font-body text-xs text-ink-faint">
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    {project.location}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-bold text-ink">
                    {project.name}
                  </h3>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-navy-900 transition-colors group-hover:border-orange-500 group-hover:text-orange-500">
                  <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
          {visible.length === 0 && (
            <p className="col-span-full py-12 text-center font-body text-ink-soft">
              No projects match that filter yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
