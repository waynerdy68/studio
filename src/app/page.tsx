
import { HeroSection } from "@/components/sections/hero-section";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { VideoSection } from "@/components/sections/video-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SchedulingSection } from "@/components/sections/scheduling-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <VideoSection />
      <TestimonialsSection />
      <PricingSection />
      <SchedulingSection />
      <ContactSection />
    </>
  );
}
