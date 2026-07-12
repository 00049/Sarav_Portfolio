"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { aboutData } from "@/lib/data/about";
import { MapPin, Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { NodeGraphic } from "@/components/ui/NodeGraphic";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--background-secondary)",
        position: "relative",
      }}
    >
      {/* Edge Fades */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "linear-gradient(to bottom, var(--background), transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "linear-gradient(to top, var(--background), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="about-container"
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <SectionHeader
          eyebrow="The Engineer"
          heading="About"
          align="left"
        />

        <div
          className="about-layout"
          style={{
            marginTop: 48,
            display: "grid",
            gap: 48,
          }}
        >
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
           suppressHydrationWarning>
            {/* 1. Philosophy */}
            <div>
              <Label>Engineering Philosophy</Label>
              <div
                style={{
                  borderLeft: "2px solid rgba(242,217,160,0.2)",
                  paddingLeft: 20,
                  marginTop: 10,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {aboutData.philosophy}
                </p>
              </div>
            </div>

            {/* 2. Current Focus */}
            <div style={{ marginTop: 36 }}>
              <Label>Currently Working On</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
                {aboutData.currentFocus.map((focus, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 13,
                        color: "var(--accent-gold)",
                        marginTop: 1,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Experience */}
            <div style={{ marginTop: 36 }}>
              <Label>Experience</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
                {aboutData.experience.map((exp, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {exp.role}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 8,
                        marginTop: 4,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 13,
                          fontFamily: "var(--font-geist-mono)",
                          color: "var(--accent-gold)",
                        }}
                      >
                        {exp.company}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontFamily: "var(--font-geist-mono)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {exp.period}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <div
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "var(--accent-gold)",
                              marginTop: 6,
                              flexShrink: 0,
                            }}
                          />
                          <div
                            style={{
                              fontSize: 13,
                              color: "var(--text-secondary)",
                              lineHeight: 1.6,
                            }}
                          >
                            {highlight}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
           suppressHydrationWarning>
            {/* Identity Card */}
            <div
              style={{
                background: "var(--background-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
              }}
            >
              {/* Top Avatar - Profile Picture */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--border)",
                  position: "relative",
                  marginBottom: 8,
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Saravpreet Singh Pruthi"
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginTop: 14,
                }}
              >
                {aboutData.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                Full Stack & AI Security Engineer
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 8,
                }}
              >
                <MapPin size={12} color="var(--text-muted)" />
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {aboutData.location}
                </div>
              </div>

              <div
                style={{
                  height: 1,
                  background: "var(--border)",
                  margin: "20px 0",
                }}
              />

              {/* Education */}
              <div>
                <Label>Education</Label>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginTop: 8,
                  }}
                >
                  {aboutData.education.degree}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginTop: 3,
                  }}
                >
                  {aboutData.education.institution}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--text-muted)",
                    marginTop: 2,
                  }}
                >
                  {aboutData.education.expectedGraduation}
                </div>
              </div>

              <div
                style={{
                  height: 1,
                  background: "var(--border)",
                  margin: "20px 0",
                }}
              />

              {/* Certification */}
              <div>
                <Label>Certification</Label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        marginTop: 8,
                      }}
                    >
                      {aboutData.certifications[0].name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontFamily: "var(--font-geist-mono)",
                        color: "var(--text-muted)",
                        marginTop: 3,
                      }}
                    >
                      {aboutData.certifications[0].issuer} ·{" "}
                      {aboutData.certifications[0].year}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      fontFamily: "var(--font-geist-mono)",
                      color: "#75162D",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: 1,
                  background: "var(--border)",
                  margin: "20px 0",
                }}
              />

              {/* Availability */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent-gold)",
                    flexShrink: 0,
                    animation: "pulseDot 3s infinite",
                  }}
                />
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {aboutData.availability}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ marginTop: 20, padding: "0 12px" }}>
              <Label>Find me at</Label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                <Link
                  href="https://github.com/00049"
                  target="_blank"
                  className="quick-link"
                >
                  <Github size={14} />
                  <span>github.com/00049</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/saravpreetpruthi"
                  target="_blank"
                  className="quick-link"
                >
                  <Linkedin size={14} />
                  <span>linkedin.com/in/saravpreetpruthi</span>
                </Link>
                <Link
                  href="mailto:Sarav.pruthi@gmail.com"
                  className="quick-link"
                >
                  <Mail size={14} />
                  <span>Sarav.pruthi@gmail.com</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-layout {
          grid-template-columns: 60fr 40fr;
        }
        @media (max-width: 800px) {
          .about-layout {
            grid-template-columns: 1fr;
          }
        }
        
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(242, 217, 160, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(242, 217, 160, 0); }
          100% { box-shadow: 0 0 0 0 rgba(242, 217, 160, 0); }
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text-secondary);
          transition: color 200ms ease;
        }
        .quick-link span {
          font-size: 13px;
        }
        .quick-link svg {
          color: var(--text-muted);
          transition: color 200ms ease;
        }
        .quick-link:hover, .quick-link:hover svg {
          color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
