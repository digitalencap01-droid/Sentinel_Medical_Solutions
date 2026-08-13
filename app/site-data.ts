export type SiteCard = {
  title: string;
  text: string;
  href?: string;
  label?: string;
};

export type SiteSection = {
  eyebrow?: string;
  title: string;
  body?: string[];
  bullets?: string[];
  cards?: SiteCard[];
  tone?: "light" | "navy" | "warm";
};

export type SitePageData = {
  path: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroCtaLabel?: string;
  image: string;
  imageAlt: string;
  showImageCaption?: boolean;
  sections: SiteSection[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel?: string;
};

const images = {
  globalHealth: "/images/external/global-healthcare.jpg",
  laboratory: "/images/external/laboratory.jpg",
  manufacturing: "/images/external/manufacturing.jpg",
  logistics: "/images/external/logistics.jpg",
  hospital: "/images/external/hospital.jpg",
  team: "/images/external/team.jpg",
  medicine: "/images/external/medicine.jpg",
  uae: "/images/external/uae.jpg",
  planning: "/images/external/planning.jpg",
  cargo: "/images/external/cargo.jpg",
};

export const pages: Record<string, SitePageData> = {
  "/who-we-are": {
    path: "/who-we-are",
    navLabel: "Who We Are",
    eyebrow: "Who we are",
    title: "A UAE-headquartered healthcare partner built for market execution.",
    intro:
      "Sentinel connects healthcare product companies, medical equipment and supply businesses, wellness brands, healthcare providers and institutional buyers through an integrated model spanning sourcing, market access, distribution, supply coordination and commercial activation. From our UAE base, we bring international capabilities and local market requirements together—turning healthcare opportunities into structured, accountable and sustainable execution.",
    image: "/images/who-we-are-team.png",
    imageAlt:
      "A diverse team bringing their hands together in the warm evening light.",
    sections: [
      {
        eyebrow: "Sentinel at a glance",
        title: "Built in the UAE. Connected across markets.",
        cards: [
          {
            label: "01",
            title: "UAE Headquartered",
            text: "Commercial governance, partner coordination and regional execution managed from the UAE.",
          },
          {
            label: "02",
            title: "Globally Connected",
            text: "Access to healthcare product companies, equipment and supply businesses, technical specialists and market partners across established international healthcare hubs.",
          },
          {
            label: "03",
            title: "Market-Execution Focused",
            text: "Practical capabilities across sourcing, market access, institutional supply, distribution and commercial activation.",
          },
          {
            label: "04",
            title: "Exclusive Wellness Distribution",
            text: "Exclusive UAE representation and distribution for selected premium wellness products and brands.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "Our role",
        title: "Turning healthcare opportunity into market impact.",
        body: [
          "Sentinel acts as the coordinating commercial partner connecting healthcare product companies, medical equipment and supply businesses, wellness brands, care providers, distributors and institutional buyers.",
          "For each opportunity, we assess market fit, shape the commercial model, engage the right partners and coordinate market access, supply, distribution and adoption—turning viable opportunities into sustainable market outcomes.",
        ],
      },
      {
        eyebrow: "Our operating model",
        title: "From opportunity to sustained market adoption.",
        cards: [
          {
            label: "01",
            title: "Define",
            text: "Clarify the product, target customer, priority market, commercial objective and measures of success.",
          },
          {
            label: "02",
            title: "Source",
            text: "Identify and qualify suitable healthcare products, medical equipment, supplies, technologies and technical partners.",
          },
          {
            label: "03",
            title: "Access",
            text: "Coordinate product documentation, regulatory requirements and the appropriate route to market.",
          },
          {
            label: "04",
            title: "Supply",
            text: "Align procurement, logistics, distribution, fulfilment and long-term supply continuity.",
          },
          {
            label: "05",
            title: "Activate",
            text: "Build channel readiness, customer engagement and commercial adoption within the market.",
          },
        ],
        tone: "navy",
      },
      {
        eyebrow: "How we operate",
        title: "Practical principles that guide every mandate.",
        cards: [
          {
            title: "Evidence Before Commitment",
            text: "We assess product quality, documentation, market demand and commercial viability before recommending a course of action.",
          },
          {
            title: "Fit Before Convenience",
            text: "We select products, partners and market pathways based on suitability—not simply immediate availability.",
          },
          {
            title: "Clear Ownership",
            text: "We establish responsibilities, economics, milestones and decision rights from the beginning.",
          },
          {
            title: "Continuity by Design",
            text: "We consider replenishment, channel development and post-launch requirements before entering the market.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "Our position",
        title: "Coordinated from the UAE. Executed through local market capability.",
        body: [
          "The UAE provides Sentinel with a strategic base for connecting international healthcare capabilities with opportunities across the GCC, Africa and other priority markets.",
          "Our role extends beyond making introductions. We bring healthcare product companies, equipment and supply businesses, technical specialists, distributors, care providers and institutional partners together around clearly defined commercial objectives.",
          "Each mandate is structured around the product, regulatory environment, customer requirement and capabilities of the participating partners.",
        ],
      },
      {
        eyebrow: "Our difference",
        title: "Commercially grounded. Partner-enabled. Built for continuity.",
        body: [
          "Healthcare markets differ significantly. Sentinel does not force every opportunity into the same structure.",
          "We design each engagement around the realities of the product and market—balancing regulatory requirements, commercial viability, partner capability and long-term supply continuity.",
        ],
        tone: "navy",
      },
      {
        eyebrow: "Leadership",
        title: "Experience that strengthens execution.",
        body: [
          "Sentinel's leadership brings together experience across healthcare, international business, institutional relationships, operations and commercial development.",
          "This collective perspective enables disciplined decision-making, stronger partnerships and practical execution across complex markets.",
        ],
        cards: [
          {
            title: "Meet our leadership",
            text: "Explore the people and perspectives guiding Sentinel's direction and execution.",
            href: "/leadership",
          },
        ],
      },
    ],
    ctaTitle: "Bring us the opportunity. We will help define the pathway.",
    ctaText:
      "Whether you are entering the UAE, expanding into new markets, seeking a distribution partner or strengthening an existing healthcare operation, Sentinel can help assess the opportunity and build a practical route forward.",
  },
  "/capabilities": {
    path: "/capabilities",
    navLabel: "Capabilities",
    eyebrow: "What we do",
    title: "Capabilities designed to work together.",
    intro:
      "Healthcare products do not reach institutions through a single service. Sentinel connects the sourcing, market, supply and commercial work required to create a viable route.",
    image: "/images/capabilities-overview-hero.png",
    imageAlt:
      "Two mountaineers working together to advance across a demanding alpine route.",
    sections: [
      {
        eyebrow: "Integrated execution",
        title: "Choose the capability. Keep the full pathway in view.",
        body: [
          "A mandate may begin with sourcing, registration, distribution or market development. Sentinel assesses how that starting point affects the entire pathway so that one workstream does not create a problem in another.",
        ],
        cards: [
          {
            label: "01",
            title: "Global sourcing & procurement",
            text: "Requirement definition, supplier identification, technical comparison, documentation coordination and procurement support across qualified global hubs.",
            href: "/capabilities/global-sourcing",
          },
          {
            label: "02",
            title: "Regulatory & market access",
            text: "Market-entry assessment, registration-pathway coordination, stakeholder mapping and channel-readiness support.",
            href: "/capabilities/market-access",
          },
          {
            label: "03",
            title: "Distribution & supply coordination",
            text: "Supply architecture, qualified logistics coordination, inventory planning and healthcare-channel alignment.",
            href: "/capabilities/distribution",
          },
          {
            label: "04",
            title: "Commercial & clinical activation",
            text: "Institutional account planning, clinical stakeholder strategy, channel activation and launch-performance coordination.",
            href: "/capabilities/commercial-activation",
          },
          {
            label: "05",
            title: "Strategic healthcare platforms",
            text: "Partnership design where products, technology, clinical capability and local infrastructure must work as one.",
            href: "/partnerships",
          },
        ],
      },
      {
        eyebrow: "One operating view",
        title: "The pathway is only as strong as its weakest handoff.",
        body: [
          "A lower unit price cannot compensate for unsuitable documentation. Registration cannot compensate for a weak channel. A launch cannot compensate for unreliable replenishment. Sentinel keeps those dependencies visible from the start.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Tell us what you need to execute.",
    ctaText:
      "We will help define the capability, partners and decisions required to move it.",
  },
  "/capabilities/global-sourcing": {
    path: "/capabilities/global-sourcing",
    navLabel: "Global Sourcing",
    eyebrow: "Global sourcing & procurement",
    title: "Source globally. Select deliberately.",
    intro:
      "We identify supply options around the required quality, regulatory pathway, economics, capacity and continuity profile—not around a predetermined country or catalogue.",
    image: "/images/global-sourcing-hero.png",
    imageAlt:
      "A connected global healthcare supply chain spanning manufacturers, logistics, regulation, distribution, healthcare providers and patient access.",
    sections: [
      {
        eyebrow: "Requirement-led sourcing",
        title: "Established hubs. Different strengths.",
        body: [
          "Europe offers deep capability in innovative, specialist and quality-intensive products. India combines pharmaceutical scale with broad healthcare manufacturing. Southeast Asia provides diversified manufacturing and competitive medical supply capability. East Asia brings strength in advanced devices, diagnostics, precision production and healthcare technology.",
          "Sentinel evaluates those ecosystems against the actual requirement and coordinates the commercial and documentation work needed to move a qualified option forward.",
        ],
        cards: [
          {
            title: "Europe",
            text: "Innovative pharmaceuticals, specialty products, diagnostics, MedTech and quality-intensive manufacturing.",
          },
          {
            title: "India",
            text: "Scaled pharmaceutical, consumable, device and healthcare manufacturing with broad technical capability.",
          },
          {
            title: "Southeast Asia",
            text: "Diversified manufacturing, medical consumables, devices and emerging healthcare technologies.",
          },
          {
            title: "East Asia",
            text: "Advanced medical technology, diagnostics, precision production and specialist innovation.",
          },
          {
            title: "Other qualified hubs",
            text: "Requirement-led sourcing wherever quality, registration, economics and continuity are aligned.",
          },
        ],
      },
      {
        eyebrow: "Our scope",
        title: "From requirement definition to supply decision.",
        bullets: [
          "Requirement and specification definition",
          "Global supplier and manufacturer identification",
          "Initial capability and documentation screening",
          "Technical and commercial comparison",
          "Sample, quotation and dossier coordination",
          "Capacity, lead-time and continuity assessment",
          "Commercial term and procurement support",
          "Supplier communication and governance",
        ],
        tone: "warm",
      },
      {
        eyebrow: "Evaluation",
        title: "Five tests before recommending a source.",
        cards: [
          {
            title: "Product fit",
            text: "Does it meet the intended use, specification and institutional requirement?",
          },
          {
            title: "Regulatory fit",
            text: "Is the classification, documentation and evidence suitable for the target pathway?",
          },
          {
            title: "Manufacturing fit",
            text: "Can the source demonstrate capability, consistency, traceability and appropriate quality controls?",
          },
          {
            title: "Commercial fit",
            text: "Do price, order quantities, terms and channel economics support a viable model?",
          },
          {
            title: "Continuity fit",
            text: "Can capacity, lead times, shelf life, packaging and logistics support ongoing supply?",
          },
        ],
      },
    ],
    ctaTitle: "Bring us the requirement—not only a product name.",
    ctaText:
      "Share the specification, target market, volume and timing. We will help assess the credible options.",
  },
  "/capabilities/market-access": {
    path: "/capabilities/market-access",
    navLabel: "Market Access",
    eyebrow: "Regulatory & market access",
    title: "A clear route from regulatory readiness to commercial access.",
    intro:
      "Sentinel brings regulatory preparation, local operating requirements, stakeholder access, channel strategy and launch readiness into one structured market-entry plan. We work with healthcare product companies, medical equipment and supply businesses, diagnostics providers and wellness brands to establish a credible route into each target market.",
    heroCtaLabel: "Discuss a market-entry requirement",
    image: "/images/regulatory-market-access-hero.png",
    imageAlt:
      "A clear route through a complex maze, representing structured regulatory and market access.",
    sections: [
      {
        eyebrow: "An integrated approach",
        title: "Regulatory readiness and commercial readiness must move together.",
        body: [
          "Successful market entry requires formal requirements and commercial realities to be addressed together. Product classification, documentation, authorised local representation, buyer expectations, pricing, distribution and supply continuity must all support the same market objective.",
          "Sentinel assesses these dependencies early, defines the required workstreams and coordinates qualified regulatory, commercial and market partners through a clear execution structure.",
        ],
      },
      {
        eyebrow: "What we coordinate",
        title: "The critical elements of market entry.",
        cards: [
          {
            title: "Market Assessment",
            text: "Evaluate the market opportunity, target customers, competitive environment and commercial potential before significant resources are committed.",
          },
          {
            title: "Regulatory Pathway",
            text: "Review product classification, applicable requirements, documentation status and the appropriate route for the target jurisdiction.",
          },
          {
            title: "Documentation Readiness",
            text: "Identify gaps across technical files, certifications, product information, evidence and market-specific submission requirements.",
          },
          {
            title: "Local Operating Structure",
            text: "Define the appropriate roles for authorised representation, registration, importation, distribution and in-market accountability.",
          },
          {
            title: "Stakeholder and Channel Access",
            text: "Map institutional buyers, healthcare providers, procurement channels, distributors and other stakeholders that influence market adoption.",
          },
          {
            title: "Commercial and Launch Planning",
            text: "Assess pricing, partner economics, channel requirements, supply readiness and the practical actions required for launch.",
          },
        ],
      },
      {
        eyebrow: "The market-access test",
        title: "Five conditions for sustainable market entry.",
        cards: [
          {
            title: "Regulatory Clarity",
            text: "A defined classification, documentation requirement and approval route appropriate to the product and jurisdiction.",
          },
          {
            title: "Local Accountability",
            text: "Qualified and authorised parties with clearly assigned regulatory, importation, distribution and post-market responsibilities.",
          },
          {
            title: "Market Relevance",
            text: "A credible value proposition aligned with the needs of buyers, healthcare stakeholders and the intended channel.",
          },
          {
            title: "Commercial Viability",
            text: "Pricing, margins, volumes and partner economics that can support a sustainable market position.",
          },
          {
            title: "Operational Continuity",
            text: "A dependable plan for supply, traceability, replenishment, issue escalation and post-launch support.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "Our process",
        title: "A disciplined route from assessment to activation.",
        cards: [
          {
            label: "01",
            title: "Assess",
            text: "Review the product, available evidence, documentation, market demand, regulatory pathway and commercial fit.",
          },
          {
            label: "02",
            title: "Structure",
            text: "Define the route to market, participating parties, responsibilities, documentation gaps, economics and delivery milestones.",
          },
          {
            label: "03",
            title: "Coordinate",
            text: "Bring together the authorised local parties, regulatory specialists, commercial partners and supply capabilities required to proceed.",
          },
          {
            label: "04",
            title: "Activate",
            text: "Prepare the channel, institutional stakeholders, supply arrangements and post-market responsibilities for a controlled market launch.",
          },
        ],
      },
      {
        eyebrow: "Responsible execution",
        title: "Local expertise. Clear accountability.",
        body: [
          "Regulatory submissions, legal determinations and licensed activities are undertaken by appropriately qualified and authorised entities in each jurisdiction.",
          "Sentinel structures and coordinates the overall process—aligning the regulatory, commercial and operational decisions required to move an opportunity forward responsibly.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Build the right route to market.",
    ctaText:
      "Share the product category, target market, current documentation status and commercial objective. We will help identify the critical requirements, responsible partners and practical next steps.",
    ctaLabel: "Discuss your market-entry plan",
  },
  "/capabilities/distribution": {
    path: "/capabilities/distribution",
    navLabel: "Distribution",
    eyebrow: "Distribution & supply coordination",
    title: "Supply reliability is designed before delivery.",
    intro:
      "Sentinel aligns product requirements, inventory decisions, logistics partners and healthcare channels so that supply can move with greater control and continuity.",
    image: "/images/distribution-supply-hero.png",
    imageAlt:
      "A securely fastened mooring line representing dependable distribution and supply continuity.",
    sections: [
      {
        eyebrow: "Product-specific design",
        title: "The supply model must fit the product and the market.",
        body: [
          "Pharmaceuticals, diagnostics, devices and consumables do not share one distribution requirement. Temperature, shelf life, batch traceability, installation, training, service support and institutional delivery conditions can all change the operating model.",
          "Sentinel develops the supply pathway around those conditions and coordinates qualified partners where licensed or specialist infrastructure is required.",
        ],
        bullets: [
          "Product-handling and channel assessment",
          "Warehousing and logistics partner coordination",
          "Temperature-controlled pathway planning where required",
          "Import and documentation workflow coordination",
          "Inventory and replenishment planning",
          "Institutional order and fulfilment coordination",
          "Distributor and sub-distributor model design",
          "Delivery-performance and exception monitoring",
        ],
      },
      {
        eyebrow: "Control points",
        title: "What we keep visible.",
        cards: [
          {
            title: "Product integrity",
            text: "Handling conditions and responsibilities aligned to product requirements.",
          },
          {
            title: "Documentation",
            text: "Accurate, accessible and coordinated across source, shipment and destination.",
          },
          {
            title: "Inventory",
            text: "Visibility over stock, demand, replenishment and potential interruptions.",
          },
          {
            title: "Delivery",
            text: "Defined service expectations, issue escalation and channel accountability.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "Operating note",
        title: "Infrastructure claims must follow the licence.",
        body: [
          "Specific warehousing, transport, import and distribution activities are performed by Sentinel or qualified partners subject to product classification, licensing and local regulatory requirements.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Design a supply pathway.",
    ctaText:
      "Tell us the product, handling requirements, destination and expected demand.",
  },
  "/capabilities/commercial-activation": {
    path: "/capabilities/commercial-activation",
    navLabel: "Commercial Activation",
    eyebrow: "Commercial & clinical activation",
    title: "Availability is not adoption.",
    intro:
      "We help translate an approved and available healthcare product into a focused market-development plan across institutions, clinical stakeholders and channels.",
    image: "/images/commercial-clinical-activation-hero.png",
    imageAlt:
      "A health investment jar and stethoscope representing commercially grounded healthcare activation.",
    sections: [
      {
        eyebrow: "Informed market development",
        title: "Build demand through relevance—not noise.",
        body: [
          "Healthcare products are adopted when the right stakeholders understand the clinical purpose, operational fit, evidence and commercial value. That process requires disciplined account selection and credible engagement.",
          "Sentinel coordinates the market-development work around the product, its approved claims, the buyer pathway and the responsibilities of each partner.",
        ],
        bullets: [
          "Market segmentation and account prioritisation",
          "Hospital, clinic and pharmacy channel planning",
          "Institutional procurement engagement support",
          "KOL and clinical stakeholder strategy",
          "Formulary and product-evaluation coordination",
          "Approved product and value-story localisation",
          "Sales-force and channel-activation planning",
          "Launch sequencing and milestone management",
          "Commercial performance and pipeline governance",
        ],
      },
      {
        eyebrow: "Activation principle",
        title: "Clinical credibility and commercial execution must reinforce each other.",
        body: [
          "Promotional activity that moves faster than evidence or approval creates risk rather than value. All product communication and stakeholder engagement must remain within approved claims, local codes and applicable healthcare marketing requirements.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Plan a disciplined launch.",
    ctaText:
      "Align institutions, channels, clinical stakeholders and supply around one executable plan.",
  },
  "/what-we-supply": {
    path: "/what-we-supply",
    navLabel: "What We Supply",
    eyebrow: "Portfolio scope",
    title: "A healthcare portfolio shaped by institutional need.",
    intro:
      "Sentinel develops supply portfolios around provider requirements, market pathways and approved partner mandates—not around catalogue volume.",
    image: images.medicine,
    imageAlt:
      "Healthcare products arranged in a clean professional environment.",
    sections: [
      {
        eyebrow: "Portfolio categories",
        title: "Broad enough to solve. Focused enough to execute.",
        body: [
          "These categories describe Sentinel's supply and partnership scope. They do not mean that every product is registered, stocked or available in every market. Availability is confirmed against the target jurisdiction and requirement.",
        ],
        cards: [
          {
            title: "Pharmaceuticals & specialty therapies",
            text: "Branded, generic and specialty opportunities assessed against registration, clinical demand, channel fit and partner mandate.",
          },
          {
            title: "Hospital & clinical consumables",
            text: "Recurring products used across wards, outpatient settings, procedures, infection control and routine operations.",
          },
          {
            title: "Diagnostics & laboratory solutions",
            text: "Instruments, tests, reagents, point-of-care solutions and related workflow requirements.",
          },
          {
            title: "Radiology & imaging",
            text: "Imaging equipment, supporting technologies, accessories and lifecycle requirements.",
          },
          {
            title: "Critical & respiratory care",
            text: "Monitoring, ventilation, oxygen therapy, infusion and high-dependency technologies.",
          },
          {
            title: "Surgical platforms",
            text: "Procedure-related devices, instruments, consumables and operating-room solutions.",
          },
          {
            title: "Rehabilitation & mobility",
            text: "Products and technologies supporting recovery, movement and independence.",
          },
          {
            title: "Connected care",
            text: "Devices and platforms extending monitoring and care coordination beyond traditional settings.",
          },
          {
            title: "Healthcare informatics & AI",
            text: "Solutions supporting clinical workflow, operational insight and connected delivery.",
          },
          {
            title: "Capital equipment support",
            text: "Sourcing, delivery, installation coordination, training and lifecycle planning.",
          },
        ],
      },
      {
        eyebrow: "Requirement brief",
        title: "The information that helps us source properly.",
        bullets: [
          "Intended clinical or operational use",
          "Technical specification",
          "Target market and buyer",
          "Expected volume",
          "Required timing",
          "Registration or approval status",
          "Service, training or installation requirements",
        ],
        tone: "warm",
      },
    ],
    ctaTitle: "Have a specific requirement?",
    ctaText:
      "Share the intended use, specification, volume, target market and timing.",
  },
  "/who-we-serve": {
    path: "/who-we-serve",
    navLabel: "Who We Serve",
    eyebrow: "Who we serve",
    title: "One partner across the healthcare value chain.",
    intro:
      "Sentinel works with healthcare manufacturers, wellness brands, hospitals, clinics, pharmacies, institutional buyers and market partners. We coordinate market access, supply, distribution and commercial activation through one accountable operating model.",
    image: "/images/who-we-serve-global-partnership.webp",
    imageAlt:
      "Hands holding a globe, representing globally connected healthcare access.",
    sections: [
      {
        eyebrow: "Manufacturers",
        title: "Healthcare manufacturers",
        body: [
          "For pharmaceutical, MedTech, diagnostic, digital-health and healthcare manufacturers seeking entry, development or institutional access in selected markets.",
        ],
        bullets: [
          "Market and partner assessment",
          "Regulatory and access-pathway coordination",
          "Commercial model and channel design",
          "Institutional stakeholder engagement",
          "Launch and supply coordination",
          "Performance governance",
        ],
      },
      {
        eyebrow: "Providers",
        title: "Hospitals, health systems and care providers",
        body: [
          "For healthcare organisations seeking qualified products, alternative sources, technology partners or a more structured route to supply continuity.",
        ],
        bullets: [
          "Requirement definition",
          "Global supplier identification",
          "Technical and commercial comparison",
          "Procurement and documentation coordination",
          "Delivery and implementation planning",
        ],
        tone: "warm",
      },
      {
        eyebrow: "Institutions",
        title: "Government and institutional buyers",
        body: [
          "For public-sector entities, procurement organisations and programmes requiring structured supplier coordination and accountable healthcare fulfilment.",
        ],
        bullets: [
          "Requirement and portfolio structuring",
          "Manufacturer and supplier coordination",
          "Documentation and commercial consolidation",
          "Market-specific fulfilment design",
          "Partner governance and progress reporting",
        ],
      },
      {
        eyebrow: "Channels and partners",
        title: "Pharmacies, clinics and regional distributors",
        body: [
          "For regulated healthcare channels seeking differentiated products and consistent supply, and for capable local partners seeking manufacturer relationships, international sourcing or collaboration on institutional opportunities.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Which pathway fits your objective?",
    ctaText:
      "Tell us where you sit in the value chain and what you need the partnership to achieve.",
  },
  "/global-reach": {
    path: "/global-reach",
    navLabel: "Global Reach",
    eyebrow: "Global reach",
    title: "Global healthcare connections. Local routes to market.",
    intro:
      "From our UAE headquarters, Sentinel connects qualified international sources of healthcare products, medical equipment, diagnostics and supplies with the authorised capabilities, commercial channels and institutional relationships required in each market. We support healthcare businesses seeking structured routes into the GCC, Africa and selected international markets—bringing global reach and local market requirements into one coordinated plan.",
    heroCtaLabel: "Explore a market opportunity",
    image: "/images/global-reach-cargo-ship.png",
    imageAlt:
      "A container ship crossing open water, representing international healthcare supply and connected routes to market.",
    showImageCaption: false,
    sections: [
      {
        eyebrow: "A network designed to perform",
        title: "Global reach creates value when it works locally.",
        body: [
          "Every healthcare market has its own regulatory structure, buyer expectations, channel economics and supply requirements. Successful expansion depends on understanding these differences and building the right operating model around them.",
          "Sentinel evaluates each opportunity on its own merits, then aligns the products, partners, responsibilities and route to market around a clearly defined commercial objective.",
        ],
      },
      {
        eyebrow: "Our geographic model",
        title: "Coordinated from the UAE. Connected internationally. Executed locally.",
        cards: [
          {
            title: "UAE Headquarters",
            text: "Sentinel's commercial governance, partner coordination and regional decision-making are managed from the UAE—providing a strategic base for opportunities across the GCC, Africa and selected international markets.",
          },
          {
            title: "Global Sourcing Network",
            text: "We access qualified healthcare products, medical equipment, diagnostics, supplies and specialist capabilities from established sourcing markets across Europe, India, East Asia, Southeast Asia and other approved healthcare hubs.",
          },
          {
            title: "GCC Market Pathways",
            text: "Across the GCC, Sentinel helps structure market-specific pathways that bring together regulatory requirements, authorised local capabilities, institutional access, distribution and commercial activation.",
          },
          {
            title: "Africa Growth Markets",
            text: "In selected African markets, we work with local stakeholders to evaluate institutional demand, identify suitable supply and distribution models, and build commercially viable healthcare partnerships.",
          },
          {
            title: "Selected International Opportunities",
            text: "Beyond our core regions, opportunities are assessed individually according to market relevance, partner capability, regulatory feasibility and long-term commercial potential.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "How our reach works",
        title: "One coordinated model across borders.",
        cards: [
          {
            label: "01",
            title: "Assess the Opportunity",
            text: "Evaluate the product category, target customers, competitive environment, regulatory pathway and commercial potential.",
          },
          {
            label: "02",
            title: "Define the Market Structure",
            text: "Establish the appropriate route to market, participating parties, responsibilities, economics and execution milestones.",
          },
          {
            label: "03",
            title: "Connect the Right Capabilities",
            text: "Bring together qualified sources, technical specialists, authorised local parties, distributors, healthcare providers and institutional stakeholders.",
          },
          {
            label: "04",
            title: "Coordinate Market Activation",
            text: "Align product readiness, supply, distribution, stakeholder engagement and commercial launch around one execution plan.",
          },
          {
            label: "05",
            title: "Build for Continuity",
            text: "Plan for traceability, replenishment, channel development, post-market responsibilities and sustainable long-term growth.",
          },
        ],
      },
      {
        eyebrow: "What Sentinel brings",
        title: "A clearer pathway between global supply and local demand.",
        cards: [
          {
            title: "Qualified Global Supply",
            text: "Access to healthcare products, equipment, diagnostics, supplies and technical capabilities appropriate to the target market.",
          },
          {
            title: "Local Market Intelligence",
            text: "A practical understanding of regulatory requirements, customer priorities, procurement structures and channel dynamics.",
          },
          {
            title: "Connected Execution",
            text: "Coordination across market access, supply, distribution, institutional engagement and commercial activation.",
          },
          {
            title: "Accountable Market Structure",
            text: "Clearly defined roles, responsibilities, economics, milestones and decision rights for every participating partner.",
          },
        ],
        tone: "warm",
      },
      {
        eyebrow: "Responsible local execution",
        title: "The right capability and authority in every market.",
        body: [
          "Regulatory submissions, product registrations, importation, distribution and other licensed activities are undertaken by appropriately qualified and authorised entities within each jurisdiction.",
          "Sentinel coordinates the wider commercial and operational pathway—ensuring that local responsibilities, international capabilities and market objectives remain properly aligned.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Take the right healthcare opportunity into the right market.",
    ctaText:
      "Whether you are seeking qualified international supply, entering the UAE or GCC, developing an African market opportunity or evaluating a new distribution pathway, Sentinel can help define the structure required to move forward. Share your product category, target geography and commercial objective. We will assess the opportunity and identify the appropriate market pathway, capabilities and next steps.",
    ctaLabel: "Discuss a market opportunity",
  },
  "/how-we-work": {
    path: "/how-we-work",
    navLabel: "How We Work",
    eyebrow: "Our execution model",
    title: "Define the pathway before accelerating it.",
    intro:
      "Sentinel uses a stage-based operating model to test the opportunity, clarify responsibilities and align market, supply and commercial execution.",
    image: images.planning,
    imageAlt:
      "Professionals reviewing a structured healthcare execution plan.",
    sections: [
      {
        eyebrow: "The pathway",
        title: "Six stages. One accountable view.",
        cards: [
          {
            label: "01",
            title: "Define",
            text: "Clarify the product or requirement, target market, buyer, objective, timing and decision criteria.",
          },
          {
            label: "02",
            title: "Assess",
            text: "Review demand, product fit, source capability, regulatory pathway, economics and principal risks.",
          },
          {
            label: "03",
            title: "Structure",
            text: "Define the partner model, roles, rights, economics, milestones, governance and resources.",
          },
          {
            label: "04",
            title: "Activate",
            text: "Coordinate documentation, partners, institutions, sourcing, commercial preparation and supply readiness.",
          },
          {
            label: "05",
            title: "Execute",
            text: "Manage agreed workstreams, decisions, dependencies, deliveries and market activities.",
          },
          {
            label: "06",
            title: "Govern",
            text: "Review performance, supply continuity, partner delivery and the changes required to scale.",
          },
        ],
      },
      {
        eyebrow: "Serious partnerships",
        title: "What we require from the other side.",
        bullets: [
          "Accurate product and company information",
          "Evidence supporting quality and claims",
          "Transparent economics and decision rights",
          "Clear regulatory and supply responsibilities",
          "Timely access to responsible decision-makers",
          "Willingness to work through defined milestones",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Start with a defined opportunity.",
    ctaText:
      "A clear requirement allows us to assess faster and avoid performative activity.",
  },
  "/partnerships": {
    path: "/partnerships",
    navLabel: "Partnerships",
    eyebrow: "Strategic partnerships",
    title: "The right partnership is an operating model.",
    intro:
      "Sentinel structures collaborations around complementary capability, clear responsibility and a shared route to healthcare value.",
    image: images.team,
    imageAlt:
      "International professionals discussing a strategic healthcare partnership.",
    sections: [
      {
        eyebrow: "Partnership models",
        title: "Where collaboration creates value.",
        cards: [
          {
            title: "Manufacturer market entry",
            text: "A structured route through regulatory, distribution, institutional and commercial coordination.",
          },
          {
            title: "Institutional supply",
            text: "Access to multiple qualified manufacturers through one coordinated commercial and execution interface.",
          },
          {
            title: "Regional distribution alliances",
            text: "Local market infrastructure combined with global sourcing, manufacturer access or institutional relationships.",
          },
          {
            title: "Technology and clinical platforms",
            text: "Integrated models combining healthcare technology, clinical capability, products and local delivery.",
          },
          {
            title: "Long-term portfolio development",
            text: "Building a focused category or therapeutic portfolio rather than pursuing isolated transactions.",
          },
        ],
      },
      {
        eyebrow: "Partnership discipline",
        title: "What must be made explicit.",
        bullets: [
          "The healthcare problem being addressed",
          "The contribution of each partner",
          "Market and product rights",
          "Regulatory and compliance responsibilities",
          "Commercial economics and investment",
          "Performance milestones",
          "Governance and escalation",
          "Conditions for scale, review or exit",
        ],
        tone: "warm",
      },
    ],
    ctaTitle: "Propose a partnership.",
    ctaText:
      "Tell us what each party contributes and which healthcare outcome the model is meant to create.",
  },
  "/leadership": {
    path: "/leadership",
    navLabel: "Leadership",
    eyebrow: "Leadership",
    title: "Experience across the decisions healthcare depends on.",
    intro:
      "Sentinel's leadership brings together healthcare strategy, finance, provider operations, procurement, supply chain and market development.",
    image: "/images/leadership-hero.webp",
    imageAlt:
      "Healthcare leader addressing professionals in an auditorium.",
    sections: [
      {
        eyebrow: "Leadership team",
        title: "One view across the full pathway.",
        body: [
          "Strategic, financial, operational, procurement and market decisions are considered together so that healthcare opportunities are structured for execution rather than presentation.",
        ],
        cards: [
          {
            title: "H.E. Younis Haji Khoori",
            text: "Brings institutional perspective, strategic discipline and governance experience focused on long-term value and accountable decision-making.",
          },
          {
            title: "Ravinder Sharma",
            text: "An accomplished business leader and healthcare strategist with international experience building, transforming and scaling complex businesses.",
          },
          {
            title: "John Sunil",
            text: "An experienced healthcare leader and strategist whose perspective spans integrated care delivery, organisational growth and regional market development.",
          },
          {
            title: "Vineet Pant",
            text: "A disciplined strategist with experience across healthcare finance, investment evaluation and governance, bringing commercial rigour and a long-term value perspective.",
          },
        ],
      },
    ],
    ctaTitle: "Connect with Sentinel.",
    ctaText:
      "Reach the team responsible for healthcare strategy, sourcing and market execution.",
  },
  "/insights": {
    path: "/insights",
    navLabel: "Insights",
    eyebrow: "Insights",
    title: "Practical thinking for complex healthcare markets.",
    intro:
      "Perspectives on the decisions that shape market access, healthcare supply, institutional procurement and long-term partnership performance.",
    image: "/images/insights-hero.png",
    imageAlt:
      "A healthcare market leader presenting performance data and international market insights.",
    sections: [
      {
        eyebrow: "Perspectives",
        title: "Questions worth answering before execution begins.",
        cards: [
          {
            label: "Market access",
            title: "Market entry is an operating model—not a registration milestone",
            text: "Registration answers whether a product may enter. It does not answer who will buy it, how it will move or whether the economics can survive the channel.",
          },
          {
            label: "Supply chain",
            title: "Why the lowest unit price can create the highest total cost",
            text: "Lead-time variability, documentation failure, shelf life, service gaps and weak replenishment can erase an apparent procurement saving.",
          },
          {
            label: "Global sourcing",
            title: "Choosing a sourcing market by capability—not habit",
            text: "Europe, India, Southeast Asia and East Asia bring different strengths. The right decision begins with the requirement.",
          },
          {
            label: "Partnerships",
            title: "Questions to answer before granting market exclusivity",
            text: "Exclusivity without performance measures, investment obligations and review rights can freeze a market instead of developing it.",
          },
        ],
      },
      {
        eyebrow: "Editorial note",
        title: "Publish substance, not empty content cards.",
        body: [
          "The public insights page should launch only when at least two complete, approved articles are available. The prototype shows the proposed editorial direction without fabricating publication dates.",
        ],
        tone: "navy",
      },
    ],
    ctaTitle: "Discuss a market or supply-chain question.",
    ctaText:
      "We welcome serious conversations where commercial opportunity and healthcare execution intersect.",
  },
};

export { images };
