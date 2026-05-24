import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTAStrip } from "@/components/sections/home/ContactCTAStrip";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { ScrollTimeline } from "@/components/ui/ScrollTimeline";
import { NodeGraphic } from "@/components/ui/NodeGraphic";
import { aboutData } from "@/lib/data/about";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background in cybersecurity and full-stack engineering.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <FadeInSection>
          <PageHeader
            title="About Me"
            subtitle="The intersection of security and engineering."
            badge="Profile"
          />
        </FadeInSection>

        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>
            
            {/* Identity Card */}
            <FadeInSection delay={0.2} direction="right">
              <div style={{ position: "sticky", top: 100, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
                {/* Premium dark identity card */}
                <div style={{ position: "relative", padding: "48px 32px 32px", display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(135deg, #13131A 0%, #13131A 60%, #0A0A0F 100%)", borderBottom: "1px solid var(--border)" }}>
                  {/* Dot grid */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(45,107,228,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
                  {/* Corner accents */}
                  <div style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderTop: "1px solid var(--border-hover)", borderLeft: "1px solid var(--border-hover)" }} />
                  <div style={{ position: "absolute", top: 12, right: 12, width: 20, height: 20, borderTop: "1px solid var(--border-hover)", borderRight: "1px solid var(--border-hover)" }} />
                  {/* Monogram */}
                  <div style={{ position: "relative", zIndex: 1, marginBottom: 20 }}>
                    <NodeGraphic size={100} />
                  </div>
                  <h2 style={{ position: "relative", zIndex: 1, fontSize: 18, fontWeight: 700, color: "var(--text-primary)", margin: 0, marginBottom: 6, fontFamily: "var(--font-geist-sans)", textAlign: "center" }}>Saravpreet Singh Pruthi</h2>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 11, color: "var(--accent-gold)", fontFamily: "var(--font-geist-mono)", margin: 0, marginBottom: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>Security / Full-Stack Engineer</p>
                  <div style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 999, background: "rgba(0,200,150,0.08)", border: "1px solid rgba(0,200,150,0.25)", fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--accent-green)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 6px var(--accent-green)" }} />
                    Available for hire
                  </div>
                </div>
                <div style={{ padding: 28, background: "var(--background-card)", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--text-secondary)" }}>
                    <MapPin size={14} style={{ color: "var(--text-muted)" }} /> Shimla, India · Open to Remote
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--text-secondary)" }}>
                    <Briefcase size={14} style={{ color: "var(--text-muted)" }} /> Open to Security & Full-Stack Roles
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--text-secondary)" }}>
                    <GraduationCap size={14} style={{ color: "var(--text-muted)" }} /> B.Tech Cyber Security · Bennett University
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Content blocks */}
            <FadeInSection delay={0.3} direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                
                {/* Intro */}
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 16, fontFamily: "var(--font-geist-sans)" }}>The Journey</h3>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: 0, marginBottom: 16 }}>
                    {aboutData.philosophy}
                  </p>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                    My focus is on creating production-ready applications that don&apos;t compromise on security. By bridging the gap between offensive security knowledge and defensive software engineering, I aim to build systems that are robust by design.
                  </p>
                </div>

                {/* Combined Timeline */}
                <ScrollTimeline>
                  {/* Experience */}
                  <div className="relative">
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)" }}>Experience</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                      {aboutData.experience.map((exp, i) => (
                        <div key={i} className="relative">
                          <div style={{ position: "absolute", left: -31, top: 6, width: 12, height: 12, borderRadius: "50%", background: "var(--accent-gold)", border: "2px solid var(--background)", boxShadow: "0 0 10px var(--glow-gold)", zIndex: 20 }} />
                          <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 4, fontFamily: "var(--font-geist-sans)" }}>{exp.role}</h4>
                          <div style={{ fontSize: 14, color: "var(--accent-gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>{exp.company} | {exp.period}</div>
                          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                            {exp.highlights.map((h, j) => (
                              <li key={j} style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, position: "relative", paddingLeft: 16 }}>
                                <span style={{ position: "absolute", left: 0, top: 8, width: 4, height: 4, borderRadius: "50%", background: "var(--text-muted)" }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="relative pt-4">
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)" }}>Education</h3>
                    <div className="relative">
                      <div style={{ position: "absolute", left: -31, top: 6, width: 12, height: 12, borderRadius: "50%", background: "var(--text-muted)", border: "2px solid var(--background)", zIndex: 20 }} />
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 4, fontFamily: "var(--font-geist-sans)" }}>{aboutData.education.degree}</h4>
                      <div style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 8 }}>{aboutData.education.institution}</div>
                      <div style={{ fontSize: 13, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)" }}>{aboutData.education.expectedGraduation}</div>
                    </div>
                  </div>

                  {/* Certifications */}
                  {aboutData.certifications && aboutData.certifications.length > 0 && (
                    <div className="relative pt-4 pb-12">
                      <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)" }}>Certifications</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        {aboutData.certifications.map((cert, i) => (
                          <div key={i} className="relative">
                            <div style={{ position: "absolute", left: -31, top: 6, width: 12, height: 12, borderRadius: "50%", background: "var(--accent-cyan)", border: "2px solid var(--background)", zIndex: 20 }} />
                            <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 4, fontFamily: "var(--font-geist-sans)" }}>
                              {cert.href ? (
                                <a href={cert.href} style={{ color: "var(--text-primary)", textDecoration: "none" }} className="hover:text-accent-gold transition-colors">
                                  {cert.name}
                                </a>
                              ) : (
                                cert.name
                              )}
                            </h4>
                            <div style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 8 }}>{cert.issuer}</div>
                            <div style={{ fontSize: 13, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)" }}>{cert.year}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ScrollTimeline>

              </div>
            </FadeInSection>

          </div>
        </section>

        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  );
}
