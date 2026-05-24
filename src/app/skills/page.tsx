import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TechCategoryCard } from "@/components/sections/techstack/TechCategoryCard";
import { ProficiencyLegend } from "@/components/sections/techstack/ProficiencyLegend";
import { techStackData } from "@/lib/data/techstack";
import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description: "Comprehensive overview of my technical capabilities and proficiency levels.",
};

export default function SkillsPage() {
  const totalSkills = techStackData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <FadeInSection>
          <PageHeader
            title="Tech Stack"
            subtitle="My core engineering toolbox across cybersecurity, backend systems, and frontend interfaces."
            badge={`${totalSkills} Technologies`}
          />
        </FadeInSection>

        <section style={{ padding: "0 24px 120px", maxWidth: 1100, margin: "0 auto" }}>
          <FadeInSection delay={0.2}>
            <div style={{ marginBottom: 48, display: "flex", justifyContent: "flex-end" }}>
              <ProficiencyLegend />
            </div>
          </FadeInSection>

          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {techStackData.map((category, i) => (
              <FadeInSection key={category.id} delay={0.1 + i * 0.05}>
                <TechCategoryCard category={category} />
              </FadeInSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
