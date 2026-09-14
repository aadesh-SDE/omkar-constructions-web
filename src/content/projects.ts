import buildingConstructionImg from '../assets/photos/service-construction.jpg'
import demolitionImg from '../assets/photos/service-demolition.jpg'
import featuredProjectImg from '../assets/photos/featured-project.jpg'
import irrigationImg from '../assets/photos/project-irrigation.jpg'
import landLevelingImg from '../assets/photos/project-land-leveling.jpg'
import miningImg from '../assets/photos/project-mining.jpg'
import roadImg from '../assets/photos/service-road.jpg'
import testimonialBgImg from '../assets/photos/testimonial-bg.jpg'

export type Project = {
  slug: string
  name: string
  /** Filter category — matches the Services page/category names */
  category: string
  location: string
  image: string
  /** Only the first three show on the Home page "Featured Projects" section */
  featuredOnHome: boolean
}

export const projects: Project[] = [
  {
    slug: 'stone-mining-blasting',
    name: 'Stone Mining & Blasting Project',
    category: 'Mining & Blasting',
    location: 'Uttar Pradesh',
    image: miningImg,
    featuredOnHome: true,
  },
  {
    slug: 'state-highway-road-development',
    name: 'State Highway Road Development',
    category: 'Road Projects',
    location: 'Madhya Pradesh',
    image: roadImg,
    featuredOnHome: false,
  },
  {
    slug: 'commercial-building-construction',
    name: 'Commercial Building Construction',
    category: 'Building Construction',
    location: 'Rajasthan',
    image: buildingConstructionImg,
    featuredOnHome: false,
  },
  {
    slug: 'large-scale-earthwork',
    name: 'Large-Scale Earthwork & Site Development',
    category: 'Mass Excavation',
    location: 'Maharashtra',
    image: landLevelingImg,
    featuredOnHome: true,
  },
  {
    slug: 'building-demolition-project',
    name: 'Building Demolition Project',
    category: 'Building Demolition',
    location: 'Delhi',
    image: demolitionImg,
    featuredOnHome: false,
  },
  {
    slug: 'irrigation-canal-development',
    name: 'Irrigation & Canal Development',
    category: 'Mass Excavation',
    location: 'Andhra Pradesh',
    image: irrigationImg,
    featuredOnHome: false,
  },
]

// The Home page's three featured cards use their own (shorter) names + a third state,
// matching the Figma home frame exactly.
export const homeFeaturedProjects = [
  { name: 'Mining & Blasting Projects', location: 'Karnataka', image: miningImg },
  { name: 'Irrigation Projects', location: 'Madhya Pradesh', image: irrigationImg },
  { name: 'Land & Leveling Projects', location: 'Andhra Pradesh', image: landLevelingImg },
]

export const projectFilters = [
  'All Projects',
  'Mining & Blasting',
  'Road Projects',
  'Mass Excavation',
  'Building Construction',
  'Building Demolition',
]

export const featuredProject = {
  name: 'Transforming Terrain into Opportunity',
  description:
    'A large-scale mining and excavation project delivered with precision, safety, and on-time execution.',
  image: featuredProjectImg,
  stats: [
    { value: '1.2M+', label: 'Cubic Meters Excavated', icon: 'core-areas' as const },
    { value: '6 Months', label: 'Project Duration', icon: 'safety' as const },
    { value: '50+', label: 'People On-Site', icon: 'team' as const },
    { value: 'Zero', label: 'Major Safety Incidents', icon: 'shield-check' as const },
  ],
}

export const projectTestimonial = {
  quote:
    'Omkar Constructions delivered the project with exceptional professionalism and attention to detail. Their on-site execution and coordination were truly impressive.',
  attribution: 'Project Partner',
  image: testimonialBgImg,
}
