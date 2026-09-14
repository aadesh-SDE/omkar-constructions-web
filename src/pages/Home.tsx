import { Helmet } from 'react-helmet-async'
import { CtaBanner } from '../components/sections/CtaBanner'
import { AboutTeaser } from '../components/sections/home/AboutTeaser'
import { FeaturedProjects } from '../components/sections/home/FeaturedProjects'
import { Hero } from '../components/sections/home/Hero'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { homeCta } from '../content/home'
import heroImg from '../assets/photos/hero-excavator-sunset.jpg'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Omkar Constructions | Construction for a Stronger Tomorrow</title>
        <meta
          name="description"
          content="Omkar Constructions delivers Mining & Blasting, Road Projects, Mass Excavation, Building Construction and Demolition, backed by 17-18 years of industry experience."
        />
      </Helmet>
      <Hero />
      <ServicesGrid
        kicker="Our Services"
        heading="Infrastructure for a Better Tomorrow"
        variant="home"
        viewAllHref="/services"
      />
      <AboutTeaser />
      <FeaturedProjects />
      <CtaBanner
        kicker={homeCta.kicker}
        heading={homeCta.heading}
        body={homeCta.body}
        cta={homeCta.cta}
        image={heroImg}
      />
    </>
  )
}
