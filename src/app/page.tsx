import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

import { CorePrinciples } from '@/components/sections/home/CorePrinciples'
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
        <CorePrinciples />
        <FeaturedProjectsGrid projects={getFeaturedProjects()} />
        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  )
}
