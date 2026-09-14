import { Icon } from '../../ui/Icon'
import { projectTestimonial } from '../../../content/projects'

export function Testimonial() {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center py-14 text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.88), rgba(10,20,32,0.5)), url(${projectTestimonial.image})`,
      }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-6 lg:px-8">
        <Icon name="quote" className="h-9 w-9 shrink-0 text-orange-500" />
        <div>
          <p className="max-w-2xl font-heading text-lg font-medium italic">
            {projectTestimonial.quote}
          </p>
          <p className="mt-2 font-body text-sm font-semibold text-white/60 uppercase">
            — {projectTestimonial.attribution}
          </p>
        </div>
      </div>
    </section>
  )
}
