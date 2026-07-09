// Analytics scaffold — no live provider wired yet (Part 3.1 of the site brief).
//
// The brief asks for a privacy-respecting, low-friction analytics provider (Plausible was
// the recommendation, given the institutional/EU-adjacent audience) plus a lead-capture
// hook on the Contact form. Provider selection was deferred, so this module only defines
// the integration point: trackEvent() is safe to call from anywhere in the app today (it
// no-ops beyond a console log), and swapping in a real provider later means editing the
// two spots below — nothing else in the app needs to change.
//
// To wire Plausible later:
//   1. Add <script defer data-domain="sentinelmedical.com" src="https://plausible.io/js/script.js"></script>
//      to index.html (or load it in initAnalytics below).
//   2. Replace the console.info call in trackEvent with:
//      window.plausible?.(name, { props })
//
// To wire GA4 instead:
//   1. Load the gtag.js snippet with your Measurement ID in initAnalytics.
//   2. Replace the console.info call with: window.gtag?.('event', name, props)

type AnalyticsProps = Record<string, string | number | boolean | undefined>

let initialized = false

export function initAnalytics() {
  if (initialized) return
  initialized = true
  // TODO: load the chosen provider's script here once a provider is picked.
}

export function trackEvent(name: string, props?: AnalyticsProps) {
  // TODO: forward to the live analytics provider once one is wired (see module notes above).
  if (import.meta.env.DEV) {
    console.info(`[analytics] ${name}`, props ?? {})
  }
}
