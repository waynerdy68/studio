"use client";

import { useActionState } from "react";
import { getCostEstimateAction, type CostCalculatorState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { DollarSign, AlertTriangle, Wrench, ListChecks } from "lucide-react";

const initialCostState: CostCalculatorState = {
  success: false,
};

export function CostCalculatorSection() {
  const [state, formAction] = useActionState(getCostEstimateAction, initialCostState);

  return (
    <section id="cost-estimator" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">AI Repair Cost Estimator</h2>
          <p className="section-subtitle">
            Found an issue? Describe it below to get an AI-powered estimate for the material costs involved in the repair.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Wrench className="text-primary" />
                  Describe the Issue
                </CardTitle>
                <CardDescription>Be as specific as possible for a more accurate estimate.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="deficiencyDescription">Deficiency Description</Label>
                    <Textarea
                      id="deficiencyDescription"
                      name="deficiencyDescription"
                      placeholder="e.g., 'The toilet in the master bathroom runs continuously after flushing.' or 'There is a large water stain on the ceiling in the living room.'"
                      className="mt-1 min-h-[120px]"
                      required
                    />
                    {state.error && !state.success && (
                        <p className="text-sm text-destructive mt-2">{state.error}</p>
                    )}
                  </div>
                  <FormSubmitButton className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                    Estimate Material Cost
                  </FormSubmitButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 min-h-[300px]">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Cost & Materials Estimate</CardTitle>
                <CardDescription>Your AI-generated estimate will appear below.</CardDescription>
              </CardHeader>
              <CardContent>
                {state.success && state.estimate ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-500" />Estimated Material Cost</h3>
                      <p className="text-3xl font-bold text-foreground mt-1">
                        ${state.estimate.estimatedMinCost} - ${state.estimate.estimatedMaxCost}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2"><ListChecks className="w-5 h-5 text-primary" />Required Materials</h3>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                        {state.estimate.requiredMaterials.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-4 rounded-md">
                        <div className="flex items-start">
                            <AlertTriangle className="h-6 w-6 mr-3 mt-1 text-destructive" />
                            <div>
                                <h4 className="font-bold">Disclaimer</h4>
                                <p className="text-sm">{state.estimate.disclaimer}</p>
                            </div>
                        </div>
                    </div>

                  </div>
                ) : (
                  <div className="text-muted-foreground text-center p-8 flex flex-col items-center justify-center h-full">
                    <DollarSign className="w-16 h-16 mb-4 text-muted-foreground/50"/>
                    <p>Your generated cost estimate will appear here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
