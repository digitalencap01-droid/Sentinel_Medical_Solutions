import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import finalLogo from '../assets/images/final.png'
import { images, pages, type SitePageData, type SiteSection } from './siteData'

const capabilityLinks = [
  { href: '/capabilities', label: 'Capabilities overview' },
  { href: '/capabilities/global-sourcing', label: 'Global sourcing & procurement' },
  { href: '/capabilities/market-access', label: 'Regulatory & market access' },
  { href: '/capabilities/distribution', label: 'Distribution & supply coordination' },
  { href: '/capabilities/commercial-activation', label: 'Commercial & clinical activation' },
]

const mainLinks = [
  { href: '/who-we-serve', label: 'Who We Serve' },
  { href: '/what-we-supply', label: 'What We Supply' },
  { href: '/global-reach', label: 'Global Reach' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/insights', label: 'Insights' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>{'->'}</span>
}

function SiteLink({
  href,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  ariaLabel?: string
  onClick?: () => void
}) {
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}

function Brand() {
  return (
    <SiteLink className="brand" href="/" ariaLabel="Sentinel home">
      <img className="brand-logo" src={finalLogo} alt="Sentinel" />
    </SiteLink>
  )
}

function Header() {
  const location = useLocation()
  const desktopMenuRef = useRef<HTMLDetailsElement>(null)
  const mobileMenuRef = useRef<HTMLDetailsElement>(null)

  const closeMenus = () => {
    if (desktopMenuRef.current) desktopMenuRef.current.open = false
    if (mobileMenuRef.current) mobileMenuRef.current.open = false
  }

  useEffect(() => {
    closeMenus()
  }, [location.pathname, location.hash])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="utility">
        <div className="shell utility-inner">
          <span>UAE headquarters</span>
          <span className="utility-separator">Global healthcare execution</span>
          <SiteLink href="mailto:info@sentinelmedical.com">info@sentinelmedical.com</SiteLink>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <details className="nav-menu" ref={desktopMenuRef}>
              <summary>What We Do</summary>
              <div className="mega-menu">
                <div>
                  <p className="menu-kicker">Integrated capabilities</p>
                  <h2>From source to system.</h2>
                  <p>
                    Five connected capabilities supporting one healthcare pathway.
                  </p>
                </div>
                <div className="menu-links">
                  {capabilityLinks.map((link, index) => (
                    <SiteLink href={link.href} key={link.href} onClick={closeMenus}>
                      <span>{`0${index + 1}`}</span>
                      {link.label}
                      <Arrow />
                    </SiteLink>
                  ))}
                </div>
              </div>
            </details>
            {mainLinks.map((link) => (
              <SiteLink href={link.href} key={link.href}>
                {link.label}
              </SiteLink>
            ))}
          </nav>
          <SiteLink className="button button-small" href="/contact">
            Partner with us <Arrow />
          </SiteLink>
          <details className="mobile-nav" ref={mobileMenuRef}>
            <summary aria-label="Open menu">Menu</summary>
            <nav aria-label="Mobile navigation">
              <SiteLink href="/capabilities" onClick={closeMenus}>What We Do</SiteLink>
              {mainLinks.map((link) => (
                <SiteLink href={link.href} key={link.href} onClick={closeMenus}>
                  {link.label}
                </SiteLink>
              ))}
              <SiteLink href="/leadership" onClick={closeMenus}>Leadership</SiteLink>
              <SiteLink href="/contact" onClick={closeMenus}>Contact</SiteLink>
            </nav>
          </details>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <Brand />
          <p>
            A UAE-headquartered healthcare market-access, sourcing, distribution and execution
            platform connecting global capability with institutional demand.
          </p>
          <SiteLink className="text-link on-dark" href="mailto:info@sentinelmedical.com">
            info@sentinelmedical.com <Arrow diagonal />
          </SiteLink>
        </div>
        <div className="footer-nav">
          <div>
            <h3>Company</h3>
            <SiteLink href="/who-we-are">Who We Are</SiteLink>
            <SiteLink href="/leadership">Leadership</SiteLink>
            <SiteLink href="/global-reach">Global Reach</SiteLink>
            <SiteLink href="/insights">Insights</SiteLink>
          </div>
          <div>
            <h3>Capabilities</h3>
            <SiteLink href="/capabilities/global-sourcing">Global Sourcing</SiteLink>
            <SiteLink href="/capabilities/market-access">Market Access</SiteLink>
            <SiteLink href="/capabilities/distribution">Supply Coordination</SiteLink>
            <SiteLink href="/capabilities/commercial-activation">Market Activation</SiteLink>
          </div>
          <div>
            <h3>Connect</h3>
            <SiteLink href="/who-we-serve">Who We Serve</SiteLink>
            <SiteLink href="/what-we-supply">What We Supply</SiteLink>
            <SiteLink href="/partnerships">Partnerships</SiteLink>
            <SiteLink href="/contact">Contact</SiteLink>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Copyright 2026 Sentinel Medical Solutions LLC. All rights reserved.</p>
        <div>
          <SiteLink href="/privacy">Privacy</SiteLink>
          <SiteLink href="/terms">Terms</SiteLink>
          <SiteLink href="/contact">Accessibility</SiteLink>
        </div>
      </div>
      <div className="shell footer-disclaimer">
        Products and services are subject to applicable regulation, licensing, registration,
        availability and formal partner mandates. Website information does not constitute
        medical advice or a product offer.
      </div>
    </footer>
  )
}

