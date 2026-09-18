import { Button } from '../../ui/Button'
import { Highlight } from '../../ui/Highlight'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { ourStory } from '../../../content/about'

export function OurStory() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="mx-auto grid max-w-[1524px] items-stretch gap-12 px-[21px] sm:px-[29px] md:px-[37px] lg:grid-cols-2 lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        {/* flex column with justify-between: kicker aligns with the image's
            top edge, the button with its bottom edge — both columns are
            stretched to the same height by the grid above. */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Same kicker/heading/body sizing as the Home page's About
                Omkar Constructions section (AboutTeaser.tsx). */}
            <Kicker textClassName="text-[#555555]" className="text-[14px]! font-normal!">
              {ourStory.kicker}
            </Kicker>
            <h2 className="mt-[18px] font-heading text-2xl leading-[0.9] font-bold text-ink uppercase sm:text-3xl">
              {ourStory.heading[0]}
              <br />
              <Highlight text={ourStory.heading[1]} highlight="Omkar" />
            </h2>
            <div className="mt-[26px] space-y-4">
              {ourStory.body.map((paragraph) => (
                <p key={paragraph} className="font-body text-[14px] text-[#111111]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            className="mt-[26px] self-start px-[28px]! py-[16px]!"
          >
            {ourStory.cta}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>

        {/* Image fills the full column height (top edge lines up with the
            kicker, bottom edge with the button, matching the text column's
            own span) rather than sizing to its own natural aspect ratio. */}
        <div className="relative h-full">
          <img
            src={ourStory.image}
            alt=""
            className="h-full w-full rounded-card object-cover"
          />
        </div>
      </div>
    </section>
  )
}
