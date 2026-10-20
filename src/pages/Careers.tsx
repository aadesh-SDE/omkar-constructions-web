import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/sections/PageHero'
import { CareerBand } from '../components/sections/careers/CareerBand'
import { CareerForm } from '../components/sections/careers/CareerForm'
import { WhyWorkWithUs } from '../components/sections/careers/WhyWorkWithUs'
import { Highlight } from '../components/ui/Highlight'
import { Kicker } from '../components/ui/Kicker'
import { applyIntro, careersHero } from '../content/careers'

// Layout follows the Careers Figma mockup; sizes/spacing/type use the site's
// design system (same section rhythm as the Contact page) rather than the
// mockup's pixel values.
export function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Omkar Constructions</title>
        <meta
          name="description"
          content="Build your career with Omkar Constructions. Apply for roles across mining, road, excavation, building and demolition projects."
        />
      </Helmet>
      <PageHero
        breadcrumb={careersHero.breadcrumb}
        kicker={careersHero.kicker}
        heading={careersHero.heading}
        body={careersHero.body}
        image={careersHero.image}
        chips={careersHero.chips}
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <Kicker>{applyIntro.kicker}</Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink lg:text-3xl">
              <Highlight text={applyIntro.heading} highlight={applyIntro.highlight} />
            </h2>
            <p className="mt-3 max-w-xl font-body text-xs text-ink-soft">{applyIntro.body}</p>
            <div className="mt-6">
              <CareerForm />
            </div>
          </div>

          <WhyWorkWithUs />
        </div>
      </section>

      <CareerBand />
    </>
  )
}
