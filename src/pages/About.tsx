import { Helmet } from 'react-helmet-async'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHero } from '../components/sections/PageHero'
import { Approach } from '../components/sections/about/Approach'
import { Direction } from '../components/sections/about/Direction'
import { OurStory } from '../components/sections/about/OurStory'
import { Strengths } from '../components/sections/about/Strengths'
import { aboutCta, aboutHero } from '../content/about'

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Omkar Constructions</title>
        <meta
          name="description"
          content="Omkar Constructions is backed by 17-18 years of industry experience in construction and infrastructure projects."
        />
      </Helmet>
      <PageHero
        breadcrumb={aboutHero.breadcrumb}
        kicker={aboutHero.kicker}
        heading={aboutHero.heading as [string, string]}
        highlight={aboutHero.headingHighlight as [string, string]}
        body={aboutHero.body}
        image={aboutHero.image}
      />
      <OurStory />
      <Strengths />
      <Approach />
      <Direction />
      <CtaBanner
        kicker={aboutCta.kicker}
        heading={aboutCta.heading as [string, string]}
        body={aboutCta.body}
        cta={aboutCta.cta}
        image={aboutCta.image}
      />
    </>
  )
}
