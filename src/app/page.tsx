
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { VideoSection } from "@/components/sections/video-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SchedulingSection } from "@/components/sections/scheduling-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BackToTopButton } from "@/components/common/back-to-top-button";
import { AIChatbox } from "@/components/common/ai-chatbox";
import { FormProvider } from "@/context/form-context";

export default function HomePage() {
  return (
    <FormProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutUsSection />
          <ServicesSection />
          <VideoSection />
          <TestimonialsSection />
          <PricingSection />
          <SchedulingSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTopButton />
        <AIChatbox />
      </div>
    </FormProvider>
  );
}
