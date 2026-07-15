import heroImage from '../../assets/hero.png'
import heroSectionImage from '../../assets/images/hero_section.jpg'
import logoImage from '../../assets/images/logo.png'
import {
  advisoryBoard,
  africaMarkets,
  capabilityCards,
  clients,
  consumableCards,
  coreLocations,
  credentials,
  deviceCards,
  enquiryTypes,
  executionCapabilities,
  globalCards,
  healthcareOperations,
  heroBadges,
  leadershipTeam,
  operatingSteps,
  partnershipTracks,
  pharmaPortfolio,
  profileCards,
  regionalOffices,
  secondaryMarkets,
  topStats,
  whySentinelCards,
} from './content'

export type DetailPageData = {
  id: string
  title: string
  eyebrow: string
  summary: string
  image: string
  imageAlt: string
  galleryTitle?: string
  galleryIntro?: string
  gallery?: Array<{
    src: string
    alt: string
    caption: string
  }>
  section: string
  stats?: string[]
  highlights?: string[]
  paragraphs: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
  relatedIds?: string[]
}

const profileImages = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80',
]

const consumableImages = [
  'https://images.unsplash.com/photo-1565474832112-7d5826f8a8c6?q=80&w=1200&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1691896632683-09a1465ea9d7?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80',
  'https://plus.unsplash.com/premium_photo-1714678706884-e3a0b33739df?q=80&w=1200&auto=format&fit=crop',
]

const logisticsGallery = [
  {
    src: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warehouse shelving and logistics operations',
    caption: 'Controlled storage and structured inventory movement.',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Team reviewing supply chain planning',
    caption: 'Cross-functional planning and partner coordination.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    alt: 'Business meeting for healthcare operations',
    caption: 'Commercial visibility and decision support.',
  },
]

const healthcareGallery = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Healthcare professionals in clinical setting',
    caption: 'Clinical environments that depend on dependable supply.',
  },
  {
    src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hospital corridor and care setting',
    caption: 'Institutional care settings across operating markets.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    alt: 'Healthcare product packaging and distribution context',
    caption: 'Products, handling and fulfilment aligned to care outcomes.',
  },
]

const marketGallery = [
  {
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Global city skyline representing market reach',
    caption: 'Market presence anchored in cross-border execution.',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Commercial district skyline',
    caption: 'Regional commercial coordination and partner governance.',
  },
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Container port logistics network',
    caption: 'Supply routes and large-scale movement across regions.',
  },
]

const technologyGallery = [
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Digital systems and analytics screens',
    caption: 'Technology infrastructure supporting better visibility.',
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    alt: 'Team working with digital tools',
    caption: 'Operational alignment through connected decision-making.',
  },
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Network visualization and global connectivity',
    caption: 'Connected systems across markets and partners.',
  },
]

function pickGallery(section: string, fallbackImage: string, fallbackAlt: string) {
  if (section.includes('Market') || section.includes('Global') || section.includes('Africa')) {
    return marketGallery
  }

  if (section.includes('Partnership') || section.includes('Operations')) {
    return technologyGallery
  }

  if (section.includes('Supply') || section.includes('Capability') || section.includes('Contact')) {
    return logisticsGallery
  }

  return [
    ...healthcareGallery,
    {
      src: fallbackImage,
      alt: fallbackAlt,
      caption: 'Primary visual associated with this topic.',
    },
  ].slice(0, 3)
}

function makeId(prefix: string, value: string) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
}

function formatStat(stat: { value?: number; suffix?: string; prefix?: string; staticValue?: string; label: string }) {
  const value = stat.staticValue ?? `${stat.prefix ?? ''}${stat.value ?? ''}${stat.suffix ?? ''}`
  return `${value} - ${stat.label}`
}

const detailEntries: DetailPageData[] = []

