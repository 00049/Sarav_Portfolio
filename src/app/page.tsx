import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/home/SocialProofBar'
import { FeaturedProjectsGrid } from '@/components/sections/home/FeaturedProjectsGrid'
import { SkillsSnapshot } from '@/components/sections/home/SkillsSnapshot'
import { AboutTeaser } from '@/components/sections/home/AboutTeaser'
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
        <SocialProofBar />
        <FeaturedProjectsGrid projects={getFeaturedProjects()} />
        <SkillsSnapshot />
        <AboutTeaser />
        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  )
}
