// src/app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { FormProvider } from '@/context/form-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/common/back-to-top-button';
import { AIChatbox } from '@/components/common/ai-chatbox';
import { MobileCTABar } from '@/components/common/mobile-cta-bar';
import { FloatingContactWidget } from '@/components/common/floating-contact-widget';
import { serviceAreas } from '@/lib/constants';

// ====== SET THESE TWO AND KEEP THEM CONSISTENT EVERYWHERE ======
const PHONE_E164 = '+18638430735';            // E.164 format for schema (and tel: links)
const PHONE_DISPLAY = '(863) 843-0735';       // Human-friendly format for copy
// If your real number is the 239 one, change both to +12398430735 and "(239) 843-0735"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// ------- JSON-LD object (HomeInspector) -------
function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeInspector',
    name: 'Mayne Home Inspectors',
    url: 'https://mayneinspectors.com',
    image: 'https://mayneinspectors.com/images/logo-dark-1024.png',
    logo:  'https://mayneinspectors.com/images/logo-dark-1024.png',
    telephone: +18638430735,
    email: 'castenhome@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '505 W Hickpochee Ave Suite 200',
      addressLocality: 'LaBelle',
      addressRegion: 'FL',
      postalCode: '33935',
      addressCountry: 'US'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.7631, longitude: -81.4415 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '16:00' }
    ],
    areaServed: serviceAreas.map((city: string) => ({
      '@type': 'City', name: city, addressRegion: 'FL', addressCountry: 'US'
    })),
    sameAs: [
      'https://www.facebook.com/mayneinspectors',
      'https://www.yelp.com/biz/mayne-home-inspectors-labelle-2',
      'https://maps.app.goo.gl/MwNuS8nhnXJC4zbq5' // replace with full Maps 'place' URL w/ cid when you have it
    ]
  }
}


// ------- Page <head> metadata -------
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://mayneinspectors.com';
  return {
    metadataBase: new URL(baseUrl),
    title: "Mayne Home Inspectors - Premier Home Inspections in LaBelle, FL",
    description:
      `Professional home inspection services in LaBelle, Fort Myers, Cape Coral & Southwest Florida. Call ${PHONE_DISPLAY} for 24-hour service. Licensed & insured with 5.0 Google rating.`,
    keywords: [
      'home inspection LaBelle FL',
      'home inspector Fort Myers',
      'Cape Coral home inspection',
      '4-point inspection',
      'wind mitigation',
      '24-hour inspection reports',
      'licensed home inspector Southwest Florida'
    ],
    icons: { icon: '/favicon.ico' },
    alternates: { canonical: '/' },
    openGraph: {
      title: "Mayne Home Inspectors - Southwest Florida's Premier Home Inspector",
      description: `Professional home inspections with 24-hour reports. Serving LaBelle, Fort Myers, Cape Coral & more. Call ${PHONE_DISPLAY}`,
      url: baseUrl,
      siteName: 'Mayne Home Inspectors',
      images: [{ url: '/images/punta-gorda-home-inspection-dji-mini.png', width: 1200, height: 630, alt: 'Professional home inspector using drone technology' }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mayne Home Inspectors - Southwest Florida Home Inspections',
      description: `Professional home inspections with 24-hour reports. Call ${PHONE_DISPLAY}`,
      images: ['/images/punta-gorda-home-inspection-dji-mini.png'],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = buildStructuredData();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* #1 Local SEO: HomeInspector JSON-LD */}
        <Script id="ldjson-homeinspector" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FormProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pb-24 md:pb-0">{children}</main>
              <Footer />
              <BackToTopButton />
              <AIChatbox />
              <MobileCTABar />
              <FloatingContactWidget />
            </div>
          </FormProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