function buildFaqs(topic: string, section: string) {
  return [
    {
      question: `What does ${topic} mean within Sentinel Medical Solutions?`,
      answer: `${topic} is presented as part of the ${section} experience on the site and is tied to Sentinel's broader healthcare sourcing, supply and partner-execution model.`,
    },
    {
      question: `Why is this topic shown on a separate page?`,
      answer: 'The separate page gives visitors more context, stronger visual hierarchy and a clearer browsing flow without changing the homepage design.',
    },
    {
      question: `How does this connect to the rest of the platform?`,
      answer: 'Each topic links back to related capabilities, markets, supply areas or operational steps so the website feels connected, useful and alive instead of static.',
    },
  ]
}

function buildGalleryCopy(topic: string, section: string) {
  return {
    galleryTitle: `${topic} in focus.`,
    galleryIntro: `These visuals support the ${section.toLowerCase()} story behind ${topic.toLowerCase()} and make the page feel more connected to the content you opened.`,
  }
}

export const proofDetailIds = [...topStats, ...credentials].map((stat) => makeId('proof', stat.label))
;[...topStats, ...credentials].forEach((stat, index) => {
  detailEntries.push({
    id: proofDetailIds[index],
    title: stat.label,
    eyebrow: 'Proof Point',
    summary: formatStat(stat),
    image: index % 2 === 0 ? heroImage : heroSectionImage,
    imageAlt: 'Sentinel Medical Solutions proof point visual',
    ...buildGalleryCopy(stat.label, 'Platform Snapshot'),
    gallery: pickGallery('Platform Snapshot', index % 2 === 0 ? heroImage : heroSectionImage, 'Sentinel Medical Solutions proof point visual'),
    section: 'Platform Snapshot',
    stats: heroBadges,
    highlights: ['Commercial scale', 'Operational readiness', 'Healthcare-focused execution'],
    paragraphs: [
      `This metric highlights one part of Sentinel's operating footprint: ${formatStat(stat)}.`,
      'On the live site, these proof points work as quick trust signals. On the detail page they become fuller context so a visitor can understand what the number or location means in practice.',
      'Each proof point is connected back to the same sourcing, warehousing, distribution and reporting model used across the broader platform.',
    ],
    faqs: buildFaqs(stat.label, 'Platform Snapshot'),
  })
})

export const aboutDetailIds = profileCards.map((card) => makeId('about', card.title))
profileCards.forEach((card, index) => {
  detailEntries.push({
    id: aboutDetailIds[index],
    title: card.title,
    eyebrow: 'About Sentinel',
    summary: card.body,
    image: profileImages[index] ?? heroSectionImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'About'),
    gallery: [
      {
        src: profileImages[index] ?? heroSectionImage,
        alt: card.title,
        caption: `${card.title} represented visually on the detail page.`,
      },
      ...healthcareGallery.slice(0, 2),
    ],
    section: 'About',
    stats: ['Trusted healthcare supply partner', 'Cross-border sourcing discipline', 'Outcome-led delivery mindset'],
    highlights: ['Clear strategic direction', 'Operational accountability', 'Human-centered healthcare impact'],
    paragraphs: [
      card.body,
      'This page gives the homepage statement more room to breathe with supporting context, imagery and a stronger narrative flow.',
      "Visitors can move from Sentinel's high-level positioning into the practical platform, regions and supply areas that support it.",
    ],
    faqs: buildFaqs(card.title, 'About'),
    relatedIds: ['capabilities-pharma-distribution', 'global-united-arab-emirates-commercial-hub-governance'],
  })
})

export const capabilityDetailIds = capabilityCards.map((card) => makeId('capabilities', card.title))
capabilityCards.forEach((card, index) => {
  detailEntries.push({
    id: capabilityDetailIds[index],
    title: card.title,
    eyebrow: 'Capability',
    summary: card.body,
    image: index % 2 === 0 ? heroSectionImage : heroImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'Capabilities'),
    gallery: pickGallery('Capabilities', index % 2 === 0 ? heroSectionImage : heroImage, card.title),
    section: 'Capabilities',
    stats: ['Integrated sourcing', 'Compliant fulfilment', 'Partner-facing transparency'],
    highlights: ['Operational control', 'Healthcare-sensitive workflows', 'Execution across markets'],
    paragraphs: [
      card.body,
      'The capability pages keep the same visual language as the homepage cards, but add enough structure for a buyer or partner to understand what the capability covers.',
      'Each capability connects to related regions, supply categories and operating steps so the experience feels alive rather than static.',
    ],
    faqs: buildFaqs(card.title, 'Capabilities'),
    relatedIds: ['operations-source', 'operations-deliver'],
  })
})

