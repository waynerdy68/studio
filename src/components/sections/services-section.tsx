
import Link from "next/link";
import { services, serviceAreas } from "@/lib/constants";
import { ServiceCard } from "@/components/common/service-card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Our Comprehensive Inspection Services</h2>
          <p className="section-subtitle">
            We offer a wide range of inspection services to meet your specific needs, ensuring every detail of your property is thoroughly examined.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              description={service.description}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
        <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-500">
          <div className="mt-16 text-center bg-card/50 p-8 rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold font-headline">Servicing Your Area</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mayne Home Inspectors is proud to serve LaBelle and the surrounding communities. Click on a city to learn more:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-2">
              {serviceAreas.map((area) => (
                <Button key={area} asChild variant="link" className="text-primary font-medium px-2">
                  <Link href={`/service-areas/${slugify(area)}`}>
                    {area}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
