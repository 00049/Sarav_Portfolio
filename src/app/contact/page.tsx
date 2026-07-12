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
      <main id="main-content" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <FadeInSection>
          <PageHeader
            title="Let's Talk"
            subtitle="I'm currently exploring new opportunities in cybersecurity engineering and full-stack development."
            centered
          />
        </FadeInSection>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FadeInSection delay={0.2} style={{ width: "100%" }}>
            <Contact />
          </FadeInSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
