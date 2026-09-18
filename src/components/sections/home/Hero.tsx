import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Highlight } from '../../ui/Highlight'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { homeHero } from '../../../content/home'

// All 6 Tailwind breakpoints (base/sm/md/lg/xl/2xl), matched everywhere in
// the site. xl carries every given spec exactly; every other tier is that
// xl value plus/minus a consistent step (not a ratio) — per the "whatever I
// give you is for xl, other breakpoints do addition and subtraction" rule.
// Section height mirrors Header's own 6-tier height at each step, so the
// Hero's bottom edge still lands exactly on the viewport bottom at every
// width (see the calc(100dvh - headerHeight) note below).
//
// !-suffixed (Tailwind v4 important modifier) on the button classes:
// Button's own base sets text-md/px/py unconditionally, and plain class
// concatenation order isn't guaranteed to let a later override win.
//
// mt-[41px] (body→buttons) and gap-[24px] (button↔button) are still the old
// figma-×2 values — not yet respecified, left untouched.
const primaryBtnClass =
  'w-[139px]! h-[39px]! p-0! text-[9px]! ' +
  'sm:w-[145px]! sm:h-[41px]! sm:text-[9px]! ' +
  'md:w-[151px]! md:h-[43px]! md:text-[10px]! ' +
  'lg:w-[157px]! lg:h-[45px]! lg:text-[11px]! ' +
  'xl:w-[163px]! xl:h-[47px]! xl:text-[12px]! ' +
  '2xl:w-[169px]! 2xl:h-[49px]! 2xl:text-[13px]!'
const outlineBtnClass =
  'w-[124px]! h-[32px]! p-0! text-[9px]! ' +
  'sm:w-[129px]! sm:h-[34px]! sm:text-[9px]! ' +
  'md:w-[134px]! md:h-[36px]! md:text-[10px]! ' +
  'lg:w-[139px]! lg:h-[38px]! lg:text-[11px]! ' +
  'xl:w-[144px]! xl:h-[40px]! xl:text-[12px]! ' +
  '2xl:w-[149px]! 2xl:h-[42px]! 2xl:text-[13px]!'

export function Hero() {
  // The body paragraph should never run wider than where "Experience." ends
  // in the heading above it — so it wraps to a new line as soon as it would
  // cross that point, at any screen size or font-load timing. Measured live
  // (not a fixed px guess) since the heading's width changes with the
  // 6-tier responsive font size.
  const headingBlockRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)
  const [bodyMaxWidth, setBodyMaxWidth] = useState<number>()

  useLayoutEffect(() => {
    function measure() {
      if (!headingBlockRef.current || !highlightRef.current) return
      const containerLeft = headingBlockRef.current.getBoundingClientRect().left
      const highlightRight = highlightRef.current.getBoundingClientRect().right
      setBodyMaxWidth(highlightRight - containerLeft)
    }
    measure()
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section
      className="relative flex h-[calc(100dvh-47px)] items-center overflow-hidden bg-navy-950 bg-cover bg-center text-white sm:h-[calc(100dvh-49px)] md:h-[calc(100dvh-51px)] lg:h-[calc(100dvh-53px)] xl:h-[calc(100dvh-55px)] 2xl:h-[calc(100dvh-57px)]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,20,32,0.9), rgba(10,20,32,0.45)), url(${homeHero.image})`,
      }}
    >
      <div className="relative mx-auto w-full max-w-[1524px] px-[21px] sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        <div className="max-w-[940px]" ref={headingBlockRef}>
          {/* !-suffixed: Kicker's own base sets text-sm/text-orange-500
              unconditionally, and plain class concatenation order isn't
              guaranteed to win in Tailwind's generated CSS. */}
          <Kicker
            rulePosition="after"
            className="text-[8px]! text-white! sm:text-[9px]! md:text-[9px]! lg:text-[10px]! xl:text-[11px]! 2xl:text-[12px]!"
          >
            {homeHero.kicker}
          </Kicker>
          {/* Figma's H1 text layer is literally uppercase ("BUILT ON
              EXPERIENCE.") at weight 800, with "EXPERIENCE." in orange —
              confirmed via characterStyleOverrides, not styled from a
              title-case source string. */}
          <h1 className="mt-[9px] font-heading text-[56px] font-extrabold uppercase leading-[1.05] sm:mt-[10px] sm:text-[60px] md:mt-[11px] md:text-[64px] lg:mt-[12px] lg:text-[68px] xl:mt-[13px] xl:text-[72px] 2xl:mt-[14px] 2xl:text-[76px]">
            <Highlight text={homeHero.heading[0]} highlight="Experience." highlightRef={highlightRef} />
            <br />
            {homeHero.heading[1]}
          </h1>
          <p
            className="mt-[9px] max-w-[940px] font-body text-[16px] text-white sm:mt-[10px] sm:text-[16px] md:mt-[11px] md:text-[17px] lg:mt-[12px] lg:text-[17px] xl:mt-[13px] xl:text-[18px] 2xl:mt-[14px] 2xl:text-[19px]"
            style={bodyMaxWidth ? { maxWidth: bodyMaxWidth } : undefined}
          >
            {homeHero.body}
          </p>
          <div className="mt-[41px] flex flex-wrap items-center gap-[24px]">
            <Button as={Link} to="/services" variant="primary" className={primaryBtnClass}>
              {homeHero.primaryCta}
            </Button>
            <Button as="button" variant="outline-light" className={outlineBtnClass}>
              <Icon name="play" className="h-4 w-4" />
              {homeHero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
