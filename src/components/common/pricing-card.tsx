import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

interface PricingCardProps {
  name: string;
  price: string;
  priceDetails?: string;
  features: string[];
  icon: LucideIcon;
  ctaText: string;
  isPopular?: boolean;
  href: string;
  index: number;
}

export function PricingCard({ name, price, priceDetails, features, icon: Icon, ctaText, isPopular, href, index }: PricingCardProps) {
  const delayClass = `delay-${index * 100}`;
  return (
    <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay={delayClass}>
      <Card
        className={cn(
          "h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/80 backdrop-blur-sm border-border/50",
          isPopular ? "border-primary shadow-primary/30 ring-2 ring-primary" : "border-border"
        )}
      >
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        )}
        <CardHeader className="items-center text-center pt-10">
          <div className={cn("p-3 rounded-full mb-4", isPopular ? "bg-primary/20" : "bg-accent/20")}>
            <Icon className={cn("w-10 h-10", isPopular ? "text-primary" : "text-accent")} />
          </div>
          <CardTitle className="text-2xl font-bold font-headline">{name}</CardTitle>
          <CardDescription className="text-4xl font-extrabold text-foreground mt-2">{price}</CardDescription>
          {priceDetails && <p className="text-sm text-muted-foreground">{priceDetails}</p>}
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className={cn("w-full text-lg py-6", isPopular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90")} size="lg">
            <Link href={href}>{ctaText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </ScrollAnimationWrapper>
  );
}
