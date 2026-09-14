import { Helmet } from 'react-helmet-async'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHero } from '../components/sections/PageHero'
import { ProjectsGrid } from '../components/sections/ProjectsGrid'
import { FeaturedProjectSpotlight } from '../components/sections/projects/FeaturedProjectSpotlight'
import { Testimonial } from '../components/sections/projects/Testimonial'
import { projectsCta, projectsHero } from '../content/projectsPage'

export function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Omkar Constructions</title>
        <meta
          name="description"
          content="Real projects across mining & blasting, road development, building construction, earthwork and irrigation — delivered by Omkar Constructions."
        />
      </Helmet>
      <PageHero
        breadcrumb={projectsHero.breadcrumb}
        kicker={projectsHero.kicker}
        heading={projectsHero.heading as [string, string]}
        body={projectsHero.body}
        image={projectsHero.image}
      />
      <ProjectsGrid />
      <FeaturedProjectSpotlight />
      <Testimonial />
      <CtaBanner
        kicker={projectsCta.kicker}
        heading={projectsCta.heading as [string, string]}
        body={projectsCta.body}
        cta={projectsCta.cta}
        image={projectsHero.image}
      />
    </>
  )
}
