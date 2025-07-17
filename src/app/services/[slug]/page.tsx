
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services, pricingTiers } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { SchedulingSection } from '@/components/sections/scheduling-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Generate static paths for all services at build time
export async function generateStaticParams() {
    return services.map(service => ({
        slug: service.slug,
    }));
}

// Generate dynamic metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.name} | Mayne Inspectors`,
        description: `Learn more about our professional ${service.name.toLowerCase()} services in Southwest Florida. ${service.description}`,
        keywords: `home inspection, mayne inspectors, ${service.name.toLowerCase()}`,
    };
}


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    // Find which pricing tiers include this service with more specific matching logic
    const relevantTiers = pricingTiers.filter(tier => {
        const serviceNameLower = service.name.toLowerCase();
        // A service is relevant if its exact name appears in a feature, or if a feature explicitly bundles it (e.g. "4-point inspection")
        return tier.features.some(feature => {
            const featureLower = feature.toLowerCase();
            return featureLower.includes(serviceNameLower);
        });
    });

    return (
        <div className="bg-background">
            <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <Button asChild variant="outline" className="mb-8 hidden md:inline-flex">
                        <Link href="/#services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Services
                        </Link>
                    </Button>
                    
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
                            <Image
                                src={service.image}
                                alt={`Image representing ${service.name}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                data-ai-hint="home inspection professional"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="inline-block bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium">
                                Service Details
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline text-foreground">
                                {service.name}
                            </h1>
                            <div className="flex items-center gap-4 text-primary">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: service.longDescription }} />
                        </div>
                    </div>

                    {relevantTiers.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">Included in Our Packages</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {relevantTiers.map(tier => (
                                    <Card key={tier.id} className="bg-card/80 backdrop-blur-sm border-border/50 text-center">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-3xl font-extrabold">{tier.price}</p>
                                            <p className="text-sm text-muted-foreground mb-4">{tier.priceDetails}</p>
                                            <Button asChild className="w-full">
                                                <Link href="/#pricing">View Package</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            
            <SchedulingSection />
        </div>
    );
}
