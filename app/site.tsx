/* eslint-disable @next/next/no-html-link-for-pages */
import { pages, type SitePageData, type SiteSection } from "./site-data";

const capabilityLinks = [
  { href: "/capabilities", label: "Capabilities overview" },
  { href: "/capabilities/global-sourcing", label: "Global sourcing & procurement" },
  { href: "/capabilities/market-access", label: "Regulatory & market access" },
  { href: "/capabilities/distribution", label: "Distribution & supply coordination" },
  {
    href: "/capabilities/commercial-activation",
    label: "Commercial & clinical activation",
  },
];

const primaryLinks = [
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/what-we-supply", label: "What We Supply" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/who-we-are", label: "Who We Are" },
];

const utilityLinks = [
  { href: "/insights", label: "Insights" },
  { href: "/leadership", label: "Leadership" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/contact", label: "Contact" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className={diagonal ? "arrow diagonal" : "arrow"}>
      <svg viewBox="0 0 16 16">
        <path d="M2 8h11M9 4l4 4-4 4" />
      </svg>
    </span>
  );
}

function Brand({ reverse = false }: { reverse?: boolean }) {
  return (
    <a className="brand" href="/" aria-label="Sentinel home">
      <img
        className="brand-logo"
        src={
          reverse
            ? "/images/sentinel-logo-new-reverse.svg"
            : "/images/sentinel-logo-new.svg"
        }
        alt="Sentinel"
      />
    </a>
  );
}