function SectionBlock({ section }: { section: SiteSection }) {
  return (
    <section className={`content-section tone-${section.tone ?? 'light'}`} id={section.id}>
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
          <div className={`content-card-grid ${section.cards.length > 4 ? 'content-card-grid-wide' : ''}`}>
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
              )

              return card.href ? (
                <SiteLink className="content-card linked" href={card.href} key={card.title}>
                  {content}
                </SiteLink>
              ) : (
                <article className="content-card" key={card.title}>
                  {content}
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

function PageHero({ page }: { page: SitePageData }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <div className="page-hero-inner">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <SiteLink className="text-link" href="/contact">
            Start a conversation <Arrow />
          </SiteLink>
        </div>
      </div>
      <figure className="page-hero-image">
        <img src={page.image} alt={page.imageAlt} />
        <figcaption>
          <span>Sentinel</span> Access | Supply | Execution
        </figcaption>
      </figure>
    </section>
  )
}

function ClosingCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="closing-cta">
      <div className="shell closing-inner">
        <div>
          <p className="eyebrow">Move the opportunity forward</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{text}</p>
          <SiteLink className="button button-light" href="/contact">
            Partner with Sentinel <Arrow />
          </SiteLink>
        </div>
      </div>
    </section>
  )
}

function HomeHero() {
  return (
    <section className="home-hero">
      <div
        className="home-hero-image"
        role="img"
        aria-label="Healthcare professional using technology"
      />
      <div className="shell home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">Global healthcare market access and execution</p>
          <h1>
            Healthcare,
            <br />
            moving across <em>markets.</em>
          </h1>
          <p className="hero-lede">
            Sentinel connects healthcare manufacturers with hospitals, health systems,
            pharmacies and institutional buyers through global sourcing, market access,
            supply-chain coordination and commercial execution.
          </p>
          <div className="hero-actions">
            <SiteLink className="button" href="/contact">
              Build a market pathway <Arrow />
            </SiteLink>
            <SiteLink className="button button-ghost" href="/capabilities">
              Explore capabilities
            </SiteLink>
          </div>
          <p className="hero-proof">
            UAE-based <span /> Globally connected <span /> Built for healthcare execution
          </p>
        </div>
      </div>
    </section>
  )
}

