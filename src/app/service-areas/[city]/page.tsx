
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, Calendar, MapPin, Clock, Shield, Star } from 'lucide-react';
import { serviceAreas, services } from '@/lib/constants';
import { ServiceCard } from '@/components/common/service-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SchedulingSection } from '@/components/sections/scheduling-section';
import { notFound } from 'next/navigation';

// Helper to convert city names to slugs and back
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');
const unslugify = (slug: string) => {
    const originalCity = serviceAreas.find(area => slugify(area) === slug);
    if (originalCity) return originalCity;
    
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Generate static paths for all cities at build time
export async function generateStaticParams() {
    return serviceAreas.map(city => ({
        city: slugify(city),
    }));
}

// Enhanced metadata with local SEO optimization
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const originalCity = serviceAreas.find(area => slugify(area) === params.city);
    const baseUrl = 'https://mayneinspectors.com';
    
    if (!originalCity) {
        return {
            title: "Service Area Not Found",
            description: "Please browse our main service areas.",
        }
    }

    return {
        title: `Home Inspector ${originalCity}, FL | 24-Hour Reports | (863) 843-0735`,
        description: `Professional home inspection services in ${originalCity}, FL. Licensed inspector with 5.0 Google rating. 24-hour reports, drone & infrared technology. Call (863) 843-0735 for immediate service.`,
        keywords: `home inspector ${originalCity} FL, home inspection ${originalCity} Florida, ${originalCity} home inspector near me, 4-point inspection ${originalCity}, wind mitigation ${originalCity}, 24-hour inspection reports ${originalCity}, licensed home inspector ${originalCity}`,
        alternates: {
            canonical: `${baseUrl}/service-areas/${params.city}`,
        },
        openGraph: {
            title: `Home Inspector ${originalCity}, FL | Mayne Home Inspectors`,
            description: `Professional home inspections in ${originalCity}, FL with 24-hour reports. Licensed & insured. Call (863) 843-0735`,
            url: `${baseUrl}/service-areas/${params.city}`,
            images: [
                {
                    url: `/new-images/${params.city === 'labelle' ? 'labelle-florida-cow' : 'punta-gorda-home-inspection-drone'}.png`,
                    width: 1200,
                    height: 630,
                    alt: `Home inspection services in ${originalCity}, Florida`
                }
            ],
        },
    };
}

