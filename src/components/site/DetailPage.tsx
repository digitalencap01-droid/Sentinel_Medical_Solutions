import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  FileImage,
  FileText,
  HeartHandshake,
  ImageOff,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { useMemo, useState } from 'react'
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
      <div className={`flex items-center justify-center bg-[var(--surface-alt)] text-[var(--muted)] ${className}`}>
        <ImageOff className="size-10 opacity-60" />
      </div>
    )
  }

  return <img src={src} alt={alt ?? ''} className={className} />
}

function DetailNotFound() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[var(--surface)] px-6 py-32 text-[var(--text)]">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_left,rgba(241,90,42,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(23,33,58,0.05),transparent_26%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-[var(--card-border)] bg-white p-10 text-center shadow-[0_24px_64px_rgba(17,24,39,0.08)]">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Page Not Found</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
          This detail page is not available.
        </h1>
        <p className="mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">
          The homepage remains available and all interactive areas continue to work from there.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(241,90,42,0.22)]"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}

const sectionNav = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'key-points', label: 'Key Points', icon: Sparkles },
  { id: 'visual-story', label: 'Visual Story', icon: FileImage },
  { id: 'faq', label: 'FAQ', icon: CircleHelp },
  { id: 'related-pages', label: 'Related Pages', icon: FileText },
]

const snapshotIcons = [ShieldCheck, Sparkles, Target]
const pointIcons = [Target, Users, HeartHandshake]