function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="utility">
        <div className="shell utility-inner">
          <nav className="utility-links" aria-label="Utility navigation">
            {utilityLinks.map((link) => (
              <a href={link.href} key={`${link.href}-${link.label}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <details className="nav-menu">
              <summary>What We Do</summary>
              <div className="mega-menu">
                <div>
                  <p className="menu-kicker">Integrated capabilities</p>
                  <h2>From source to system.</h2>
                  <p>
                    Five connected capabilities supporting one healthcare
                    pathway.
                  </p>
                </div>
                <div className="menu-links">
                  {capabilityLinks.map((link, index) => (
                    <a href={link.href} key={link.href}>
                      <span>0{index + 1}</span>
                      {link.label}
                      <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            </details>
            {primaryLinks
              .filter((link) => link.href !== "/what-we-supply")
              .map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
          </nav>
          <div className="header-actions">
            <form className="header-search" action="/insights" method="get">
              <label className="sr-only" htmlFor="site-search">
                Search Sentinel
              </label>
              <input id="site-search" name="q" placeholder="Search" type="search" />
              <button type="submit" aria-label="Search">
                ⌕
              </button>
            </form>
            <a className="button button-small button-outline" href="/contact">
              Partner with us
            </a>
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open menu">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="/capabilities">What We Do</a>
              {primaryLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
              <a href="/leadership">Leadership</a>
              <a href="/contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <Brand reverse />
          <p>
            A UAE-headquartered healthcare market-access, sourcing,
            distribution and execution platform connecting global capability
            with institutional demand.
          </p>
          <a className="text-link on-dark" href="mailto:info@sentinelmedical.com">
            info@sentinelmedical.com <Arrow diagonal />
          </a>
        </div>
        <div className="footer-nav">
          <div>
            <h3>Company</h3>
            <a href="/who-we-are">Who We Are</a>
            <a href="/leadership">Leadership</a>
            <a href="/global-reach">Global Reach</a>
            <a href="/insights">Insights</a>
          </div>
          <div>
            <h3>Capabilities</h3>
            <a href="/capabilities/global-sourcing">Global Sourcing</a>
            <a href="/capabilities/market-access">Market Access</a>
            <a href="/capabilities/distribution">Supply Coordination</a>
            <a href="/capabilities/commercial-activation">Market Activation</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="/who-we-serve">Who We Serve</a>
            <a href="/what-we-supply">What We Supply</a>
            <a href="/partnerships">Partnerships</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Sentinel Medical Solutions LLC. All rights reserved.</p>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Accessibility</a>
        </div>
      </div>
      <div className="shell footer-disclaimer">
        Products and services are subject to applicable regulation, licensing,
        registration, availability and formal partner mandates. Website
        information does not constitute medical advice or a product offer.
      </div>
    </footer>
  );
}

function SectionBlock({ section }: { section: SiteSection }) {
  return (
    <section className={`content-section tone-${section.tone ?? "light"}`}>
      <div className="shell">
        <div className="section-heading">
          {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
          <h2>{section.title}</h2>
        </div>
        {section.body && (
          <div className="body-copy">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        {section.bullets && (
          <ul className="check-grid">
            {section.bullets.map((bullet) => (
              <li key={bullet}>
                <span aria-hidden="true">✓</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {section.cards && (
          <div
            className={`content-card-grid ${
              section.cards.length > 4 ? "content-card-grid-wide" : ""
            }`}
          >
            {section.cards.map((card) => {
              const content = (
                <>
                  {card.label && <p className="card-label">{card.label}</p>}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.href && (
                    <span className="card-action">
                      Explore <Arrow />
                    </span>
                  )}
                </>
              );
              return card.href ? (
                <a className="content-card linked" href={card.href} key={card.title}>
                  {content}
                </a>
              ) : (
                <article className="content-card" key={card.title}>
                  {content}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function PageHero({ page }: { page: SitePageData }) {
  const pageClass = page.path.replace(/^\//, "").replaceAll("/", "-");

  return (
    <section className={`page-hero page-hero-${pageClass}`}>
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <div className="page-hero-inner">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <a className="text-link" href="/contact">
              {page.heroCtaLabel ?? "Start a conversation"} <Arrow />
            </a>
          </div>
        </div>
        <figure className="page-hero-image">
          <img src={page.image} alt={page.imageAlt} />
          {page.showImageCaption !== false && (
            <figcaption>
              <span>Sentinel</span> Access · Supply · Execution
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}

function ClosingCta({
  title,
  text,
  label,
}: {
  title: string;
  text: string;
  label?: string;
}) {
  const sentenceBreak = title.indexOf(". ");
  const titleLead = sentenceBreak >= 0 ? title.slice(0, sentenceBreak + 1) : title;
  const titleAccent = sentenceBreak >= 0 ? title.slice(sentenceBreak + 2) : "";

  return (
    <section className="closing-cta">
      <div className="shell closing-inner">
        <div className="closing-copy">
          <p className="eyebrow">Move the opportunity forward</p>
          <h2>
            {titleLead}
            {titleAccent && (
              <>
                <br />
                <em>{titleAccent}</em>
              </>
            )}
          </h2>
          <p>{text}</p>
          <a className="button button-light" href="/contact">
            {label ?? "Partner with Sentinel"} <Arrow />
          </a>
        </div>
        <p className="closing-signature">UAE headquarters · Global execution</p>
      </div>
    </section>
  );
}

function HomeHero() {
  return (
    <section className="home-hero">
      <div
        className="home-hero-image"
        role="img"
        aria-label="An active young man in performance clothing outdoors at sunrise"
      />
      <div className="shell home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">Welcome to Sentinel</p>
          <h1>
            Delivering Healthcare Continuity
            <br />
            <em>Across Markets.</em>
          </h1>
          <p className="hero-lede">
            Sentinel connects healthcare manufacturers with hospitals, health
            systems, pharmacies and institutional buyers through global
            sourcing, market access, supply-chain coordination and commercial
            execution.
          </p>
          <div className="hero-actions">
            <a className="button" href="/capabilities">
              Explore our capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const capabilityCards = [
  {
    num: "01",
    stage: "Qualify",
    icon: "source",
    title: "Global sourcing & procurement",
    text: "Qualified supply options across Europe, India, Southeast Asia, East Asia and other established healthcare hubs.",
    href: "/capabilities/global-sourcing",
  },
  {
    num: "02",
    stage: "Navigate",
    icon: "access",
    title: "Regulatory & market access",
    text: "Market-entry pathways aligned with local classification, evidence, stakeholders and channel requirements.",
    href: "/capabilities/market-access",
  },
  {
    num: "03",
    stage: "Coordinate",
    icon: "supply",
    title: "Distribution & supply coordination",
    text: "Product-appropriate warehousing, logistics, inventory, channel and fulfilment models through qualified parties.",
    href: "/capabilities/distribution",
  },
  {
    num: "04",
    stage: "Activate",
    icon: "adoption",
    title: "Commercial & clinical activation",
    text: "Account prioritisation, institutional engagement, KOL strategy, channel activation and launch coordination.",
    href: "/capabilities/commercial-activation",
  },
  {
    num: "05",
    stage: "Integrate",
    icon: "platform",
    title: "Strategic healthcare platforms",
    text: "Integrated partnerships where products, technology, clinical capability and local infrastructure must operate together.",
    href: "/partnerships",
  },
];

function CapabilityIcon({ name }: { name: string }) {
  if (name === "source") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="11" />
        <path d="M5 16h22M16 5c4 4.1 4 17.9 0 22M16 5c-4 4.1-4 17.9 0 22" />
      </svg>
    );
  }

  if (name === "access") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4 26 8v7c0 6.2-4 10.4-10 13-6-2.6-10-6.8-10-13V8l10-4Z" />
        <path d="m11.5 16 3 3 6-7" />
      </svg>
    );
  }

  if (name === "supply") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m5 10 11-6 11 6-11 6-11-6Z" />
        <path d="M5 10v12l11 6 11-6V10M16 16v12" />
      </svg>
    );
  }

  if (name === "adoption") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 18h6l3-7 5 13 3-6h7" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="8" cy="9" r="3" />
      <circle cx="24" cy="9" r="3" />
      <circle cx="16" cy="24" r="3" />
      <path d="m10.6 10.5 10.8 0M9.8 11.5l4.7 9.9M22.2 11.5l-4.7 9.9" />
    </svg>
  );
}

const networkMarkets = [
  {
    label: "UAE",
    longitude: 54.38,
    latitude: 24.45,
    featured: true,
  },
  {
    label: "GCC network",
    longitude: 45.08,
    latitude: 23.89,
    regional: true,
  },
  {
    label: "Africa network",
    longitude: 24,
    latitude: 2,
    regional: true,
    connected: true,
  },
  {
    label: "China",
    longitude: 104.2,
    latitude: 35.86,
    connected: true,
  },
  {
    label: "Colombia",
    longitude: -74.3,
    latitude: 4.57,
    connected: true,
  },
  {
    label: "United States",
    longitude: -98,
    latitude: 39,
    connected: true,
  },
  {
    label: "United Kingdom",
    longitude: -3.44,
    latitude: 55.38,
    connected: true,
  },
  {
    label: "Singapore",
    longitude: 103.82,
    latitude: 1.35,
    connected: true,
  },
  {
    label: "India",
    longitude: 78.96,
    latitude: 20.59,
    connected: true,
  },
  {
    label: "Japan",
    longitude: 138.25,
    latitude: 36.2,
    connected: true,
  },
  {
    label: "South Korea",
    longitude: 127.77,
    latitude: 35.91,
  },
  {
    label: "Portugal",
    longitude: -8.22,
    latitude: 39.4,
    connected: true,
  },
];

function projectMapPoint(longitude: number, latitude: number) {
  return {
    x: longitude + 180,
    y: 90 - latitude,
  };
}

function buildMapRoute(
  from: { longitude: number; latitude: number },
  to: { longitude: number; latitude: number },
) {
  const start = projectMapPoint(from.longitude, from.latitude);
  const end = projectMapPoint(to.longitude, to.latitude);
  const distance = Math.abs(end.x - start.x);
  const lift = Math.min(32, 7 + distance * 0.08);
  const controlX = (start.x + end.x) / 2;
  const controlY = Math.max(8, Math.min(start.y, end.y) - lift);

  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
}

const networkOperatingModel = [
  {
    num: "01",
    title: "Qualify globally",
    text: "Identify supply options around quality, evidence, capacity, economics and continuity.",
  },
  {
    num: "02",
    title: "Coordinate from the UAE",
    text: "Align objectives, access pathways, partner responsibilities and decision-making through one governance centre.",
  },
  {
    num: "03",
    title: "Execute locally",
    text: "Activate the regulatory, supply, institutional and commercial pathway required in each market.",
  },
];

const portfolioGroups = [
  {
    kicker: "Medicines & diagnostics",
    image: "/images/portfolio-medicines-diagnostics.png",
    alt: "Medicines, diagnostic equipment and clinical instruments",
    items: ["Pharmaceuticals", "Diagnostics", "Radiology & imaging"],
  },
  {
    kicker: "Acute & procedural care",
    image: "/images/portfolio-acute-procedural.png",
    alt: "Hospital patient monitoring systems in an acute care setting",
    items: ["Critical care", "Respiratory care", "Surgical platforms"],
  },
  {
    kicker: "Care delivery",
    image: "/images/portfolio-care-delivery.png",
    alt: "Medical supply drones carrying healthcare delivery cases",
    items: ["Clinical consumables", "Rehabilitation", "Connected care"],
  },
  {
    kicker: "System enablement",
    image: "/images/portfolio-system-enablement.png",
    alt: "Digital healthcare and artificial intelligence visualization",
    items: ["Health informatics & AI", "Capital equipment", "Lifecycle support"],
  },
];

function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="intro-section">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>One platform connecting supply, access and execution.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Sentinel Medical Solutions LLC is a UAE-headquartered healthcare
              market-access, distribution and execution platform.
            </p>
            <p>
              We help convert healthcare opportunity into an operating pathway
              by coordinating qualified sourcing, market entry, institutional
              supply and commercial activation around the realities of each
              market.
            </p>
            <a className="text-link" href="/who-we-are">
              Discover Sentinel <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Built around your objective</p>
              <h2>Where do you need healthcare to move?</h2>
            </div>
            <p>
              Different stakeholders enter the value chain at different points.
              Sentinel connects them through one coordinated execution model.
            </p>
          </div>
          <div className="audience-grid">
            <a href="/who-we-serve#manufacturers" className="audience-card audience-one">
              <span className="audience-label">For manufacturers</span>
              <span className="audience-location">UAE global trade gateway</span>
              <h3>Enter and develop priority markets.</h3>
              <p>
                Build a practical route through assessment, access, channel
                design, institutional engagement and launch execution.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </a>
            <a href="/who-we-serve#providers" className="audience-card audience-two">
              <span className="audience-label">For providers</span>
              <span className="audience-location">Abu Dhabi care setting · UAE</span>
              <h3>Strengthen supply and access.</h3>
              <p>
                Source qualified pharmaceuticals, consumables, devices,
                diagnostics and clinical solutions through structured pathways.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </a>
            <a href="/who-we-serve#institutions" className="audience-card audience-three">
              <span className="audience-label">For institutions</span>
              <span className="audience-location">Healthcare decision-making · UAE</span>
              <h3>Coordinate complex requirements.</h3>
              <p>
                Bring product selection, procurement, supplier governance and
                market-specific fulfilment into one accountable view.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="shell">
          <div className="capability-intro">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Execution across the healthcare value chain.</h2>
            </div>
            <p>
              Our capabilities are designed to work together. The result is a
              clearer route from manufacturer capability to institutional
              demand.
            </p>
          </div>
          <div className="capability-path" aria-label="Sentinel capability pathway">
            {capabilityCards.map((card, index) => (
              <div className="capability-stage" key={card.num}>
                <div className="capability-node">
                  <span className="capability-num">{card.num}</span>
                  <strong>{card.stage}</strong>
                  {index < capabilityCards.length - 1 && (
                    <span className="capability-connector" aria-hidden="true" />
                  )}
                </div>
                <a href={card.href} className="capability-card">
                  <span className="capability-icon">
                    <CapabilityIcon name={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="capability-action">
                    Explore capability <Arrow />
                  </span>
                </a>
              </div>
            ))}
          </div>
          <div className="capability-close">
            <span>Global capability</span>
            <strong>One coordinated route to institutional demand</strong>
            <span>Local execution</span>
          </div>
        </div>
      </section>

      <section className="network-section">
        <div className="network-grid">
          <div className="network-copy">
            <div className="network-copy-inner">
              <p className="eyebrow">UAE headquarters · Global corridors</p>
              <h2>A connected healthcare network, coordinated from the UAE.</h2>
              <p>
                The UAE is Sentinel&apos;s commercial and governance centre. Our
                reach is built through defined sourcing, market and partner
                corridors—mobilised according to the product, mandate and local
                pathway.
              </p>
              <a className="button button-light" href="/global-reach">
                View our global reach <Arrow />
              </a>
            </div>
          </div>
          <div className="network-visual">
            <div className="map-heading">
              <span>Sentinel network</span>
              <strong>Global capability connected through one operating centre</strong>
            </div>
            <div className="map-stage">
              <img
                src="/images/world-map-equirectangular.svg"
                alt=""
                aria-hidden="true"
              />
              <svg
                className="map-routes"
                viewBox="0 0 360 150"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <ellipse className="map-region map-region-gcc" cx="225" cy="66" rx="11" ry="7" />
                <ellipse className="map-region map-region-africa" cx="204" cy="91" rx="25" ry="33" />
                {networkMarkets
                  .filter((market) => market.connected)
                  .map((market) => (
                    <path
                      d={buildMapRoute(networkMarkets[0], market)}
                      key={`route-${market.label}`}
                    />
                  ))}
              </svg>
              {networkMarkets.map((market) => {
                const point = projectMapPoint(market.longitude, market.latitude);

                return (
                  <span
                    aria-label={market.label}
                    className={`map-dot ${
                      market.featured ? "map-dot-featured" : ""
                    } ${market.regional ? "map-dot-regional" : ""}`}
                    key={market.label}
                    role="img"
                    style={{ left: `${(point.x / 360) * 100}%`, top: `${(point.y / 150) * 100}%` }}
                    title={market.label}
                  >
                    <i />
                    {market.featured && <b>UAE HQ</b>}
                  </span>
                );
              })}
              <span className="sr-only">
                Sentinel&apos;s network includes the UAE, the GCC, Africa,
                China, Colombia, the United States, the United Kingdom,
                Singapore, India, Japan, South Korea and Portugal.
              </span>
            </div>
            <div className="network-model-heading">
              <span>How the network operates</span>
              <strong>From global capability to local execution</strong>
            </div>
            <div className="network-model" aria-label="How the Sentinel network operates">
              {networkOperatingModel.map((stage) => (
                <article key={stage.num}>
                  <span>{stage.num}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="shell">
          <div className="section-title-row portfolio-title">
            <div>
              <p className="eyebrow">Portfolio scope</p>
              <h2>Healthcare categories selected around real demand.</h2>
            </div>
            <a className="text-link" href="/what-we-supply">
              Explore what we supply <Arrow />
            </a>
          </div>
          <div className="portfolio-editorial">
            {portfolioGroups.map((group, index) => (
              <article className="portfolio-panel" key={group.kicker}>
                <img src={group.image} alt={group.alt} />
                <div className="portfolio-overlay">
                  <span>0{index + 1}</span>
                  <h3>{group.kicker}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="shell why-grid">
          <div className="why-statement">
            <div>
              <p className="eyebrow">Why Sentinel</p>
              <h2>An operating partner—from opportunity to execution.</h2>
              <p>
                Healthcare opportunities rarely fail for lack of potential.
                They fail at the hand-offs—when sourcing, regulatory access,
                supply, commercial planning and market adoption are managed
                separately. Sentinel connects these moving parts, establishes
                clear ownership and stays engaged from initial assessment
                through launch and continuity.
              </p>
            </div>
            <div className="why-path" aria-label="Sentinel operating pathway">
              {["Source", "Access", "Supply", "Adoption"].map((step, index) => (
                <span key={step}>
                  <small>0{index + 1}</small>
                  <strong>{step}</strong>
                </span>
              ))}
            </div>
            <p className="why-path-caption">
              One connected pathway. Clear ownership at every stage.
            </p>
          </div>
          <div className="why-copy" aria-label="How Sentinel works">
            {[
              [
                "Source",
                "Define the objective",
                "We clarify the product, target customer, priority market, timing and success criteria before recommending the route forward.",
                "Product · Customer · Market",
              ],
              [
                "Access",
                "Build the route to market",
                "We align sourcing, documentation, market access, channel economics and launch planning into one coordinated pathway.",
                "Documentation · Access · Economics",
              ],
              [
                "Supply",
                "Align the right partners",
                "Sentinel brings together qualified manufacturers, technical specialists, logistics providers and local partners around one delivery plan.",
                "Partners · Logistics · Delivery",
              ],
              [
                "Adoption",
                "Drive accountable execution",
                "We establish clear roles, milestones, commercial terms and decision rights—and stay engaged through launch, adoption and continuity.",
                "Launch · Adoption · Continuity",
              ],
            ].map(([phase, title, text, detail], index) => (
              <div className="why-point" key={title}>
                <div className="why-point-marker" aria-hidden="true">
                  <span>0{index + 1}</span>
                  <i />
                </div>
                <div className="why-point-content">
                  <small>{phase}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="why-point-detail">{detail}</span>
                </div>
              </div>
            ))}
            <a className="text-link" href="/how-we-work">
              Explore how we work <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="leadership-preview">
        <div className="shell leadership-grid">
          <div>
            <p className="eyebrow">Experienced healthcare leadership</p>
            <h2>Experience across the decisions healthcare depends on.</h2>
            <p>
              Our leadership perspective connects strategic direction,
              commercial control and day-to-day delivery—so recommendations can
              survive contact with the real operating environment.
            </p>
            <a className="button" href="/leadership">
              Meet our leadership <Arrow />
            </a>
          </div>
          <div className="experience-lenses">
            {[
              ["Direction", "Healthcare strategy", "Market development"],
              ["Control", "Finance & governance", "Provider operations"],
              ["Delivery", "Global procurement", "Supply-chain execution"],
            ].map(([label, first, second], index) => (
              <div className="experience-lens" key={label}>
                <span>0{index + 1}</span>
                <small>{label}</small>
                <div>
                  <strong>{first}</strong>
                  <strong>{second}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Where should your healthcare opportunity move next?"
        text="Tell us what you are trying to source, supply, launch or develop. We will help define whether there is a credible pathway."
      />
    </>
  );
}

const servedAudiences = [
  {
    num: "01",
    icon: "innovation",
    title: "Manufacturers & innovators",
    text: "Market access, sourcing, distribution and commercial-development support for pharmaceutical, MedTech, diagnostic and healthcare companies.",
  },
  {
    num: "02",
    icon: "wellness",
    title: "Wellness brands",
    text: "Exclusive UAE distribution and disciplined brand-building for selected premium wellness products across relevant channels.",
  },
  {
    num: "03",
    icon: "hospital",
    title: "Hospitals & health systems",
    text: "Reliable access to healthcare products, technologies and supply solutions aligned with institutional and clinical requirements.",
  },
  {
    num: "04",
    icon: "channel",
    title: "Clinics, pharmacies & wellness providers",
    text: "Differentiated products, channel support and coordinated fulfilment pathways designed for regulated care environments.",
  },
  {
    num: "05",
    icon: "institution",
    title: "Government & institutional buyers",
    text: "Structured procurement, supplier coordination and accountable fulfilment for defined healthcare programmes and requirements.",
  },
  {
    num: "06",
    icon: "partners",
    title: "Market & channel partners",
    text: "Clearly defined roles, aligned economics and coordinated execution across international and local healthcare networks.",
  },
];

function ServedAudienceIcon({ name }: { name: string }) {
  if (name === "innovation") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="14" />
        <path d="M8 20h24M20 6c5 5 5 23 0 28M20 6c-5 5-5 23 0 28" />
      </svg>
    );
  }
  if (name === "wellness") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 33C11 28 7 21 9 15c1.8-5.4 8.5-6.2 11-1.6 2.5-4.6 9.2-3.8 11 1.6 2 6-2 13-11 18Z" />
        <path d="M14 21h4l2-4 3 8 2-4h3" />
      </svg>
    );
  }
  if (name === "hospital") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 34V8h24v26M5 34h30M15 34v-8h10v8" />
        <path d="M20 12v9M15.5 16.5h9" />
      </svg>
    );
  }
  if (name === "channel") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 10h22v24H9zM14 6h12v8H14z" />
        <path d="M14 20h12M20 16v8M14 29h12" />
      </svg>
    );
  }
  if (name === "institution") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="m5 15 15-9 15 9M8 16h24M10 16v15M17 16v15M23 16v15M30 16v15M6 32h28" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="12" cy="13" r="5" />
      <circle cx="28" cy="13" r="5" />
      <circle cx="20" cy="28" r="5" />
      <path d="m16 15 8 0M14 17l4 7M26 17l-4 7" />
    </svg>
  );
}

function WhoWeServePage() {
  return (
    <>
      <section className="serve-hero">
        <div className="shell serve-hero-grid">
          <div className="serve-hero-copy">
            <p className="eyebrow">Who we serve</p>
            <h1>One partner across the healthcare value chain.</h1>
            <p>
              Sentinel works with healthcare manufacturers, wellness brands,
              hospitals, clinics, pharmacies, institutional buyers and market
              partners. We coordinate market access, supply, distribution and
              commercial activation through one accountable operating model.
            </p>
            <a className="text-link" href="#served-audiences">
              Explore who we support <Arrow />
            </a>
          </div>
          <figure className="serve-hero-visual">
            <div className="serve-hero-frame">
              <img
                src="/images/who-we-serve-global-partnership.webp"
                alt="Hands holding a globe, representing globally connected healthcare access"
              />
            </div>
            <figcaption>
              <span>Global capability</span>
              <strong>Coordinated from the UAE</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="wellness-feature">
        <div className="shell">
          <div className="wellness-feature-heading">
            <div>
              <p className="eyebrow">A focused UAE capability</p>
              <h2>Exclusive UAE distribution, built around the brand.</h2>
            </div>
            <aside className="wellness-market-role">
              <span className="wellness-exclusive-badge">UAE exclusive</span>
              <strong>One accountable market partner</strong>
              <p>From market entry to sustained brand growth.</p>
            </aside>
          </div>
          <div className="wellness-feature-intro">
            <p>
              For selected premium wellness brands, Sentinel serves as the UAE
              market partner—defining the route to market, building the right
              channels, activating priority accounts and protecting long-term
              brand value.
            </p>
            <div className="wellness-principles" aria-label="Distribution principles">
              <span>Brand-led strategy</span>
              <span>Channel discipline</span>
              <span>Long-term stewardship</span>
            </div>
          </div>
          <div className="wellness-pathway" aria-label="UAE wellness distribution pathway">
            {[
              [
                "01",
                "Define",
                "Market fit",
                "Clarify positioning, priority customers and the commercial objective.",
              ],
              [
                "02",
                "Build",
                "Route to market",
                "Shape channel strategy, market-entry requirements and launch economics.",
              ],
              [
                "03",
                "Activate",
                "Demand and access",
                "Engage healthcare, pharmacy, wellness and relevant corporate channels.",
              ],
              [
                "04",
                "Grow",
                "Brand stewardship",
                "Manage performance, supply continuity, account growth and brand integrity.",
              ],
            ].map(([num, action, title, text]) => (
              <article key={title}>
                <div className="wellness-stage-marker">
                  <span>{num}</span>
                </div>
                <p className="wellness-stage-action">{action}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="wellness-pathway-footer">
            <span>Market entry</span>
            <a href="/contact">
              Discuss UAE distribution <Arrow />
            </a>
            <span>Brand growth</span>
          </div>
        </div>
      </section>

      <section className="served-audiences" id="served-audiences">
        <div className="shell">
          <div className="served-audiences-heading">
            <div>
              <p className="eyebrow">Who we work with</p>
              <h2>Different priorities. One coordinated operating view.</h2>
            </div>
            <p>
              Every stakeholder enters the healthcare value chain at a
              different point. Sentinel makes the dependencies, roles and
              commercial pathway visible from the beginning.
            </p>
          </div>
          <div className="served-audience-grid">
            {servedAudiences.map((audience) => (
              <article className="served-audience-card" key={audience.title}>
                <div className="served-audience-topline">
                  <span className="served-audience-icon">
                    <ServedAudienceIcon name={audience.icon} />
                  </span>
                  <span className="served-audience-num">{audience.num}</span>
                </div>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Where do you sit in the healthcare value chain?"
        text="Tell us what you need to source, supply, distribute, launch or develop. We will help define the most credible pathway."
      />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="shell contact-hero-grid">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h1>Tell us what you need to move.</h1>
          </div>
          <p>
            Share the healthcare product, supply requirement, market objective
            or partnership you are working on. We will help determine whether
            there is a credible pathway and what information is needed next.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="shell contact-grid">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <h2>Speak with Sentinel.</h2>
            <a href="mailto:info@sentinelmedical.com" className="contact-email">
              info@sentinelmedical.com <Arrow diagonal />
            </a>
            <div className="contact-facts">
              <div>
                <span>Headquarters</span>
                <strong>United Arab Emirates</strong>
              </div>
              <div>
                <span>Sourcing network</span>
                <strong>Europe · India · Southeast Asia · East Asia</strong>
              </div>
              <div>
                <span>Market focus</span>
                <strong>UAE · GCC · Africa · Selected regions</strong>
              </div>
            </div>
          </aside>
          <form className="contact-form" action="/contact" method="get">
            <div className="field-row">
              <label>
                Full name
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label>
                Organisation
                <input name="organisation" type="text" autoComplete="organization" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Business email
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                Country or region
                <input name="region" type="text" autoComplete="country-name" />
              </label>
            </div>
            <label>
              What would you like to discuss?
              <select name="subject" defaultValue="">
                <option value="" disabled>
                  Select a subject
                </option>
                <option>Enter or develop a market</option>
                <option>Source a healthcare product</option>
                <option>Supply an institutional requirement</option>
                <option>Explore a distribution partnership</option>
                <option>Propose a strategic healthcare platform</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label>
              Brief description
              <textarea name="message" rows={6} />
            </label>
            <label className="checkbox">
              <input name="consent" type="checkbox" />
              <span>
                I agree that Sentinel may use this information to respond to my
                business enquiry.
              </span>
            </label>
            <button className="button" type="submit">
              Send enquiry <Arrow />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const leadershipProfiles = [
  {
    name: "H.E. Younis Haji Khoori",
    image: "/images/leadership/younis-haji-khoori.png",
    bio: "He brings institutional perspective, strategic discipline and governance experience to Sentinel. His approach centres on long-term value, accountable decision-making and credible healthcare partnerships aligned with national and regional priorities.",
  },
  {
    name: "Ravinder Sharma",
    image: "/images/leadership/ravinder-sharma.png",
    bio: "An accomplished business leader and healthcare strategist with extensive experience building, transforming and scaling complex businesses across international markets. He combines commercial judgement, operating discipline and partnership development to turn healthcare opportunities into sustainable ventures.",
  },
  {
    name: "John Sunil",
    image: "/images/leadership/john-sunil.png",
    bio: "An experienced healthcare leader and strategist whose perspective spans integrated care delivery, organisational growth and regional market development. He connects strategic ambition with the practical realities of provider operations and commercial execution.",
  },
  {
    name: "Vineet Pant",
    image: "/images/leadership/vineet-pant.png",
    bio: "A disciplined strategist with experience across healthcare finance, investment evaluation and governance. He brings commercial rigour, structured decision-making and a long-term value perspective to Sentinel’s partnerships and growth priorities.",
  },
];

function LeadershipPage() {
  return (
    <>
      <section className="leadership-hero">
        <div className="shell leadership-hero-grid">
          <div className="leadership-hero-copy">
            <div>
              <p className="eyebrow">Leadership</p>
              <h1>Experience that sharpens every decision.</h1>
              <p>
                Sentinel brings together strategists and healthcare leaders with
                disciplined experience across institutional governance, care
                delivery, finance, sourcing, supply chain and market execution.
              </p>
            </div>
          </div>
          <figure className="leadership-hero-image">
            <img
              src="/images/leadership-hero.webp"
              alt="Healthcare leader addressing professionals in an auditorium"
            />
          </figure>
        </div>
      </section>

      <section className="leadership-roster">
        <div className="shell">
          <div className="leadership-roster-heading">
            <div>
              <p className="eyebrow">Our leadership</p>
              <h2>Strategic judgement. Healthcare experience. Disciplined execution.</h2>
            </div>
            <p>
              Different perspectives are brought into one operating view so
              that strategy, economics and execution remain aligned from the
              beginning.
            </p>
          </div>
          <div className="leadership-profile-grid">
            {leadershipProfiles.map((profile) => (
              <article className="leadership-profile" key={profile.name}>
                <figure>
                  <img src={profile.image} alt={profile.name} />
                </figure>
                <div>
                  <h3>{profile.name}</h3>
                  <p>{profile.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Connect with Sentinel’s leadership."
        text="Bring us a defined healthcare opportunity and the team will help determine the most credible path forward."
      />
    </>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <>
      <section className="legal-hero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1>{privacy ? "Privacy Notice" : "Website Terms of Use"}</h1>
          <p>
            {privacy
              ? "This prototype identifies the sections required in the final privacy notice. Legal text must be aligned with the website's actual data processing before public launch."
              : "This prototype provides the required corporate and healthcare disclaimers. Final terms must be reviewed by qualified legal counsel before public launch."}
          </p>
        </div>
      </section>
      <section className="legal-section">
        <div className="shell legal-grid">
          <aside>Last reviewed: 27 July 2026</aside>
          <div>
            {privacy ? (
              <>
                <h2>Information we may collect</h2>
                <p>
                  Information submitted through business enquiries may include
                  name, organisation, professional contact details, country and
                  information about the relevant product, market or opportunity.
                </p>
                <h2>How information may be used</h2>
                <p>
                  Information may be used to respond to an enquiry, evaluate a
                  potential business relationship, meet legal obligations and
                  protect the security and integrity of our communications.
                </p>
                <h2>Final notice required</h2>
                <p>
                  The final notice must address the legal basis for processing,
                  service providers, international transfers, retention,
                  individual rights, security, analytics and cookies according
                  to the site&apos;s final technical setup.
                </p>
              </>
            ) : (
              <>
                <h2>General corporate information</h2>
                <p>
                  Information on this website is provided for general
                  business-to-business informational purposes. References to
                  products, services, markets or capabilities do not constitute
                  an offer and remain subject to regulation, licensing,
                  registration, availability and formal agreement.
                </p>
                <h2>No medical advice</h2>
                <p>
                  Nothing on this website is medical advice, diagnosis or
                  treatment guidance, or a substitute for consultation with an
                  appropriately qualified healthcare professional.
                </p>
                <h2>Final terms required</h2>
                <p>
                  Final terms should address permitted use, intellectual
                  property, third-party links, accuracy, liability, governing
                  law and jurisdiction after legal review.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function InteriorPage({ page }: { page: SitePageData }) {
  return (
    <>
      <PageHero page={page} />
      {page.sections.map((section) => (
        <SectionBlock key={`${page.path}-${section.title}`} section={section} />
      ))}
      <ClosingCta title={page.ctaTitle} text={page.ctaText} label={page.ctaLabel} />
    </>
  );
}

export function SentinelSite({ path = "/" }: { path?: string }) {
  let content;
  if (path === "/") content = <HomePage />;
  else if (path === "/who-we-serve") content = <WhoWeServePage />;
  else if (path === "/contact") content = <ContactPage />;
  else if (path === "/leadership") content = <LeadershipPage />;
  else if (path === "/privacy") content = <LegalPage type="privacy" />;
  else if (path === "/terms") content = <LegalPage type="terms" />;
  else {
    const page = pages[path] ?? pages["/who-we-are"];
    content = <InteriorPage page={page} />;
  }

  return (
    <>
      <Header />
      <main id="main">{content}</main>
      <Footer />
    </>
  );
}
