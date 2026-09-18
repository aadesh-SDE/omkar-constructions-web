import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import type { IconName } from '../../ui/Icon'
import { homeAbout } from '../../../content/home'
import aboutImg from '../../../assets/photos/about-hero-badge.png'
import experiencedTeamIcon from '../../../assets/icons/about-experienced-team.png'
import focusedExecutionIcon from '../../../assets/icons/about-focused-execution.png'
import dependableResultsIcon from '../../../assets/icons/about-dependable-results.png'

// homeAbout.points reuses the shared IconName keys ('team'/'execution'/
// 'results') that Icon.tsx also serves to other sections (e.g. the
// Featured Project stats, About page's Strengths) as solid glyphs — this
// section instead needs the client-supplied outline artwork, so it maps
// those same keys to image assets locally rather than repointing the
// shared Icon component (which would change those other call sites too).
const pointIcons: Partial<Record<IconName, string>> = {
  team: experiencedTeamIcon,
  execution: focusedExecutionIcon,
  results: dependableResultsIcon,
}

function PointsList() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-6 lg:w-[190px] lg:flex-none lg:flex-col lg:gap-7 lg:pl-10">
      {homeAbout.points.map((point) => (
        <div key={point.title} className="flex items-center gap-3">
          {pointIcons[point.icon] && (
            <img src={pointIcons[point.icon]} alt="" className="h-[22px] w-[22px] shrink-0" />
          )}
          <p className="max-w-[90px] font-heading text-[16px] leading-tight font-normal text-ink">
            {point.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export function AboutTeaser() {
  return (
    <section className="overflow-hidden bg-paper">
      {/* Same 1524px container as every other section, so the whole group
          stays centered as the viewport grows — only the photo skips the
          container's own left gutter (flush to the container's left inner
          edge, not the browser edge) to keep the "full bleed" look without
          the section drifting left on wide screens. */}
      <div className="mx-auto flex max-w-[1524px] flex-col lg:flex-row">
        {/* Photo — sized to its own aspect ratio (never cropped) so the
            diagonal cut and hex "17-18 Years" badge baked into the supplied
            image always show in full. */}
        <div className="shrink-0">
          <img
            src={aboutImg}
            alt=""
            className="h-auto w-full lg:h-[480px] lg:w-auto lg:max-w-none"
          />
        </div>

        <div className="flex flex-1 items-center bg-mist">
          <div className="flex w-full flex-col gap-10 py-14 pr-[21px] pl-[21px] sm:pr-[29px] sm:pl-[44px] md:pr-[37px] lg:mb-[40px] lg:max-w-[900px] lg:flex-row lg:items-center lg:gap-0 lg:py-0 lg:pr-[45px] xl:pr-[53px] 2xl:pr-[61px]">
            <div className="lg:flex-1">
              <Kicker
                rulePosition="after"
                textClassName="text-[#555555]"
                className="text-[14px]! font-normal!"
              >
                {homeAbout.kicker}
              </Kicker>
              {/* Figma colors the entire 2nd line orange (characterStyleOverrides). */}
              <h2 className="mt-[18px] font-heading text-2xl leading-[0.9] font-bold text-ink sm:text-3xl">
                {homeAbout.heading[0]}
                <br />
                <span className="text-orange-500">{homeAbout.heading[1]}</span>
              </h2>
              <p className="mt-[26px] max-w-md font-body text-[14px] text-[#111111]">
                {homeAbout.body}
              </p>
              <Button
                as={Link}
                to="/about"
                variant="primary"
                size="sm"
                className="mt-[26px] px-[28px]! py-[16px]!"
              >
                {homeAbout.cta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>

            {/* Divider + points share a nested flex row of their own, so the
                divider stretches to match only the (shorter) points list's
                own height — not the taller text+button column next to it.
                That nested row is then centered within the outer row, so
                the divider also clears the top instead of touching it. */}
            <div className="hidden lg:flex lg:items-stretch">
              <div className="shrink-0 border-l border-line" />
              <PointsList />
            </div>

            {/* Below lg the divider/columns layout collapses; same list. */}
            <div className="lg:hidden">
              <PointsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
