import { Button, Heading, HexBadge, Kicker, Section } from './components/ui'

const colorSwatches = [
  { name: 'navy-950', className: 'bg-navy-950' },
  { name: 'navy-900', className: 'bg-navy-900' },
  { name: 'navy-800', className: 'bg-navy-800' },
  { name: 'navy-700', className: 'bg-navy-700' },
  { name: 'navy-600', className: 'bg-navy-600' },
  { name: 'orange-600', className: 'bg-orange-600' },
  { name: 'orange-500', className: 'bg-orange-500' },
  { name: 'orange-400', className: 'bg-orange-400' },
  { name: 'orange-100', className: 'bg-orange-100' },
  { name: 'mist', className: 'bg-mist border border-line' },
]

/** Temporary internal page: a living preview of the design system tokens
 *  and shared components, for review before pages are built against it. */
export function StyleGuide() {
  return (
    <div>
      <Section tone="navy">
        <Kicker className="text-orange-500">Design System</Kicker>
        <Heading level={1} className="mt-3 text-white">
          Built on <span className="text-orange-500">Experience</span>,
          <br />
          driven by <span className="text-orange-500">Execution</span>.
        </Heading>
        <p className="mt-4 max-w-xl text-white/70">
          Preview of the shared color, type, and component tokens for the
          Omkar Constructions site, sampled from the pamphlet and Figma
          reference.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary">Explore Our Services</Button>
          <Button variant="outline-light">Watch Our Story</Button>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Colors</Kicker>
        <Heading level={2} className="mt-3">
          Palette
        </Heading>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {colorSwatches.map((swatch) => (
            <div key={swatch.name}>
              <div className={`h-20 rounded-card ${swatch.className}`} />
              <p className="mt-2 font-body text-sm text-ink-soft">
                {swatch.name}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <Kicker>Typography</Kicker>
        <div className="mt-6 space-y-4">
          <Heading level={1}>Heading 1 / Poppins Bold</Heading>
          <Heading level={2}>Heading 2 / Poppins Bold</Heading>
          <Heading level={3}>Heading 3 / Poppins Bold</Heading>
          <Heading level={4}>Heading 4 / Poppins Bold</Heading>
          <p className="max-w-2xl font-body text-base text-ink-soft">
            Body text / Inter Regular — Omkar Constructions is a newly
            established company backed by 17-18 years of industry experience
            in construction and infrastructure projects.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Buttons</Kicker>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="primary">Get a Quote</Button>
          <Button variant="outline">Know About Us</Button>
          <Button variant="ghost">View All Projects →</Button>
        </div>
      </Section>

      <Section tone="mist">
        <Kicker>Hexagon Badge</Kicker>
        <p className="mt-2 max-w-xl font-body text-sm text-ink-soft">
          Designed to sit on top of a photo, like in the pamphlet — shown
          here on a plain background just to check the shape/contrast.
        </p>
        <div className="mt-6 flex flex-wrap gap-8">
          <HexBadge value="17-18" label="Years of Experience" />
          <HexBadge value="5" label="Core Services" />
        </div>
      </Section>
    </div>
  )
}
