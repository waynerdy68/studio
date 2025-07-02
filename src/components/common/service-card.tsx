import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, name, description, index }: ServiceCardProps) {
  const delayClass = `delay-${index * 100}`; // e.g., delay-0, delay-100, delay-200

  return (
    <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay={delayClass}>
      <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Image src="/images/Mayne-Inspector-light.png" alt="Company Logo" width={32} height={32} className="mr-3" />
          <CardTitle className="text-xl font-semibold font-headline">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  );
}
