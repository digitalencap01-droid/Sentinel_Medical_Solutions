import {
  Activity,
  BedDouble,
  BrainCircuit,
  Building2,
  Cpu,
  Globe,
  Handshake,
  HeartPulse,
  LockKeyhole,
  Network,
  ScanHeart,
  Ship,
  Siren,
  Workflow,
} from 'lucide-react'
import type {
  AdvisoryBoardMember,
  AfricaMarket,
  CardItem,
  Client,
  IconCardItem,
  LeadershipMember,
  MarketLocation,
  Metric,
  NavLink,
  OperatingStep,
  PartnershipTrack,
  PharmaCategory,
  RegionalOffice,
} from './types'

// ---------------------------------------------------------------------------------
// Content layer (site brief 3.5). Every section's copy lives here as a typed, named
// export — one export (or small group) per section, matching the type shapes in
// types.ts. That's deliberate: it means a future headless CMS migration (Sanity,
// Contentful, or similar — ⚠️ NEEDS DECISION, not chosen yet) is mechanical rather than
// a rewrite. The pattern for migrating a section later: define a matching content
// type in the CMS, fetch it, and swap the export below for the fetched value — the
// components in Sections.tsx / *Section.tsx already consume these exports by shape,
// not by import path, so nothing downstream needs to change.
// ---------------------------------------------------------------------------------

// ## Navigation ---------------------------------------------------------------------

// Full site nav — used for the mobile menu and Footer link columns, in page order
// (redesign brief §4). Nine top-level entries is too dense for a desktop nav bar, so
// Header uses primaryNavLinks (below) instead; every section is still one click away
// via the mobile menu / footer. "Africa" no longer has its own anchor — it's a
// sub-module inside Global Reach & Presence now, not a separate scroll stop.
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Global Reach', href: '#global-reach' },
  { label: 'How We Work', href: '#operations' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'What We Supply', href: '#supply' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Advisory Board', href: '#advisory-board' },
  { label: 'Our Clients', href: '#clients' },
]

export const primaryNavLinks = navLinks.filter((link) =>
  ['#about', '#capabilities', '#global-reach', '#supply', '#leadership', '#clients'].includes(link.href),
)

// ## Hero -----------------------------------------------------------------------

export const heroBadges: string[] = [
  'MOHAP-licensed warehousing',
  'ISO 9001:2015 & 45001:2018',
  'WHO-EML aligned portfolio',
]

// ## Platform stats strip ---------------------------------------------------------

export const topStats: Metric[] = [
  {
    value: 200,
    suffix: '+',
    label: 'Products across 10 therapy categories',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Consumables and clinical supply lines',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Supplier and manufacturer partnerships',
  },
  {
    staticValue: 'UAE + India',
    label: 'Operating backbone for sourcing and supply-chain execution',
  },
]

// ## About ------------------------------------------------------------------------

// [DRAFT — pending client sign-off] Vision / Mission / Ethos copy below is drawn from the
// client creative brief as a starting point. Do not treat as final — confirm wording with
// Sentinel before this ships publicly.
export const profileCards: CardItem[] = [
  {
    title: 'Our Vision',
    body: 'To be the most trusted partner in the global healthcare supply chain, connecting manufacturers, institutions and patients across continents.',
  },
  {
    title: 'Our Mission',
    body: "To source, trade and deliver healthcare products and specialised pharmaceutical solutions with precision, integrity and speed, safeguarding our clients' interests at every step.",
  },
  {
    title: 'Our Ethos',
    body: 'Guardianship — we stand between complexity and care, protecting quality, value and continuity so our clients can focus on outcomes.',
  },
]

// ## Capabilities -------------------------------------------------------------------

export const capabilityCards: CardItem[] = [
  {
    title: 'Pharma Distribution',
    body: 'Essential medicines, chronic therapies, OTC and hospital lines distributed across public and private channels throughout the UAE and regional markets.',
  },
  {
    title: 'Medical Devices & Consumables',
    body: 'IV therapy, wound care, PPE, diagnostics, theatre and respiratory supplies for recurring hospital and clinic demand.',
  },
  {
    title: 'Sourcing & Procurement',
    body: 'A qualified, compliant supplier network spanning 50+ international manufacturers across pharma, devices and consumables.',
  },
  {
    title: 'Warehousing & Inventory Management',
    body: 'Temperature-conscious, quality-assured storage with structured inventory planning and replenishment discipline.',
  },
  {
    title: 'Distribution & Logistics',
    body: 'Pick, pack and last-mile coordination delivering on time, with full traceability and order accuracy.',
  },
  {
    title: 'Reporting & Service Interface',
    body: 'Data-driven transparency, practical dashboards and a dedicated team for proactive issue resolution.',
  },
]

