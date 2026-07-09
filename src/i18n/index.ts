import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common from './locales/en/common.json'

// i18n scaffold (site brief 3.3) — structure only, English is the only locale shipped.
//
// What's wired up: a handful of UI microcopy strings (header/footer chrome, hero
// eyebrow/body/CTAs, the Contact form, and the About section as a worked example) now
// flow through t() instead of being hardcoded in JSX. The remaining sections in
// Sections.tsx (SectionIntro copy, capability/portfolio/device card content) still pull
// straight from content.ts — that's the bulk of the site's text and deliberately left
// alone for this pass; migrating it means moving each string into a locale JSON file
// under the same "sections.<id>.*" key shape used for About below.
//
// To add Arabic later:
//   1. Create src/i18n/locales/ar/common.json mirroring this file's keys.
//   2. Import it here and add `ar: { common: arCommon }` to resources.
//   3. Push 'ar' into supportedLocales and add an RTL toggle (see App.tsx notes on
//      logical CSS properties) — most layout in this codebase uses physical
//      left/right utilities and will need spot-checking for RTL, not a blanket rewrite.
export const supportedLocales = ['en'] as const

void i18n.use(initReactI18next).init({
  resources: {
    en: { common },
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

export default i18n
