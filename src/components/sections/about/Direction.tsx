import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { direction } from '../../../content/about'

export function Direction() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="mx-auto max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        {/* Heading sits beside the cards (not above them) — same pattern as
            the Strengths section, matching the Figma reference exactly. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="lg:w-[320px] lg:flex-none lg:pr-8">
            {/* Same kicker/heading sizing as Our Story/Strengths/Approach. */}
            <Kicker textClassName="text-[#555555]" className="text-[14px]! font-normal!">
              {direction.kicker}
            </Kicker>
            <h2 className="mt-3 font-heading text-2xl leading-[0.9] font-bold text-ink uppercase sm:text-3xl">
              {direction.heading[0]}{' '}
              <span className="text-orange-500">{direction.heading[1]}</span>
            </h2>
          </div>

          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {[direction.vision, direction.mission].map((card, i) => (
              <div key={card.title} className="flex gap-4 rounded-card bg-white/60 p-6">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-orange-500">
                  <Icon name={i === 0 ? 'eye' : 'target'} className="h-12 w-12" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold tracking-wide text-ink uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-[13px] text-ink-soft">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