export const globalDetailIds = globalCards.map((card) => makeId('global', card.title))
globalCards.forEach((card, index) => {
  detailEntries.push({
    id: globalDetailIds[index],
    title: card.title,
    eyebrow: 'Global Reach',
    summary: card.body,
    image: heroSectionImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'Global Reach'),
    gallery: marketGallery,
    section: 'Global Reach',
    stats: ['UAE leadership', 'India operating depth', 'Africa growth-market execution'],
    highlights: ['Commercial oversight', 'Supply continuity', 'Route-to-market support'],
    paragraphs: [
      card.body,
      'This location page explains the role this geography plays in the wider Sentinel model rather than showing it as a static label.',
      'It is designed to help visitors understand why each market matters and how it connects with sourcing, distribution and partner coordination.',
    ],
    faqs: buildFaqs(card.title, 'Global Reach'),
    relatedIds: ['markets-united-arab-emirates', 'markets-india'],
  })
})

export const coreLocationDetailIds = coreLocations.map((location) => makeId('markets', location.country))
coreLocations.forEach((location) => {
  detailEntries.push({
    id: makeId('markets', location.country),
    title: location.country,
    eyebrow: location.isHQ ? 'Core Market - Headquarters' : 'Core Market',
    summary: `${location.country} is part of Sentinel's active market footprint and supports the broader cross-border healthcare supply platform.`,
    image: location.isHQ ? logoImage : heroImage,
    imageAlt: location.country,
    ...buildGalleryCopy(location.country, 'Markets'),
    gallery: marketGallery,
    section: 'Markets',
    stats: location.isHQ ? ['Headquarters market', 'Commercial governance', 'Regional logistics readiness'] : ['Core operating market', 'Healthcare demand access', 'Connected supply routes'],
    highlights: ['Regulatory alignment', 'Channel coordination', 'Regional execution'],
    paragraphs: [
      `${location.country} appears in the core market footprint because it contributes to Sentinel's operating reach, supply access or commercial positioning.`,
      'The detail page format makes each market feel intentional, giving visitors a clear explanation instead of a passive chip in a list.',
      'This also creates a cleaner navigation path between region pages, capabilities and partnership areas.',
    ],
    faqs: buildFaqs(location.country, 'Markets'),
  })
})

export const secondaryMarketDetailIds = secondaryMarkets.map((market) => makeId('markets-secondary', market))
secondaryMarkets.forEach((market) => {
  detailEntries.push({
    id: makeId('markets-secondary', market),
    title: market,
    eyebrow: 'Active Market',
    summary: `${market} remains visible as an active market outside the core footprint showcased on the site.`,
    image: heroSectionImage,
    imageAlt: market,
    ...buildGalleryCopy(market, 'Markets'),
    gallery: marketGallery,
    section: 'Markets',
    stats: ['Secondary visibility', 'Regional relevance', 'Expandable presence'],
    highlights: ['Flexible positioning', 'Market optionality', 'Growth monitoring'],
    paragraphs: [
      `${market} is presented as an active market that supports Sentinel's wider regional presence.`,
      'The detail page gives these secondary markets their own context without forcing them to compete with the primary footprint on the homepage.',
    ],
    faqs: buildFaqs(market, 'Markets'),
  })
})

