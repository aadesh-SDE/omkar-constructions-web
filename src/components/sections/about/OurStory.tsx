import { Button } from '../../ui/Button'
import { HexBadge } from '../../ui/HexBadge'
import { Kicker } from '../../ui/Kicker'
import { ourStory } from '../../../content/about'

export function OurStory() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Kicker>{ourStory.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {ourStory.heading[0]}{' '}
            <span className="text-orange-500">{ourStory.heading[1]}</span>
          </h2>
          <p className="mt-4 font-body text-ink-soft">{ourStory.body}</p>
          <Button variant="primary" className="mt-6">
            {ourStory.cta}
          </Button>
        </div>

        <div className="relative">
          <img
            src={ourStory.image}
            alt=""
            className="aspect-[4/3] w-full rounded-card object-cover"
          />
          <HexBadge
            value={ourStory.badgeValue}
            label={ourStory.badgeLabel}
            className="absolute -bottom-6 -right-4 w-28 sm:w-32"
          />
        </div>
      </div>
    </section>
  )
}
