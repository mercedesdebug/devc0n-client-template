import { client } from '../../client.config'

export const content = {
  site: {
    name: client.name,
    tagline: client.tagline,
    description: client.description,
  },
  nav: {
    links: client.pages.map(page => ({
      label: page.charAt(0).toUpperCase() + page.slice(1),
      href: page === 'home' ? '/' : '/' + page,
    })),
    cta: { label: 'Get in touch', href: '/contact' },
  },
  home: {
    hero: {
      headline: client.tagline,
      subheadline: client.description,
      cta: { label: 'Get started', href: '/contact' },
    },
    features: [
      { title: 'Feature one', body: 'Description of feature one.' },
      { title: 'Feature two', body: 'Description of feature two.' },
      { title: 'Feature three', body: 'Description of feature three.' },
    ],
    testimonials: [
      { name: 'Customer Name', role: 'Role', quote: 'Great experience!', rating: 5 },
    ],
  },
  contact: {
    headline: 'Get in touch',
    subheadline: 'We would love to hear from you.',
    info: client.contact,
  },
} as const
