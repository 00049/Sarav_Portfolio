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
      <main id="main-content" className="min-h-screen">
        <FadeInSection>
          <PageHeader
            title="Tech Stack"
            subtitle="My core engineering toolbox across cybersecurity, backend systems, and frontend interfaces."
            badge={`${totalSkills} Technologies`}
          />
        </FadeInSection>

        <section className="px-6 pb-[120px] max-w-[1100px] mx-auto">
          <FadeInSection delay={0.2}>
            <div className="mb-12 flex justify-end">
              <ProficiencyLegend />
            </div>
          </FadeInSection>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
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
