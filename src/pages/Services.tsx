import { Helmet } from 'react-helmet-async'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHero } from '../components/sections/PageHero'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { Intro } from '../components/sections/services/Intro'
import { PracticalApproach } from '../components/sections/services/PracticalApproach'
import { ProcessSteps } from '../components/sections/services/ProcessSteps'
import { servicesCta, servicesHero } from '../content/servicesPage'

export function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Omkar Constructions</title>
        <meta
          name="description"
          content="Mining & Blasting Works, Road Projects, Mass Excavation, Building Construction and Building Demolition — delivered with safety, quality and timely execution."
        />
      </Helmet>
      <PageHero
        breadcrumb={servicesHero.breadcrumb}
        kicker={servicesHero.kicker}
        heading={servicesHero.heading as [string, string]}
        body={servicesHero.body}
        image={servicesHero.image}
      />
      <Intro />
      <ServicesGrid
        kicker="Our Services"
        heading="What We Do"
        variant="full"
      />
      <PracticalApproach />
      <ProcessSteps />
      <CtaBanner
        kicker={servicesCta.kicker}
        heading={servicesCta.heading as [string, string]}
        body={servicesCta.body}
        cta={servicesCta.cta}
        image={servicesHero.image}
      />
    </>
  )
}
