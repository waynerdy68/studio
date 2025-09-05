"use client";

import { useEffect, useActionState } from "react";
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
import { useFormContext as useSharedFormContext } from "@/context/form-context";

const scheduleFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a valid property address"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  notes: z.string().optional(),
  honeypot: z.string().optional(), // Honeypot field
});

type ScheduleFormData = z.infer<typeof scheduleFormSchema>;

const initialState: ScheduleFormState = {
  message: "",
  success: false,
};

export function SchedulingSection() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(scheduleInspection, initialState);
  const { sharedData, setSharedData } = useSharedFormContext();

  const form = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: sharedData.name || "",
      address: "",
      email: sharedData.email || "",
      phone: sharedData.phone || "",
      notes: "",
      honeypot: "",
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
        form.reset({
          ...form.getValues(),
          address: "",
          notes: "",
          honeypot: "",
        });
      }
    }
  }, [state, toast, form]);

  useEffect(() => {
    const fv = form.getValues();
    if (fv.name !== sharedData.name || fv.email !== sharedData.email || fv.phone !== sharedData.phone) {
      form.reset({
        ...sharedData,
        address: fv.address,
        notes: fv.notes,
        honeypot: fv.honeypot,
      });
    }
  }, [sharedData, form]);

  const nameReg = form.register("name");
  const emailReg = form.register("email");
  const phoneReg = form.register("phone");

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
                  {/* Honeypot Field (hidden from users) */}
                  <div className="absolute w-0 h-0 overflow-hidden">
                    <Label htmlFor="honeypot">Do not fill this out</Label>
                    <Input id="honeypot" {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="font-medium">Full Name</Label>
                    <Input
                      id="name"
                      {...nameReg}
                      placeholder="John Doe"
                      className="mt-1"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        nameReg.onChange(e);
                        setSharedData({ name: e.target.value });
                      }}
                      aria-invalid={!!form.formState.errors.name || !!state.errors?.name}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                    )}
                    {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address" className="font-medium">Property Address</Label>
                    <Input
                      id="address"
                      {...form.register("address")}
                      placeholder="123 Main St, LaBelle, FL"
                      className="mt-1"
                      aria-invalid={!!form.formState.errors.address || !!state.errors?.address}
                    />
                    {form.formState.errors.address && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.address.message}</p>
                    )}
                    {state.errors?.address && <p className="text-sm text-destructive mt-1">{state.errors.address[0]}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...emailReg}
                      placeholder="you@example.com"
                      className="mt-1"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        emailReg.onChange(e);
                        setSharedData({ email: e.target.value });
                      }}
                      aria-invalid={!!form.formState.errors.email || !!state.errors?.email}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                    )}
                    {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="font-medium">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...phoneReg}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        phoneReg.onChange(e);
                        setSharedData({ phone: e.target.value });
                      }}
                      aria-invalid={!!state.errors?.phone}
                    />
                    {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
                  </div>

                  {/* Notes */}
                  <div>
                    <Label htmlFor="notes" className="font-medium">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      {...form.register("notes")}
                      placeholder="Preferred date/time, specific concerns, etc."
                      className="mt-1 min-h-[100px]"
                      aria-invalid={!!state.errors?.notes}
                    />
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080&q=80&auto=format&fit=crop"
                alt="Home inspector with clipboard and house plans"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="rounded-xl shadow-2xl object-cover"
                data-ai-hint="inspector clipboard"
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
