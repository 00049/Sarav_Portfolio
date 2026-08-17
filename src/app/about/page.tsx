import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTAStrip } from "@/components/sections/home/ContactCTAStrip";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { ScrollTimeline } from "@/components/ui/ScrollTimeline";
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
      <main id="main-content" className="min-h-screen">
        <FadeInSection>
          <PageHeader
            title="About Me"
            subtitle="The intersection of security and engineering."
            badge="Profile"
          />
        </FadeInSection>

        <section className="px-6 pb-20 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 items-start">
            
            {/* Identity Card */}
            <FadeInSection delay={0.2} direction="right">
              <div className="sticky top-[100px] rounded-lg overflow-hidden border border-border shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
                {/* Premium dark identity card */}
                <div className="relative pt-12 px-8 pb-8 flex flex-col items-center bg-gradient-to-br from-[#0A1217] from-0% via-[#0A1217] via-60% to-[#04090D] to-100% border-b border-border">
                  {/* Dot grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-border-hover" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-border-hover" />
                  {/* Profile Image */}
                  <div className="relative z-10 mb-5 w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <Image 
                      src="/profile.jpg" 
                      alt="Saravpreet Singh Pruthi" 
                      fill 
                      sizes="100px" 
                      className="object-cover object-[center_top] grayscale contrast-125" 
                    />
                  </div>
                  <h2 className="relative z-10 text-lg font-bold text-primary m-0 mb-1.5 font-sans text-center">Saravpreet Singh Pruthi</h2>
                  <p className="relative z-10 text-[11px] text-accent font-mono m-0 mb-4 tracking-[0.08em] uppercase">Security / Full-Stack Engineer</p>
                  <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-border text-[11px] font-mono text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-strong shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    Available for hire
                  </div>
                </div>
                <div className="p-7 bg-background-card flex flex-col gap-3.5 border-t border-border">
                  <div className="flex items-center gap-3 text-[13px] text-secondary">
                    <MapPin size={14} className="text-muted" /> Shimla, India · Open to Remote
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-secondary">
                    <Briefcase size={14} className="text-muted" /> Open to Security & Full-Stack Roles
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-secondary">
                    <GraduationCap size={14} className="text-muted" /> B.Tech Cyber Security · Bennett University
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Content blocks */}
            <FadeInSection delay={0.3} direction="left">
              <div className="flex flex-col gap-12">
                
                {/* Intro */}
                <div>
                  <h3 className="text-xl font-semibold text-primary m-0 mb-4 font-sans">The Journey</h3>
                  <p className="text-base text-secondary leading-[1.8] m-0 mb-4">
                    {aboutData.philosophy}
                  </p>
                  <p className="text-base text-secondary leading-[1.8] m-0">
                    My focus is on creating production-ready applications that don&apos;t compromise on security. By bridging the gap between offensive security knowledge and defensive software engineering, I aim to build systems that are robust by design.
                  </p>
                </div>

                {/* Combined Timeline */}
                <ScrollTimeline>
                  {/* Experience */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-primary m-0 mb-6 font-sans">Experience</h3>
                    <div className="flex flex-col gap-8">
                      {aboutData.experience.map((exp, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-[0_0_10px_var(--glow-gold)] z-20" />
                          <h4 className="text-base font-semibold text-primary m-0 mb-1 font-sans">{exp.role}</h4>
                          <div className="text-sm text-accent font-mono mb-3">{exp.company} | {exp.period}</div>
                          <ul className="m-0 p-0 list-none flex flex-col gap-2">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="text-sm text-secondary leading-[1.6] relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-muted" />
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
                    <h3 className="text-xl font-semibold text-primary m-0 mb-6 font-sans">Education</h3>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-muted border-2 border-background z-20" />
                      <h4 className="text-base font-semibold text-primary m-0 mb-1 font-sans">{aboutData.education.degree}</h4>
                      <div className="text-sm text-secondary mb-2">{aboutData.education.institution}</div>
                      <div className="text-[13px] font-mono text-muted">{aboutData.education.expectedGraduation}</div>
                    </div>
                  </div>

                  {/* Certifications */}
                  {aboutData.certifications && aboutData.certifications.length > 0 && (
                    <div className="relative pt-4 pb-12">
                      <h3 className="text-xl font-semibold text-primary m-0 mb-6 font-sans">Certifications</h3>
                      <div className="flex flex-col gap-8">
                        {aboutData.certifications.map((cert, i) => (
                          <div key={i} className="relative">
                            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-cyan)] border-2 border-background z-20" />
                            <h4 className="text-base font-semibold text-primary m-0 mb-1 font-sans">
                              {cert.href ? (
                                <a href={cert.href} className="text-primary no-underline hover:text-accent transition-colors">
                                  {cert.name}
                                </a>
                              ) : (
                                cert.name
                              )}
                            </h4>
                            <div className="text-sm text-secondary mb-2">{cert.issuer}</div>
                            <div className="text-[13px] font-mono text-muted">{cert.year}</div>
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
