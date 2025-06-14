
"use client";

import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">About Mayne Inspectors</h2>
          <p className="section-subtitle">
            Meet the expert dedicated to your peace of mind.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100" className="lg:col-span-2">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/Inspectors-LaBelle-Home Inspector-Clewiston-lehigh acres.png" 
                  alt="Photo of the lead inspector at Mayne Inspectors"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 hover:scale-105"
                  data-ai-hint="person portrait professional"
                />
              </div>
            </Card>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200" className="lg:col-span-3">
            <div className="space-y-6 text-foreground/90">
              <h3 className="text-3xl font-bold font-headline text-primary">
                Your Inspector: [Your Name Here]
              </h3>
              <p className="text-lg leading-relaxed">
                {/* IMPORTANT: Replace this with your actual bio! */}
                Hello! I'm [Your Name], founder and lead inspector at Mayne Home Inspectors. With over [Number] years of dedicated experience in the home inspection industry and a genuine passion for helping clients navigate the complexities of property buying, I established Mayne Inspectors to bring unparalleled thoroughness, honesty, and reliability to our community.
              </p>
              <p className="text-lg leading-relaxed">
                As a certified [mention your certifications, e.g., InterNACHI, Florida State License #] inspector, I am committed to upholding the highest standards of practice. My approach is meticulous, ensuring every accessible component of your potential new home is carefully examined. My goal is not just to identify issues, but to provide you with a clear, comprehensive understanding of the property's condition, empowering you to make an informed decision with confidence.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not inspecting homes, I enjoy [mention a brief, relatable hobby or interest, e.g., "spending time with my family," "exploring the beautiful Florida outdoors," or "volunteering in the LaBelle community"]. I believe in clear communication and am always here to answer your questions before, during, and after the inspection.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <UserCircle className="w-6 h-6 text-accent" />
                <span>Certified & Insured Professional</span>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
