import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { ArrowLeft, Award, Calendar, Hash, Building2, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Certified Ethical Hacker (CEH)",
  description: "EC-Council Certified Ethical Hacker certification details.",
};

export default function CEHPage() {
  const certDetails = [
    { label: "Credential", value: "Certified Ethical Hacker", icon: Award },
    { label: "Organization", value: "EC-Council", icon: Building2 },
    { label: "Candidate", value: "Saravpreet Pruthi", icon: User },
    { label: "Certification Number", value: "ECC3512964807", icon: Hash },
    { label: "Issued On", value: "17 February, 2026", icon: Calendar },
    { label: "Renewable On", value: "01 March, 2027", icon: Calendar },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <FadeInSection>
          <PageHeader
            title="Certified Ethical Hacker"
            subtitle="Validating capabilities in offensive security, vulnerability assessment, and penetration testing."
            badge="CEH v12"
          />
        </FadeInSection>

        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              textDecoration: "none",
              marginBottom: 48,
              transition: "color 200ms ease",
            }}
            className="hover:text-white"
          >
            <ArrowLeft size={14} /> Back to About
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "start" }}>
            
            {/* Certificate Image */}
            <FadeInSection delay={0.2} direction="right">
              <div
                style={{
                  background: "var(--background-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 16,
                  position: "relative",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "1.414 / 1", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)" }}>
                  {/* CSS-based Certificate Representation */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at center, #1A1A24 0%, #0A0A0F 100%)",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 32,
                      border: "8px solid #232333",
                    }}
                  >
                    {/* Inner Gold Border */}
                    <div style={{ position: "absolute", inset: 12, border: "2px solid rgba(45,107,228, 0.3)" }} />
                    
                    <div style={{ fontSize: 28, fontWeight: 800, color: "#E63946", letterSpacing: "0.05em", marginBottom: 24, textTransform: "uppercase", fontFamily: "var(--font-geist-sans)" }}>
                      EC-Council
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#000", padding: "16px 32px", borderTop: "2px solid var(--accent-gold)", borderBottom: "2px solid var(--accent-gold)", width: "110%", justifyContent: "center", marginBottom: 32, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF", borderRight: "2px solid #E63946", paddingRight: 16 }}>
                        C<span style={{ color: "#E63946" }}>|</span>EH
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.02em" }}>
                        Certified Ethical Hacker
                      </div>
                    </div>
                    
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12, fontFamily: "var(--font-geist-mono)" }}>This is to acknowledge that</div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12, fontFamily: "var(--font-geist-sans)" }}>Saravpreet Pruthi</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12, fontFamily: "var(--font-geist-mono)" }}>has successfully passed the</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 32 }}>Certified Ethical Hacker</div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 24px", marginTop: "auto", fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-secondary)" }}>
                      <div>Issued: 17 Feb 2026</div>
                      <div>ID: ECC3512964807</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Certificate Details */}
            <FadeInSection delay={0.3} direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 8, fontFamily: "var(--font-geist-sans)" }}>
                    Credential Details
                  </h2>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    Official certification issued by the EC-Council, demonstrating proficiency in understanding and identifying weaknesses and vulnerabilities in target systems.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {certDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: 16,
                        background: "var(--background-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "var(--radius-sm)",
                          background: "var(--background-elevated)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent-gold)",
                          flexShrink: 0,
                        }}
                      >
                        <detail.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                          {detail.label}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}>
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                  <a
                    href={`https://aspen.eccouncil.org/VerifyBadge?type=certification&a=${certDetails.find(d => d.label === "Certification Number")?.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:-translate-y-0.5 transition-transform"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                      gap: 8,
                      padding: "16px 24px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      background: "var(--accent-gold)",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      boxShadow: "0 4px 14px var(--glow-gold)",
                    }}
                  >
                    Verify Credential
                  </a>
                  
                  <a
                    href="/images/ceh-certificate.png"
                    download="Saravpreet_Pruthi_CEH_Certificate.png"
                    className="hover:-translate-y-0.5 transition-transform"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                      gap: 8,
                      padding: "16px 24px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      background: "var(--background-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                    }}
                  >
                    Download Certificate
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
