// Placeholder imagery reused from other pages until Careers-specific assets
// are supplied (hero intentionally shares the Contact page's photo).
import heroImg from '../assets/photos/hero-excavator-sunset.jpg'
import bandImg from '../assets/photos/cta-mining-sunset.jpg'
import promoImg from '../assets/photos/services-worker.jpg'
import type { IconName } from '../components/ui/Icon'
import { footerServiceLinks } from './nav'

export const careersHero = {
  breadcrumb: 'Careers',
  kicker: 'Build Your Future',
  heading: ['Grow With', 'Omkar Constructions'] as [string, string],
  body: 'Be a part of a team that builds more than structures — we build stronger communities and a better tomorrow.',
  image: heroImg,
  chips: [
    { icon: 'team', label: 'Learn' },
    { icon: 'trophy', label: 'Grow' },
    { icon: 'target', label: 'Make an Impact' },
  ] as { icon: IconName; label: string }[],
}

export const applyIntro = {
  kicker: 'Join Our Team',
  heading: 'Apply Now',
  highlight: 'Now',
  body: "Fill in your details and upload your resume. Our team will review your application and get back to you if there's a suitable opportunity.",
}

export const careerFormOptions = {
  positions: [
    ...footerServiceLinks,
    'Site Engineer',
    'Site Supervisor',
    'Machine Operator',
    'Other',
  ],
  experience: ['Fresher', '1–3 years', '3–5 years', '5–10 years', '10+ years'],
  noticePeriod: ['Immediate', '15 days', '30 days', '60 days', '90 days'],
}

export const whyWorkWithUs = {
  heading: 'Why Work With Us?',
  body: "At Omkar Constructions, you'll work on real projects, with real impact. We value people who take initiative, solve problems, and want to build a better tomorrow.",
  items: [
    {
      title: 'Meaningful Projects',
      body: 'Work on diverse construction and infrastructure projects across India.',
      icon: 'execution',
    },
    {
      title: 'Supportive Team',
      body: 'Collaborative and respectful work culture.',
      icon: 'team',
    },
    {
      title: 'Learning & Growth',
      body: 'Opportunities to upskill and advance your career.',
      icon: 'trophy',
    },
    {
      title: 'Positive Impact',
      body: 'Be part of projects that create stronger communities.',
      icon: 'shield-check',
    },
  ] as { title: string; body: string; icon: IconName }[],
  promo: {
    heading: "Let's Build a Brighter Tomorrow Together.",
    image: promoImg,
  },
}

export const careerBand = {
  kicker: 'Our People. Our Strength.',
  heading: ['A Career', 'That Builds More'] as [string, string],
  highlight: 'Builds More',
  body: 'Join a team that values your skills, ideas and ambition.',
  image: bandImg,
  stats: [
    { value: '50+', label: 'Professionals', icon: 'team' },
    { value: '100+', label: 'Projects Delivered', icon: 'check-circle' },
    { value: 'Growing', label: 'Opportunities', icon: 'trophy' },
    { value: 'Pan India', label: 'Presence', icon: 'pin' },
  ] as { value: string; label: string; icon: IconName }[],
}
