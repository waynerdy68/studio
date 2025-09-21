
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Wrench, ArrowRight } from "lucide-react";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function AiToolsSection() {
  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">AI-Powered Tools</h2>
          <p className="section-subtitle">
            Leverage our exclusive AI tools to prepare for your inspection and estimate potential repair costs.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100">
            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                        <Lightbulb className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-headline">AI Pre-Inspection Checklist</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">
                  Generate a personalized checklist for your walkthrough. Our AI considers the property's age and type to highlight common issues, helping you spot potential problems before the official inspection.
                </p>
                <Button asChild variant="link" className="p-0 justify-start text-accent h-auto font-semibold">
                  <Link href="/checklist">
                    Generate Your Checklist <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
           <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200">
            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
               <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Wrench className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-headline">AI Repair Cost Estimator</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">
                  Found an issue during your walkthrough? Describe any deficiency, and our AI will provide a rough estimate for material costs, helping you budget for potential repairs.
                </p>
                <Button asChild variant="link" className="p-0 justify-start text-primary h-auto font-semibold">
                  <Link href="/cost-estimator">
                    Estimate Repair Costs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
