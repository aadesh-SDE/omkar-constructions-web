import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeHero, homeStats } from '../../../content/home'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center pt-24 pb-32 text-white lg:pt-32 lg:pb-40"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.9), rgba(10,20,32,0.45)), url(${homeHero.image})`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Kicker className="text-orange-500">{homeHero.kicker}</Kicker>
        <h1 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
          {homeHero.heading[0]}
          <br />
          {homeHero.heading[1]}
        </h1>
        <p className="mt-5 max-w-lg font-body text-white/75">{homeHero.body}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as={Link} to="/services" variant="primary">
            {homeHero.primaryCta}
          </Button>
          <Button as="button" variant="outline-light">
            <Icon name="play" className="h-4 w-4" />
            {homeHero.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-card border border-white/10 bg-navy-900/80 p-6 backdrop-blur sm:grid-cols-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <Icon name={stat.icon} className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
              <div>
                <p className="font-heading text-sm font-bold text-white">{stat.value}</p>
                <p className="font-body text-xs text-white/60">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
