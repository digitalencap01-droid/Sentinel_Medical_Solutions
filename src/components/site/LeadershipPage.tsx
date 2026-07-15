import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { advisoryBoard, leadershipTeam } from './content'
import { advisoryDetailIds, getDetailPath, leadershipDetailIds } from './detailContent'
import { easeOut, lightSection, PlaceholderRibbon, Reveal } from './shared'

const fallbackLeadershipProfiles = [
  {
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80',
    quote:
      'Sentinel builds trust by combining disciplined healthcare supply execution with responsive partner stewardship across every market we serve.',
    accent: '#0f9f7a',
    role: 'Commercial stewardship',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=80',
    quote:
      'We focus on strong coordination between sourcing, logistics and commercial teams so healthcare delivery remains dependable at scale.',
    accent: '#da8a1f',
    role: 'Operational coordination',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=80',
    quote:
      'Our leadership approach keeps quality, continuity and partner confidence at the center of the operating model.',
    accent: '#2f8fc4',
    role: 'Strategic continuity',
  },
]

const fallbackAdvisoryProfiles = [
  {
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80',
    quote:
      'Independent advisory perspectives help Sentinel pressure-test strategic decisions across markets, supply continuity and healthcare partnerships.',
    accent: '#7a5cc7',
    role: 'Governance counsel',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    quote:
      'The advisory board brings cross-border experience and external judgment that strengthens execution discipline and long-term direction.',
    accent: '#4b8ea9',
    role: 'Strategic perspective',
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
    displayRole: fallback.role,
    image: isPlaceholder ? fallback.image : member.photoUrl,
    accent: fallback.accent,
    isPlaceholder,
  }
}

function getAdvisoryProfile(index: number) {
  const member = advisoryBoard[index]
  const fallback = fallbackAdvisoryProfiles[index % fallbackAdvisoryProfiles.length]

  if (!member) {
    return null
  }

  const isPlaceholder = Boolean(member.isPlaceholder)

  return {
    ...member,
    displayName: isPlaceholder ? `Advisory Profile ${String(index + 1).padStart(2, '0')}` : member.name,
    displayDesignation: 'Advisory Board',
    displayQuote: isPlaceholder ? fallback.quote : member.background,
    displayRole: fallback.role,
    image: isPlaceholder ? fallback.image : member.photoUrl,
    accent: fallback.accent,
    isPlaceholder,
  }
}

export function LeadershipPage({ initialTab = 'leadership' }: { initialTab?: 'leadership' | 'advisory' }) {
  const profiles = leadershipTeam.map((_, index) => getLeadershipProfile(index)).filter(Boolean)
  const advisoryProfiles = advisoryBoard.map((_, index) => getAdvisoryProfile(index)).filter(Boolean)
  const [activeTab, setActiveTab] = useState<'leadership' | 'advisory'>(initialTab)

  const activeProfiles = activeTab === 'leadership' ? profiles : advisoryProfiles

  return (
    <section className={`${lightSection} relative overflow-hidden pb-24 pt-24`}>
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(79,168,201,0.07),transparent_24%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              <ArrowLeft className="size-3.5" />
              Back to Home
            </Link>

            <p className="mt-8 text-sm tracking-[0.02em] text-[var(--text-soft)]">Sentinel Leadership</p>
            <h1 className="mt-3 text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--text-strong)] sm:text-[4.25rem]">
              Meet our team
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              Learn more about the leadership team guiding Sentinel Medical Solutions across sourcing, distribution,
              governance and partner execution in every operating market.
            </p>

            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] p-2 shadow-[0_10px_30px_rgba(14,27,42,0.05)]">
              <button
                type="button"
                onClick={() => setActiveTab('leadership')}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  activeTab === 'leadership'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-soft)] hover:text-[var(--accent)]'
                }`}
              >
                Leadership Team
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('advisory')}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'advisory'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-soft)] hover:text-[var(--accent)]'
                }`}
              >
                Advisory Board
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-sm tracking-[0.02em] text-[var(--text-soft)]">
              {activeTab === 'leadership' ? 'Sentinel Leadership' : 'Sentinel Advisory Board'}
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--text-strong)] sm:text-[2.5rem]">
              {activeTab === 'leadership'
                ? 'Leadership profiles shaping execution'
                : 'Independent guidance shaping strategy'}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-8 text-[var(--muted)]">
              {activeTab === 'leadership'
                ? 'Explore the team responsible for commercial direction, operational discipline and partner-facing leadership across Sentinel Medical Solutions.'
                : 'Explore the advisory voices that help strengthen governance, challenge assumptions and support long-term strategic clarity.'}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {activeProfiles.map((profile, index) => {
            if (!profile) {
              return null
            }

            const reverse = index % 2 === 1

            return (
              <Reveal key={`${profile.displayName}-${index}`} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.22, ease: easeOut }}
                  className="mx-auto max-w-5xl"
                >
                  <div
                    className={`grid items-center gap-8 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.95fr)] ${
                      reverse ? 'lg:[direction:rtl]' : ''
                    }`}
                  >
                    <div className={`${reverse ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="overflow-hidden bg-[var(--surface-alt)]">
                        <img
                          src={profile.image}
                          alt={profile.displayName}
                          className="aspect-[1.28/1] w-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div
                      className={`max-w-[26rem] ${reverse ? 'lg:ml-auto lg:[direction:ltr]' : ''}`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        {profile.isPlaceholder ? <PlaceholderRibbon /> : null}
                      </div>

                      <Quote className="mt-2 size-10" style={{ color: profile.accent }} aria-hidden="true" />

                      <p className="mt-2 text-[1.05rem] leading-[1.9] tracking-[-0.01em] text-[var(--text-strong)] sm:text-[1.12rem]">
                        {profile.displayQuote}
                      </p>

                      <div className="mt-8">
                        <h2 className="text-[1.55rem] font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                          {profile.displayName}
                        </h2>
                        <p className="mt-2 text-[0.95rem] leading-7 text-[var(--muted)]">
                          {profile.displayDesignation}
                        </p>
                      </div>

                      <Link
                        to={getDetailPath(
                          activeTab === 'leadership' ? leadershipDetailIds[index] : advisoryDetailIds[index],
                        )}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                      >
                        {activeTab === 'leadership' ? 'View full profile' : 'View advisory profile'}
                        <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
