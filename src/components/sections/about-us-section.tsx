
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
                Your Inspector: Wayne Casten
              </h3>
              <p className="text-lg leading-relaxed">
                {/* IMPORTANT: Replace this with your actual bio! */}
                From a young age, I began my career in the building industry alongside my father, a licensed Florida Contractor. This experience fueled my passion for the field, leading me to obtain my State Contractor's License in 2005 and my Home Inspector License in 2011.
              </p>
              <p className="text-lg leading-relaxed">
              With over 30 years of combined experience in construction and inspections, Mayne Inspectors understands the anxieties of buying property. We're here to alleviate that stress by providing a comprehensive inspection conducted by a highly trained professional.
              </p>
              <p className="text-lg leading-relaxed">
              At Mayne Inspectors, we believe an inspection isn't complete until all your questions are answered. We'll ensure you have a complete understanding of your investment, empowering you to make informed decisions with peace of mind.
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
