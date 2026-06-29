"use client";

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
import MouseGlow from "@/components/MouseGlow";

const SmoothScroll = dynamic(
  () => import("@/components/SmoothScroll"),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <MouseGlow />
      <Background />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <TrustMarquee />
        <FeaturesGrid />
        <Stats />
        <AIShowcase />
        <TechStack />
        <ProductShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}