import heroImg from '../assets/photos/hero-excavator-sunset.jpg'
import type { IconName } from '../components/ui/Icon'

export const homeHero = {
  kicker: 'Construction for a Stronger Tomorrow',
  heading: ['Built on Experience.', 'Driven by Execution.'],
  body: 'Construction and infrastructure solutions backed by 17–18 years of industry experience.',
  primaryCta: 'Explore Our Services',
  secondaryCta: 'Watch Our Story',
  image: heroImg,
}

export const homeStats: { value: string; label: string; icon: IconName }[] = [
  { value: '17–18 Years', label: 'Industry Experience', icon: 'experience' },
  { value: '5 Core Areas', label: 'Construction & Infrastructure', icon: 'core-areas' },
  { value: 'Safety First', label: 'In Every Operation', icon: 'safety' },
  { value: 'Quality Driven', label: 'Timely & Reliable Delivery', icon: 'quality' },
]

export const homeAbout = {
  kicker: 'About Omkar Constructions',
  heading: ['Experience Behind', 'Every Project'],
  body: 'Omkar Constructions is a newly established company backed by 17–18 years of industry experience in construction and infrastructure projects. Our expertise includes Mining, Blasting Works, Road Projects, Mass Excavation, Building Construction and Building Demolition. We bring practical site experience, skilled execution, and a strong focus on safety, quality, and timely delivery.',
  cta: 'More About Us',
  badgeValue: '17-18',
  badgeLabel: 'Years of Experience',
  points: [
    { title: 'Experienced Team', icon: 'team' as const },
    { title: 'Focused Execution', icon: 'execution' as const },
    { title: 'Dependable Results', icon: 'results' as const },
  ],
}

export const homeCta = {
  kicker: "Let's Build Together",
  heading: 'Have a Project in Mind?',
  body: "Let's discuss your requirements and explore how Omkar Constructions can support your project.",
  cta: 'Get in Touch',
}