export const africaMarketDetailIds = africaMarkets.map((market) => makeId('africa', market.country))
africaMarkets.forEach((market) => {
  detailEntries.push({
    id: makeId('africa', market.country),
    title: market.country,
    eyebrow: 'Africa Focus Market',
    summary: market.body,
    image: heroSectionImage,
    imageAlt: market.country,
    ...buildGalleryCopy(market.country, 'Africa Strategy'),
    gallery: marketGallery,
    section: 'Africa Strategy',
    stats: [`Code ${market.code}`, 'Priority market', 'Execution-led growth focus'],
    highlights: ['Institutional demand', 'Import-driven opportunity', 'Country-specific route-to-market'],
    paragraphs: [
      market.body,
      'These market pages turn the scrolling Africa strip into something a visitor can meaningfully explore.',
      'Each one supports the idea that Sentinel executes with country-level intent rather than treating Africa as a single undifferentiated region.',
    ],
    faqs: buildFaqs(market.country, 'Africa Strategy'),
  })
})

export const operatingStepDetailIds = operatingSteps.map((step) => makeId('operations', step.title))
operatingSteps.forEach((step, index) => {
  detailEntries.push({
    id: makeId('operations', step.title),
    title: step.title,
    eyebrow: `Operating Step ${index + 1}`,
    summary: step.body,
    image: heroImage,
    imageAlt: step.title,
    ...buildGalleryCopy(step.title, 'How We Work'),
    gallery: technologyGallery,
    section: 'How We Work',
    stats: [`Step ${String(index + 1).padStart(2, '0')}`, 'Integrated flow', 'Healthcare-sensitive execution'],
    highlights: ['Structured handoff', 'Process discipline', 'Traceable delivery'],
    paragraphs: [
      step.body,
      `The ${step.title.toLowerCase()} step is one part of Sentinel's end-to-end operating model, linking upstream planning to downstream fulfilment and support.`,
      'The detail format keeps the sequence understandable on mobile and desktop while adding more life than a simple static process tile.',
    ],
    faqs: buildFaqs(step.title, 'How We Work'),
  })
})

export const executionDetailIds = executionCapabilities.map((item) => makeId('execution', item))
executionCapabilities.forEach((item) => {
  detailEntries.push({
    id: makeId('execution', item),
    title: item,
    eyebrow: 'Execution Capability',
    summary: item,
    image: heroSectionImage,
    imageAlt: item,
    ...buildGalleryCopy(item, 'Operations'),
    gallery: technologyGallery,
    section: 'Operations',
    stats: ['Commercial + supply', 'Cross-border coordination', 'Execution discipline'],
    highlights: ['Coordination visibility', 'Partner response', 'Operational continuity'],
    paragraphs: [
      item,
      'This item now opens into a dedicated explanation page, giving the visitor more context about the role it plays in the operating model.',
    ],
    faqs: buildFaqs(item, 'Operations'),
  })
})

export const healthcareSupportDetailIds = healthcareOperations.map((item) => makeId('support', item))
healthcareOperations.forEach((item) => {
  detailEntries.push({
    id: makeId('support', item),
    title: item,
    eyebrow: 'Healthcare Support Area',
    summary: item,
    image: heroImage,
    imageAlt: item,
    ...buildGalleryCopy(item, 'Operations'),
    gallery: logisticsGallery,
    section: 'Operations',
    stats: ['Field + service', 'Healthcare support', 'Operational follow-through'],
    highlights: ['Institutional readiness', 'Clinic coordination', 'Structured support'],
    paragraphs: [
      item,
      'This support area is part of the client-facing operating experience and now has a detail page that helps it feel tangible rather than decorative.',
    ],
    faqs: buildFaqs(item, 'Operations'),
  })
})

