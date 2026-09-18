import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { strengths } from '../../../content/about'

export function Strengths() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      {/* Same 1524px container + 6-tier padding as every other section. */}
      <div className="mx-auto max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        {/* Heading sits beside the strengths (not above them), sharing one
            divided row — matching the Figma reference exactly. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:divide-x lg:divide-[#B3B3B3]">
          <div className="lg:w-[320px] lg:flex-none lg:pr-8">
            <Kicker textClassName="text-[#555555]" className="text-[14px]! font-normal!">
              What We Bring
            </Kicker>
            <h2 className="mt-3 font-heading text-2xl leading-[0.9] font-bold text-ink uppercase sm:text-3xl">
              Strengths That <span className="text-orange-500">Matter</span>
            </h2>
          </div>

          {strengths.map((s) => (
            <div key={s.title} className="flex flex-col items-start gap-0 lg:flex-1 lg:px-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-500">
                <Icon name={s.icon} className="h-10 w-10" />
              </span>
              <h3 className="mt-4 font-heading text-[25px] leading-none font-bold text-ink">
                {s.title.split(' ').map((word, i) => (
                  <span key={word}>
                    {i > 0 && <br />}
                    {word}
                  </span>
                ))}
              </h3>
              <p className="mt-[10px] font-body text-[12px] leading-none text-ink-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
