"use client";

import { useEffect, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButton } from "@/components/common/form-submit-button";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useFormContext as useSharedFormContext } from "@/context/form-context";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { sharedData, setSharedData } = useSharedFormContext();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: sharedData.name || "",
      email: sharedData.email || "",
      phone: sharedData.phone || "",
      message: "",
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
          message: "",
        });
      }
    }
  }, [state, toast, form]);

  useEffect(() => {
    if (form.getValues('name') !== sharedData.name || form.getValues('email') !== sharedData.email || form.getValues('phone') !== sharedData.phone) {
      form.reset({
        ...sharedData,
        message: form.getValues("message"),
      });
    }
  }, [sharedData, form]);

  const nameReg = form.register("name");
  const emailReg = form.register("email");
  const phoneReg = form.register("phone");

  return (
    <section id="contact" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or need a custom quote? We&apos;re here to help. Contact us today!
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-100">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we&apos;ll respond as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="font-medium">Full Name</Label>
                    <Input id="contact-name" {...nameReg} placeholder="Jane Smith" className="mt-1" onChange={(e) => {
                      nameReg.onChange(e);
                      setSharedData({ name: e.target.value });
                    }} />
                    {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                    {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="font-medium">Email Address</Label>
                    <Input id="contact-email" type="email" {...emailReg} placeholder="jane@example.com" className="mt-1" onChange={(e) => {
                      emailReg.onChange(e);
                      setSharedData({ email: e.target.value });
                    }} />
                    {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                    {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="font-medium">Phone Number (Optional)</Label>
                    <Input id="contact-phone" type="tel" {...phoneReg} placeholder="(555) 987-6543" className="mt-1" onChange={(e) => {
                      phoneReg.onChange(e);
                      setSharedData({ phone: e.target.value });
                    }} />
                    {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="font-medium">Your Message</Label>
                    <Textarea id="contact-message" {...form.register("message")} placeholder="Your question or inquiry..." className="mt-1 min-h-[120px]" />
                    {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
                    {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                  </div>
                  <FormSubmitButton className="w-full text-lg py-3 bg-accent hover:bg-accent/90">
                    Send Message
                  </FormSubmitButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
           <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-border/50 p-6 lg:p-8">
              <CardTitle className="text-2xl font-bold font-headline mb-6">Contact Information</CardTitle>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-7 h-7 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">505 W Hickpochee Ave Suite 200, LaBelle, FL 33935</p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Mayne+Home+Inspectors&destination_place_id=ChIJF-g0dQ-23ogR-8J1pZ_5-qg" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-primary hover:underline mt-1 block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-7 h-7 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Call/Text Us</h4>
                    <a href="tel:+18638430735" className="text-muted-foreground hover:text-primary transition-colors">(863) 843-0735</a>
                    <p className="text-sm text-muted-foreground">Mon - Sat 7am - 6pm, Sun 12 - 4pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-7 h-7 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <a href="mailto:castenhome@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">castenhome@gmail.com</a>
                    <p className="text-sm text-muted-foreground">Same Day Reply</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Google Maps Location for Mayne Home Inspectors"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBew-oei2S3E03CGHN34ZGYt70fwuZ_q4o&q=place_id:ChIJF-g0dQ-23ogR-8J1pZ_5-qg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}