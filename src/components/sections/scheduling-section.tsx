"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { scheduleInspection, type ScheduleFormState } from "@/app/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const scheduleFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a valid property address"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

type ScheduleFormData = z.infer<typeof scheduleFormSchema>;

const initialState: ScheduleFormState = {
  message: "",
  success: false,
};

export function SchedulingSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(scheduleInspection, initialState);
  
  const form = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="schedule" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Book Your Inspection Today</h2>
          <p className="section-subtitle">
            Ready to get started? Fill out the form below to schedule your home inspection. We&apos;ll confirm your appointment shortly.
          </p>
        </ScrollAnimationWrapper>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100" className="order-2 lg:order-1">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Inspection Request Form</CardTitle>
                <CardDescription>Provide your details and we&apos;ll get in touch to finalize.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-medium">Full Name</Label>
                    <Input id="name" name="name" {...form.register("name")} placeholder="John Doe" className="mt-1" />
                    {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                    {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="address" className="font-medium">Property Address</Label>
                    <Input id="address" name="address" {...form.register("address")} placeholder="123 Main St, LaBelle, FL" className="mt-1" />
                    {form.formState.errors.address && <p className="text-sm text-destructive mt-1">{form.formState.errors.address.message}</p>}
                    {state.errors?.address && <p className="text-sm text-destructive mt-1">{state.errors.address[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-medium">Email Address</Label>
                    <Input id="email" name="email" type="email" {...form.register("email")} placeholder="you@example.com" className="mt-1" />
                    {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                     {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-medium">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" {...form.register("phone")} placeholder="(555) 123-4567" className="mt-1" />
                     {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="notes" className="font-medium">Additional Notes (Optional)</Label>
                    <Textarea id="notes" name="notes" {...form.register("notes")} placeholder="Preferred date/time, specific concerns, etc." className="mt-1 min-h-[100px]" />
                     {state.errors?.notes && <p className="text-sm text-destructive mt-1">{state.errors.notes[0]}</p>}
                  </div>
                  <FormSubmitButton className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                    Request Inspection
                  </FormSubmitButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="animate-fadeIn" delay="delay-200" className="order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                <Image 
                    src="https://placehold.co/600x600.png" 
                    alt="Home inspector at work" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-xl shadow-2xl"
                    data-ai-hint="home inspector"
                />
            </div>
            <p className="mt-6 text-center text-muted-foreground">
                Our certified inspectors are ready to provide you with a comprehensive report.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
