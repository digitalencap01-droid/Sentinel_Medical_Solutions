import { Boxes, Building2, Globe, Handshake, MapPinned, Package, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { credentials, topStats } from './content'
import { getDetailPath, proofDetailIds } from './detailContent'
import { CountUp, Reveal } from './shared'

// Merged "Platform Scale" + "Credentials" strips into one proof strip (brief §4, row 2).
// Order intentionally alternates platform-scale and credential facts rather than
// grouping them, so the row doesn't read as two stitched-together lists.
const tileIcons: LucideIcon[] = [Package, Users, Boxes, MapPinned, Handshake, Building2, Globe]

export function ProofStripSection() {
  const tiles = [topStats[0], credentials[0], topStats[1], credentials[1], topStats[2], credentials[2], topStats[3]]
  // Duplicated once so the CSS marquee can loop seamlessly at -50% translateX.
  const loopTiles = [...tiles, ...tiles]

  return (
    <section className="overflow-hidden bg-[var(--surface-alt)]">
      <div className="mx-auto max-w-7xl py-14">
        <Reveal>
          <div className="relative py-4 [mask-image:linear-gradient(90deg,transparent,black_72px,black_calc(100%-72px),transparent)]">
            <div
              className="flex w-max gap-5 px-6 [animation:proof-marquee_34s_linear_infinite] hover:[animation-play-state:paused]"
            >
              {loopTiles.map((stat, index) => {
                const Icon = tileIcons[index % tileIcons.length]
                return (
                  <Link
                    key={`${stat.label}-${index}`}
                    aria-hidden={index >= tiles.length}
                    to={getDetailPath(proofDetailIds[index % tiles.length])}
                    className="group relative flex min-h-[212px] w-[224px] shrink-0 flex-col justify-start gap-3.5 overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--accent-soft)] hover:shadow-[0_22px_44px_rgba(79,168,201,0.16)]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(140px_100px_at_15%_-10%,rgba(79,168,201,0.14),transparent)]" />
                    <div className="relative flex size-10 items-center justify-center rounded-xl bg-[var(--accent-wash)] transition-colors duration-300 group-hover:bg-[var(--accent)] dark:bg-white/6">
                      <Icon
                        className="size-4.5 text-[var(--accent)] transition-colors duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="relative font-mono text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--accent)]">
                      {stat.staticValue ? (
                        stat.staticValue
                      ) : (
                        <CountUp value={stat.value ?? 0} suffix={stat.suffix} prefix={stat.prefix} />
                      )}
                    </div>
                    <p className="relative text-[0.8rem] leading-5 text-[var(--muted)]">
                      {stat.label}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
