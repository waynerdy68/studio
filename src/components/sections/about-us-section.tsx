
"use client";

import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, ShieldCheck } from "lucide-react";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Your Inspector, Your Advocate</h2>
          <p className="section-subtitle">
            Meet the expert dedicated to ensuring your peace of mind.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100" className="lg:col-span-2">
             <div className="relative aspect-square rounded-xl shadow-2xl overflow-hidden group">
                <Image
                  src="/images/wayne-casten-inspector.png"
                  alt="Photo of Wayne Casten, lead inspector at Mayne Inspectors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="transform transition-transform duration-500 group-hover:scale-105 object-cover"
                  data-ai-hint="person portrait professional"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold font-headline">Wayne Casten</h3>
                    <p className="text-sm opacity-90">Founder, Mayne Inspectors</p>
                 </div>
              </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200" className="lg:col-span-3">
            <div className="space-y-6 text-foreground/90">
               <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground">
                "We inspect every property as if it were our own investment. Your confidence is our top priority."
              </blockquote>

              <p className="text-base leading-relaxed">
                From a young age, I began my career in the building industry alongside my father, a licensed Florida Contractor. This experience fueled my passion for the field, leading me to obtain my State Contractor's License in 2005 and my Home Inspector License in 2011.
              </p>
              <p className="text-base leading-relaxed">
              With over 30 years of combined experience in construction and inspections, we understand the anxieties of buying property. We're here to alleviate that stress by providing a comprehensive inspection conducted by a highly trained professional. At Mayne Inspectors, we believe an inspection isn't complete until all your questions are answered.
              </p>
              
               <div className="flex items-center gap-4 p-4 bg-card/80 rounded-lg border border-border/50">
                <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
                <div>
                    <h4 className="font-semibold">Certified & Insured Professional</h4>
                    <p className="text-sm text-muted-foreground">Empowering you to make informed decisions with peace of mind.</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
