import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'experience'
  | 'core-areas'
  | 'safety'
  | 'quality'
  | 'team'
  | 'execution'
  | 'results'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'arrow-right'
  | 'play'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'planning'
  | 'design'
  | 'mobilize'
  | 'deliver'
  | 'trophy'
  | 'shield-check'
  | 'gauge'
  | 'clipboard'
  | 'check-circle'
  | 'search'
  | 'quote'
  | 'eye'
  | 'target'

const paths: Record<IconName, ReactElement> = {
  // A hard-hat, used by the About page's "Proven Experience" strength.
  // Confirmed dead elsewhere: the Home Stats bar and About-teaser both use
  // their own supplied PNG icons instead of this SVG path now, so redrawing
  // it in place doesn't affect them.
  experience: (
    <path d="M4 15h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 3a7 7 0 0 0-7 7v3h14v-3a7 7 0 0 0-7-7z" />
  ),
  'core-areas': <path d="M12 2 2 22h20L12 2zm0 4.2 6 12.3H6l6-12.3z" />,
  safety: (
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3zm0 2.2 6 2.25v4.6c0 3.9-2.6 6.9-6 8-3.4-1.1-6-4.1-6-8v-4.6l6-2.25z" />
  ),
  quality: <path d="M4 20h3v-8H4v8zm6.5 0h3V4h-3v16zM17 20h3v-12h-3v12z" />,
  team: (
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  ),
  // A gear/cog, used by the About page's "Practical Execution" strength.
  // Also confirmed dead elsewhere (see 'experience' above).
  execution: (
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.59-.22l-2.39.96a7.3 7.3 0 0 0-1.62-.94l-.36-2.54A.5.5 0 0 0 13.92 2h-3.84a.5.5 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.5.5 0 0 0-.59.22L2.74 8.47a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.24.23.41.47.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.03-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" />
  ),
  results: <path d="M12 2 1 21h22L12 2zm0 3.8 7.5 13.2h-15L12 5.8z" />,
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3 0 .7-.2 1l-2.4 2.2z" />
  ),
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm17.4 2H3.6L12 12.5 20.4 7z" />,
  pin: (
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.8A2.8 2.8 0 1 1 12 6.2a2.8 2.8 0 0 1 0 5.6z" />
  ),
  'arrow-right': <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2L11.6 6.4 13 5z" />,
  play: <path d="M8 5v14l11-7z" />,
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.4 2.65 4.4 6.1V21H18v-5.6c0-1.35-.02-3.1-1.88-3.1-1.88 0-2.17 1.47-2.17 3v5.7H10V9z" />
  ),
  instagram: (
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  ),
  youtube: (
    <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.5c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.5c0-1.8-.2-3.5-.2-3.5zM10 14.6V8.9l5.2 2.9-5.2 2.8z" />
  ),
  planning: <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 2H7v16h10V8h-3a1 1 0 0 1-1-1V4zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15z" />,
  design: (
    <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0 0 21.5 11 9.5 9.5 0 0 0 12 2zM6.5 12A1.5 1.5 0 1 1 6.5 9a1.5 1.5 0 0 1 0 3zm3-4A1.5 1.5 0 1 1 9.5 5a1.5 1.5 0 0 1 0 3zm5 0A1.5 1.5 0 1 1 14.5 5a1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  ),
  mobilize: (
    <path d="M3 13h2l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13h2v2h-1.1a2.5 2.5 0 0 1-4.9.5H9a2.5 2.5 0 0 1-4.9-.5H3v-2zm4.6-4L6.2 13h11.6L16.4 9H7.6zM6.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  ),
  deliver: <path d="M12 2 3 6v6c0 5 3.6 8.7 9 10 5.4-1.3 9-5 9-10V6l-9-4zm-1 13.5L6.5 11 8 9.5l3 3 5-5L17.5 9 11 15.5z" />,
  trophy: (
    <path d="M7 4h10v2h3v3a4 4 0 0 1-4 4h-.2A5 5 0 0 1 13 16.9V19h3v2H8v-2h3v-2.1A5 5 0 0 1 8.2 13H8a4 4 0 0 1-4-4V6h3V4zm0 4H6v1a2 2 0 0 0 2 2V8zm10 0v3a2 2 0 0 0 2-2V8h-2z" />
  ),
  'shield-check': (
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3zm3.8 7.2-4.6 4.6-2.4-2.4 1.1-1.1 1.3 1.3 3.5-3.5 1.1 1.1z" />
  ),
  gauge: (
    <path d="M12 3a9 9 0 0 0-7.4 14.1 1 1 0 0 0 1.6-1.2A7 7 0 1 1 18 12a7 7 0 0 1-.6 2.9 1 1 0 0 0 1.6 1.2A9 9 0 0 0 12 3zm.9 3.1-2.3 5.1a1.5 1.5 0 1 0 2 1l1-6a.5.5 0 0 0-.7-.1z" />
  ),
  clipboard: (
    <path d="M9 2h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1zm0 3H7v14h10V5h-2v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5zm1-1v1h4V4h-4z" />
  ),
  'check-circle': (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.1 14.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
  ),
  search: (
    <path d="M10 3a7 7 0 1 0 4.2 12.6l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
  ),
  quote: (
    <path d="M9.5 7C6.5 8.6 5 10.7 5 13.4c0 2.2 1.4 3.6 3.1 3.6a2.7 2.7 0 0 0 2.8-2.7c0-1.4-1-2.4-2.3-2.6.3-1.6 1.6-3 3.4-3.7L9.5 7zm8 0c-3 1.6-4.5 3.7-4.5 6.4 0 2.2 1.4 3.6 3.1 3.6a2.7 2.7 0 0 0 2.8-2.7c0-1.4-1-2.4-2.3-2.6.3-1.6 1.6-3 3.4-3.7L17.5 7z" />
  ),
  // Used by the About page's "Our Vision" direction card. Stroked (not
  // filled) so it reads as a line icon — overrides the shared svg's
  // fill="currentColor" per-shape.
  eye: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Used by the About page's "Our Mission" direction card. Same stroked
  // treatment as 'eye' above — three concentric rings, no fill.
  target: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

type IconProps = SVGProps<SVGSVGElement> & { name: IconName }

/** Small inline icon set used throughout the site (stat badges, feature lists,
 *  contact info, socials). Kept as a single component so the visual weight
 *  stays consistent everywhere. */
export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
