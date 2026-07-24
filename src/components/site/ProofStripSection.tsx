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
  const tiles = [
    { ...credentials[1], eyebrow: 'Pharmacy Network', helper: 'Reach across the UAE' },
    { ...topStats[2], eyebrow: 'Supplier Partnerships', helper: 'Trusted manufacturers worldwide' },
    { ...credentials[2], eyebrow: 'MOHAP-Licensed Warehouse', helper: 'Strategically located in Abu Dhabi' },
    { ...topStats[3], eyebrow: 'Global Operations', helper: 'Strong sourcing & supply chain execution' },
    { ...topStats[0], eyebrow: 'Healthcare Products', helper: 'Across 10+ therapy categories' },
    { ...credentials[0], eyebrow: 'Specialist Team', helper: 'Experienced healthcare professionals' },
    { ...topStats[1], eyebrow: 'Clinical Supply Lines', helper: 'Broad consumables and recurring supply coverage' },
  ]

  return (
    <section id="impact" className="overflow-hidden bg-[#F8F5EF]">
      <div className="px-6 py-18 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative px-0 py-8">
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Our Impact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
                Delivering Healthcare. Building Trust.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[0.95rem]">
                Sentinel Medical Solutions connects global manufacturers with
                <br />
                healthcare providers through a reliable and efficient supply network.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
              {tiles.map((stat, index) => {
                const Icon = tileIcons[index % tileIcons.length]
                return (
                  <Link
                    key={`${stat.label}-${index}`}
                    to={getDetailPath(proofDetailIds[index])}
                    className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[1.7rem] border border-[rgba(15,23,42,0.06)] bg-white/92 p-6 text-left shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(249,115,22,0.12)]"
                  >
                    <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[var(--accent)]">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="relative mt-8 font-mono text-[2.15rem] font-semibold leading-none tracking-[-0.05em] text-[var(--accent)]">
                      {stat.staticValue ? (
                        stat.staticValue
                      ) : (
                        <CountUp value={stat.value ?? 0} suffix={stat.suffix} prefix={stat.prefix} />
                      )}
                    </div>

                    <div className="relative mt-3 space-y-2">
                      <p className="text-[0.95rem] font-semibold leading-5 text-slate-900">
                        {stat.eyebrow}
                      </p>
                      <p className="text-[0.82rem] leading-6 text-slate-500">
                        {stat.helper}
                      </p>
                    </div>

                    <div className="relative mt-auto pt-6">
                      <span className="block h-[2px] w-7 rounded-full bg-[var(--accent)] transition-all duration-300 group-hover:w-11" />
                    </div>
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