const capabilityCards = [
  {
    num: '01',
    title: 'Global sourcing & procurement',
    text: 'Qualified supply options across Europe, India, Southeast Asia, East Asia and other established healthcare hubs.',
    href: '/capabilities/global-sourcing',
  },
  {
    num: '02',
    title: 'Regulatory & market access',
    text: 'Market-entry pathways aligned with local classification, evidence, stakeholders and channel requirements.',
    href: '/capabilities/market-access',
  },
  {
    num: '03',
    title: 'Distribution & supply coordination',
    text: 'Product-appropriate warehousing, logistics, inventory, channel and fulfilment models through qualified parties.',
    href: '/capabilities/distribution',
  },
  {
    num: '04',
    title: 'Commercial & clinical activation',
    text: 'Account prioritisation, institutional engagement, KOL strategy, channel activation and launch coordination.',
    href: '/capabilities/commercial-activation',
  },
  {
    num: '05',
    title: 'Strategic healthcare platforms',
    text: 'Integrated partnerships where products, technology, clinical capability and local infrastructure must operate together.',
    href: '/partnerships',
  },
]

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
              Sentinel Medical Solutions LLC is a UAE-headquartered healthcare market-access,
              distribution and execution platform.
            </p>
            <p>
              We help convert healthcare opportunity into an operating pathway by coordinating
              qualified sourcing, market entry, institutional supply and commercial activation
              around the realities of each market.
            </p>
            <SiteLink className="text-link" href="/who-we-are">
              Discover Sentinel <Arrow />
            </SiteLink>
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
              Different stakeholders enter the value chain at different points. Sentinel
              connects them through one coordinated execution model.
            </p>
          </div>
          <div className="audience-grid">
            <SiteLink href="/who-we-serve#manufacturers" className="audience-card audience-one">
              <span>For manufacturers</span>
              <h3>Enter and develop priority markets.</h3>
              <p>
                Build a practical route through assessment, access, channel design,
                institutional engagement and launch execution.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </SiteLink>
            <SiteLink href="/who-we-serve#providers" className="audience-card audience-two">
              <span>For providers</span>
              <h3>Strengthen supply and access.</h3>
              <p>
                Source qualified pharmaceuticals, consumables, devices, diagnostics and
                clinical solutions through structured pathways.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </SiteLink>
            <SiteLink href="/who-we-serve#institutions" className="audience-card audience-three">
              <span>For institutions</span>
              <h3>Coordinate complex requirements.</h3>
              <p>
                Bring product selection, procurement, supplier governance and market-specific
                fulfilment into one accountable view.
              </p>
              <strong>
                Explore the pathway <Arrow />
              </strong>
            </SiteLink>
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
              Our capabilities are designed to work together. The result is a clearer route
              from manufacturer capability to institutional demand.
            </p>
          </div>
          <div className="capability-list">
            {capabilityCards.map((card) => (
              <SiteLink href={card.href} key={card.num} className="capability-row">
                <span>{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Arrow />
              </SiteLink>
            ))}
          </div>
        </div>
      </section>

      <section className="network-section">
        <div className="shell network-grid">
          <div className="network-copy">
            <p className="eyebrow">Global sourcing, governed from the UAE</p>
            <h2>The right source is determined by the requirement.</h2>
            <p>
              Healthcare sourcing should not begin with a preferred country. It should begin
              with clinical purpose, quality, regulatory pathway, economics, capacity and
              continuity.
            </p>
            <SiteLink className="button button-light" href="/global-reach">
              View our global reach <Arrow />
            </SiteLink>
          </div>
          <div className="network-visual">
            <div className="network-core">
              <small>Control centre</small>
              <strong>UAE</strong>
              <span>Commercial governance</span>
            </div>
            <div className="network-node node-europe">
              <small>Source</small>
              <strong>Europe</strong>
            </div>
            <div className="network-node node-india">
              <small>Source</small>
              <strong>India</strong>
            </div>
            <div className="network-node node-sea">
              <small>Source</small>
              <strong>Southeast Asia</strong>
            </div>
            <div className="network-node node-east">
              <small>Source</small>
              <strong>East Asia</strong>
            </div>
            <div className="network-node node-markets">
              <small>Markets</small>
              <strong>GCC | Africa | Selected regions</strong>
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
            <SiteLink className="text-link" href="/what-we-supply">
              Explore what we supply <Arrow />
            </SiteLink>
          </div>
          <div className="portfolio-grid">
            {[
              'Pharmaceuticals',
              'Clinical consumables',
              'Diagnostics',
              'Radiology & imaging',
              'Critical care',
              'Respiratory care',
              'Surgical platforms',
              'Rehabilitation',
              'Connected care',
              'Health informatics & AI',
              'Capital equipment',
              'Lifecycle support',
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-image">
          <img src={images.laboratory} alt="Healthcare manufacturing specialists working in a laboratory" />
          <div>
            <span>Precision in the product.</span>
            <span>Discipline in the pathway.</span>
          </div>
        </div>
        <div className="why-copy">
          <p className="eyebrow">Why Sentinel</p>
          <h2>Built to close the gap between interest and execution.</h2>
          {[
            [
              'Market-specific thinking',
              'The pathway is shaped around the healthcare system, procurement structure, regulation and channel realities.',
            ],
            [
              'One coordinated interface',
              'Sourcing, commercial, supply and stakeholder workstreams stay connected.',
            ],
            [
              'Institutional orientation',
              'Built for professional healthcare buyers and regulated channels, not transactional consumer trading.',
            ],
            [
              'Partnership discipline',
              'Roles, economics, responsibilities and performance expectations are explicit.',
            ],
          ].map(([title, text], index) => (
            <div className="why-point" key={title}>
              <span>{`0${index + 1}`}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <SiteLink className="text-link" href="/how-we-work">
            See how we work <Arrow />
          </SiteLink>
        </div>
      </section>

      <section className="leadership-preview">
        <div className="shell leadership-grid">
          <div>
            <p className="eyebrow">Experienced healthcare leadership</p>
            <h2>Judgement shaped by operating experience.</h2>
            <p>
              Sentinel brings together leadership across healthcare strategy, finance,
              procurement, supply chain, provider operations and regional market development.
            </p>
            <SiteLink className="button" href="/leadership">
              Meet our leadership <Arrow />
            </SiteLink>
          </div>
          <div className="leadership-disciplines">
            <span>Healthcare strategy</span>
            <span>Finance & governance</span>
            <span>Global procurement</span>
            <span>Supply-chain execution</span>
            <span>Market development</span>
            <span>Provider operations</span>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Where should your healthcare opportunity move next?"
        text="Tell us what you are trying to source, supply, launch or develop. We will help define whether there is a credible pathway."
      />
    </>
  )
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
            Share the healthcare product, supply requirement, market objective or partnership
            you are working on. We will help determine whether there is a credible pathway and
            what information is needed next.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="shell contact-grid">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <h2>Speak with Sentinel.</h2>
            <SiteLink href="mailto:info@sentinelmedical.com" className="contact-email">
              info@sentinelmedical.com <Arrow diagonal />
            </SiteLink>
            <div className="contact-facts">
              <div>
                <span>Headquarters</span>
                <strong>United Arab Emirates</strong>
              </div>
              <div>
                <span>Sourcing network</span>
                <strong>Europe | India | Southeast Asia | East Asia</strong>
              </div>
              <div>
                <span>Market focus</span>
                <strong>UAE | GCC | Africa | Selected regions</strong>
              </div>
            </div>
          </aside>
          <form className="contact-form" action="/contact" method="get">
            <p className="form-note">
              Prototype enquiry form. Final routing and privacy controls must be connected
              before public launch.
            </p>
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
                I agree that Sentinel may use this information to respond to my business
                enquiry.
              </span>
            </label>
            <button className="button" type="submit">
              Send enquiry <Arrow />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy'

  return (
    <>
      <section className="legal-hero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1>{privacy ? 'Privacy Notice' : 'Website Terms of Use'}</h1>
          <p>
            {privacy
              ? 'This prototype identifies the sections required in the final privacy notice. Legal text must be aligned with the website data processing before public launch.'
              : 'This prototype provides the required corporate and healthcare disclaimers. Final terms must be reviewed by qualified legal counsel before public launch.'}
          </p>
        </div>
      </section>
      <section className="legal-section">
        <div className="shell legal-grid">
          <aside>Last reviewed: July 27, 2026</aside>
          <div>
            {privacy ? (
              <>
                <h2>Information we may collect</h2>
                <p>
                  Information submitted through business enquiries may include name,
                  organisation, professional contact details, country and information about
                  the relevant product, market or opportunity.
                </p>
                <h2>How information may be used</h2>
                <p>
                  Information may be used to respond to an enquiry, evaluate a potential
                  business relationship, meet legal obligations and protect the security and
                  integrity of our communications.
                </p>
                <h2>Final notice required</h2>
                <p>
                  The final notice must address the legal basis for processing, service
                  providers, international transfers, retention, individual rights, security,
                  analytics and cookies according to the final technical setup.
                </p>
              </>
            ) : (
              <>
                <h2>General corporate information</h2>
                <p>
                  Information on this website is provided for general business-to-business
                  informational purposes. References to products, services, markets or
                  capabilities do not constitute an offer and remain subject to regulation,
                  licensing, registration, availability and formal agreement.
                </p>
                <h2>No medical advice</h2>
                <p>
                  Nothing on this website is medical advice, diagnosis or treatment guidance,
                  or a substitute for consultation with an appropriately qualified healthcare
                  professional.
                </p>
                <h2>Final terms required</h2>
                <p>
                  Final terms should address permitted use, intellectual property,
                  third-party links, accuracy, liability, governing law and jurisdiction
                  after legal review.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function InteriorPage({ page }: { page: SitePageData }) {
  return (
    <>
      <PageHero page={page} />
      {page.sections.map((section) => (
        <SectionBlock key={`${page.path}-${section.title}`} section={section} />
      ))}
      <ClosingCta title={page.ctaTitle} text={page.ctaText} />
    </>
  )
}

function usePageBehavior(pathname: string, hash: string) {
  useEffect(() => {
    const page = pages[pathname]
    const title = page
      ? `${page.navLabel} | Sentinel`
      : pathname === '/'
        ? 'Sentinel | Global Healthcare Market Access and Execution'
        : pathname === '/contact'
          ? 'Contact | Sentinel'
          : pathname === '/privacy'
            ? 'Privacy Notice | Sentinel'
            : pathname === '/terms'
              ? 'Website Terms of Use | Sentinel'
              : 'Sentinel | Global Healthcare Market Access and Execution'

    document.title = title
  }, [pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
}

export function SentinelSite() {
  const location = useLocation()
  const { pathname, hash } = location
  usePageBehavior(pathname, hash)

  let content

  if (pathname === '/') content = <HomePage />
  else if (pathname === '/contact') content = <ContactPage />
  else if (pathname === '/privacy') content = <LegalPage type="privacy" />
  else if (pathname === '/terms') content = <LegalPage type="terms" />
  else {
    const page = pages[pathname] ?? pages['/who-we-are']
    content = <InteriorPage page={page} />
  }

  return (
    <>
      <Header />
      <main id="main">{content}</main>
      <Footer />
    </>
  )
}
