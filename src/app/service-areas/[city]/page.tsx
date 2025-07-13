
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { serviceAreas, services } from '@/lib/constants';
import { ServiceCard } from '@/components/common/service-card';
import { Button } from '@/components/ui/button';
import { SchedulingSection } from '@/components/sections/scheduling-section';

// Helper to convert city names to slugs and back
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');
const unslugify = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Generate static paths for all cities at build time for performance and SEO
export async function generateStaticParams() {
    return serviceAreas.map(city => ({
        city: slugify(city),
    }));
}

// Generate dynamic metadata for each city page for better SEO
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const cityName = unslugify(params.city);

    // Find the original city name to ensure correct capitalization for the title
    const originalCity = serviceAreas.find(area => slugify(area) === params.city) || cityName;

    return {
        title: `Home Inspection Services in ${originalCity}, FL | Mayne Inspectors`,
        description: `Your trusted local home inspectors in ${originalCity}, FL. We offer comprehensive services including 4-point, wind mitigation, and mold testing. Schedule your ${originalCity} inspection today.`,
        keywords: `home inspection ${originalCity}, ${originalCity} home inspector, 4-point inspection ${originalCity}, wind mitigation ${originalCity}, mayne inspectors ${originalCity}`,
    };
}


export default function ServiceAreaPage({ params }: { params: { city: string } }) {
    const cityName = unslugify(params.city);
    // Use the original city name from constants to preserve capitalization
    const originalCity = serviceAreas.find(area => slugify(area) === params.city) || cityName;
    const cityIndex = serviceAreas.findIndex(area => slugify(area) === params.city);
    const isLehighAcres = params.city === 'lehigh-acres';
    const isLaBelle = params.city === 'labelle';
    const isClewiston = params.city === 'clewiston';
    const isFortMyers = params.city === 'fort-myers';

    // Define content variations to make each page unique for SEO
    const headlines = [
        { primary: "Expert Home Inspections", secondary: `in {city}, FL`},
        { primary: "Your Premier Inspector", secondary: `for {city}, FL` },
        { primary: "Trusted Property Inspections", secondary: `in the {city} Area`},
    ];

    const intros = [
        `Mayne Home Inspectors is proud to provide our full suite of professional, reliable, and modern inspection services to the community of {city}. We are committed to ensuring you have a complete understanding of your property investment.`,
        `Serving homeowners and real estate professionals throughout {city}, Mayne Home Inspectors offers detailed and trustworthy inspection services. Let us empower you with the knowledge to make confident property decisions.`,
        `For thorough and dependable home inspections in {city}, look no further. Our team brings expertise and modern technology to every job, giving you the peace of mind you deserve when buying or selling property.`,
        `As a leading home inspector for the {city} area, we are dedicated to delivering top-quality reports and exceptional customer service. We inspect every property as if it were our own.`
    ];

    // Cycle through the content variations based on the city's index
    const headline = headlines[cityIndex % headlines.length];
    const intro = intros[cityIndex % intros.length];

    const currentHeadline = {
        primary: headline.primary.replace(/{city}/g, originalCity),
        secondary: headline.secondary.replace(/{city}/g, originalCity)
    };
    const currentIntro = intro.replace(/{city}/g, originalCity);

    return (
        <div className="bg-background">
            <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8 hidden md:inline-flex">
                        <Link href="/#services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Homepage
                        </Link>
                    </Button>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-center">
                        <span className="block text-primary">{currentHeadline.primary}</span>
                        <span className="block text-foreground mt-2">{currentHeadline.secondary}</span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                        {currentIntro}
                    </p>
                </div>

                {isLaBelle && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <Image 
                            src="/images/hendry-county-courthouse.png"
                            alt="Hendry County Courthouse in LaBelle, FL"
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg mx-auto"
                        />
                    </div>
                )}
                {isLehighAcres && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <Image 
                            src="/images/lehigh-acres-sign.png"
                            alt="Welcome to Lehigh Acres sign with a palm tree"
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg mx-auto"
                        />
                    </div>
                )}
                {isClewiston && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <Image 
                            src="/images/clewiston-flag.png"
                            alt="Clewiston city flag"
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg mx-auto"
                        />
                    </div>
                )}
                {isFortMyers && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <Image 
                            src="/images/fort-myers-home-inspection.png"
                            alt="A beautiful home in Fort Myers, FL being inspected"
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg mx-auto"
                        />
                    </div>
                )}

                <div className="mt-16">
                     <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12 font-headline">
                        Services Available in {originalCity}
                    </h2>
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
                </div>
            </section>
            
            <SchedulingSection />
        </div>
    );
}
