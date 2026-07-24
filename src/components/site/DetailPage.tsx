import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronRight, ImageOff, Layers3, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detailRegistry, getDetailPath } from './detailContent'
import { easeOut, Reveal } from './shared'

function DetailImage({
  src,
  alt,
  className = '',
}: {
  src?: string
  alt?: string
  className?: string
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--surface-alt)] text-[var(--muted)] ${className}`}
      >
        <ImageOff className="size-10 opacity-60" />
      </div>
    )
  }

  return <img src={src} alt={alt ?? ''} className={className} />
}

function LeadershipProfilePage({
  detail,
  relatedItems,
}: {
  detail: (typeof detailRegistry)[string]
  relatedItems: Array<(typeof detailRegistry)[string]>
}) {
  const biographyParagraphs = detail.paragraphs.length > 0 ? detail.paragraphs : [detail.summary]

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] pb-24 pt-24 text-[var(--text)]">
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.09),transparent_24%),linear-gradient(180deg,transparent,rgba(79,168,201,0.03))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_24px_60px_rgba(14,27,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_420px]">
              <div className="p-8 sm:p-10 lg:p-12">
                <Link
                  to="/leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                >
                  <ArrowLeft className="size-3.5" />
                  Back to Leadership
                </Link>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-wash)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                  <Sparkles className="size-3.5" />
                  Leadership Profile
                </div>

                <h1 className="mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--text-strong)] sm:text-[3rem]">
                  {detail.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.05rem]">
                  {detail.summary}
                </p>

                {detail.stats && detail.stats.length > 0 ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {detail.stats.map((stat, index) => (
                      <div
                        key={stat}
                        className="rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4"
                      >
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Snapshot {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="border-t border-[var(--divider)] bg-[var(--surface-alt)] p-5 lg:border-l lg:border-t-0 lg:p-6">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <DetailImage src={detail.image} alt={detail.imageAlt} className="h-[360px] w-full object-cover" />
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-[var(--divider)] bg-[var(--card-bg)] p-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    Profile Focus
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                    {detail.highlights?.[0] ?? detail.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-[0_20px_52px_rgba(14,27,42,0.06)] sm:p-10">
              <div className="max-w-4xl">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Biography</p>
                <div className="mt-6 space-y-6">
                  {biographyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[1rem] leading-8 text-[var(--text-soft)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
            {relatedItems.length > 0 ? (
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Related Pages</p>
                  <div className="mt-5 grid gap-3">
                    {relatedItems.map((item) => (
                      <Link
                        key={item.id}
                        to={getDetailPath(item.id)}
                        className="group rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-4 transition-all hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-strong)]">{item.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                              {item.section}
                            </p>
                          </div>
                          <ChevronRight className="size-4 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  )
}

function DetailNotFound() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[var(--surface)] px-6 py-32 text-[var(--text)]">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(79,168,201,0.07),transparent_24%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-10 text-center shadow-[0_24px_64px_rgba(14,27,42,0.08)]">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Page Not Found</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
          This detail page is not available.
        </h1>
        <p className="mt-4 text-[0.96rem] leading-7 text-[var(--muted)]">
          The homepage remains available and all interactive areas continue to work from there.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(79,168,201,0.24)]"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export function DetailPage() {
  const { id } = useParams<{ id: string }>()
  const detail = id ? detailRegistry[id] : undefined
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  if (!detail) {
    return <DetailNotFound />
  }

  const relatedItems = (detail.relatedIds ?? []).map((relatedId) => detailRegistry[relatedId]).filter(Boolean)
  const statCards = detail.stats?.slice(0, 4) ?? []
  const leadHighlight = detail.highlights?.[0] ?? detail.summary
  const supportHighlights = detail.highlights?.slice(1, 5) ?? []
  const galleryItems =
    detail.gallery && detail.gallery.length > 0
      ? detail.gallery
      : detail.image
        ? [
            {
              src: detail.image,
              alt: detail.imageAlt,
              caption: 'Primary topic visual.',
            },
          ]
        : []

  if (detail.section === 'Leadership') {
    return <LeadershipProfilePage detail={detail} relatedItems={relatedItems} />
  }

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] pb-24 pt-24 text-[var(--text)]">
      <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_24%),radial-gradient(circle_at_90%_18%,rgba(79,168,201,0.06),transparent_22%),linear-gradient(180deg,transparent,rgba(79,168,201,0.03))]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_24px_64px_rgba(14,27,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
              <div className="p-8 sm:p-10 lg:p-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                >
                  <ArrowLeft className="size-3.5" />
                  Back to Home
                </Link>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-wash)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                    <Sparkles className="size-3.5" />
                    {detail.eyebrow}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-soft)]">
                    <Layers3 className="size-3.5 text-[var(--accent)]" />
                    {detail.section}
                  </div>
                </div>

                <h1 className="mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--text-strong)] sm:text-[3rem] xl:text-[3.45rem]">
                  {detail.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.05rem]">
                  {detail.summary}
                </p>

                {statCards.length > 0 ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {statCards.map((stat, index) => (
                      <motion.div
                        key={stat}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.42, delay: index * 0.05, ease: easeOut }}
                        className="rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4"
                      >
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Snapshot {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="border-t border-[var(--divider)] bg-[var(--surface-alt)] p-5 lg:border-l lg:border-t-0 lg:p-6">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <DetailImage src={detail.image} alt={detail.imageAlt} className="h-[340px] w-full object-cover lg:h-[420px]" />
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[var(--divider)] bg-[var(--card-bg)] p-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    Detail Focus
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{leadHighlight}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <Reveal delay={0.05}>
              <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-[0_20px_52px_rgba(14,27,42,0.06)] sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Overview</p>
                    <div className="mt-6 space-y-5">
                      {detail.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[0.98rem] leading-8 text-[var(--text-soft)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-5">
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                        Why It Matters
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                        This page gives the topic a clear structure, stronger context, and a cleaner reading flow for clients, partners, and procurement teams.
                      </p>
                    </div>

                    {supportHighlights.length > 0 ? (
                      <div className="rounded-[1.5rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-5">
                        <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Priority Points
                        </div>
                        <div className="mt-4 space-y-3">
                          {supportHighlights.map((highlight, index) => (
                            <div key={highlight} className="flex gap-3">
                              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] text-[var(--accent)]">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <p className="text-sm leading-6 text-[var(--text-soft)]">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>

            {detail.highlights && detail.highlights.length > 0 ? (
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-[0_20px_52px_rgba(14,27,42,0.06)] sm:p-10">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Highlights</p>
                      <h2 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-[1.65rem]">
                        Key points connected to this topic
                      </h2>
                    </div>
                    <div className="rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-soft)]">
                      {detail.highlights.length} items
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {detail.highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.04, ease: easeOut }}
                        className="rounded-[1.35rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] text-[var(--accent)]">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <p className="text-[0.95rem] leading-7 text-[var(--text-soft)]">{highlight}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}

            {galleryItems.length > 0 ? (
              <Reveal delay={0.12}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-[0_20px_52px_rgba(14,27,42,0.06)] sm:p-10">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Visual Story</p>
                    <h2 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-[1.65rem]">
                      {detail.galleryTitle ?? `${detail.title} in focus`}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {detail.galleryIntro ??
                        `Supporting visuals help explain ${detail.title.toLowerCase()} in a cleaner and more tangible way.`}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <div className="overflow-hidden rounded-[1.5rem] border border-[var(--divider)] bg-[var(--surface-alt)]">
                      <div className="relative h-[320px] overflow-hidden">
                        <DetailImage
                          src={galleryItems[0]?.src}
                          alt={galleryItems[0]?.alt}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-sm leading-7 text-[var(--text-soft)]">{galleryItems[0]?.caption}</p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {galleryItems.slice(1, 3).map((image, index) => (
                        <div
                          key={image.src}
                          className="overflow-hidden rounded-[1.4rem] border border-[var(--divider)] bg-[var(--surface-alt)]"
                        >
                          <div className="relative h-[180px] overflow-hidden">
                            <DetailImage
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                            />
                          </div>
                          <div className="p-4">
                            <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                              Image {String(index + 2).padStart(2, '0')}
                            </div>
                            <p className="mt-2 text-[0.9rem] leading-6 text-[var(--text-soft)]">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : null}

            {detail.faqs && detail.faqs.length > 0 ? (
              <Reveal delay={0.14}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-[0_20px_52px_rgba(14,27,42,0.06)] sm:p-10">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">FAQs</p>
                    <h2 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-[1.65rem]">
                      Common questions about this area
                    </h2>
                  </div>

                  <div className="mt-6 space-y-3">
                    {detail.faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index

                      return (
                        <div
                          key={faq.question}
                          className={`overflow-hidden rounded-[1.35rem] border transition-colors ${
                            isOpen
                              ? 'border-[var(--accent-soft)] bg-[var(--accent-wash)]'
                              : 'border-[var(--divider)] bg-[var(--surface-alt)]'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                          >
                            <div className="flex items-start gap-4">
                              <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] text-[var(--accent)]">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[0.97rem] font-semibold leading-6 text-[var(--text-strong)]">
                                {faq.question}
                              </span>
                            </div>
                            <ChevronDown
                              className={`size-4 shrink-0 text-[var(--accent)] transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.24, ease: easeOut }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[var(--divider)] px-5 py-4 sm:px-6">
                              <p className="text-[0.94rem] leading-7 text-[var(--text-soft)]">{faq.answer}</p>
                            </div>
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>

          <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Page Summary</p>
                <div className="mt-5 space-y-3">
                  <div className="rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4">
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                      Category
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[var(--text-strong)]">{detail.section}</p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4">
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                      Topic
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{detail.eyebrow}</p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4">
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                      Focus
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{leadHighlight}</p>
                  </div>
                </div>

                <Link
                  to="/"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(79,168,201,0.24)] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowLeft className="size-4" />
                  Return to Homepage
                </Link>
              </div>
            </Reveal>

            {relatedItems.length > 0 ? (
              <Reveal delay={0.12}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Related Pages</p>
                  <div className="mt-5 grid gap-3">
                    {relatedItems.map((item, index) => (
                      <Link
                        key={item.id}
                        to={getDetailPath(item.id)}
                        className="group rounded-[1.25rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-4 transition-all hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                              Related {String(index + 1).padStart(2, '0')}
                            </div>
                            <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-strong)]">
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                              {item.section}
                            </p>
                          </div>
                          <ChevronRight className="mt-1 size-4 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  )
}
