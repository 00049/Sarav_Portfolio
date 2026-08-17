import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

import { SelectedWork } from '@/components/sections/home/SelectedWork'
import { ContactCTAStrip } from '@/components/sections/home/ContactCTAStrip'
import { getFeaturedProjects } from '@/lib/utils/projects'

// ─────────────────────────────────────────────────────────────────────────────
// Homepage
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SelectedWork projects={getFeaturedProjects()} />
        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  )
}
