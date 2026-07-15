import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ImageOff,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detailRegistry, getDetailPath } from './detailContent'
import { easeOut, Reveal } from './shared'

function LeadershipProfilePage({
  detail,
  relatedItems,
}: {
  detail: (typeof detailRegistry)[string]
  relatedItems: Array<(typeof detailRegistry)[string]>
}) {
  const biographyParagraphs = detail.paragraphs.length > 0 ? detail.paragraphs : [detail.summary]

  return (
    <section className="bg-[var(--surface)] pb-24 pt-24 text-[var(--text)]">
      <div className="mx-auto max-w-[1600px]">
        <div className="px-6">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            <ArrowLeft className="size-3.5" />
            Back to Leadership
          </Link>
        </div>

        <Reveal>
          <div className="mt-6 overflow-hidden border-y border-[var(--divider)] bg-[#edf5fb]">
            <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)]">
              <div className="flex items-center px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
                <div className="max-w-3xl">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Leadership Profile
                  </p>
                  <h1 className="mt-5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#183f74] sm:text-[3.4rem]">
                    {detail.title}
                  </h1>
                  <p className="mt-3 text-[1.2rem] leading-8 text-[#224f88] sm:text-[1.45rem]">
                    {detail.summary}
                  </p>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-bl-[4rem]">
                <img
                  src={detail.image}
                  alt={detail.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-6xl px-6">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
            <Reveal delay={0.05}>
              <div className="max-w-4xl">
                <div className="space-y-7">
                  {biographyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[1.05rem] leading-[1.85] text-[var(--text-strong)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              {detail.stats && detail.stats.length > 0 ? (
                <Reveal delay={0.1}>
                  <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_16px_40px_rgba(14,27,42,0.06)]">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Executive Snapshot
                    </p>
                    <div className="mt-4 grid gap-3">
                      {detail.stats.map((stat, index) => (
                        <div
                          key={stat}
                          className="rounded-[1.1rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4"
                        >
                          <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                            Profile {String(index + 1).padStart(2, '0')}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : null}

              {relatedItems.length > 0 ? (
                <Reveal delay={0.14}>
                  <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_16px_40px_rgba(14,27,42,0.06)]">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Related Pages
                    </p>
                    <div className="mt-4 grid gap-3">
                      {relatedItems.map((item) => (
                        <Link
                          key={item.id}
                          to={getDetailPath(item.id)}
                          className="group rounded-[1.15rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4 transition-all hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)]"
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
            </div>
          </div>
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
  const leadHighlight = detail.highlights?.[0]
  const secondaryHighlights = detail.highlights?.slice(1, 5) ?? []

  if (detail.section === 'Leadership') {
    return <LeadershipProfilePage detail={detail} relatedItems={relatedItems} />
  }

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] pb-24 pt-24 text-[var(--text)]">
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_26%),radial-gradient(circle_at_85%_14%,rgba(79,168,201,0.07),transparent_22%),linear-gradient(180deg,transparent,rgba(79,168,201,0.02))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--card-border)] bg-[color:color-mix(in_srgb,var(--card-bg)_84%,transparent)] p-3 shadow-[0_24px_64px_rgba(14,27,42,0.08)] backdrop-blur-sm">
            <div className="grid gap-0 overflow-hidden rounded-[1.6rem] bg-[var(--surface-alt)] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-9 lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,168,201,0.12),transparent_28%)]" />
                <div className="absolute -right-24 top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(79,168,201,0.12),transparent_66%)] blur-3xl" />

                <div className="relative">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                  >
                    <ArrowLeft className="size-3.5" />
                    Back to Home
                  </Link>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-wash)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                    <Sparkles className="size-3.5" />
                    {detail.eyebrow}
                  </div>

                  <h1 className="mt-5 max-w-3xl text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--text-strong)] sm:text-[3rem] xl:text-[3.5rem]">
                    {detail.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.04rem]">
                    {detail.summary}
                  </p>
                </div>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                  {statCards.map((stat, index) => (
                    <motion.div
                      key={stat}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index, ease: easeOut }}
                      className="rounded-[1.35rem] border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-4 shadow-[0_8px_20px_rgba(14,27,42,0.04)]"
                    >
                      <div className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                        Snapshot {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[320px] border-t border-[var(--card-border)] lg:min-h-[100%] lg:border-l lg:border-t-0">
                {detail.image ? (
                  <img src={detail.image} alt={detail.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-alt)] text-[var(--muted)]">
                    <ImageOff className="size-10 opacity-60" />
                  </div>
                )}

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,27,42,0.1),rgba(14,27,42,0.64))]" />
                <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-black/10 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/82 backdrop-blur-sm">
                    <Layers3 className="size-3.5" />
                    {detail.section}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-[1.5rem] border border-white/14 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/70">
                      Detail Focus
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/92">
                      {leadHighlight ?? detail.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                <div className="grid gap-px bg-[var(--divider)] lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)]">
                  <div className="bg-[var(--card-bg)] p-7 md:p-8">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      <span className="size-2 rounded-full bg-[var(--accent)]" />
                      Overview
                    </div>
                    <div className="mt-6 space-y-5">
                      {detail.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[0.98rem] leading-8 text-[var(--text-soft)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[var(--surface-alt)] p-7 md:p-8">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Why It Matters
                    </div>
                    <div className="mt-5 rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
                      <p className="text-[1.15rem] font-semibold leading-7 tracking-[-0.02em] text-[var(--text-strong)]">
                        {detail.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        This page turns a static homepage item into a richer destination with context, clearer structure and a more immersive browsing experience.
                      </p>
                    </div>

                    {secondaryHighlights.length > 0 ? (
                      <div className="mt-5 space-y-3">
                        {secondaryHighlights.map((highlight, index) => (
                          <div
                            key={highlight}
                            className="flex gap-3 rounded-[1.25rem] border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-4"
                          >
                            <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-wash)] font-mono text-[0.66rem] text-[var(--accent)]">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <p className="text-[0.92rem] leading-6 text-[var(--text-soft)]">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>

            {detail.highlights && detail.highlights.length > 0 ? (
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-[0_20px_52px_rgba(14,27,42,0.06)] md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Highlights</p>
                      <h2 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                        Key points connected to this topic.
                      </h2>
                    </div>
                    <div className="hidden rounded-full border border-[var(--card-border)] bg-[var(--surface-alt)] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-soft)] sm:inline-flex">
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
                        className="group relative overflow-hidden rounded-[1.45rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-[color:color-mix(in_srgb,var(--accent-wash)_72%,var(--surface-alt))]"
                      >
                        <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                        <div className="flex items-start gap-4">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.68rem] text-[var(--accent)] shadow-[0_6px_16px_rgba(14,27,42,0.05)]">
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

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-[0_20px_52px_rgba(14,27,42,0.06)] md:p-8">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Visual Story</p>
                  <h2 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                    {detail.galleryTitle ?? `${detail.title} in focus.`}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {detail.galleryIntro ??
                      `Supporting visuals make ${detail.title.toLowerCase()} easier to explore and give the page more presence on mobile and desktop.`}
                  </p>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
                  {(detail.gallery ?? [
                    {
                      src: detail.image,
                      alt: detail.imageAlt,
                      caption: 'Primary topic visual.',
                    },
                  ]).slice(0, 1).map((image) => (
                    <div key={image.src} className="group overflow-hidden rounded-[1.6rem] border border-[var(--divider)] bg-[var(--surface-alt)]">
                      <div className="relative h-[320px] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,27,42,0.06),rgba(14,27,42,0.38))]" />
                      </div>
                      <div className="p-5">
                        <p className="text-sm leading-7 text-[var(--text-soft)]">{image.caption}</p>
                      </div>
                    </div>
                  ))}

                  <div className="grid gap-4">
                    {(detail.gallery ?? []).slice(1, 3).map((image, index) => (
                      <div
                        key={image.src}
                        className="group overflow-hidden rounded-[1.45rem] border border-[var(--divider)] bg-[var(--surface-alt)]"
                      >
                        <div className="relative h-[180px] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,27,42,0.04),rgba(14,27,42,0.28))]" />
                          <div className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                            Image {String(index + 2).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-[0.9rem] leading-6 text-[var(--text-soft)]">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {detail.faqs && detail.faqs.length > 0 ? (
              <Reveal delay={0.14}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-[0_20px_52px_rgba(14,27,42,0.06)] md:p-8">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">FAQs</p>
                    <h2 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                      Common questions visitors may ask here.
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      These answers help the page feel complete and support users who want quick clarity before moving deeper into the site.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {detail.faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index
                      return (
                        <div
                          key={faq.question}
                          className={`overflow-hidden rounded-[1.35rem] border transition-all ${
                            isOpen
                              ? 'border-[var(--accent-soft)] bg-[color:color-mix(in_srgb,var(--accent-wash)_54%,var(--surface-alt))]'
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
              <div className="overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                <div className="border-b border-[var(--divider)] bg-[var(--surface-alt)] px-6 py-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Quick Navigation</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Move through connected pages without going back and losing context.
                  </p>
                </div>

                <div className="p-6">
                  <Link
                    to="/"
                    className="group flex items-center justify-between rounded-[1.35rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4 transition-all hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-strong)]">Return to Homepage</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Main site overview</p>
                    </div>
                    <ExternalLink className="size-4 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <div className="mt-4 grid gap-3">
                    {statCards.map((stat, index) => (
                      <div
                        key={stat}
                        className="rounded-[1.2rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-4"
                      >
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Quick Fact {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {relatedItems.length > 0 ? (
              <Reveal delay={0.12}>
                <div className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_52px_rgba(14,27,42,0.06)]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Related Pages</p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                    Continue exploring connected content.
                  </h3>

                  <div className="mt-5 grid gap-3">
                    {relatedItems.map((item, index) => (
                      <Link
                        key={item.id}
                        to={getDetailPath(item.id)}
                        className="group rounded-[1.3rem] border border-[var(--divider)] bg-[var(--surface-alt)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-[color:color-mix(in_srgb,var(--accent-wash)_72%,var(--surface-alt))]"
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
