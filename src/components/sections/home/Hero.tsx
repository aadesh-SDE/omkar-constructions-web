import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeHero } from '../../../content/home'

// Every gap below is an exact Figma measurement ×2:
// kicker→H1 29px, H1→body 27px, body→buttons 41px, button↔button 24px.
export function Hero() {
  return (
    <section
      className="relative flex h-[840px] items-center overflow-hidden bg-navy-950 bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.9), rgba(10,20,32,0.45)), url(${homeHero.image})`,
      }}
    >
      <div className="relative mx-auto w-full max-w-[1524px] px-6 lg:px-[107px]">
        <div className="max-w-[940px]">
          <Kicker className="text-orange-500">{homeHero.kicker}</Kicker>
          <h1 className="mt-[29px] font-heading text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
            {homeHero.heading[0]}
            <br />
            {homeHero.heading[1]}
          </h1>
          <p className="mt-[27px] max-w-[940px] font-body text-2xl text-white/75">
            {homeHero.body}
          </p>
          <div className="mt-[41px] flex flex-wrap items-center gap-[24px]">
            <Button as={Link} to="/services" variant="primary">
              {homeHero.primaryCta}
            </Button>
            <Button as="button" variant="outline-light">
              <Icon name="play" className="h-4 w-4" />
              {homeHero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
