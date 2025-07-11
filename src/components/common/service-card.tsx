import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  slug: string;
  index: number;
}

export function ServiceCard({ icon: Icon, name, description, slug, index }: ServiceCardProps) {
  const delayClass = `delay-${index * 100}`;

  return (
    <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay={delayClass}>
      <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="p-2 bg-primary/10 rounded-full">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold font-headline">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-sm text-muted-foreground flex-grow">{description}</p>
          <Button asChild variant="link" className="mt-4 p-0 justify-start text-primary h-auto">
            <Link href={`/services/${slug}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  );
}
