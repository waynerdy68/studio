
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-background pt-20 pb-12 md:pt-28 md:pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
 src="/new-images/mayne-hero-section-florida-home.png"
          alt="Exterior of a modern, beautiful home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          data-ai-hint="modern house"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollAnimationWrapper animationClass="animate-fadeInUp">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <span className="block text-white">Your Trusted Partner in</span>
            <span className="block text-primary mt-2">Home Inspection Excellence</span>
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200">
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 sm:text-xl md:text-2xl">
            Mayne Home Inspectors: Providing thorough, reliable, and modern inspection services in LaBelle, FL and surrounding communities.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-400">
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="#schedule">Schedule an Inspection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
