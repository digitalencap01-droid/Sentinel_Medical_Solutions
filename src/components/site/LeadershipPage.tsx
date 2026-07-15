import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { leadershipTeam } from './content'
import { getDetailPath, leadershipDetailIds } from './detailContent'
import { easeOut, lightSection, PlaceholderRibbon, Reveal, SectionIntro } from './shared'

const fallbackLeadershipProfiles = [
  {
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    quote:
      'Sentinel builds trust by combining disciplined healthcare supply execution with responsive partner stewardship across every market we serve.',
    accent: '#0f9f7a',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    quote:
      'We focus on strong coordination between sourcing, logistics and commercial teams so healthcare delivery remains dependable at scale.',
    accent: '#8b2bb8',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    quote:
      'Our leadership approach keeps quality, continuity and partner confidence at the center of the operating model.',
    accent: '#56baf2',
  },
]

function getLeadershipProfile(index: number) {
  const member = leadershipTeam[index]
  const fallback = fallbackLeadershipProfiles[index % fallbackLeadershipProfiles.length]

  if (!member) {
    return null
  }

  const isPlaceholder = Boolean(member.isPlaceholder)

  return {
    ...member,
    displayName: isPlaceholder ? `Leadership Profile ${String(index + 1).padStart(2, '0')}` : member.name,
    displayDesignation: isPlaceholder ? 'Executive Leadership' : member.designation,
    displayQuote: isPlaceholder ? fallback.quote : member.bio,
    image: isPlaceholder ? fallback.image : member.photoUrl,
    accent: fallback.accent,
    isPlaceholder,
  }
}

export function LeadershipPage() {
  const profiles = leadershipTeam.map((_, index) => getLeadershipProfile(index)).filter(Boolean)

  return (
    <section className={`${lightSection} relative overflow-hidden pb-24 pt-24`}>
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(79,168,201,0.07),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--card-border)] bg-[color:color-mix(in_srgb,var(--card-bg)_90%,transparent)] p-7 shadow-[0_24px_64px_rgba(14,27,42,0.08)] md:p-9">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              <ArrowLeft className="size-3.5" />
              Back to Home
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.75fr)] lg:items-end">
              <SectionIntro
                eyebrow="Leadership Team"
                title="Leadership Profiles Driving Sentinel Forward."
                body="A dedicated leadership page gives each executive profile more space, stronger visual presence and a clearer narrative than a compact homepage card."
              />

              <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--surface-alt)] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Leadership Note</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  These profiles currently use presentation-ready fallback imagery where client-approved portraits are still pending.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-8">
          {profiles.map((profile, index) => {
            if (!profile) {
              return null
            }

            const reverse = index % 2 === 1

            return (
              <Reveal key={`${profile.displayName}-${index}`} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_24px_64px_rgba(14,27,42,0.08)]"
                >
                  <div
                    className={`grid gap-0 bg-[var(--divider)] lg:grid-cols-2 ${reverse ? 'lg:[direction:rtl]' : ''}`}
                  >
                    <div className="relative bg-[var(--surface-alt)]">
                      <div
                        className="absolute inset-x-0 top-0 h-4"
                        style={{ backgroundColor: profile.accent }}
                        aria-hidden="true"
                      />
                      <div className="relative p-5 md:p-7">
                        <div className="overflow-hidden rounded-[1.5rem] bg-[var(--surface)]">
                          <img
                            src={profile.image}
                            alt={profile.displayName}
                            className="h-[300px] w-full object-cover sm:h-[420px]"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`bg-[var(--card-bg)] p-7 md:p-10 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="max-w-[28rem]">
                        {profile.isPlaceholder ? <PlaceholderRibbon className="mb-5" /> : null}

                        <Quote
                          className="size-10"
                          style={{ color: profile.accent }}
                          aria-hidden="true"
                        />

                        <p className="mt-4 text-[1.18rem] leading-[1.9] tracking-[-0.02em] text-[var(--text-strong)] sm:text-[1.28rem]">
                          {profile.displayQuote}
                        </p>

                        <div className="mt-10">
                          <h2 className="text-[1.7rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                            {profile.displayName}
                          </h2>
                          <p className="mt-2 text-[1rem] leading-7 text-[var(--muted)]">
                            {profile.displayDesignation}
                          </p>
                        </div>

                        <Link
                          to={getDetailPath(leadershipDetailIds[index])}
                          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                        >
                          View full profile
                          <ChevronRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
