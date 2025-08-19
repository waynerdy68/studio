
import type { Metadata } from 'next';
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
import { serviceAreas } from '@/lib/constants';
import { FloatingContactWidget } from '@/components/common/floating-contact-widget';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://mayneinspectors.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Mayne Home Inspectors - Premier Home Inspections in LaBelle, FL',
    description:
      'Professional home inspection services in LaBelle, Fort Myers, Cape Coral & Southwest Florida. Call (239) 843-0735 for same-day service. Licensed & insured with 5.0 Google rating.',
    keywords: 'home inspection LaBelle FL, home inspector Fort Myers, Cape Coral home inspection, 4-point inspection, wind mitigation, same day inspection reports, licensed home inspector Southwest Florida',
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Mayne Home Inspectors - Southwest Florida\'s Premier Home Inspector',
      description: 'Professional home inspections with same-day reports. Serving LaBelle, Fort Myers, Cape Coral & more. Call (239) 843-0735',
      url: 'https://mayneinspectors.com',
      siteName: 'Mayne Home Inspectors',
      images: [
        {
          url: '/images/punta-gorda-home-inspection-dji-mini.png',
          width: 1200,
          height: 630,
          alt: 'Professional home inspector using drone technology'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mayne Home Inspectors - Southwest Florida Home Inspections',
      description: 'Professional home inspections with same-day reports. Call (239) 843-0735',
      images: ['/images/punta-gorda-home-inspection-dji-mini.png'],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeInspector',
    name: 'Mayne Home Inspectors',
    telephone: '239-843-0735',
    url: 'https://mayneinspectors.com',
    email: 'castenhome@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '505 W Hickpochee Ave Suite 200',
      addressLocality: 'LaBelle',
      addressRegion: 'FL',
      postalCode: '33935',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7631,
      longitude: -81.4415,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '16:00',
      },
    ],
    areaServed: serviceAreas.map((city) => ({
      '@type': 'City',
      name: city,
      addressRegion: 'FL',
      addressCountry: 'US'
    })),
    sameAs: [
      'https://g.page/r/CVD2PrmEP1lVEAE/review',
      'https://www.yelp.com/biz/mayne-home-inspectors-labelle-2',
      'https://www.facebook.com/mayneinspectors'
    ],
    priceRange: '$$',
  };
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
