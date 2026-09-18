import { Highlight } from '../../ui/Highlight'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { servicesIntro } from '../../../content/servicesPage'

export function Intro() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="mx-auto grid max-w-[1524px] items-start gap-10 px-[21px] sm:px-[29px] md:px-[37px] lg:grid-cols-[1.3fr_1fr] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div>
          {/* Kicker/heading/body sizing matches about/OurStory.tsx exactly
              (title stays sentence case here, not uppercase, per this page's
              Figma reference). */}
          <Kicker className="text-[14px]! font-normal!">{servicesIntro.kicker}</Kicker>
          <h2 className="mt-[18px] font-heading text-2xl leading-[0.9] font-bold text-ink sm:text-3xl">
            {servicesIntro.heading[0]}
            <br />
            <Highlight text={servicesIntro.heading[1]} highlight="Solutions" />
          </h2>
          <p className="mt-[26px] max-w-xl font-body text-[14px] text-[#111111]">{servicesIntro.body}</p>
        </div>

        <blockquote className="relative rounded-card bg-mist p-6">
          <Icon name="quote" className="h-8 w-8 text-orange-400" />
          <p className="mt-3 font-heading text-lg font-medium text-ink italic">
            {servicesIntro.quote}
          </p>
          <p className="mt-3 font-body text-sm font-semibold text-ink-soft uppercase">
            — {servicesIntro.quoteAttribution}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
