import heroImg from '../assets/photos/hero-excavator-sunset.jpg'
import workerImg from '../assets/photos/services-worker.jpg'
import type { IconName } from '../components/ui/Icon'

export const servicesHero = {
  breadcrumb: 'Services',
  kicker: 'Our Services',
  heading: ['Infrastructure That', 'Builds Progress'],
  body: 'Specialized construction and infrastructure solutions delivered with expertise, precision and responsibility.',
  image: heroImg,
}

export const servicesIntro = {
  kicker: 'Our Expertise',
  heading: ['Comprehensive Construction', 'Solutions'],
  body: 'At Omkar Constructions, we offer a focused range of construction and infrastructure services, backed by 17–18 years of industry experience. Each service is executed with a strong emphasis on safety, quality, planning and timely delivery.',
  quote: 'Every project is an opportunity to build a stronger tomorrow.',
  quoteAttribution: 'Omkar Constructions',
}

export const servicesPanel = {
  label: 'Safer Smarter Stronger',
  body: 'Delivering solutions that create long-term value.',
  image: workerImg,
  kicker: 'What Sets Our Services Apart',
  heading: ['A Practical Approach', 'on Every Site'],
  points: [
    { title: 'Site-Specific Planning', body: 'Detailed planning based on actual site conditions.', icon: 'clipboard' as IconName },
    { title: 'Safety-Focused Operations', body: 'Safety integrated into every stage of execution.', icon: 'shield-check' as IconName },
    { title: 'Efficient Execution', body: 'Skilled teams and the right equipment for effective delivery.', icon: 'gauge' as IconName },
    { title: 'Quality & Compliance', body: 'Consistent quality with adherence to industry standards.', icon: 'check-circle' as IconName },
  ],
}

export const serviceProcess = {
  kicker: 'Our Service Process',
  heading: ['From Planning to', 'Completion'],
  body: 'We follow a structured and transparent approach to ensure seamless execution and successful project delivery.',
  steps: [
    { number: '01', title: 'Understand Requirements', icon: 'clipboard' as IconName },
    { number: '02', title: 'Plan & Design', icon: 'design' as IconName },
    { number: '03', title: 'Mobilize Resources', icon: 'mobilize' as IconName },
    { number: '04', title: 'Execute with Discipline', icon: 'gauge' as IconName },
    { number: '05', title: 'Deliver Lasting Value', icon: 'trophy' as IconName },
  ],
}

export const servicesCta = {
  kicker: "Let's Build Together",
  heading: ['Discuss Your Project', 'Requirements'],
  body: 'Our team is ready to understand your needs and provide the right construction solutions for your next project.',
  cta: 'Get a Quote',
}
