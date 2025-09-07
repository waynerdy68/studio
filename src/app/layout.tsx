// /src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { FormProvider } from "@/context/form-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTopButton } from "@/components/common/back-to-top-button";
// import { AIChatbox } from "@/components/common/ai-chatbox";
import { MobileCTABar } from "@/components/common/mobile-cta-bar";
import { FloatingContactWidget } from "@/components/common/floating-contact-widget";

import {
  BRAND,
  PHONE_E164,
  PHONE_DISPLAY,
  serviceAreas,
} from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://mayneinspectors.com";
  return {
    metadataBase: new URL(baseUrl),
    title: "Mayne Home Inspectors - Premier Home Inspections in LaBelle, FL",
    description: `Professional home inspection services in LaBelle, Fort Myers, Cape Coral & Southwest Florida. Call ${PHONE_DISPLAY} for 24-hour service. Licensed & insured with 5.0 Google rating.`,
    keywords: [
      "home inspection LaBelle FL",
      "home inspector Fort Myers",
      "Cape Coral home inspection",
      "4-point inspection",
      "wind mitigation",
      "24-hour inspection reports",
      "licensed home inspector Southwest Florida",
    ],
    alternates: { canonical: "/" },
    icons: { icon: "/favicon.ico" },
    openGraph: {
      type: "website",
      url: baseUrl,
      siteName: BRAND,
      title:
        "Mayne Home Inspectors - Southwest Florida's Premier Home Inspector",
      description: `Professional home inspections with 24-hour reports. Serving LaBelle, Fort Myers, Cape Coral & more. Call ${PHONE_DISPLAY}`,
      images: [
        {
          url: "/images/punta-gorda-home-inspection-dji-mini.png",
          width: 1200,
          height: 630,
          alt: "Professional home inspector using drone technology",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mayne Home Inspectors - Southwest Florida Home Inspections",
      description: `Professional home inspections with 24-hour reports. Call ${PHONE_DISPLAY}`,
      images: ["/images/punta-gorda-home-inspection-dji-mini.png"],
    },
  };
}

// ---------- JSON-LD builder (SAB-safe) ----------
function buildStructuredData() {
  const areas = Array.isArray(serviceAreas) ? serviceAreas : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://mayneinspectors.com/#identity",
    name: BRAND,
    url: "https://mayneinspectors.com/",
    image: "https://mayneinspectors.com/images/logo-dark-1024.png",
    logo: "https://mayneinspectors.com/images/logo-dark-1024.png",
    telephone: PHONE_E164,
    email: "castenhome@gmail.com",
    priceRange: "$$",
    description:
      "Home inspections with same-day PDF reports serving LaBelle, Lehigh Acres, Clewiston, Fort Myers, Cape Coral, Punta Gorda, Immokalee, Moore Haven, and surrounding SWFL communities.",
    slogan: "Thorough. Straightforward. SWFL Local.",

    // SAB: no streetAddress, no geo
    address: {
      "@type": "PostalAddress",
      addressLocality: "LaBelle",
      addressRegion: "FL",
      postalCode: "33935",
      addressCountry: "US",
    },

    // ✅ Fix: use strings (or AdministrativeArea with only name) to avoid warnings
    // Option A (simplest): strings
    areaServed: areas,

    // Option B (also valid): objects with only `name`
    // areaServed: areas.map((name: string) => ({
    //   "@type": "AdministrativeArea",
    //   name: `${name}, FL`
    // })),

    // Broad region umbrella
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Southwest Florida",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],

    hasMap: "https://www.google.com/maps?cid=6134477698876185168",

    sameAs: [
      "https://www.facebook.com/mayneinspectors",
      "https://www.yelp.com/biz/mayne-home-inspectors-labelle-2",
      "https://maps.app.goo.gl/ULm3fUjvePhDYSEy7",
      "https://g.page/r/CVBXU5FP6NLiEB0/review",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Inspection",
          description: "Full home inspection with same-day PDF and photos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wind Mitigation Inspection",
          description:
            "Insurance discount verification (roof-to-wall connections, shutters, etc.).",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "4-Point Inspection",
          description:
            "Roof, HVAC, electrical, and plumbing for insurance purposes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Radon Testing",
          description: "Short-term radon measurement per Florida guidelines.",
        },
      },
    ],
  };

  return schema;
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = buildStructuredData();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Local SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
              {/* <AIChatbox /> */}
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

