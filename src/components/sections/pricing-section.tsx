import Link from "next/link";
import { pricingTiers } from "@/lib/constants";
import { PricingCard } from "@/components/common/pricing-card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Flexible Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the inspection package that best suits your needs and budget. Transparent pricing, no hidden fees.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              price={tier.price}
              priceDetails={tier.priceDetails}
              features={tier.features}
              icon={tier.icon}
              ctaText={tier.ctaText}
              isPopular={tier.isPopular}
              href={tier.href}
              index={index}
            />
          ))}
        </div>
         <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-400">
          <p className="mt-12 text-center text-muted-foreground">
            Prices may vary based on property size, age, and specific conditions. 
            <Link href="#contact" className="text-primary hover:underline font-medium ml-1">Contact us</Link> for a custom quote.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
