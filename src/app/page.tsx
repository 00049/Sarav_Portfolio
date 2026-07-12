import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { InteractiveSystemsExplorer } from '@/components/sections/home/InteractiveSystemsExplorer'
import { FeaturedProjectsGrid } from '@/components/sections/home/FeaturedProjectsGrid'
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
        <InteractiveSystemsExplorer />
        <FeaturedProjectsGrid projects={getFeaturedProjects()} />
        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  )
}
