import approachImg from '../assets/photos/about-approach.jpg'
import heroImg from '../assets/photos/hero-excavator-sunset.jpg'
import storyImg from '../assets/photos/about-story.jpg'
import type { IconName } from '../components/ui/Icon'

export const aboutHero = {
  breadcrumb: 'About Us',
  kicker: 'About Omkar Constructions',
  heading: ['Built on Experience.', 'Driven by Purpose.'],
  body: 'A new company with 17-18 years of industry experience, committed to building a stronger tomorrow.',
  image: heroImg,
}

export const ourStory = {
  kicker: 'Our Story',
  heading: ['The Experience Behind', 'Omkar'],
  body: 'Omkar Constructions is a newly established company backed by 17–18 years of industry experience in construction and infrastructure projects. Our expertise includes Mining, Blasting Works, Road Projects, Mass Excavation, Building Construction and Building Demolition. We bring practical site experience, skilled execution, and a strong focus on safety, quality, and timely delivery.',
  cta: 'Our Journey',
  image: storyImg,
  badgeValue: '17-18',
  badgeLabel: 'Years of Industry Experience',
}

export const strengths: { title: string; body: string; icon: IconName }[] = [
  { title: 'Proven Experience', body: '17–18 years of industry exposure.', icon: 'experience' },
  { title: 'Practical Execution', body: 'On-ground knowledge and site expertise.', icon: 'execution' },
  { title: 'Safety Focused', body: 'Committed to safe and responsible operations.', icon: 'shield-check' },
  { title: 'Reliable Delivery', body: 'Quality workmanship with timely execution.', icon: 'quality' },
]

export const approach = {
  panelLabel: 'People Projects Progress',
  panelHeading: 'Turning experience into infrastructure for a better tomorrow.',
  panelImage: approachImg,
  kicker: 'Our Approach',
  heading: ['From Experience', 'to Execution'],
  body: 'Our teams bring practical industry experience and a hands-on approach to every project. We focus on detailed planning, efficient execution and close coordination at every stage, ensuring safe operations, quality workmanship, and timely delivery. Our goal is to create lasting value through responsible and dependable construction.',
}

export const direction = {
  kicker: 'Our Direction',
  heading: ['A Stronger', 'Tomorrow'],
  vision: {
    title: 'Our Vision',
    body: 'To deliver every project with timely execution, uncompromising safety, and consistent quality, while building a reputation for responsible and dependable construction.',
  },
  mission: {
    title: 'Our Mission',
    body: 'To successfully deliver medium-scale projects in our initial phase, build our capabilities, and create opportunities to take on larger and more complex projects with the same commitment to quality, safety and timely execution.',
  },
}

export const aboutCta = {
  kicker: "Let's Build Together",
  heading: ['Ready for the', 'Next Project?'],
  body: "Let's discuss your requirements and explore how Omkar Constructions can support your project.",
  cta: 'Get in Touch',
}