// ## Credentials strip --------------------------------------------------------------

export const credentials: Metric[] = [
  { value: 70, suffix: '+', label: 'Specialist healthcare team members' },
  { value: 1000, suffix: '+', label: 'Pharmacy network reach across the UAE' },
  { staticValue: 'Kizad', label: 'MOHAP-licensed warehouse in Abu Dhabi' },
]

// ## Pharma portfolio -----------------------------------------------------------------

export const pharmaPortfolio: PharmaCategory[] = [
  {
    title: 'Essential Medicines & Public Health',
    medicines: [
      'Amoxicillin',
      'Azithromycin',
      'Ceftriaxone',
      'Artemether + Lumefantrine',
      'Artesunate Injection',
      'TDF + 3TC + DTG',
      'RHZE Anti-TB',
    ],
  },
  {
    title: 'NCD & Chronic-Care Therapies',
    medicines: [
      'Amlodipine',
      'Losartan',
      'Atorvastatin',
      'Metformin',
      'Sitagliptin',
      'Empagliflozin',
      'Insulin Glargine',
      'Salbutamol',
      'Montelukast',
    ],
  },
  {
    title: 'Hospital, OTC & Supportive Care',
    medicines: [
      'Paracetamol',
      'Ibuprofen',
      'Tramadol',
      'Omeprazole',
      'Ondansetron',
      'Vitamin D3',
      'ORS',
      'Zinc Sulphate',
      'Cetirizine',
    ],
  },
]

// ## Clinical supply / consumables ---------------------------------------------------

export const consumableCards: CardItem[] = [
  {
    title: 'Wound Care & Dressings',
    body: 'Gauze swabs, cotton wool, adhesive and crepe bandages, wound closure strips and paraffin tulle dressings.',
  },
  {
    title: 'Injection & IV Therapy',
    body: 'IV cannulas, infusion sets, syringes, IV fluids, hypodermic needles, burette sets and central line kits.',
  },
  {
    title: 'Gloves & Infection Control',
    body: 'Examination and surgical gloves, masks, gowns, face shields, sterile drapes and isolation wear.',
  },
  {
    title: 'Diagnostic Consumables',
    body: 'Blood collection tubes, lancets, urine containers, transport swabs, malaria RDTs and reagent strips.',
  },
  {
    title: 'Surgical & Theatre Supplies',
    body: 'Sutures, blades, drapes, cautery accessories, Foley catheters, nasogastric tubes and skin staplers.',
  },
  {
    title: 'Respiratory & Critical Care',
    body: 'Oxygen masks, nebuliser kits, suction catheters, ET tubes, Ambu bags and pulse oximeter probes.',
  },
]

// ## Medical devices ------------------------------------------------------------------

export const deviceCards: IconCardItem[] = [
  {
    icon: ScanHeart,
    title: 'Radiology & Diagnostics',
    body: 'Imaging and diagnostic systems and consumables.',
  },
  {
    icon: HeartPulse,
    title: 'Oncology & Cardiology',
    body: 'High-acuity therapy areas and neurology lines.',
  },
  {
    icon: BrainCircuit,
    title: 'Healthcare Informatics & AI',
    body: 'Clinical AI and digital decision support solutions.',
  },
  {
    icon: Workflow,
    title: 'OT & Minimally Invasive Surgery',
    body: 'Operating-theatre and minimally invasive surgery solutions.',
  },
  {
    icon: Activity,
    title: 'Sleep & Respiratory Care',
    body: 'Respiratory and critical-care equipment.',
  },
  {
    icon: Network,
    title: 'Connected Care',
    body: 'Smart patient rooms and hospital-to-home solutions.',
  },
  {
    icon: BedDouble,
    title: 'Specialised Patient Care',
    body: 'Orthotics, prosthetics and rehabilitation solutions.',
  },
  {
    icon: Building2,
    title: 'Capital Equipment',
    body: 'Turnkey infrastructure and service support.',
  },
]

// ## Operations -----------------------------------------------------------------------

