import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight, Mail, MapPinned } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { enquiryTypes, regionalOffices } from './content'
import { getDetailPath, officeDetailIds } from './detailContent'
import { trackEvent } from '../../lib/analytics'
import { emphasisSection, Reveal, SectionIntro } from './shared'

// NOTE (i18n scaffold, brief 3.3): validation messages below are hardcoded English —
// the schema is a module-level constant so it can't call the useTranslation() hook.
// Localizing these means building the schema inside the component with useMemo(() =>
// z.object(...), [t]) once a second locale ships.
const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  organisation: z.string().min(2, 'Please enter your organisation.'),
  email: z.string().email('Enter a valid email address.'),
  enquiryType: z.enum(enquiryTypes as [string, ...string[]], {
    message: 'Select an enquiry type.',
  }),
  message: z.string().min(10, 'Tell us a little more — at least 10 characters.'),
})

type EnquiryFormValues = z.infer<typeof enquirySchema>

const inputClasses =
  'w-full rounded-xl border border-[var(--emphasis-card-border)] bg-[var(--emphasis-card-bg)] px-4 py-3 text-sm text-[var(--emphasis-text)] placeholder:text-[var(--emphasis-muted)] outline-none transition-colors focus:border-[var(--emphasis-accent)] focus-visible:ring-2 focus-visible:ring-[var(--emphasis-accent-soft)]'

export function ContactSection() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  })

  const onSubmit = async (values: EnquiryFormValues) => {
    // TODO: wire to a real submission backend (Formspree/Resend/custom API route) once
    // chosen — see ⚠️ NEEDS DECISION in the site brief (1.5). No data is transmitted yet;
    // this is a validated, client-side-only form for the current build scope.
    console.info('[contact-form] enquiry captured (not yet transmitted):', values)
    trackEvent('contact_form_submit', { enquiryType: values.enquiryType })
    await new Promise((resolve) => setTimeout(resolve, 300))
    reset()
  }

  return (
    <section id="contact" className={`${emphasisSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Partner With Sentinel"
          title="Let's Build Dependable Healthcare Supply Together."
          body="Whether you're a manufacturer seeking UAE and regional market access, or an institutional buyer that needs reliable supply, Sentinel Medical Solutions is ready to execute."
          invert
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-[1.75rem] border border-[var(--emphasis-card-border)] bg-[var(--emphasis-card-bg)] p-6 text-left backdrop-blur-sm md:p-8"
            >
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 className="size-10 text-[var(--emphasis-accent)]" aria-hidden="true" />
                  <p className="text-lg font-semibold text-[var(--emphasis-text)]">{t('contactForm.thanksTitle')}</p>
                  <p className="max-w-sm text-sm leading-6 text-[var(--emphasis-muted)]">
                    {t('contactForm.thanksBody')}
                  </p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--emphasis-muted)]">
                        {t('contactForm.fullName')}
                      </label>
                      <input id="contact-name" type="text" autoComplete="name" className={inputClasses} {...register('name')} />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-org" className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--emphasis-muted)]">
                        {t('contactForm.organisation')}
                      </label>
                      <input id="contact-org" type="text" autoComplete="organization" className={inputClasses} {...register('organisation')} />
                      {errors.organisation && <p className="mt-1.5 text-xs text-red-400">{errors.organisation.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--emphasis-muted)]">
                        {t('contactForm.email')}
                      </label>
                      <input id="contact-email" type="email" autoComplete="email" className={inputClasses} {...register('email')} />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-enquiry-type" className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--emphasis-muted)]">
                        {t('contactForm.enquiryType')}
                      </label>
                      <select id="contact-enquiry-type" defaultValue="" className={inputClasses} {...register('enquiryType')}>
                        <option value="" disabled>
                          {t('contactForm.selectOne')}
                        </option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.enquiryType && <p className="mt-1.5 text-xs text-red-400">{errors.enquiryType.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--emphasis-muted)]">
                      {t('contactForm.message')}
                    </label>
                    <textarea id="contact-message" rows={4} className={inputClasses} {...register('message')} />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--emphasis-button-bg)] px-7 py-4 text-sm font-semibold text-[var(--emphasis-button-text)] transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
                  >
                    {isSubmitting ? t('contactForm.sending') : t('contactForm.send')}
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-[1.75rem] border border-[var(--emphasis-card-border)] bg-[var(--emphasis-card-bg)] p-6 backdrop-blur-sm md:p-7">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[var(--emphasis-accent)]">
                  Regional Offices
                </p>
                <div className="mt-5 grid gap-4">
                  {regionalOffices.map((office, index) => (
                    <Link
                      key={office.region}
                      to={getDetailPath(officeDetailIds[index])}
                      className="block border-b border-[var(--emphasis-card-border)] pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2">
                        <MapPinned className="size-3.5 text-[var(--emphasis-accent)]" aria-hidden="true" />
                        <span className="text-sm font-semibold text-[var(--emphasis-text)]">{office.region}</span>
                        {office.isHQ && (
                          <span className="rounded-full bg-[var(--emphasis-accent)] px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white">
                            HQ
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-[var(--emphasis-muted)]">{office.addressLine}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-2 text-[0.68rem] leading-5 text-[var(--emphasis-muted)] opacity-70">
                  ⚠️ Address details above are placeholders pending confirmation from Sentinel.
                </p>
              </div>

              <motion.a
                href="mailto:info@sentinelmedical.com"
                whileHover={{ y: -4 }}
                className="flex items-center justify-between rounded-[1.75rem] border border-[var(--emphasis-card-border)] bg-[var(--emphasis-card-bg)] p-6 backdrop-blur-sm transition-colors hover:border-[var(--emphasis-accent)]"
              >
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[var(--emphasis-accent)]">
                    Direct Email
                  </p>
                  <p className="mt-2 font-mono text-sm text-[var(--emphasis-text)]">info@sentinelmedical.com</p>
                </div>
                <Mail className="size-5 text-[var(--emphasis-accent)]" aria-hidden="true" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
