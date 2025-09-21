
import { HeroSection } from "@/components/sections/hero-section";
import AboutUsSection from "@/components/sections/about-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AiToolsSection } from "@/components/sections/ai-tools-section";
import { VideoSection } from "@/components/sections/video-section";
import { GoogleReviewsWidget } from "@/components/sections/google-reviews-widget";
import { PricingSection } from "@/components/sections/pricing-section";
import { SchedulingSection } from "@/components/sections/scheduling-section";
import { ContactSection } from "@/components/sections/contact-section";

// No JSON-LD here. All schema lives in layout.tsx.

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <AiToolsSection />
      <VideoSection />
      <GoogleReviewsWidget />
      <PricingSection />
      <SchedulingSection />
      <ContactSection />
    </>
  );
}
