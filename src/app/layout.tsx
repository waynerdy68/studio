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
import { serviceAreas } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://mayneinspectors.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Mayne Home Inspectors - Premier Home Inspections in LaBelle, FL',
    description:
      'Mayne Home Inspectors offers comprehensive home inspection services in LaBelle, Lehigh Acres, Clewiston, Moore Haven, Immokalee, Fort Myers, Cape Coral, Punta Gorda, and Port Charlotte. Schedule your inspection today for peace of mind.',
    keywords: 'home inspection, LaBelle, Florida, Mayne Home Inspectors, 4-point inspection, wind mitigation, mold testing, radon testing, commercial inspection',
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: '/',
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
    telephone: '863-843-0735',
    url: 'https://mayneinspectors.com',
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
    })),
    sameAs: [
      'https://g.page/r/CVD2PrmEP1lVEAE/review',
      'https://www.yelp.com/biz/mayne-home-inspectors-labelle-2',
      'https://www.facebook.com/mayneinspectors',
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
              <main className="flex-grow">{children}</main>
              <Footer />
              <BackToTopButton />
              <AIChatbox />
            </div>
          </FormProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}