export type SiteCard = {
  title: string
  text: string
  href?: string
  label?: string
}

export type SiteSection = {
  id?: string
  eyebrow?: string
  title: string
  body?: string[]
  bullets?: string[]
  cards?: SiteCard[]
  tone?: 'light' | 'navy' | 'warm'
}

export type SitePageData = {
  path: string
  navLabel: string
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  sections: SiteSection[]
  ctaTitle: string
  ctaText: string
}

export const images = {
  globalHealth:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2200&q=86',
  laboratory:
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2200&q=86',
  manufacturing:
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2200&q=86',
  logistics:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=86',
  hospital:
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2200&q=86',
  team:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=86',
  medicine:
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=2200&q=86',
  dubai:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=86',
  planning:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=86',
  cargo:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2200&q=86',
}

export const pages: Record<string, SitePageData> = {
  '/who-we-are': {
    path: '/who-we-are',
    navLabel: 'Who We Are',
    eyebrow: 'Who we are',
    title: 'A healthcare execution platform built across markets.',
    intro:
      'Sentinel brings sourcing, market access, supply coordination and commercial activation into one operating model, helping healthcare manufacturers and institutional buyers move from opportunity to execution.',
    image: images.team,
    imageAlt:
      'International professionals collaborating on a healthcare market plan.',
    sections: [
      {
        eyebrow: 'Our role',
        title: 'Where healthcare complexity meets commercial reality.',
        body: [
          'Global healthcare opportunity is rarely blocked by a lack of interest. It is blocked by fragmented execution: the source is not aligned with the registration pathway, the commercial plan is disconnected from supply, or the local partner does not have a complete view of the manufacturer objective.',
          'Sentinel exists to connect those moving parts. From the UAE, we coordinate qualified manufacturers, market resources, healthcare buyers, logistics partners and commercial stakeholders around a defined pathway.',
          'We are not positioning Sentinel as a universal owner of infrastructure. We build and govern the right model using Sentinel capabilities and qualified partners according to the market, product and mandate.',
        ],
      },
      {
        eyebrow: 'What guides us',
        title: 'A clear purpose, translated into operating discipline.',
        cards: [
          {
            label: 'Vision',
            title: 'Healthcare capability should reach the markets that need it.',
            text: 'Our vision is to make dependable healthcare products and solutions easier to move between capable manufacturers and real institutional demand.',
          },
          {
            label: 'Mission',
            title: 'Connect global supply with local requirements.',
            text: 'We coordinate sourcing, market access and execution through transparent partnerships and accountable workstreams.',
          },
          {
            label: 'Ethos',
            title: 'Guard the quality of the pathway.',
            text: 'We bring clarity to evidence, roles, economics, continuity and execution, not only to the product being supplied.',
          },
        ],
        tone: 'warm',
      },
      {
        eyebrow: 'Our difference',
        title: 'Not another catalogue. Not another introduction.',
        cards: [
          {
            title: 'Requirement before product',
            text: 'We begin with the clinical, institutional and commercial requirement, then evaluate the most suitable product and source.',
          },
          {
            title: 'Pathway before transaction',
            text: 'We consider regulatory, supply, channel and adoption requirements before defining a commercial route.',
          },
          {
            title: 'Governance before growth',
            text: 'Roles, economics, milestones and accountabilities are made explicit before an arrangement is scaled.',
          },
          {
            title: 'Continuity beyond launch',
            text: 'Supply reliability, account development and post-launch execution are part of the original strategy.',
          },
        ],
      },
    ],
    ctaTitle: 'Build the right pathway from the beginning.',
    ctaText:
      'Bring us a defined healthcare opportunity. We will help identify what must be true for it to move.',
  },
  '/capabilities': {
    path: '/capabilities',
    navLabel: 'Capabilities',
    eyebrow: 'What we do',
    title: 'Capabilities designed to work together.',
    intro:
      'Healthcare products do not reach institutions through a single service. Sentinel connects the sourcing, market, supply and commercial work required to create a viable route.',
    image: images.laboratory,
    imageAlt:
      'Healthcare manufacturing specialists working in a laboratory environment.',
    sections: [
      {
        eyebrow: 'Integrated execution',
        title: 'Choose the capability. Keep the full pathway in view.',
        body: [
          'A mandate may begin with sourcing, registration, distribution or market development. Sentinel assesses how that starting point affects the entire pathway so that one workstream does not create a problem in another.',
        ],
        cards: [
          {
            label: '01',
            title: 'Global sourcing & procurement',
            text: 'Requirement definition, supplier identification, technical comparison, documentation coordination and procurement support across qualified global hubs.',
            href: '/capabilities/global-sourcing',
          },
          {
            label: '02',
            title: 'Regulatory & market access',
            text: 'Market-entry assessment, registration-pathway coordination, stakeholder mapping and channel-readiness support.',
            href: '/capabilities/market-access',
          },
          {
            label: '03',
            title: 'Distribution & supply coordination',
            text: 'Supply architecture, qualified logistics coordination, inventory planning and healthcare-channel alignment.',
            href: '/capabilities/distribution',
          },
          {
            label: '04',
            title: 'Commercial & clinical activation',
            text: 'Institutional account planning, clinical stakeholder strategy, channel activation and launch-performance coordination.',
            href: '/capabilities/commercial-activation',
          },
          {
            label: '05',
            title: 'Strategic healthcare platforms',
            text: 'Partnership design where products, technology, clinical capability and local infrastructure must work as one.',
            href: '/partnerships',
          },
        ],
      },
      {
        eyebrow: 'One operating view',
        title: 'The pathway is only as strong as its weakest handoff.',
        body: [
          'A lower unit price cannot compensate for unsuitable documentation. Registration cannot compensate for a weak channel. A launch cannot compensate for unreliable replenishment. Sentinel keeps those dependencies visible from the start.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Tell us what you need to execute.',
    ctaText:
      'We will help define the capability, partners and decisions required to move it.',
  },
  '/capabilities/global-sourcing': {
    path: '/capabilities/global-sourcing',
    navLabel: 'Global Sourcing',
    eyebrow: 'Global sourcing & procurement',
    title: 'Source globally. Select deliberately.',
    intro:
      'We identify supply options around the required quality, regulatory pathway, economics, capacity and continuity profile, not around a predetermined country or catalogue.',
    image: images.manufacturing,
    imageAlt:
      'Specialists working inside a controlled healthcare manufacturing environment.',
    sections: [
      {
        eyebrow: 'Requirement-led sourcing',
        title: 'Established hubs. Different strengths.',
        body: [
          'Europe offers deep capability in innovative, specialist and quality-intensive products. India combines pharmaceutical scale with broad healthcare manufacturing. Southeast Asia provides diversified manufacturing and competitive medical supply capability. East Asia brings strength in advanced devices, diagnostics, precision production and healthcare technology.',
          'Sentinel evaluates those ecosystems against the actual requirement and coordinates the commercial and documentation work needed to move a qualified option forward.',
        ],
        cards: [
          {
            title: 'Europe',
            text: 'Innovative pharmaceuticals, specialty products, diagnostics, MedTech and quality-intensive manufacturing.',
          },
          {
            title: 'India',
            text: 'Scaled pharmaceutical, consumable, device and healthcare manufacturing with broad technical capability.',
          },
          {
            title: 'Southeast Asia',
            text: 'Diversified manufacturing, medical consumables, devices and emerging healthcare technologies.',
          },
          {
            title: 'East Asia',
            text: 'Advanced medical technology, diagnostics, precision production and specialist innovation.',
          },
          {
            title: 'Other qualified hubs',
            text: 'Requirement-led sourcing wherever quality, registration, economics and continuity are aligned.',
          },
        ],
      },
      {
        eyebrow: 'Our scope',
        title: 'From requirement definition to supply decision.',
        bullets: [
          'Requirement and specification definition',
          'Global supplier and manufacturer identification',
          'Initial capability and documentation screening',
          'Technical and commercial comparison',
          'Sample, quotation and dossier coordination',
          'Capacity, lead-time and continuity assessment',
          'Commercial term and procurement support',
          'Supplier communication and governance',
        ],
        tone: 'warm',
      },
      {
        eyebrow: 'Evaluation',
        title: 'Five tests before recommending a source.',
        cards: [
          {
            title: 'Product fit',
            text: 'Does it meet the intended use, specification and institutional requirement?',
          },
          {
            title: 'Regulatory fit',
            text: 'Is the classification, documentation and evidence suitable for the target pathway?',
          },
          {
            title: 'Manufacturing fit',
            text: 'Can the source demonstrate capability, consistency, traceability and appropriate quality controls?',
          },
          {
            title: 'Commercial fit',
            text: 'Do price, order quantities, terms and channel economics support a viable model?',
          },
          {
            title: 'Continuity fit',
            text: 'Can capacity, lead times, shelf life, packaging and logistics support ongoing supply?',
          },
        ],
      },
    ],
    ctaTitle: 'Bring us the requirement, not only a product name.',
    ctaText:
      'Share the specification, target market, volume and timing. We will help assess the credible options.',
  },
  '/capabilities/market-access': {
    path: '/capabilities/market-access',
    navLabel: 'Market Access',
    eyebrow: 'Regulatory & market access',
    title: 'Market entry is a pathway, not a filing.',
    intro:
      'We coordinate the commercial, regulatory and stakeholder requirements that determine whether a healthcare product can enter a market and build a sustainable position.',
    image: images.planning,
    imageAlt:
      'Professionals reviewing documentation for a healthcare market-entry plan.',
    sections: [
      {
        eyebrow: 'From market question to access plan',
        title: 'Registration is essential. It is not the whole market.',
        body: [
          'A product must also fit the buyer structure, reimbursement environment, procurement pathway, clinical expectations and distribution model.',
          'Sentinel helps partners understand those interdependencies and coordinates qualified regulatory and market resources according to the product and jurisdiction.',
        ],
        bullets: [
          'Preliminary market and opportunity assessment',
          'Product classification and pathway coordination',
          'Registration-readiness and documentation gap review',
          'Local representation and partner-model assessment',
          'Institutional stakeholder mapping',
          'Channel and procurement pathway design',
          'Evidence and value-story planning',
          'Pricing and commercial-model assessment',
          'Launch-readiness planning',
        ],
      },
      {
        eyebrow: 'The access test',
        title: 'What a credible plan must answer.',
        cards: [
          {
            title: 'Legal entry',
            text: 'Can the product enter through the appropriate classification and regulatory pathway?',
          },
          {
            title: 'Channel readiness',
            text: 'Can the intended channel handle, communicate and supply it appropriately?',
          },
          {
            title: 'Institutional value',
            text: 'Will buyers and clinical stakeholders understand its purpose and value?',
          },
          {
            title: 'Commercial viability',
            text: 'Can the model work after local costs, partner economics and market conditions?',
          },
          {
            title: 'Supply continuity',
            text: 'Can the pathway remain dependable after the initial approval or launch?',
          },
        ],
        tone: 'warm',
      },
      {
        eyebrow: 'Important',
        title: 'Qualified local resources remain essential.',
        body: [
          'Sentinel does not provide legal or medical advice. Regulatory work is coordinated through appropriately qualified and authorised parties for the relevant jurisdiction.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Assess a market pathway.',
    ctaText:
      'Share the product, jurisdiction and commercial objective to begin a structured assessment.',
  },
  '/capabilities/distribution': {
    path: '/capabilities/distribution',
    navLabel: 'Distribution',
    eyebrow: 'Distribution & supply coordination',
    title: 'Supply reliability is designed before delivery.',
    intro:
      'Sentinel aligns product requirements, inventory decisions, logistics partners and healthcare channels so that supply can move with greater control and continuity.',
    image: images.logistics,
    imageAlt:
      'Organised logistics environment supporting reliable healthcare supply.',
    sections: [
      {
        eyebrow: 'Product-specific design',
        title: 'The supply model must fit the product and the market.',
        body: [
          'Pharmaceuticals, diagnostics, devices and consumables do not share one distribution requirement. Temperature, shelf life, batch traceability, installation, training, service support and institutional delivery conditions can all change the operating model.',
          'Sentinel develops the supply pathway around those conditions and coordinates qualified partners where licensed or specialist infrastructure is required.',
        ],
        bullets: [
          'Product-handling and channel assessment',
          'Warehousing and logistics partner coordination',
          'Temperature-controlled pathway planning where required',
          'Import and documentation workflow coordination',
          'Inventory and replenishment planning',
          'Institutional order and fulfilment coordination',
          'Distributor and sub-distributor model design',
          'Delivery-performance and exception monitoring',
        ],
      },
      {
        eyebrow: 'Control points',
        title: 'What we keep visible.',
        cards: [
          {
            title: 'Product integrity',
            text: 'Handling conditions and responsibilities aligned to product requirements.',
          },
          {
            title: 'Documentation',
            text: 'Accurate, accessible and coordinated across source, shipment and destination.',
          },
          {
            title: 'Inventory',
            text: 'Visibility over stock, demand, replenishment and potential interruptions.',
          },
          {
            title: 'Delivery',
            text: 'Defined service expectations, issue escalation and channel accountability.',
          },
        ],
        tone: 'warm',
      },
      {
        eyebrow: 'Operating note',
        title: 'Infrastructure claims must follow the licence.',
        body: [
          'Specific warehousing, transport, import and distribution activities are performed by Sentinel or qualified partners subject to product classification, licensing and local regulatory requirements.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Design a supply pathway.',
    ctaText:
      'Tell us the product, handling requirements, destination and expected demand.',
  },
  '/capabilities/commercial-activation': {
    path: '/capabilities/commercial-activation',
    navLabel: 'Commercial Activation',
    eyebrow: 'Commercial & clinical activation',
    title: 'Availability is not adoption.',
    intro:
      'We help translate an approved and available healthcare product into a focused market-development plan across institutions, clinical stakeholders and channels.',
    image: images.hospital,
    imageAlt: 'Healthcare professionals working inside a modern hospital.',
    sections: [
      {
        eyebrow: 'Informed market development',
        title: 'Build demand through relevance, not noise.',
        body: [
          'Healthcare products are adopted when the right stakeholders understand the clinical purpose, operational fit, evidence and commercial value. That process requires disciplined account selection and credible engagement.',
          'Sentinel coordinates the market-development work around the product, its approved claims, the buyer pathway and the responsibilities of each partner.',
        ],
        bullets: [
          'Market segmentation and account prioritisation',
          'Hospital, clinic and pharmacy channel planning',
          'Institutional procurement engagement support',
          'KOL and clinical stakeholder strategy',
          'Formulary and product-evaluation coordination',
          'Approved product and value-story localisation',
          'Sales-force and channel-activation planning',
          'Launch sequencing and milestone management',
          'Commercial performance and pipeline governance',
        ],
      },
      {
        eyebrow: 'Activation principle',
        title: 'Clinical credibility and commercial execution must reinforce each other.',
        body: [
          'Promotional activity that moves faster than evidence or approval creates risk rather than value. All product communication and stakeholder engagement must remain within approved claims, local codes and applicable healthcare marketing requirements.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Plan a disciplined launch.',
    ctaText:
      'Align institutions, channels, clinical stakeholders and supply around one executable plan.',
  },
  '/what-we-supply': {
    path: '/what-we-supply',
    navLabel: 'What We Supply',
    eyebrow: 'Portfolio scope',
    title: 'A healthcare portfolio shaped by institutional need.',
    intro:
      'Sentinel develops supply portfolios around provider requirements, market pathways and approved partner mandates, not around catalogue volume.',
    image: images.medicine,
    imageAlt:
      'Healthcare products arranged in a clean professional environment.',
    sections: [
      {
        eyebrow: 'Portfolio categories',
        title: 'Broad enough to solve. Focused enough to execute.',
        body: [
          'These categories describe Sentinel supply and partnership scope. They do not mean that every product is registered, stocked or available in every market. Availability is confirmed against the target jurisdiction and requirement.',
        ],
        cards: [
          {
            title: 'Pharmaceuticals & specialty therapies',
            text: 'Branded, generic and specialty opportunities assessed against registration, clinical demand, channel fit and partner mandate.',
          },
          {
            title: 'Hospital & clinical consumables',
            text: 'Recurring products used across wards, outpatient settings, procedures, infection control and routine operations.',
          },
          {
            title: 'Diagnostics & laboratory solutions',
            text: 'Instruments, tests, reagents, point-of-care solutions and related workflow requirements.',
          },
          {
            title: 'Radiology & imaging',
            text: 'Imaging equipment, supporting technologies, accessories and lifecycle requirements.',
          },
          {
            title: 'Critical & respiratory care',
            text: 'Monitoring, ventilation, oxygen therapy, infusion and high-dependency technologies.',
          },
          {
            title: 'Surgical platforms',
            text: 'Procedure-related devices, instruments, consumables and operating-room solutions.',
          },
          {
            title: 'Rehabilitation & mobility',
            text: 'Products and technologies supporting recovery, movement and independence.',
          },
          {
            title: 'Connected care',
            text: 'Devices and platforms extending monitoring and care coordination beyond traditional settings.',
          },
          {
            title: 'Healthcare informatics & AI',
            text: 'Solutions supporting clinical workflow, operational insight and connected delivery.',
          },
          {
            title: 'Capital equipment support',
            text: 'Sourcing, delivery, installation coordination, training and lifecycle planning.',
          },
        ],
      },
      {
        eyebrow: 'Requirement brief',
        title: 'The information that helps us source properly.',
        bullets: [
          'Intended clinical or operational use',
          'Technical specification',
          'Target market and buyer',
          'Expected volume',
          'Required timing',
          'Registration or approval status',
          'Service, training or installation requirements',
        ],
        tone: 'warm',
      },
    ],
    ctaTitle: 'Have a specific requirement?',
    ctaText:
      'Share the intended use, specification, volume, target market and timing.',
  },
  '/who-we-serve': {
    path: '/who-we-serve',
    navLabel: 'Who We Serve',
    eyebrow: 'Who we serve',
    title: 'Different stakeholders. One coordinated pathway.',
    intro:
      'Sentinel brings the priorities of manufacturers, healthcare buyers, channels and market partners into an execution model that makes responsibilities clear.',
    image: images.hospital,
    imageAlt:
      'Modern hospital environment representing institutional healthcare partners.',
    sections: [
      {
        id: 'manufacturers',
        eyebrow: 'Manufacturers',
        title: 'Healthcare manufacturers',
        body: [
          'For pharmaceutical, MedTech, diagnostic, digital-health and healthcare manufacturers seeking entry, development or institutional access in selected markets.',
        ],
        bullets: [
          'Market and partner assessment',
          'Regulatory and access-pathway coordination',
          'Commercial model and channel design',
          'Institutional stakeholder engagement',
          'Launch and supply coordination',
          'Performance governance',
        ],
      },
      {
        id: 'providers',
        eyebrow: 'Providers',
        title: 'Hospitals, health systems and care providers',
        body: [
          'For healthcare organisations seeking qualified products, alternative sources, technology partners or a more structured route to supply continuity.',
        ],
        bullets: [
          'Requirement definition',
          'Global supplier identification',
          'Technical and commercial comparison',
          'Procurement and documentation coordination',
          'Delivery and implementation planning',
        ],
        tone: 'warm',
      },
      {
        id: 'institutions',
        eyebrow: 'Institutions',
        title: 'Government and institutional buyers',
        body: [
          'For public-sector entities, procurement organisations and programmes requiring structured supplier coordination and accountable healthcare fulfilment.',
        ],
        bullets: [
          'Requirement and portfolio structuring',
          'Manufacturer and supplier coordination',
          'Documentation and commercial consolidation',
          'Market-specific fulfilment design',
          'Partner governance and progress reporting',
        ],
      },
      {
        id: 'channels',
        eyebrow: 'Channels and partners',
        title: 'Pharmacies, clinics and regional distributors',
        body: [
          'For regulated healthcare channels seeking differentiated products and consistent supply, and for capable local partners seeking manufacturer relationships, international sourcing or collaboration on institutional opportunities.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Which pathway fits your objective?',
    ctaText:
      'Tell us where you sit in the value chain and what you need the partnership to achieve.',
  },
  '/global-reach': {
    path: '/global-reach',
    navLabel: 'Global Reach',
    eyebrow: 'Global reach',
    title: 'Global capability. Market-specific execution.',
    intro:
      'Sentinel coordinates qualified global supply with local market pathways, combining international reach with the partners and judgement required in each jurisdiction.',
    image: images.dubai,
    imageAlt:
      'Modern UAE skyline representing Sentinel headquarters and regional coordination.',
    sections: [
      {
        eyebrow: 'Our geographic model',
        title: 'Reach is a network, not a collection of unsupported pins.',
        body: [
          'Global reach does not mean claiming an office in every country. It means knowing where to source, which partners to mobilise, how the local healthcare system works and what must be true before an opportunity can move.',
          'Sentinel distinguishes clearly between its headquarters, sourcing markets, partner networks and active or target commercial markets.',
        ],
      },
      {
        eyebrow: 'The network',
        title: 'Coordinated from the UAE.',
        cards: [
          {
            label: 'Control centre',
            title: 'UAE headquarters',
            text: 'Commercial governance, strategic partnerships, regional coordination and opportunity development.',
          },
          {
            label: 'Source',
            title: 'Europe',
            text: 'Innovation, specialist products, diagnostics, MedTech and quality-intensive manufacturing.',
          },
          {
            label: 'Source',
            title: 'India',
            text: 'Scaled pharmaceutical, consumable, device and healthcare manufacturing capability.',
          },
          {
            label: 'Source',
            title: 'Southeast Asia',
            text: 'Diversified healthcare manufacturing and competitive medical supply capability.',
          },
          {
            label: 'Source',
            title: 'East Asia',
            text: 'Advanced diagnostics, precision manufacturing, medical technology and innovation.',
          },
          {
            label: 'Markets',
            title: 'GCC, Africa and selected regions',
            text: 'Market-specific opportunities developed through defined partners, mandates and local pathways.',
          },
        ],
        tone: 'warm',
      },
      {
        eyebrow: 'Market discipline',
        title: 'How we decide where to operate.',
        bullets: [
          'Clear healthcare need or institutional demand',
          'Suitable regulatory and market pathway',
          'Qualified local execution capability',
          'Viable supply and commercial economics',
          'Defined partner responsibilities',
          'Credible route to continuity and scale',
        ],
      },
    ],
    ctaTitle: 'Discuss a country or regional opportunity.',
    ctaText:
      'We will assess whether Sentinel has a credible source, partner, buyer or execution advantage.',
  },
  '/how-we-work': {
    path: '/how-we-work',
    navLabel: 'How We Work',
    eyebrow: 'Our execution model',
    title: 'Define the pathway before accelerating it.',
    intro:
      'Sentinel uses a stage-based operating model to test the opportunity, clarify responsibilities and align market, supply and commercial execution.',
    image: images.planning,
    imageAlt:
      'Professionals reviewing a structured healthcare execution plan.',
    sections: [
      {
        eyebrow: 'The pathway',
        title: 'Six stages. One accountable view.',
        cards: [
          {
            label: '01',
            title: 'Define',
            text: 'Clarify the product or requirement, target market, buyer, objective, timing and decision criteria.',
          },
          {
            label: '02',
            title: 'Assess',
            text: 'Review demand, product fit, source capability, regulatory pathway, economics and principal risks.',
          },
          {
            label: '03',
            title: 'Structure',
            text: 'Define the partner model, roles, rights, economics, milestones, governance and resources.',
          },
          {
            label: '04',
            title: 'Activate',
            text: 'Coordinate documentation, partners, institutions, sourcing, commercial preparation and supply readiness.',
          },
          {
            label: '05',
            title: 'Execute',
            text: 'Manage agreed workstreams, decisions, dependencies, deliveries and market activities.',
          },
          {
            label: '06',
            title: 'Govern',
            text: 'Review performance, supply continuity, partner delivery and the changes required to scale.',
          },
        ],
      },
      {
        eyebrow: 'Serious partnerships',
        title: 'What we require from the other side.',
        bullets: [
          'Accurate product and company information',
          'Evidence supporting quality and claims',
          'Transparent economics and decision rights',
          'Clear regulatory and supply responsibilities',
          'Timely access to responsible decision-makers',
          'Willingness to work through defined milestones',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Start with a defined opportunity.',
    ctaText:
      'A clear requirement allows us to assess faster and avoid performative activity.',
  },
  '/partnerships': {
    path: '/partnerships',
    navLabel: 'Partnerships',
    eyebrow: 'Strategic partnerships',
    title: 'The right partnership is an operating model.',
    intro:
      'Sentinel structures collaborations around complementary capability, clear responsibility and a shared route to healthcare value.',
    image: images.team,
    imageAlt:
      'International professionals discussing a strategic healthcare partnership.',
    sections: [
      {
        eyebrow: 'Partnership models',
        title: 'Where collaboration creates value.',
        cards: [
          {
            title: 'Manufacturer market entry',
            text: 'A structured route through regulatory, distribution, institutional and commercial coordination.',
          },
          {
            title: 'Institutional supply',
            text: 'Access to multiple qualified manufacturers through one coordinated commercial and execution interface.',
          },
          {
            title: 'Regional distribution alliances',
            text: 'Local market infrastructure combined with global sourcing, manufacturer access or institutional relationships.',
          },
          {
            title: 'Technology and clinical platforms',
            text: 'Integrated models combining healthcare technology, clinical capability, products and local delivery.',
          },
          {
            title: 'Long-term portfolio development',
            text: 'Building a focused category or therapeutic portfolio rather than pursuing isolated transactions.',
          },
        ],
      },
      {
        eyebrow: 'Partnership discipline',
        title: 'What must be made explicit.',
        bullets: [
          'The healthcare problem being addressed',
          'The contribution of each partner',
          'Market and product rights',
          'Regulatory and compliance responsibilities',
          'Commercial economics and investment',
          'Performance milestones',
          'Governance and escalation',
          'Conditions for scale, review or exit',
        ],
        tone: 'warm',
      },
    ],
    ctaTitle: 'Propose a partnership.',
    ctaText:
      'Tell us what each party contributes and which healthcare outcome the model is meant to create.',
  },
  '/leadership': {
    path: '/leadership',
    navLabel: 'Leadership',
    eyebrow: 'Leadership',
    title: 'Experience across the decisions healthcare depends on.',
    intro:
      'Sentinel leadership brings together healthcare strategy, finance, provider operations, procurement, supply chain and market development.',
    image: images.planning,
    imageAlt: 'Executive team in a strategic discussion.',
    sections: [
      {
        eyebrow: 'Leadership team',
        title: 'One view across the full pathway.',
        body: [
          'Strategic, financial, operational, procurement and market decisions are considered together so that healthcare opportunities are structured for execution rather than presentation.',
        ],
        cards: [
          {
            label: 'Chairman',
            title: 'H.E. Younis Haji Al Khoori',
            text: 'Provides strategic and governance leadership, bringing institutional understanding, financial stewardship and a long-term value perspective.',
          },
          {
            label: 'Healthcare strategy & growth',
            title: 'John Sunil',
            text: 'Contributes senior leadership experience across integrated healthcare delivery, organisational growth and regional healthcare strategy.',
          },
          {
            label: 'Finance, investment & governance',
            title: 'Shihab',
            text: 'Brings healthcare finance experience spanning investment evaluation, performance management and complex partnership models.',
          },
          {
            label: 'Global sourcing, supply chain & market access',
            title: 'Ravinder Sharma',
            text: 'Leads the development of Sentinel global sourcing, market-access and execution model, drawing on senior healthcare procurement and supply-chain experience.',
          },
        ],
      },
      {
        eyebrow: 'Publication requirement',
        title: 'Formal titles and portraits must be confirmed before launch.',
        body: [
          'The prototype demonstrates the intended leadership page. Final legal titles, approved biographies, references to former positions and commissioned portraits must be inserted only after leadership approval.',
        ],
        tone: 'warm',
      },
    ],
    ctaTitle: 'Connect with Sentinel.',
    ctaText:
      'Reach the team responsible for healthcare strategy, sourcing and market execution.',
  },
  '/insights': {
    path: '/insights',
    navLabel: 'Insights',
    eyebrow: 'Insights',
    title: 'Practical thinking for complex healthcare markets.',
    intro:
      'Perspectives on the decisions that shape market access, healthcare supply, institutional procurement and long-term partnership performance.',
    image: images.cargo,
    imageAlt:
      'Global logistics and trade infrastructure supporting cross-border healthcare supply.',
    sections: [
      {
        eyebrow: 'Perspectives',
        title: 'Questions worth answering before execution begins.',
        cards: [
          {
            label: 'Market access',
            title: 'Market entry is an operating model, not a registration milestone',
            text: 'Registration answers whether a product may enter. It does not answer who will buy it, how it will move or whether the economics can survive the channel.',
          },
          {
            label: 'Supply chain',
            title: 'Why the lowest unit price can create the highest total cost',
            text: 'Lead-time variability, documentation failure, shelf life, service gaps and weak replenishment can erase an apparent procurement saving.',
          },
          {
            label: 'Global sourcing',
            title: 'Choosing a sourcing market by capability, not habit',
            text: 'Europe, India, Southeast Asia and East Asia bring different strengths. The right decision begins with the requirement.',
          },
          {
            label: 'Partnerships',
            title: 'Questions to answer before granting market exclusivity',
            text: 'Exclusivity without performance measures, investment obligations and review rights can freeze a market instead of developing it.',
          },
        ],
      },
      {
        eyebrow: 'Editorial note',
        title: 'Publish substance, not empty content cards.',
        body: [
          'The public insights page should launch only when at least two complete, approved articles are available. The prototype shows the proposed editorial direction without fabricating publication dates.',
        ],
        tone: 'navy',
      },
    ],
    ctaTitle: 'Discuss a market or supply-chain question.',
    ctaText:
      'We welcome serious conversations where commercial opportunity and healthcare execution intersect.',
  },
}
