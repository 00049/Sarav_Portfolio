import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: '404 - Access Denied',
  description: 'The requested route does not exist.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          background: "var(--background)",
          textAlign: "center",
        }}
      >
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(117,22,45,0.05)",
            border: "1px solid rgba(117,22,45,0.15)",
            marginBottom: 32,
          }}
        >
          <ShieldAlert size={32} style={{ color: "var(--accent-gold)" }} />
        </div>
        
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          404: Access Denied
        </h1>
        
        <p
          style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            maxWidth: 400,
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          The route you are attempting to access does not exist or has been removed from the server.
        </p>
        
        <Link
          href="/"
          className="active-scale"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            background: "var(--text-primary)",
            color: "var(--background)",
            borderRadius: "999px",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            fontFamily: "var(--font-geist-sans)",
            transition: "background 200ms ease",
          }}
        >
          Return to root <ArrowRight size={14} />
        </Link>
      </main>
      <Footer />
    </>
  );
}
