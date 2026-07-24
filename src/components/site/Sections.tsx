import { AboutSection } from './AboutSection'
import { ProofStripSection } from './ProofStripSection'
import { StrengthSection } from './StrengthSection'

// Homepage intentionally stops after About.
// The remaining sections are reached from the header navigation on dedicated pages.
export function SiteSections() {
  return (
    <>
      <AboutSection />
      <ProofStripSection />
      <StrengthSection />
    </>
  )
}
