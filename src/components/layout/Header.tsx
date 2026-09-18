import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { navLinks } from '../../content/nav'
import logoLockup from '../../assets/brand/logo-lockup.png'

// All 6 Tailwind breakpoints (base/sm/md/lg/xl/2xl — none/mini-tablet/
// tablet/mini-laptop/laptop/2xl), matched everywhere in the site. xl carries
// every given spec exactly (per the "whatever I give you is for xl" rule);
// every other tier is that xl value plus/minus a consistent step, not a
// ratio. The desktop nav + "Get a Quote" button only ever render at lg+
// (mobile gets the hamburger menu below), so their tiers below lg are inert
// but still defined for consistency.
//
// padding: 0 because the shared "sm" preset's px-[36px]/py-[25px] would
// overflow a 38px-tall box — the button's own flex centering handles
// alignment instead. !-suffixed (Tailwind v4 important modifier): the
// shared "sm" preset sets text-md/px/py unconditionally, and plain class
// concatenation order isn't guaranteed to let a later override win.
const quoteButtonClass =
  'h-[30px]! rounded-[5px]! p-0! font-bold text-[9px]! ' +
  'sm:h-[32px]! sm:text-[9px]! ' +
  'md:h-[34px]! md:text-[10px]! ' +
  'lg:h-[36px]! lg:text-[10px]! ' +
  'xl:h-[38px]! xl:text-[11px]! ' +
  '2xl:h-[40px]! 2xl:text-[12px]!'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      {/* Nav gap matches apple.com's global nav (~19px between items,
          measured live); header height and logo/nav-text sizes are the
          6-tier spec (xl = the given 55px). */}
      <div className="mx-auto flex h-[57px] max-w-[1524px] items-center justify-between px-[21px] sm:h-[59px] sm:px-[29px] md:h-[61px] md:px-[37px] lg:h-[63px] lg:px-[45px] xl:h-[65px] xl:px-[53px] 2xl:h-[67px] 2xl:px-[61px]">
        <Link to="/">
          <img
            src={logoLockup}
            alt="Omkar Constructions"
            className="h-auto w-[133px] sm:w-[145px] md:w-[157px] lg:w-[169px] xl:w-[181px] 2xl:w-[193px]"
            width={181}
            height={41}
          />
        </Link>

        <nav className="hidden items-center gap-[22px] lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-[10px] font-semibold transition-colors sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] ${
                  isActive ? 'text-orange-500' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button
          as={Link}
          to="/contact"
          variant="primary"
          size="sm"
          className={`hidden w-[97px]! sm:w-[103px]! md:w-[109px]! lg:inline-flex lg:w-[115px]! xl:w-[121px]! 2xl:w-[127px]! ${quoteButtonClass}`}
        >
          Get a Quote
          <Icon name="arrow-right" className="h-4 w-4" />
        </Button>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-base font-medium ${
                      isActive ? 'text-orange-500' : 'text-ink-soft'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            size="sm"
            className={`mt-5 w-full ${quoteButtonClass}`}
          >
            Get a Quote
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </nav>
      )}
    </header>
  )
}
