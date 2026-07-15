import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { DetailPage } from './components/site/DetailPage'
import { Footer } from './components/site/Footer'
import { Header } from './components/site/Header'
import { Hero } from './components/site/Hero'
import { LeadershipPage } from './components/site/LeadershipPage'
import { SiteSections } from './components/site/Sections'
import type { Theme } from './components/site/types'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')
  const location = useLocation()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('sentinel-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      return
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem('sentinel-theme', theme)
  }, [theme])

  useEffect(() => {
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
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-300">
      <Header
        menuOpen={menuOpen}
        scrolled={scrolled}
        theme={theme}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onMenuClose={() => setMenuOpen(false)}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />

      <main id="top">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <SiteSections />
              </>
            }
          />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </main>

      <Footer year={year} />
    </div>
  )
}

export default App
