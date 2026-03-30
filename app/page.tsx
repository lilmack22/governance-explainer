import Hero from "@/components/landing/Hero";
import InterventionLadder from "@/components/landing/InterventionLadder";
import BandaidSection from "@/components/landing/BandaidSection";
import SustainabilitySection from "@/components/landing/SustainabilitySection";
import CoreThesis from "@/components/landing/CoreThesis";
import CaseCTA from "@/components/landing/CaseCTA";

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
          Built as an educational resource for development practitioners,
          World Bank staff, and students of political economy. Analysis is
          pedagogical, not prescriptive.
        </p>
      </footer>
    </>
  );
}