export function DetailPage() {
  const { id } = useParams<{ id: string }>()
  const detail = id ? detailRegistry[id] : undefined
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!detail) {
    return <DetailNotFound />
  }

  const relatedItems = (detail.relatedIds ?? []).map((relatedId) => detailRegistry[relatedId]).filter(Boolean)
  const galleryItems =
    detail.gallery && detail.gallery.length > 0
      ? detail.gallery
      : detail.image
        ? [{ src: detail.image, alt: detail.imageAlt, caption: detail.summary }]
        : []

  const snapshots = detail.stats?.slice(0, 3) ?? []
  const leadPoint = detail.highlights?.[0] ?? detail.summary
  const keyPoints = detail.highlights?.slice(0, 3) ?? []
  const priorityPoints = detail.highlights?.slice(1, 3) ?? []
  const sectionLabel = detail.section === 'About' ? 'About' : detail.section
  const selectedImage = galleryItems[selectedImageIndex] ?? galleryItems[0]
  const whyItMatters = useMemo(() => {
    if (detail.paragraphs[1]) {
      return detail.paragraphs[1]
    }

    return `This page gives the topic a clear structure, stronger context, and a cleaner reading flow for clients, partners, and procurement teams.`
  }, [detail.paragraphs])

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] pb-24 pt-[108px] text-[var(--text)]">
      <div className="absolute inset-0 opacity-90 [background-image:radial-gradient(circle_at_top_left,rgba(241,90,42,0.08),transparent_18%),radial-gradient(circle_at_100%_0%,rgba(23,33,58,0.05),transparent_20%),linear-gradient(180deg,#fffdfa,rgba(255,255,255,0.95))]" />

      <div className="relative mx-auto max-w-[1560px] px-4 sm:px-6 xl:px-8">
        <div className="rounded-[2rem] border border-[rgba(23,33,58,0.08)] bg-[rgba(255,255,255,0.76)] p-5 shadow-[0_20px_50px_rgba(17,24,39,0.05)] backdrop-blur-xl sm:p-7">
          <div className="grid items-start gap-6 xl:grid-cols-[270px_minmax(0,1fr)]">
            <aside className="space-y-5 xl:self-start">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="size-4" />
                Back to Homepage
              </Link>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-[rgba(241,90,42,0.14)] bg-[rgba(241,90,42,0.08)] px-5 py-3 text-sm font-semibold text-[var(--accent)]">
                  {detail.eyebrow}
                </div>
                <div className="rounded-full border border-[var(--divider)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-soft)]">
                  {sectionLabel}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-[rgba(23,33,58,0.08)] bg-[rgba(255,255,255,0.88)] p-5 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-strong)]">Page Overview</p>
                <div className="mt-5 space-y-2">
                  {sectionNav.map((item, index) => {
                    const Icon = item.icon
                    const isActive = index === 0

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-center gap-3 rounded-[1rem] px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? 'bg-[rgba(241,90,42,0.08)] text-[var(--accent)]'
                            : 'text-[var(--text-soft)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-strong)]'
                        }`}
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </a>
                    )
                  })}
                </div>

                <Link
                  to="/"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(241,90,42,0.18)] transition-colors hover:bg-[var(--accent-strong)]"
                >
                  <ArrowLeft className="size-4" />
                  Return to Homepage
                </Link>
              </div>
            </aside>

            <div className="space-y-6">
              <Reveal>
                <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.15fr]">
                  <div className="px-2 pt-3 sm:px-4 lg:px-6">
                    <h1 className="text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--text-strong)] sm:text-[3rem]">
                      {detail.title}
                    </h1>
                    <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-[var(--text-soft)]">{detail.summary}</p>

                    {galleryItems.length > 1 ? (
                      <div className="mt-8 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedImageIndex((current) =>
                              current === 0 ? galleryItems.length - 1 : current - 1,
                            )
                          }
                          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--divider)] bg-white text-[var(--text-strong)] transition-colors hover:text-[var(--accent)]"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="size-4.5" />
                        </button>

                        <div className="grid flex-1 gap-3 sm:grid-cols-3">
                          {galleryItems.slice(0, 3).map((image, index) => (
                            <button
                              key={`left-${image.src}-${index}`}
                              type="button"
                              onClick={() => setSelectedImageIndex(index)}
                              className={`overflow-hidden rounded-[1.2rem] border bg-white transition-all ${
                                selectedImageIndex === index
                                  ? 'border-[var(--accent)] shadow-[0_0_0_3px_rgba(241,90,42,0.12)]'
                                  : 'border-[var(--divider)] hover:border-[rgba(241,90,42,0.24)]'
                              }`}
                            >
                              <DetailImage src={image.src} alt={image.alt} className="h-24 w-full object-cover" />
                            </button>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedImageIndex((current) => (current + 1) % galleryItems.length)
                          }
                          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--divider)] bg-white text-[var(--text-strong)] transition-colors hover:text-[var(--accent)]"
                          aria-label="Next image"
                        >
                          <ChevronRight className="size-4.5" />
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[1.8rem] border border-[var(--divider)] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
                      <DetailImage
                        src={selectedImage?.src ?? detail.image}
                        alt={selectedImage?.alt ?? detail.imageAlt}
                        className="h-[260px] w-full object-cover sm:h-[340px] xl:h-[440px]"
                      />
                    </div>

                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.04}>
                <div className="grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(260px,1.4fr)]">
                  {snapshots.map((snapshot, index) => {
                    const Icon = snapshotIcons[index] ?? Sparkles

                    return (
                      <div
                        key={snapshot}
                        className="rounded-[1.6rem] border border-[var(--divider)] bg-white p-5 shadow-[0_12px_28px_rgba(17,24,39,0.04)]"
                      >
                        <div className="flex size-12 items-center justify-center rounded-full bg-[rgba(241,90,42,0.08)] text-[var(--accent)]">
                          <Icon className="size-5" />
                        </div>
                        <div className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Snapshot {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="mt-2 text-[1rem] leading-7 text-[var(--text-strong)]">{snapshot}</p>
                      </div>
                    )
                  })}

                  <div className="rounded-[1.6rem] border border-[var(--divider)] bg-white p-5 shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-full bg-[rgba(241,90,42,0.08)] text-[var(--accent)]">
                        <Target className="size-6" />
                      </div>
                      <div>
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          Detail Focus
                        </div>
                        <p className="mt-2 text-[1rem] leading-7 text-[var(--text-strong)]">{leadPoint}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.32fr)_320px]">
                <Reveal delay={0.08}>
                  <div
                    id="overview"
                    className="p-3 sm:p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-1 rounded-full bg-[var(--accent)]" />
                      <h2 className="text-[1.9rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">Overview</h2>
                    </div>

                    <div className="mt-6 max-w-3xl space-y-5">
                      {detail.paragraphs.slice(0, 2).map((paragraph) => (
                        <p key={paragraph} className="text-[1rem] leading-8 text-[var(--text-soft)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[1.4rem] border border-dashed border-[rgba(241,90,42,0.12)] bg-[linear-gradient(180deg,rgba(241,90,42,0.03),rgba(255,255,255,0))] px-4 py-6 sm:px-8">
                      <svg viewBox="0 0 720 180" className="h-40 w-full text-[rgba(241,90,42,0.22)]" aria-hidden="true">
                        <defs>
                          <pattern id="detail-dot-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect width="720" height="180" fill="url(#detail-dot-grid)" opacity="0.55" />
                        <path
                          d="M70 120C150 70 220 145 305 98C388 54 466 140 547 88C596 57 646 80 676 114"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {[70, 305, 470, 676].map((x) => (
                          <g key={x} transform={`translate(${x} 0)`}>
                            <circle cx="0" cy="120" r="5" fill="white" stroke="currentColor" strokeWidth="3" />
                            <path d="M0 104c8 0 14 6 14 14 0 10-14 24-14 24S-14 128-14 118c0-8 6-14 14-14Z" fill="none" stroke="currentColor" strokeWidth="2" />
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>
                </Reveal>

                <div className="space-y-6">
                  <Reveal delay={0.1}>
                    <div className="rounded-[1.5rem] border border-[rgba(23,33,58,0.08)] bg-[rgba(255,255,255,0.82)] p-6 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[rgba(241,90,42,0.08)] text-[var(--accent)]">
                          <Lightbulb className="size-6" />
                        </div>
                        <div>
                          <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--text-strong)]">
                            Why It Matters
                          </p>
                          <p className="mt-3 text-[1rem] leading-8 text-[var(--text-soft)]">{whyItMatters}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {priorityPoints.length > 0 ? (
                    <Reveal delay={0.12}>
                      <div className="rounded-[1.5rem] border border-[rgba(23,33,58,0.08)] bg-[rgba(255,255,255,0.82)] p-6 backdrop-blur-sm">
                        <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--text-strong)]">
                          Priority Points
                        </p>
                        <div className="mt-5 space-y-4">
                          {priorityPoints.map((point, index) => (
                            <div key={point} className="flex gap-4">
                              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[rgba(241,90,42,0.16)] bg-[rgba(241,90,42,0.04)] font-mono text-xs text-[var(--accent)]">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <p className="pt-1 text-[0.98rem] leading-7 text-[var(--text-soft)]">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ) : null}
                </div>
              </div>

              {keyPoints.length > 0 ? (
                <Reveal delay={0.14}>
                  <div
                    id="key-points"
                    className="pt-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h2 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                        Key points connected to this topic
                      </h2>
                      <div className="rounded-full border border-[var(--divider)] bg-[var(--surface)] px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">
                        {keyPoints.length} items
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                      {keyPoints.map((point, index) => {
                        const Icon = pointIcons[index] ?? Sparkles

                        return (
                          <div key={point} className="rounded-[1.35rem] border border-[var(--divider)] bg-white p-5">
                            <div className="flex items-start gap-4">
                              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[rgba(241,90,42,0.08)] text-[var(--accent)]">
                                <Icon className="size-6" />
                              </div>
                              <div>
                                <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                                  {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="mt-2 text-[1rem] leading-7 text-[var(--text-strong)]">{point}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Reveal>
              ) : null}

              {galleryItems.length > 0 ? (
                <Reveal delay={0.16}>
                  <div
                    id="visual-story"
                    className="pt-2"
                  >
                    <h2 className="text-[1.9rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                      {detail.galleryTitle ?? `${detail.title} in focus.`}
                    </h2>
                    <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-[var(--muted)]">
                      {detail.galleryIntro ??
                        `These visuals support the story behind ${detail.title.toLowerCase()} and make the page feel more connected to the content you opened.`}
                    </p>

                    <div className="mt-6 grid gap-5 lg:grid-cols-3">
                      {galleryItems.slice(0, 3).map((image, index) => (
                        <div key={`${image.src}-${index}`} className="overflow-hidden rounded-[1.35rem] border border-[var(--divider)] bg-white">
                          <DetailImage src={image.src} alt={image.alt} className="h-48 w-full object-cover" />
                          <div className="p-4">
                            <p className="text-[0.98rem] leading-7 text-[var(--text-soft)]">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : null}

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_320px]">
                {detail.faqs && detail.faqs.length > 0 ? (
                  <Reveal delay={0.18}>
                    <div
                      id="faq"
                      className="pt-2"
                    >
                      <h2 className="text-[1.9rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                        Common questions about this area
                      </h2>

                      <div className="mt-6 space-y-3">
                        {detail.faqs.map((faq, index) => {
                          const isOpen = openFaqIndex === index

                          return (
                            <div
                              key={faq.question}
                              className={`overflow-hidden rounded-[1.2rem] border ${
                                isOpen
                                  ? 'border-[rgba(241,90,42,0.16)] bg-[linear-gradient(180deg,rgba(241,90,42,0.05),rgba(255,255,255,0.96))]'
                                  : 'border-[var(--divider)] bg-white'
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[rgba(241,90,42,0.08)] font-mono text-[0.64rem] text-[var(--accent)]">
                                    {String(index + 1).padStart(2, '0')}
                                  </div>
                                  <div>
                                    <p
                                      className={`text-[0.98rem] font-semibold leading-6 ${
                                        isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-strong)]'
                                      }`}
                                    >
                                      {faq.question}
                                    </p>
                                    {isOpen ? (
                                      <p className="mt-3 max-w-4xl text-[0.95rem] leading-7 text-[var(--text-soft)]">
                                        {faq.answer}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>
                                <ChevronDown
                                  className={`mt-1 size-4 shrink-0 text-[var(--accent)] transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {!isOpen ? (
                                <motion.div
                                  initial={false}
                                  animate={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: easeOut }}
                                />
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Reveal>
                ) : null}

                {relatedItems.length > 0 ? (
                  <Reveal delay={0.2}>
                    <div
                      id="related-pages"
                      className="rounded-[1.5rem] border border-[rgba(23,33,58,0.08)] bg-[rgba(255,255,255,0.82)] p-6 backdrop-blur-sm"
                    >
                      <h2 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                        Related pages
                      </h2>

                      <div className="mt-5 space-y-2">
                        {relatedItems.slice(0, 3).map((item) => (
                          <Link
                            key={item.id}
                            to={getDetailPath(item.id)}
                            className="group flex items-center justify-between gap-3 rounded-[1.05rem] border border-[var(--divider)] px-4 py-4 text-sm transition-colors hover:bg-[var(--surface-alt)]"
                          >
                            <span className="leading-6 text-[var(--text-soft)]">{item.title}</span>
                            <ChevronRight className="size-4 shrink-0 text-[var(--text-soft)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/"
                        className="mt-4 inline-flex w-full items-center justify-between rounded-[1.05rem] border border-[rgba(241,90,42,0.16)] bg-[rgba(241,90,42,0.05)] px-4 py-4 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[rgba(241,90,42,0.1)]"
                      >
                        View all related pages
                        <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  </Reveal>
                ) : null}
              </div>
        </div>
      </div>
    </section>
  )
}
