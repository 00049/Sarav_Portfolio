import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, consulting, or engineering opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex flex-col">
        <FadeInSection>
          <PageHeader
            title="Let's Talk"
            subtitle="I'm currently exploring new opportunities in cybersecurity engineering and full-stack development."
            centered
          />
        </FadeInSection>

        <div className="flex-1 flex items-center justify-center">
          <FadeInSection delay={0.2} className="w-full">
            <Contact />
          </FadeInSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
