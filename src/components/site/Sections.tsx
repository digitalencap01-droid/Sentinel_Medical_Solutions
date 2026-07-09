import { AboutSection } from './AboutSection'
import { AdvisoryBoardSection } from './AdvisoryBoardSection'
import { CapabilitiesSection } from './CapabilitiesSection'
import { ClientsSection } from './ClientsSection'
import { ContactSection } from './ContactSection'
import { GlobalReachSection } from './GlobalReachSection'
import { LeadershipSection } from './LeadershipSection'
import { OperationsSection } from './OperationsSection'
import { PartnershipsSection } from './PartnershipsSection'
import { ProofStripSection } from './ProofStripSection'
import { SupplyRangeSection } from './SupplyRangeSection'
import { WhySentinelSection } from './WhySentinelSection'

// Composition order follows the redesign brief's information architecture (§4):
// Hero (rendered by App.tsx) -> Proof strip -> About -> Capabilities -> Global Reach &
// Presence -> How We Work -> Partnerships -> What We Supply -> Leadership -> Advisory
// Board -> Our Clients -> Why Sentinel -> Contact.
export function SiteSections() {
  return (
    <>
      <ProofStripSection />
      <AboutSection />
      <CapabilitiesSection />
      <GlobalReachSection />
      <OperationsSection />
      <PartnershipsSection />
      <SupplyRangeSection />
      <LeadershipSection />
      <AdvisoryBoardSection />
      <ClientsSection />
      <WhySentinelSection />
      <ContactSection />
    </>
  )
}
