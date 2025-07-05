"use client";

import { useActionState } from "react";
import { getChecklistAction, type ChecklistFormState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Lightbulb } from "lucide-react";

const initialState: ChecklistFormState = {
  success: false,
};

export function ChecklistGeneratorSection() {
  const [state, formAction] = useActionState(getChecklistAction, initialState);

  return (
    <section id="checklist" className="bg-primary/5 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">AI Pre-Inspection Checklist</h2>
          <p className="section-subtitle">
            Get a personalized pre-inspection checklist. Tell us about the property, and our AI will generate a list of things to look for.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-5 gap-12">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" className="lg:col-span-2">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Lightbulb className="text-primary" />
                  Property Details
                </CardTitle>
                <CardDescription>Fill this out to generate your custom checklist.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select name="propertyType" defaultValue="Single-Family Home" required>
                      <SelectTrigger id="propertyType" className="mt-1">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single-Family Home">Single-Family Home</SelectItem>
                        <SelectItem value="Condo">Condo / Townhouse</SelectItem>
                        <SelectItem value="Multi-Family">Multi-Family Building</SelectItem>
                        <SelectItem value="Commercial">Commercial Property</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="propertyAge">Property Age</Label>
                    <Select name="propertyAge" defaultValue="1981-2000" required>
                      <SelectTrigger id="propertyAge" className="mt-1">
                        <SelectValue placeholder="Select an age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Post-2000">Built after 2000</SelectItem>
                        <SelectItem value="1981-2000">Built 1981 - 2000</SelectItem>
                        <SelectItem value="1960-1980">Built 1960 - 1980</SelectItem>
                        <SelectItem value="Pre-1960">Built before 1960</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="userConcerns">Specific Concerns (Optional)</Label>
                    <Textarea
                      id="userConcerns"
                      name="userConcerns"
                      placeholder="e.g., The roof looks a bit old, there's a musty smell in the basement..."
                      className="mt-1"
                    />
                  </div>
                  <FormSubmitButton className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                    Generate Checklist
                  </FormSubmitButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>

          <div className="lg:col-span-3">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 min-h-[400px]">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Custom Checklist</CardTitle>
                <CardDescription>Here are some key areas to pay attention to during your walkthrough.</CardDescription>
              </CardHeader>
              <CardContent>
                {state.success && state.checklist && (
                   <Accordion type="single" collapsible className="w-full" defaultValue={state.checklist[0]?.category}>
                    {state.checklist.map((categoryItem) => (
                      <AccordionItem key={categoryItem.category} value={categoryItem.category}>
                        <AccordionTrigger className="text-lg font-semibold">{categoryItem.category}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {categoryItem.items.map((item, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
                {!state.success && state.error && (
                  <div className="text-destructive text-center p-8">{state.error}</div>
                )}
                 {!state.checklist && !state.error && (
                    <div className="text-muted-foreground text-center p-8 flex flex-col items-center justify-center h-full">
                        <Lightbulb className="w-16 h-16 mb-4 text-muted-foreground/50"/>
                        <p>Your generated checklist will appear here.</p>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
