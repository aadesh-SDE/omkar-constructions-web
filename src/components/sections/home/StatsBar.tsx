import type { IconName } from '../../ui/Icon'
import { homeStats } from '../../../content/home'
import coreAreasIcon from '../../../assets/icons/stat-core-areas.png'
import experienceIcon from '../../../assets/icons/stat-experience.png'
import qualityIcon from '../../../assets/icons/stat-quality.png'
import safetyIcon from '../../../assets/icons/stat-safety.png'

const statIcons: Partial<Record<IconName, string>> = {
  experience: experienceIcon,
  'core-areas': coreAreasIcon,
  safety: safetyIcon,
  quality: qualityIcon,
}

/** Stat icons are supplied as flat-color artwork; masking them onto a solid
 *  #FF5B0A fill (rather than rendering the PNG directly) keeps the color
 *  exact and consistent regardless of the source image's own shade. */
function StatIcon({ icon }: { icon: IconName }) {
  const src = statIcons[icon]
  if (!src) return null
  return (
    <span
      className="h-[23px] w-[17px] shrink-0 bg-[#FF5B0A]"
      style={{
        maskImage: `url(${src})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
      aria-hidden="true"
    />
  )
}

// A plain full-width bar directly below the hero (NOT a floating/overlapping
// card as I'd first built it) — confirmed by exact Figma Y-coordinates: the
// hero section ends exactly where this one begins. 4 equal columns, divided
// by hairline borders, 46px vertical padding (23px Figma × 2).
export function StatsBar() {
  return (
    <section className="bg-[#FAFAFA] py-[24px]">
      <div className="mx-auto grid max-w-[1524px] grid-cols-2 px-[21px] sm:grid-cols-4 sm:px-[29px] md:px-[37px] lg:px-[45px] xl:px-[53px] 2xl:px-[61px]">
        {homeStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-[7px] py-4 sm:py-0 sm:px-6 ${
              i > 0 ? 'sm:border-l sm:border-black/10' : ''
            }`}
          >
            <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full">
              <StatIcon icon={stat.icon} />
            </span>
            <div>
              <p className="font-heading text-[18px] font-bold text-navy-900">{stat.value}</p>
              <p className="mt-[3px] font-body text-[12px] font-medium text-navy-900/60">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