export const partnershipTrackDetailIds = partnershipTracks.map((track) => makeId('partnerships', track.title))
export const partnershipItemDetailIds = partnershipTracks.flatMap((track) =>
  track.items.map((item) => makeId('partnership-item', item)),
)
partnershipTracks.forEach((track) => {
  detailEntries.push({
    id: makeId('partnerships', track.title),
    title: track.title,
    eyebrow: 'Partnership Track',
    summary: `${track.title} supports Sentinel's delivery model with structured relationships rather than ad-hoc execution.`,
    image: heroSectionImage,
    imageAlt: track.title,
    ...buildGalleryCopy(track.title, 'Partnerships'),
    gallery: technologyGallery,
    section: 'Partnerships',
    stats: ['Partner ecosystem', `${track.items.length} support layers`, 'Execution-enabling relationships'],
    highlights: track.items,
    paragraphs: [
      'This partnership track explains how Sentinel scales beyond simple product movement by relying on aligned technology, infrastructure and trade relationships.',
      'The detail page gives the visitor a cleaner breakdown of what sits inside this track and why it matters.',
    ],
    faqs: buildFaqs(track.title, 'Partnerships'),
  })

  track.items.forEach((item) => {
    detailEntries.push({
      id: makeId('partnership-item', item),
      title: item,
      eyebrow: 'Partnership Item',
      summary: item,
      image: heroImage,
      imageAlt: item,
      ...buildGalleryCopy(item, 'Partnerships'),
      gallery: technologyGallery,
      section: 'Partnerships',
      stats: ['Relationship-led execution', 'Operational enablement', 'Scalable collaboration'],
      highlights: ['Platform resilience', 'Better visibility', 'Faster decision support'],
      paragraphs: [
        item,
        'This item now opens its own page so visitors can understand the practical role it plays in Sentinel’s collaboration model.',
      ],
      faqs: buildFaqs(item, 'Partnerships'),
    })
  })
})

export const pharmaCategoryDetailIds = pharmaPortfolio.map((group) => makeId('pharma', group.title))
export const medicineDetailIds = pharmaPortfolio.flatMap((group) =>
  group.medicines.map((medicine) => makeId('medicine', medicine)),
)
pharmaPortfolio.forEach((group) => {
  detailEntries.push({
    id: makeId('pharma', group.title),
    title: group.title,
    eyebrow: 'Pharma Portfolio',
    summary: `${group.title} contains ${group.medicines.length} representative products in the current website portfolio.`,
    image: heroSectionImage,
    imageAlt: group.title,
    ...buildGalleryCopy(group.title, 'Supply - Pharma'),
    gallery: logisticsGallery,
    section: 'Supply - Pharma',
    stats: [`${group.medicines.length} listed medicines`, 'Portfolio visibility', 'Supply-chain discipline'],
    highlights: group.medicines,
    paragraphs: [
      `${group.title} groups related therapies so visitors can understand how the portfolio is structured.`,
      'The detail page provides a better browsing experience than a single expanding row, especially on mobile devices.',
    ],
    faqs: buildFaqs(group.title, 'Supply - Pharma'),
  })

  group.medicines.forEach((medicine) => {
    detailEntries.push({
      id: makeId('medicine', medicine),
      title: medicine,
      eyebrow: group.title,
      summary: `${medicine} appears within Sentinel's ${group.title.toLowerCase()} showcase on the site.`,
      image: heroImage,
      imageAlt: medicine,
      ...buildGalleryCopy(medicine, 'Supply - Pharma'),
      gallery: logisticsGallery,
      section: 'Supply - Pharma',
      stats: ['Portfolio item', 'Healthcare sourcing', 'Representative product line'],
      highlights: ['Category visibility', 'Buyer familiarity', 'Structured presentation'],
      paragraphs: [
        `${medicine} is presented here as a representative product within the broader Sentinel supply portfolio.`,
        'This detail page makes individual portfolio items tappable and gives the interface a more alive, app-like feel without changing the homepage design.',
      ],
      faqs: buildFaqs(medicine, 'Supply - Pharma'),
    })
  })
})

export const consumableDetailIds = consumableCards.map((card) => makeId('consumables', card.title))
consumableCards.forEach((card, index) => {
  detailEntries.push({
    id: makeId('consumables', card.title),
    title: card.title,
    eyebrow: 'Clinical Supply',
    summary: card.body,
    image: consumableImages[index] ?? heroSectionImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'Supply - Consumables'),
    gallery: [
      {
        src: consumableImages[index] ?? heroSectionImage,
        alt: card.title,
        caption: `${card.title} represented within the clinical supply range.`,
      },
      ...logisticsGallery.slice(0, 2),
    ],
    section: 'Supply - Consumables',
    stats: ['Hospital-ready lines', 'Recurring demand support', 'Structured replenishment'],
    highlights: card.body.replace(/\.$/, '').split(', ').flatMap((item) => item.split(' and ')).map((item) => item.trim()),
    paragraphs: [
      card.body,
      'The consumables pages give this supply domain more visual presence with imagery, product-type highlights and clearer hierarchy.',
      'That keeps the website feeling active and exploratory while preserving the current homepage composition.',
    ],
    faqs: buildFaqs(card.title, 'Supply - Consumables'),
  })
})

