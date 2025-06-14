import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  avatarUrl?: string;
  index: number;
}

export function TestimonialCard({ quote, name, location, avatarUrl, index }: TestimonialCardProps) {
  const delayClass = `delay-${index * 100}`;
  return (
    <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay={delayClass}>
      <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="relative mb-4">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                width={80}
                height={80}
                className="rounded-full border-2 border-primary"
                data-ai-hint="person portrait"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <UserIcon className="w-10 h-10 text-primary" />
              </div>
            )}
             <MessageSquare className="absolute -bottom-2 -right-2 w-8 h-8 text-accent bg-background p-1 rounded-full shadow-md" />
          </div>
          <p className="text-muted-foreground italic mb-4">&ldquo;{quote}&rdquo;</p>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <h4 className="font-semibold text-lg font-headline">{name}</h4>
          {location && <p className="text-sm text-muted-foreground">{location}</p>}
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  );
}

// Fallback UserIcon if needed, assuming one isn't imported from lucide-react directly
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
