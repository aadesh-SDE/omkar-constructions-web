import constructionImg from '../assets/photos/service-construction.png'
import demolitionImg from '../assets/photos/service-demolition.png'
import excavationImg from '../assets/photos/service-excavation.png'
import miningImg from '../assets/photos/service-mining.png'
import roadImg from '../assets/photos/service-road.png'
import type { IconName } from '../components/ui/Icon'

export type Service = {
  slug: string
  name: string
  /** Short line used on the Home page card */
  summary: string
  /** Longer paragraph used on the Services page card */
  description: string
  image: string
  icon: IconName
}

export const services: Service[] = [
  {
    slug: 'mining-blasting',
    name: 'Mining & Blasting Works',
    summary: 'Safe, planned and efficient execution.',
    description:
      'Planned and controlled mining and blasting operations with a focus on safety, compliance and efficient execution.',
    image: miningImg,
    icon: 'core-areas',
  },
  {
    slug: 'road-projects',
    name: 'Road Projects',
    summary: 'Quality roads for stronger connectivity.',
    description:
      'Reliable road construction with proper planning, quality workmanship and efficient project management.',
    image: roadImg,
    icon: 'gauge',
  },
  {
    slug: 'mass-excavation',
    name: 'Mass Excavation',
    summary: 'Large-scale earthwork with precision.',
    description:
      'Large-scale earthwork with precise planning, equipment coordination and on-site execution expertise.',
    image: excavationImg,
    icon: 'clipboard',
  },
  {
    slug: 'building-construction',
    name: 'Building Construction',
    summary: 'Quality construction with timely delivery.',
    description:
      'Quality-driven construction with skilled workmanship, structured execution and timely project delivery.',
    image: constructionImg,
    icon: 'shield-check',
  },
  {
    slug: 'building-demolition',
    name: 'Building Demolition',
    summary: 'Systematic and safe demolition works.',
    description:
      'Systematic and safe demolition with controlled methods, proper planning and responsible waste management.',
    image: demolitionImg,
    icon: 'check-circle',
  },
]
