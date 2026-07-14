import { motion } from 'framer-motion'
import { clients } from './content'
import { lightSection, SectionIntro } from './shared'

export function ClientsSection() {
  const hasRealLogo = (logoUrl: string) => !logoUrl.startsWith('/placeholders/')

  return (
    <section id="clients" className={`${lightSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Our Clients"
          title="Trusted by Institutions Across Our Operating Markets."
          body="Sentinel works alongside institutional and commercial partners who rely on disciplined sourcing and dependable execution."
        />

        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-soft)] hover:shadow-[0_12px_28px_rgba(79,168,201,0.1)]"
            >
              {hasRealLogo(client.logoUrl) ? (
                <>
                  <div
                    className={`flex h-14 w-full items-center justify-center ${
                      client.name === 'Imbono' || client.name === 'Sirius Holding'
                        ? 'rounded-2xl bg-slate-900 px-4 py-3'
                        : ''
                    }`}
                  >
                    <img
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      className="max-h-full w-auto max-w-full object-contain"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                    {client.name}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-base font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                    {client.name}
                  </span>
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[var(--text-soft)] opacity-60">
                    Logo pending
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/*
          Testimonial scaffold — leave commented out until the client supplies quotes
          (brief 1.2, optional). Expected shape once ready:

          type Testimonial = { quote: string; attribution: string; clientName: string }

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.attribution} className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7">
                <p className="text-base leading-8 text-[var(--text-soft)]">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-[var(--text-strong)]">
                  {t.attribution} — {t.clientName}
                </footer>
              </blockquote>
            ))}
          </div>
        */}
      </div>
    </section>
  )
}