export const deviceDetailIds = deviceCards.map((card) => makeId('devices', card.title))
deviceCards.forEach((card) => {
  detailEntries.push({
    id: makeId('devices', card.title),
    title: card.title,
    eyebrow: 'Medical Devices',
    summary: card.body,
    image: heroSectionImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'Supply - Devices'),
    gallery: healthcareGallery,
    section: 'Supply - Devices',
    stats: ['Specialty-led solutions', 'Clinical workflow support', 'Long-term service view'],
    highlights: ['Clinical use case', 'Infrastructure fit', 'Operational support'],
    paragraphs: [
      card.body,
      'The device detail pages give each specialty area a fuller story so the experience feels less like a static brochure and more like a real product platform.',
    ],
    faqs: buildFaqs(card.title, 'Supply - Devices'),
  })
})

export const leadershipDetailIds = leadershipTeam.map((member, index) => makeId('leadership', `${member.name}-${index + 1}`))
leadershipTeam.forEach((member, index) => {
  detailEntries.push({
    id: leadershipDetailIds[index],
    title: member.name,
    eyebrow: 'Leadership Team',
    summary: member.designation,
    image: member.isPlaceholder ? logoImage : member.photoUrl,
    imageAlt: member.name,
    ...buildGalleryCopy(member.name, 'Leadership'),
    gallery: [
      {
        src: member.isPlaceholder ? logoImage : member.photoUrl,
        alt: member.name,
        caption: 'Primary profile visual for this leadership entry.',
      },
      ...healthcareGallery.slice(0, 2),
    ],
    section: 'Leadership',
    stats: [member.designation, member.isPlaceholder ? 'Profile pending' : 'Leadership profile', 'Partner-facing accountability'],
    highlights: member.isPlaceholder ? ['Biography pending', 'Photo pending', 'Client confirmation pending'] : ['Leadership profile', 'Operational oversight', 'Market execution'],
    paragraphs: [
      member.bio,
      'Leadership cards now open dedicated profile pages so the section feels complete and easier to explore on touch devices.',
    ],
    faqs: buildFaqs(member.name, 'Leadership'),
  })
})

export const advisoryDetailIds = advisoryBoard.map((member, index) => makeId('advisory', `${member.name}-${index + 1}`))
advisoryBoard.forEach((member, index) => {
  detailEntries.push({
    id: advisoryDetailIds[index],
    title: member.name,
    eyebrow: 'Advisory Board',
    summary: member.background,
    image: member.isPlaceholder ? logoImage : member.photoUrl,
    imageAlt: member.name,
    ...buildGalleryCopy(member.name, 'Advisory Board'),
    gallery: [
      {
        src: member.isPlaceholder ? logoImage : member.photoUrl,
        alt: member.name,
        caption: 'Primary profile visual for this advisory entry.',
      },
      ...technologyGallery.slice(0, 2),
    ],
    section: 'Advisory Board',
    stats: [member.isPlaceholder ? 'Advisor pending' : 'Advisor profile', 'Independent counsel', 'Strategic guidance'],
    highlights: ['External perspective', 'Governance pressure-test', 'Cross-border experience'],
    paragraphs: [
      member.background,
      'This page gives each advisory profile its own destination and strengthens the sense that the site responds to user exploration.',
    ],
    faqs: buildFaqs(member.name, 'Advisory Board'),
  })
})

