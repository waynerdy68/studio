
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { FormProvider } from '@/context/form-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackToTopButton } from '@/components/common/back-to-top-button'
// import { AIChatbox } from '@/components/common/ai-chatbox' // temporarily disabled to avoid runtime issues
import { MobileCTABar } from '@/components/common/mobile-cta-bar'
import { FloatingContactWidget } from '@/components/common/floating-contact-widget'
import { serviceAreas } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const BRAND = 'Mayne Home Inspectors'
const PHONE_E164 = '+18638430735'
const PHONE_DISPLAY = '(863) 843-0735'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://mayneinspectors.com'
  return {
    metadataBase: new URL(baseUrl),
    title: 'Mayne Home Inspectors - Premier Home Inspections in LaBelle, FL',
    description: `Professional home inspection services in LaBelle, Fort Myers, Cape Coral & Southwest Florida. Call ${PHONE_DISPLAY} for 24-hour service. Licensed & insured with 5.0 Google rating.`,
    keywords: [
      'home inspection LaBelle FL',
      'home inspector Fort Myers',
      'Cape Coral home inspection',
      '4-point inspection',
      'wind mitigation',
      '24-hour inspection reports',
      'licensed home inspector Southwest Florida',
    ],
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.ico' },
    openGraph: {
      type: 'website',
      url: baseUrl,
      siteName: BRAND,
      title: "Mayne Home Inspectors - Southwest Florida's Premier Home Inspector",
      description: `Professional home inspections with 24-hour reports. Serving LaBelle, Fort Myers, Cape Coral & more. Call ${PHONE_DISPLAY}`,
      images: [{ url: '/images/punta-gorda-home-inspection-dji-mini.png', width: 1200, height: 630, alt: 'Professional home inspector using drone technology' }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mayne Home Inspectors - Southwest Florida Home Inspections',
      description: `Professional home inspections with 24-hour reports. Call ${PHONE_DISPLAY}`,
      images: ['/images/punta-gorda-home-inspection-dji-mini.png'],
    },
  }
}

// ---------- JSON-LD builder (kept server-safe) ----------
function buildStructuredData() {
  const areas = Array.isArray(serviceAreas) ? serviceAreas : []

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeInspector',
    name: BRAND,
    url: 'https://mayneinspectors.com',
    image: 'https://mayneinspectors.com/images/logo-dark-1024.png', // ensure this exists
    logo:  'https://mayneinspectors.com/images/logo-dark-1024.png', // same as above is fine
    telephone: PHONE_E164,
    email: 'castenhome@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '505 W Hickpochee Ave Suite 200',
      addressLocality: 'LaBelle',
      addressRegion: 'FL',
      postalCode: '33935',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.7631, longitude: -81.4415 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '16:00' },
    ],
    areaServed: areas.map((city: string) => ({
      '@type': 'City', name: city, addressRegion: 'FL', addressCountry: 'US',
    })),
    sameAs: [
      'https://www.facebook.com/mayneinspectors',
      'https://www.yelp.com/biz/mayne-home-inspectors-labelle-2',
      'https://maps.app.goo.gl/ULm3fUjvePhDYSEy7', // swap for your full Google "place" URL when you have it
    ],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = buildStructuredData()

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Local SEO JSON-LD (plain script = fewer moving parts) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FormProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pb-24 md:pb-0">{children}</main>
              <Footer />
              <BackToTopButton />
              {/* <AIChatbox /> */}
              <MobileCTABar />
              <FloatingContactWidget />
            </div>
          </FormProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
