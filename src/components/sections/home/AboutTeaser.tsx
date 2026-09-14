import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { HexBadge } from '../../ui/HexBadge'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeAbout } from '../../../content/home'
import { ourStory } from '../../../content/about'

export function AboutTeaser() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Kicker>{homeAbout.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {homeAbout.heading[0]}
            <br />
            {homeAbout.heading[1]}
          </h2>
          <p className="mt-4 font-body text-ink-soft">{homeAbout.body}</p>
          <Button as={Link} to="/about" variant="primary" className="mt-6">
            {homeAbout.cta}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {homeAbout.points.map((point) => (
              <div key={point.title} className="flex flex-col items-start gap-2">
                <Icon name={point.icon} className="h-6 w-6 text-orange-500" />
                <p className="font-heading text-sm font-semibold text-ink">{point.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={ourStory.image}
            alt=""
            className="aspect-[4/3] w-full rounded-card object-cover"
          />
          <HexBadge
            value={homeAbout.badgeValue}
            label={homeAbout.badgeLabel}
            className="absolute -bottom-6 -right-4 w-28 sm:w-32"
          />
        </div>
      </div>
    </section>
  )
}
