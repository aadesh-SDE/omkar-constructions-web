import { Highlight } from '../../ui/Highlight'
import { Kicker } from '../../ui/Kicker'
import { approach } from '../../../content/about'

export function Approach() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1524px] items-center gap-8 px-[21px] sm:px-[29px] md:px-[37px] lg:grid-cols-[607px_1fr] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div
          className="relative flex min-h-[360px] flex-col justify-center overflow-hidden rounded-card bg-cover bg-center p-8 text-white"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.92), rgba(10,20,32,0.35)), url(${approach.panelImage})`,
          }}
        >
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
            {approach.panelLabel}
          </p>
          <span className="mt-3 h-[2px] w-10 bg-orange-500" aria-hidden="true" />
          <p className="mt-4 max-w-xs font-heading text-lg font-semibold">
            {approach.panelHeading}
          </p>
        </div>

        <div>
          {/* Same kicker/heading/body sizing as Our Story (OurStory.tsx). */}
          <Kicker textClassName="text-[#555555]" className="text-[14px]! font-normal!">
            {approach.kicker}
          </Kicker>
          <h2 className="mt-3 font-heading text-2xl leading-[0.9] font-bold text-ink uppercase sm:text-3xl">
            {approach.heading[0]}
            <br />
            <Highlight text={approach.heading[1]} highlight="Execution" />
          </h2>
          <p className="mt-[26px] font-body text-[15px] font-medium text-[#111111]">
            {approach.body}
          </p>
        </div>
      </div>
    </section>
  )
}
