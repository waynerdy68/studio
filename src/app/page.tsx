
import { HeroSection } from "@/components/sections/hero-section";
import AboutUsSection from "@/components/sections/about-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { VideoSection } from "@/components/sections/video-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SchedulingSection } from "@/components/sections/scheduling-section";
import { ContactSection } from "@/components/sections/contact-section";
import { serviceAreas, testimonials } from "@/lib/constants";

export default function HomePage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Mayne Home Inspectors",
    "image": "https://mayneinspectors.com/images/Mayne-Inspector-light-removebg-preview.png",
    // It's best to replace this with your actual domain when it's live
    "url": "https://mayneinspectors.com/", 
    "telephone": "+1-239-843-0735",
    "email": "castenhome@gmail.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "LaBelle",
      "addressRegion": "FL",
      "postalCode": "33935",
      "addressCountry": "US"
    },
     "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.quote
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
