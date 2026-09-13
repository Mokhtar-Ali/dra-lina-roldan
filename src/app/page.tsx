import { AboutSection } from "@/components/home/AboutSection";
import { CareApproachSection } from "@/components/home/CareApproachSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroSection } from "@/components/home/HeroSection";
import { InternationalPatientsSection } from "@/components/home/InternationalPatientsSection";
import { JournalSection } from "@/components/home/JournalSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CareApproachSection />
        <ServicesSection />
        <TestimonialsSection />
        <InternationalPatientsSection />
        <JournalSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