export const operatingSteps: OperatingStep[] = [
  { title: 'Source', body: 'Qualified supplier identification and category planning.' },
  { title: 'Plan', body: 'Demand shaping, procurement timing and allocation discipline.' },
  { title: 'Store', body: 'Quality-assured warehousing with healthcare-sensitive handling.' },
  { title: 'Fulfil', body: 'Structured picking, packing and order verification.' },
  { title: 'Deliver', body: 'Traceable route execution across institutional and retail channels.' },
  { title: 'Support', body: 'Reporting, issue resolution and partner-facing follow-through.' },
]

export const executionCapabilities: string[] = [
  'UAE-led commercial coordination and client interface',
  'India-linked sourcing depth and cost-efficient supply access',
  'Consolidated procurement across pharma and consumables',
  'Healthcare-sensitive, cold-chain-ready logistics planning',
  'Cross-border documentation and shipment coordination',
]

export const healthcareOperations: string[] = [
  'Institutional procurement and tender support readiness',
  'Hospital and clinic supply-program coordination',
  'Technical coordination and service follow-up for projects',
  'Warehousing, route planning and field-execution support',
  'Practical dashboards, tracking and service discipline',
]

// ## Global reach ---------------------------------------------------------------------

export const globalCards: CardItem[] = [
  {
    title: 'UAE - Commercial Hub & Governance',
    body: 'Established presence in Abu Dhabi and Dubai with regulatory and logistics readiness.',
  },
  {
    title: 'India - Supply & Manufacturing Backbone',
    body: 'Cost-efficient sourcing, all-India operating reach and large-scale warehousing and transport.',
  },
  {
    title: 'Africa - Execution & Growth Markets',
    body: 'Partner-led, country-specific route-to-market across West, East and North Africa.',
  },
]

// Core presence per the client brief. UAE is flagged as headquarters and should stay
// visually marked as such everywhere this list is used (see also regionalOffices below).
export const coreLocations: MarketLocation[] = [
  { country: 'United States' },
  { country: 'United Arab Emirates', isHQ: true },
  { country: 'Saudi Arabia' },
  { country: 'India' },
  { country: 'Singapore' },
  { country: 'South Africa' },
  { country: 'Angola' },
  { country: 'Nigeria' },
  { country: 'Ethiopia' },
  { country: 'Congo (DRC)' },
]

// Markets the site previously listed that fall outside the brief's core 10 locations.
// Kept visible but visually secondary — see ⚠️ NEEDS DECISION in the working brief (2.2)
// on whether these should stay long-term.
export const secondaryMarkets: string[] = ['Oman', 'Qatar', 'Egypt']

// ## Africa strategy ------------------------------------------------------------------

export const africaMarkets: AfricaMarket[] = [
  {
    country: 'Nigeria',
    code: 'NG',
    body: "West Africa's largest healthcare market, with high-growth demand across institutional and retail channels and significant import-driven pharmaceutical opportunity.",
  },
  {
    country: 'Ethiopia',
    code: 'ET',
    body: 'A scalable public-health and institutional market with rising demand for essential medicines, consumables and hospital-grade supply.',
  },
  {
    country: 'South Africa',
    code: 'ZA',
    body: "A mature healthcare market with established institutional procurement and strong private-sector distribution channels, anchoring Sentinel's southern Africa access.",
  },
  {
    country: 'Angola',
    code: 'AO',
    body: 'Import-driven pharmaceutical demand and expanding institutional infrastructure create a growing entry point for essential medicines and consumables.',
  },
  {
    country: 'Congo (DRC)',
    code: 'CD',
    body: 'Emerging institutional and NGO-driven demand for essential medicines and clinical supplies across a large, underserved population base.',
  },
]

// ## Why Sentinel ---------------------------------------------------------------------

export const whySentinelCards: IconCardItem[] = [
  {
    icon: Handshake,
    title: 'Neutrality',
    body: 'Equal access with no channel conflict, serving hospitals, clinics and pharmacies on a level basis.',
  },
  {
    icon: LockKeyhole,
    title: 'Confidentiality',
    body: 'Protects demand, ordering behaviour and sensitive market intelligence from competitive exposure.',
  },
  {
    icon: Siren,
    title: 'Agility',
    body: 'Faster execution and brand-by-brand market responsiveness across channels.',
  },
  {
    icon: Globe,
    title: 'Broader Reach',
    body: 'Stronger access across institutional, retail, hospital, clinic and pharmacy segments.',
  },
]

