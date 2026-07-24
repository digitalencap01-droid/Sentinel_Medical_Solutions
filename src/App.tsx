import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CapabilitiesSection } from './components/site/CapabilitiesSection'
import { ClientsSection } from './components/site/ClientsSection'
import { ContactSection } from './components/site/ContactSection'
import { DetailPage } from './components/site/DetailPage'
import { Footer } from './components/site/Footer'
import { GlobalReachSection } from './components/site/GlobalReachSection'
import { Header } from './components/site/Header'
import { Hero } from './components/site/Hero'
import { LeadershipPage } from './components/site/LeadershipPage'
import { OperationsSection } from './components/site/OperationsSection'
import { PartnershipsSection } from './components/site/PartnershipsSection'
import { SiteSections } from './components/site/Sections'
import { SupplyRangeSection } from './components/site/SupplyRangeSection'
import { WhySentinelSection } from './components/site/WhySentinelSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.colorScheme = 'light'
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">
      <Header
        menuOpen={menuOpen}
        scrolled={scrolled}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onMenuClose={() => setMenuOpen(false)}
      />

      <main id="top">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SiteSections />
              </>
            }
          />
          <Route path="/capabilities" element={<CapabilitiesSection />} />
          <Route path="/global-reach" element={<GlobalReachSection />} />
          <Route path="/operations" element={<OperationsSection />} />
          <Route path="/partnerships" element={<PartnershipsSection />} />
          <Route path="/supply" element={<SupplyRangeSection />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/advisory-board" element={<LeadershipPage initialTab="advisory" />} />
          <Route path="/clients" element={<ClientsSection />} />
          <Route path="/why-sentinel" element={<WhySentinelSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </main>

      <Footer year={year} />
    </div>
  )
}

export default App
