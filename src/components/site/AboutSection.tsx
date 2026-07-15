import { motion } from 'framer-motion'
import { ChevronRight, Eye, ShieldCheck, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { profileCards } from './content'
import { aboutDetailIds, getDetailPath } from './detailContent'
import { easeOut, lightSection, SectionIntro, staggerContainer } from './shared'

const profileIcons = [Eye, Target, ShieldCheck]

// TODO: replace with owned/licensed photography — brief flags generic stock "doctor
// imagery" to avoid. Do not swap for different stock; use real photography or an
// illustrative/abstract treatment instead (see site brief 2.4).
const profileImages = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80',
]

const profileCardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 40,
    x: index % 2 === 0 ? -20 : 20,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className={`${lightSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow={t('sections.about.eyebrow')}
          title={t('sections.about.title')}
          body={t('sections.about.body')}
        />

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {profileCards.map((card, index) => {
            const Icon = profileIcons[index]
            // Ethos card gets the guardian-violet treatment — the only place besides
            // Advisory Board this accent appears (brief §4, row 3 / §5).
            const isGuardian = card.title === 'Our Ethos'

            return (
              <motion.div
                key={card.title}
                custom={index}
                variants={profileCardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.28 }}
                className="group overflow-hidden rounded-[1.75rem] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,27,42,0.1)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.34)]"
              >
                <Link
                  to={getDetailPath(aboutDetailIds[index])}
                  className="relative block h-[420px] overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 z-20 h-1 ${
                      isGuardian
                        ? 'bg-[linear-gradient(90deg,#6B5CA5_0%,#9a8ccf_100%)]'
                        : 'bg-[linear-gradient(90deg,#4FA8C9_0%,#7CC4DD_100%)]'
                    }`}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-[-35%] z-10 w-1/3 rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)] opacity-0 blur-md"
                    whileHover={{ x: '420%', opacity: [0, 0.75, 0] }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                  />
                  <div className="absolute inset-5 z-20 flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.04, y: -1 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white ${
                        isGuardian ? 'bg-[var(--guardian)]' : 'bg-[var(--accent)]'
                      }`}
                    >
                      {card.title}
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                      className="inline-flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-white/12 text-white backdrop-blur-md"
                    >
                      <Icon className="size-4.5" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute inset-x-0 bottom-0 z-20 p-5"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  >
                    <h3 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-white">
                      {card.title.replace('Our ', '')}
                    </h3>
                  </motion.div>
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                      background: isGuardian
                        ? 'radial-gradient(circle at top right, rgba(107,92,165,0.24), transparent 30%)'
                        : 'radial-gradient(circle at top right, rgba(79,168,201,0.2), transparent 30%)',
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="relative h-full overflow-hidden">
                    <motion.img
                      src={profileImages[index]}
                      alt={card.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.08, y: -6 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,27,42,0.08),rgba(14,27,42,0.58))] dark:bg-[linear-gradient(180deg,rgba(8,20,32,0.12),rgba(8,20,32,0.72))]" />
                  </div>

                  <motion.div
                    className="absolute inset-x-0 bottom-0 z-20 p-5"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  >
                    <div className="rounded-[1.5rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.9))] p-5 text-[var(--text-strong)] backdrop-blur-xl transition-all duration-500 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.96))] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(9,17,30,0.28),rgba(9,17,30,0.76))] dark:text-white dark:group-hover:bg-[linear-gradient(180deg,rgba(9,17,30,0.52),rgba(9,17,30,0.9))]">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div
                            className={`text-[0.8rem] font-semibold uppercase tracking-[0.24em] dark:text-white/72 ${
                              isGuardian ? 'text-[var(--guardian)]' : 'text-[var(--accent)]'
                            }`}
                          >
                            {card.title}
                          </div>
                          <div className="mt-1 text-[1.5rem] font-semibold tracking-[-0.02em] leading-none text-[var(--text-strong)] dark:text-white">
                            {card.title.replace('Our ', '')}
                          </div>
                        </div>
                        <span
                          className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1 dark:bg-white/14 dark:text-white dark:group-hover:bg-white/22 ${
                            isGuardian
                              ? 'bg-[var(--guardian-wash)] text-[var(--guardian)] group-hover:bg-[var(--guardian-soft)]'
                              : 'bg-[var(--accent-wash)] text-[var(--accent)] group-hover:bg-[rgba(79,168,201,0.16)]'
                          }`}
                        >
                          <ChevronRight className="size-4" />
                        </span>
                      </div>

                      <div className="mt-4 grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out lg:mt-0 lg:[grid-template-rows:0fr] lg:group-hover:mt-4 lg:group-hover:[grid-template-rows:1fr]">
                        <div className="overflow-hidden">
                          <p className="text-[0.98rem] leading-8 text-[var(--text-soft)] transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 dark:text-white/82">
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