// ## Partnerships & Collaboration -------------------------------------------------------
// Partnerships & Collaboration — descriptive positioning copy drafted from the brief.
// Distinct from whySentinelCards above: that section explains Sentinel's operating
// philosophy, this one lists the concrete partner/technology relationships that support it.
export const partnershipTracks: PartnershipTrack[] = [
  {
    title: 'Technology & Digital Infrastructure',
    icon: Cpu,
    items: [
      'Enterprise and procurement platform integrations',
      'Digital cold-chain monitoring and temperature tracking',
      'Track-and-trace and serialisation systems',
      'Data and analytics tooling for demand and inventory visibility',
    ],
  },
  {
    title: 'Supply Chain & Trade Alliances',
    icon: Ship,
    items: [
      'Alliances with leading global and regional manufacturers',
      'Global logistics and freight-forwarding partners',
      'Trade-finance and banking relationships supporting cross-border execution',
      'Regulatory, quality-assurance and distribution partners',
    ],
  },
]

// ## Leadership Team ----------------------------------------------------------------
// [PLACEHOLDER — awaiting client] Leadership Team. Replace name, designation, bio and
// photoUrl for each entry with real details before this section ships. Do not publish
// with isPlaceholder: true left on any entry.
export const leadershipTeam: LeadershipMember[] = [
  {
    name: '[PLACEHOLDER — awaiting client]',
    designation: '[PLACEHOLDER — awaiting client]',
    bio: '[PLACEHOLDER — awaiting client] Leadership biography to be supplied by Sentinel Medical Solutions.',
    photoUrl: '/placeholders/leadership-1.jpg',
    isPlaceholder: true,
  },
  {
    name: '[PLACEHOLDER — awaiting client]',
    designation: '[PLACEHOLDER — awaiting client]',
    bio: '[PLACEHOLDER — awaiting client] Leadership biography to be supplied by Sentinel Medical Solutions.',
    photoUrl: '/placeholders/leadership-2.jpg',
    isPlaceholder: true,
  },
  {
    name: '[PLACEHOLDER — awaiting client]',
    designation: '[PLACEHOLDER — awaiting client]',
    bio: '[PLACEHOLDER — awaiting client] Leadership biography to be supplied by Sentinel Medical Solutions.',
    photoUrl: '/placeholders/leadership-3.jpg',
    isPlaceholder: true,
  },
]

// ## Advisory Board -------------------------------------------------------------------
// [PLACEHOLDER — awaiting client] Advisory Board. Same rule as leadershipTeam above —
// replace fully before launch, do not ship with isPlaceholder: true.
export const advisoryBoard: AdvisoryBoardMember[] = [
  {
    name: '[PLACEHOLDER — awaiting client]',
    background: '[PLACEHOLDER — awaiting client] Advisory background and credentials to be supplied by Sentinel Medical Solutions.',
    photoUrl: '/placeholders/advisory-1.jpg',
    isPlaceholder: true,
  },
  {
    name: '[PLACEHOLDER — awaiting client]',
    background: '[PLACEHOLDER — awaiting client] Advisory background and credentials to be supplied by Sentinel Medical Solutions.',
    photoUrl: '/placeholders/advisory-2.jpg',
    isPlaceholder: true,
  },
]

// ## Our Clients ----------------------------------------------------------------------
// [PLACEHOLDER — awaiting client] Client logos. logoUrl paths are placeholders — swap for
// real logo assets. relationshipDescriptor is intentionally left unset: relationship
// language must be approved by each client before it's published (see brief 1.2).
export const clients: Client[] = [
  { name: 'IHC', logoUrl: '/placeholders/client-ihc.svg' },
  { name: 'Sirius Holding', logoUrl: '/placeholders/client-sirius-holding.svg' },
  { name: 'Gemcorp', logoUrl: '/placeholders/client-gemcorp.svg' },
  { name: 'Imbono', logoUrl: '/placeholders/client-imbono.svg' },
]

// ## Contact ----------------------------------------------------------------------------
// ⚠️ NEEDS CONTENT: regional office addresses/contacts must come from the client.
// City/country anchors below are drawn from existing verified site copy (Kizad warehouse,
// UAE + India operating backbone); the address specifics are placeholders only.
export const regionalOffices: RegionalOffice[] = [
  {
    region: 'United Arab Emirates',
    isHQ: true,
    addressLine: '[PLACEHOLDER — awaiting client] Headquarters address, Abu Dhabi / Kizad, UAE',
    isPlaceholder: true,
  },
  {
    region: 'India',
    addressLine: '[PLACEHOLDER — awaiting client] Sourcing & operations office address, India',
    isPlaceholder: true,
  },
]

export const enquiryTypes: string[] = ['Buyer', 'Partner', 'Investor', 'Tender / Procurement', 'Other']
