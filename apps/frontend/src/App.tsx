import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/themeStore'
import { Toaster } from './components/ui/toaster'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { DonatePage } from './pages/DonatePage'
import { CampaignsPage } from './pages/CampaignsPage'
import { ImpactPage } from './pages/ImpactPage'
import { DashboardPage } from './pages/DashboardPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { AdminPage } from './pages/AdminPage'
import { TransparencyPage } from './pages/TransparencyPage'
import { VolunteerPage } from './pages/VolunteerPage'
import { cn } from './lib/utils'

function App() {
  const { isDarkMode } = useThemeStore()

  return (
    <>
      <div className={cn('min-h-screen bg-background', isDarkMode && 'dark')}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/transparency" element={<TransparencyPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App