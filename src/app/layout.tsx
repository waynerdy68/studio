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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://mayneinspectors.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Mayne Inspectors - Premier Home Inspections in LaBelle, FL',
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
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