export default function ServiceAreaPage({ params }: { params: { city: string } }) {
    const originalCity = unslugify(params.city);
    
    if (!serviceAreas.map(slugify).includes(params.city)) {
        notFound();
    }

    const cityIndex = serviceAreas.findIndex(area => slugify(area) === params.city);

    // Local content variations for each city
    const cityContent = {
        headlines: [
            { primary: "Your Trusted Home Inspector", secondary: `in {city}, Florida`},
            { primary: "Professional Home Inspections", secondary: `for {city} Residents` },
            { primary: "Licensed Home Inspector", secondary: `Serving {city} & Surrounding Areas`},
        ],
        localContext: [
            `As your local home inspector in {city}, FL, we understand the unique challenges Southwest Florida properties face - from hurricane preparedness to moisture concerns. Our comprehensive inspections help protect your investment.`,
            `Serving {city} and the greater Southwest Florida region, Mayne Home Inspectors brings cutting-edge technology and decades of experience to every property evaluation. We're your neighbors, committed to your peace of mind.`,
            `{city} residents trust Mayne Home Inspectors for thorough, reliable inspections. Our 24-hour reporting and advanced inspection technology set us apart from other local inspectors.`,
        ],
        localBenefits: [
            `Local {city} knowledge of common property issues`,
            `Understanding of Florida building codes and insurance requirements`, 
            `Familiar with {city} area builders and construction practices`,
            `Quick response time for {city} residents`,
        ]
    };
    
    const cityImageMap: { [key: string]: string } = {
        'labelle': '/new-images/labelle-florida-cow.png',
        'lehigh-acres': '/new-images/lehigh-acres-welcome-inspecting.png',
        'clewiston': '/new-images/clewiston-flag-sugar-town.png',
        'moore-haven': '/new-images/moore-haven-lake-okeechobee.png',
        'immokalee': '/new-images/immokalee-welcome-sign-farming.png',
        'fort-myers': '/new-images/fort-myers-home-inspecting.png',
        'cape-coral': '/new-images/cape-coral-veterans-memorial.png',
        'punta-gorda': '/new-images/punta-gorda-home-inspection-drone.png',
        'port-charlotte': '/new-images/port-charlotte-inspection.png',
        'montura-ranch-estates': '/new-images/montura-ranch-estates-jesus-donkey.png',
    };

    const headline = cityContent.headlines[cityIndex % cityContent.headlines.length];
    const localContext = cityContent.localContext[cityIndex % cityContent.localContext.length];
    const localBenefits = cityContent.localBenefits;

    const currentHeadline = {
        primary: headline.primary.replace(/{city}/g, originalCity),
        secondary: headline.secondary.replace(/{city}/g, originalCity)
    };
    const currentContext = localContext.replace(/{city}/g, originalCity);
    const currentBenefits = localBenefits.map(benefit => benefit.replace(/{city}/g, originalCity));
    
    const imagePath = cityImageMap[params.city] || '/new-images/punta-gorda-home-inspection-drone.png';

    // Generate local business schema for this specific city
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `https://mayneinspectors.com/service-areas/${params.city}`,
        name: `Mayne Home Inspectors - ${originalCity}`,
        image: `https://mayneinspectors.com${imagePath}`,
        telephone: '863-843-0735',
        email: 'castenhome@gmail.com',
        url: `https://mayneinspectors.com/service-areas/${params.city}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: originalCity,
            addressRegion: 'FL',
            addressCountry: 'US',
        },
        areaServed: {
            '@type': 'City',
            name: originalCity,
            addressRegion: 'FL',
            addressCountry: 'US'
        },
        serviceType: 'Home Inspection Services',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Home Inspection Services in ${originalCity}`,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Home Inspection',
                        areaServed: originalCity
                    },
                    price: '350',
                    priceCurrency: 'USD'
                }
            ]
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '50'
        }
    };

    return (
        <div className="bg-background">
            {/* Local Business Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        
                        <Button asChild variant="outline" className="mb-8 hidden md:inline-flex">
                            <Link href="/#services">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Homepage
                            </Link>
                        </Button>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            
                            {/* Content */}
                            <div className="space-y-8">
                                
                                {/* Trust Badges */}
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Licensed in FL
                                    </Badge>
                                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                                        <Star className="w-3 h-3 mr-1" />
                                        5.0 Google Rating
                                    </Badge>
                                    <Badge variant="secondary">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        Local to {originalCity}
                                    </Badge>
                                </div>

                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
                                    <span className="block text-primary">{currentHeadline.primary}</span>
                                    <span className="block text-foreground mt-2">{currentHeadline.secondary}</span>
                                </h1>
                                
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {currentContext}
                                 </p>

                                {/* Prominent Contact */}
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">
                                                    Call or Text for Same-Day Service in {originalCity}
                                                </p>
                                                <a 
                                                    href="tel:+1-863-843-0735" 
                                                    className="text-2xl sm:text-3xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-3"
                                                >
                                                    <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
                                                    (863) 843-0735
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <Badge variant="outline" className="border-accent text-accent">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    Available 7 Days
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="text-lg font-semibold h-14 px-8">
                                        <a href="tel:+1-863-843-0735" className="flex items-center gap-2">
                                            <Phone className="h-5 w-5" />
                                            Call for {originalCity} Inspection
                                        </a>
                                    </Button>
                                    
                                    <Button asChild variant="outline" size="lg" className="text-lg font-semibold h-14 px-8 border-2">
                                        <Link href="#schedule" className="flex items-center gap-2">
                                            <Calendar className="h-5 w-5" />
                                            Schedule Online
                                        </Link>
                                    </Button>
                                </div>

                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image 
                                        src={imagePath}
                                        alt={`Professional home inspection services in ${originalCity}, Florida`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority
                                    />
                                    
                                    {/* Overlay badges */}
                                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold">
                                        24-Hour Reports
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-accent/90 text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold">
                                        Drone + Infrared
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Local Benefits Section */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Why {originalCity} Residents Choose Mayne Inspectors</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentBenefits.map((benefit, index) => (
                                <div key={index} className="bg-background/50 p-4 rounded-lg">
                                    <p className="text-sm font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Available */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-4 font-headline">
                            Home Inspection Services in {originalCity}
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            All services available with same-day scheduling and 24-hour reports for {originalCity} residents.
                        </p>
                        
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
                        
                        {/* Emergency Service Highlight */}
                        <Card className="mt-12 bg-destructive/5 border-destructive/20">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold mb-4">Emergency Inspection Service</h3>
                                <p className="text-muted-foreground mb-6">
                                    Need an urgent inspection in {originalCity}? We offer same-day service for time-sensitive situations.
                                </p>
                                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
                                    <a href="tel:+1-863-843-0735" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Call for Emergency Service
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            <SchedulingSection />
        </div>
    );
}
