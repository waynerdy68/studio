"use client";

import { useActionState, useEffect } from "react";
import { getChecklistAction, sendChecklistAction, type ChecklistFormState, type SendChecklistState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Lightbulb, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useFormContext } from "@/context/form-context";

const initialChecklistState: ChecklistFormState = {
  success: false,
};

const initialSendState: SendChecklistState = {
  message: "",
  success: false,
};

export function ChecklistGeneratorSection() {
  const [state, formAction] = useActionState(getChecklistAction, initialChecklistState);
  const [sendState, sendFormAction] = useActionState(sendChecklistAction, initialSendState);
  
  const { toast } = useToast();
  const { sharedData, setSharedData } = useFormContext();

  useEffect(() => {
    if (sendState.message && !sendState.success) {
      toast({
        title: "Error",
        description: sendState.message,
        variant: "destructive",
      });
    }
  }, [sendState, toast]);

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

          <div className="lg:col-span-3 space-y-8">
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

            {state.success && state.checklist && (
              <ScrollAnimationWrapper animationClass="animate-fadeInUp">
                <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50">
                  {!sendState.success ? (
                    <>
                      <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                          <Send className="text-primary"/>
                          Get a Copy
                        </CardTitle>
                        <CardDescription>
                          Enter your details below to save a copy of this checklist for your records.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form action={sendFormAction} className="space-y-4">
                          <input type="hidden" name="checklistJson" value={JSON.stringify(state.checklist)} />
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="send-checklist-name">Name</Label>
                              <Input 
                                id="send-checklist-name" 
                                name="name" 
                                placeholder="John Doe" 
                                className="mt-1" 
                                required 
                                defaultValue={sharedData.name}
                                onChange={(e) => setSharedData({ name: e.target.value })}
                              />
                              {sendState.errors?.name && <p className="text-sm text-destructive mt-1">{sendState.errors.name[0]}</p>}
                            </div>
                            <div>
                              <Label htmlFor="send-checklist-email">Email</Label>
                              <Input 
                                id="send-checklist-email" 
                                name="email" 
                                type="email" 
                                placeholder="you@example.com" 
                                className="mt-1" 
                                required 
                                defaultValue={sharedData.email}
                                onChange={(e) => setSharedData({ email: e.target.value })}
                                />
                                {sendState.errors?.email && <p className="text-sm text-destructive mt-1">{sendState.errors.email[0]}</p>}
                            </div>
                          </div>
                          <FormSubmitButton className="w-full text-lg py-3 bg-accent hover:bg-accent/90">
                            Save My Checklist
                          </FormSubmitButton>
                        </form>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-8 text-center">
                       <CardTitle className="font-headline text-2xl text-primary">Checklist Saved!</CardTitle>
                       <CardDescription className="mt-2">{sendState.message}</CardDescription>
                    </CardContent>
                  )}
                </Card>
              </ScrollAnimationWrapper>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
