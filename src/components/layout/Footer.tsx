import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { footerContact, footerServiceLinks, navLinks } from '../../content/nav'

const socials = [
  { icon: 'linkedin' as const, label: 'LinkedIn', href: '#' },
  { icon: 'instagram' as const, label: 'Instagram', href: '#' },
  { icon: 'youtube' as const, label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1524px] px-6 pt-[76px] pb-16 lg:px-[107px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-[34px] font-body text-sm text-white/60">
              Construction for a Stronger Tomorrow.
            </p>
            <div className="mt-[34px] flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange-500 hover:text-orange-500"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/60 transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white">Our Services</h4>
            <ul className="mt-4 space-y-2.5">
              {footerServiceLinks.map((s) => (
                <li key={s} className="font-body text-sm text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-2.5">
              {footerContact.phones.map((p) => (
                <li key={p} className="flex items-center gap-2 font-body text-sm text-white/60">
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-orange-500" />
                  {p}
                </li>
              ))}
              <li className="flex items-center gap-2 font-body text-sm text-white/60">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-orange-500" />
                {footerContact.email}
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-white/60">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-orange-500" />
                {footerContact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-[106px] max-w-[1524px] flex-col justify-center gap-2 px-6 py-5 font-body text-2xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-[107px]">
          <p>&copy; 2026 Omkar Constructions. All Rights Reserved.</p>
          <p>Built on Experience. Driven by Execution.</p>
        </div>
      </div>
    </footer>
  )
}
