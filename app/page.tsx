import Hero from "@/components/landing/Hero";
import InterventionLadder from "@/components/landing/InterventionLadder";
import BandaidSection from "@/components/landing/BandaidSection";
import SustainabilitySection from "@/components/landing/SustainabilitySection";
import CoreThesis from "@/components/landing/CoreThesis";
import CaseCTA from "@/components/landing/CaseCTA";
import { footerContent } from "@/data/landingContent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InterventionLadder />
      <BandaidSection />
      <SustainabilitySection />
      <CoreThesis />
      <CaseCTA />

      <footer className="border-t border-border/40 py-10 px-6 text-center">
        <p className="text-xs text-text-muted max-w-xl mx-auto leading-relaxed">
          {footerContent.text}
        </p>
      </footer>
    </>
  );
}
