"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustMarquee from "@/components/TrustMarquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import Stats from "@/components/Stats";
import AIShowcase from "@/components/AIShowcase";
import TechStack from "@/components/TechStack";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const SmoothScroll = dynamic(
  () => import("@/components/SmoothScroll"),
  { ssr: false }
);

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger after first paint
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Page load curtain ── */}
      <div
        className="fixed inset-0 z-[100] bg-[#050816] pointer-events-none transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ opacity: loaded ? 0 : 1 }}
        aria-hidden={!loaded ? undefined : "true"}
      />

      <SmoothScroll />
      <Background />
      <Nav />
      <main
        className="relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <TrustMarquee />
        <SectionDivider />
        <FeaturesGrid />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <AIShowcase />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <ProductShowcase />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}