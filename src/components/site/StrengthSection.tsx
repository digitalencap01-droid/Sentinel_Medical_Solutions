import { ChevronRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import warehouseImage from '../../assets/images/hero_section.jpg'
import { Reveal } from './shared'

const mapPoints = [
  { top: '18%', left: '70%' },
  { top: '33%', left: '48%' },
  { top: '47%', left: '67%' },
  { top: '59%', left: '80%' },
  { top: '67%', left: '70%' },
  { top: '73%', left: '88%' },
]

export function StrengthSection() {
  return (
    <section id="strength" className="bg-[var(--surface)] px-6 py-8 sm:px-8 lg:px-12">
      <Reveal>
        <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1.12fr)] lg:items-stretch">
          <div className="relative overflow-hidden px-2 py-12 sm:px-4 lg:px-0 lg:py-14">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute left-0 top-0 h-36 w-44 bg-[radial-gradient(circle,#f4ded0_1px,transparent_1px)] [background-size:8px_8px]" />
              <div className="absolute right-8 top-10 h-[72%] w-[58%] rounded-full border border-dashed border-[rgba(15,23,42,0.08)]" />
              <div className="absolute right-[24%] top-[28%] h-[30%] w-[22%] rounded-full border border-dashed border-[rgba(15,23,42,0.08)]" />
              <div className="absolute left-[52%] top-[24%] h-px w-[16%] bg-[rgba(241,90,42,0.22)]" />
              <div className="absolute left-[68%] top-[24%] h-[22%] w-px bg-[rgba(241,90,42,0.22)]" />
              {mapPoints.map((point) => (
                <span
                  key={`${point.top}-${point.left}`}
                  className="absolute h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-white"
                  style={{ top: point.top, left: point.left }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-lg">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Our Strength
              </p>
              <h2 className="mt-5 text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-900 sm:text-[3rem]">
                Built on Precision.
                <br />
                Driven by <span className="italic text-[var(--accent)]">Purpose.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-slate-500">
                From sourcing to delivery, we ensure every product meets the highest standards of quality, compliance, and care.
              </p>

              <Link
                to="/why-sentinel"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:translate-x-1"
              >
                Learn More About Us
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] lg:ml-8 lg:min-h-full">
            <img
              src={warehouseImage}
              alt="Sentinel Medical Solutions warehouse operations"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/8" />

            <div className="absolute bottom-6 right-6 left-6 sm:left-auto">
              <div className="ml-auto w-full max-w-[220px] rounded-[1.8rem] border border-white/70 bg-white/86 p-6 text-center shadow-[0_20px_44px_rgba(15,23,42,0.14)] backdrop-blur-md">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[var(--accent)]">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>
                <div className="mt-5 font-mono text-[2.3rem] font-semibold leading-none tracking-[-0.05em] text-[var(--accent)]">
                  30+
                </div>
                <p className="mt-3 text-sm font-semibold leading-5 text-slate-900">
                  Years of Collective
                  <br />
                  Industry Experience
                </p>
                <span className="mx-auto mt-5 block h-[2px] w-8 rounded-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