export const clientDetailIds = clients.map((client) => makeId('clients', client.name))
clients.forEach((client) => {
  detailEntries.push({
    id: makeId('clients', client.name),
    title: client.name,
    eyebrow: 'Client Relationship',
    summary: client.relationshipDescriptor ?? `${client.name} appears in Sentinel's client and partner landscape on the current site.`,
    image: client.logoUrl.startsWith('http') ? client.logoUrl : logoImage,
    imageAlt: client.name,
    ...buildGalleryCopy(client.name, 'Clients'),
    gallery: [
      {
        src: client.logoUrl.startsWith('http') ? client.logoUrl : logoImage,
        alt: client.name,
        caption: `${client.name} shown within Sentinel's client ecosystem.`,
      },
      ...marketGallery.slice(0, 2),
    ],
    section: 'Clients',
    stats: ['Institutional trust signal', 'Operating-market relationship', 'Execution credibility'],
    highlights: ['Partner visibility', 'Dependable supply support', 'Cross-market collaboration'],
    paragraphs: [
      `${client.name} is shown as part of Sentinel's client ecosystem on the website.`,
      'The detail page lets each client block become an interactive destination without forcing a redesign of the current grid.',
    ],
    faqs: buildFaqs(client.name, 'Clients'),
  })
})

export const whyDetailIds = whySentinelCards.map((card) => makeId('why', card.title))
whySentinelCards.forEach((card) => {
  detailEntries.push({
    id: makeId('why', card.title),
    title: card.title,
    eyebrow: 'Why Sentinel',
    summary: card.body,
    image: heroImage,
    imageAlt: card.title,
    ...buildGalleryCopy(card.title, 'Why Sentinel'),
    gallery: healthcareGallery,
    section: 'Why Sentinel',
    stats: ['Independent channel model', 'Visitor-facing trust signal', 'Commercial clarity'],
    highlights: ['Clear market position', 'Reduced channel conflict', 'Stronger customer confidence'],
    paragraphs: [
      card.body,
      'These pages reinforce why Sentinel operates as an independent platform and give the user something meaningful to open from each homepage card.',
    ],
    faqs: buildFaqs(card.title, 'Why Sentinel'),
  })
})

export const officeDetailIds = regionalOffices.map((office) => makeId('office', office.region))
regionalOffices.forEach((office) => {
  detailEntries.push({
    id: makeId('office', office.region),
    title: office.region,
    eyebrow: office.isHQ ? 'Regional Office - Headquarters' : 'Regional Office',
    summary: office.addressLine,
    image: logoImage,
    imageAlt: office.region,
    ...buildGalleryCopy(office.region, 'Contact'),
    gallery: marketGallery,
    section: 'Contact',
    stats: [office.isHQ ? 'Head office' : 'Regional office', office.isPlaceholder ? 'Address pending' : 'Verified office', 'Contact touchpoint'],
    highlights: ['Regional presence', 'Partner access', 'Local operating context'],
    paragraphs: [
      office.addressLine,
      'Office entries now open their own pages so the contact area feels navigable instead of static.',
      office.isPlaceholder
        ? 'Address specifics remain placeholder content until client confirmation is available.'
        : 'Visitors can use this page to understand what role the office plays in the broader operating footprint.',
    ],
    faqs: buildFaqs(office.region, 'Contact'),
  })
})

enquiryTypes.forEach((type) => {
  detailEntries.push({
    id: makeId('enquiry', type),
    title: type,
    eyebrow: 'Enquiry Type',
    summary: `${type} is one of the routing options available in the contact form.`,
    image: heroImage,
    imageAlt: type,
    ...buildGalleryCopy(type, 'Contact'),
    gallery: technologyGallery,
    section: 'Contact',
    stats: ['Form interaction', 'Lead routing', 'Partner qualification'],
    highlights: ['Better contact segmentation', 'Cleaner follow-up', 'Relevant response path'],
    paragraphs: [
      `${type} helps direct the visitor into the right partnership or supply conversation.`,
      'Making these smaller interactions tappable helps the site feel more alive on mobile and touch-first devices.',
    ],
    faqs: buildFaqs(type, 'Contact'),
  })
})

export const detailRegistry = Object.fromEntries(detailEntries.map((entry) => [entry.id, entry]))

export function getDetailPath(id: string) {
  return `/details/${id}`
}
