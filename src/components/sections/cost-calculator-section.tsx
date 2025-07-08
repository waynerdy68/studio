
"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { getCostEstimateAction, sendEstimatesAction, type CostCalculatorState, type SendEstimatesState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { DollarSign, AlertTriangle, Wrench, ListChecks, Send, Trash2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CostCalculatorOutput } from "@/ai/schemas/cost-calculator-schema";
import { useToast } from "@/hooks/use-toast";
import { useFormContext } from "@/context/form-context";
import { Button } from "../ui/button";

const initialCostState: CostCalculatorState = {
  success: false,
};

const initialSendState: SendEstimatesState = {
  message: "",
  success: false,
};

type EstimateWithDesc = CostCalculatorOutput & { originalDescription: string };

export function CostCalculatorSection() {
  const [costState, getCostAction] = useActionState(getCostEstimateAction, initialCostState);
  const [sendState, sendEstimatesFormAction] = useActionState(sendEstimatesAction, initialSendState);
  
  const [estimates, setEstimates] = useState<EstimateWithDesc[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { sharedData, setSharedData } = useFormContext();

  useEffect(() => {
    if (costState.success && costState.estimate) {
      setEstimates(prev => [...prev, costState.estimate!]);
      formRef.current?.reset();
    }
  }, [costState]);

  useEffect(() => {
    if (sendState.message) {
       toast({
        title: sendState.success ? "Success!" : "Error",
        description: sendState.message,
        variant: sendState.success ? "default" : "destructive",
      });
    }
  }, [sendState, toast]);

  const clearAllEstimates = () => {
    setEstimates([]);
  }

  return (
    <section id="cost-estimator" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">AI Repair Cost Estimator</h2>
          <p className="section-subtitle">
            Found an issue? Describe it below to get an AI-powered estimate for the material costs. Add multiple items to build a list.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
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
                  <form action={getCostAction} ref={formRef} className="space-y-6">
                    <div>
                      <Label htmlFor="deficiencyDescription">Deficiency Description</Label>
                      <Textarea
                        id="deficiencyDescription"
                        name="deficiencyDescription"
                        placeholder="e.g., 'The toilet in the master bathroom runs continuously after flushing.' or 'There is a large water stain on the ceiling in the living room.'"
                        className="mt-1 min-h-[120px]"
                        required
                      />
                      {costState.error && !costState.success && (
                          <p className="text-sm text-destructive mt-2">{costState.error}</p>
                      )}
                    </div>
                    <FormSubmitButton className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                      Add Estimate to List
                    </FormSubmitButton>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
            
            {estimates.length > 0 && !sendState.success && (
              <ScrollAnimationWrapper animationClass="animate-fadeInUp">
                <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                            <Send className="text-accent"/>
                            Save Your Estimates
                        </CardTitle>
                        <CardDescription>
                          Enter your details below to email a copy of your estimate list.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={sendEstimatesFormAction} className="space-y-4">
                            <input type="hidden" name="estimatesJson" value={JSON.stringify(estimates)} />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="send-estimates-name">Name</Label>
                                    <Input id="send-estimates-name" name="name" placeholder="John Doe" className="mt-1" required 
                                      defaultValue={sharedData.name}
                                      onChange={(e) => setSharedData({ name: e.target.value })}
                                    />
                                    {sendState.errors?.name && <p className="text-sm text-destructive mt-1">{sendState.errors.name[0]}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="send-estimates-email">Email</Label>
                                    <Input id="send-estimates-email" name="email" type="email" placeholder="you@example.com" className="mt-1" required 
                                      defaultValue={sharedData.email}
                                      onChange={(e) => setSharedData({ email: e.target.value })}
                                    />
                                    {sendState.errors?.email && <p className="text-sm text-destructive mt-1">{sendState.errors.email[0]}</p>}
                                </div>
                            </div>
                            <FormSubmitButton className="w-full text-lg py-3 bg-accent hover:bg-accent/90">
                                Email My List
                            </FormSubmitButton>
                        </form>
                    </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            )}

          </div>

          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 min-h-[400px]">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="font-headline text-2xl">Your Estimate List</CardTitle>
                  {estimates.length > 0 && (
                     <Button variant="ghost" size="sm" onClick={clearAllEstimates} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4"/>
                       Clear All
                    </Button>
                  )}
                </div>
                <CardDescription>Your generated estimates will appear below.</CardDescription>
              </CardHeader>
              <CardContent>
                {estimates.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full" defaultValue="Estimate-0">
                        {estimates.map((item, index) => (
                           <AccordionItem key={index} value={`Estimate-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-normal text-muted-foreground">Issue #{index + 1}</span>
                                        <span className="truncate w-64">{item.originalDescription}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4">
                                    <div>
                                        <h3 className="text-md font-semibold flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-500" />Estimated Material Cost</h3>
                                        <p className="text-2xl font-bold text-foreground mt-1">
                                            ${item.estimatedMinCost} - ${item.estimatedMaxCost}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-md font-semibold flex items-center gap-2"><ListChecks className="w-5 h-5 text-primary" />Required Materials</h3>
                                        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                                            {item.requiredMaterials.map((material, matIndex) => (
                                            <li key={matIndex}>{material}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-3 rounded-md mt-4">
                                        <div className="flex items-start">
                                            <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-destructive" />
                                            <div>
                                                <h4 className="font-bold text-sm">Disclaimer</h4>
                                                <p className="text-xs">{item.disclaimer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                           </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                  <div className="text-muted-foreground text-center p-8 flex flex-col items-center justify-center h-full min-h-[200px]">
                    <Wrench className="w-16 h-16 mb-4 text-muted-foreground/50"/>
                    <p>Add an issue on the left to start building your estimate list.</p>
                  </div>
                )}
                 {sendState.success && (
                    <div className="text-center p-8">
                        <CardTitle className="font-headline text-2xl text-accent">List Sent!</CardTitle>
                        <CardDescription className="mt-2">{sendState.message}</CardDescription>
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
