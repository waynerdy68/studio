import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { FormProvider } from '@/context/form-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/common/back-to-top-button';
import { AIChatbox } from '@/components/common/ai-chatbox';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Mayne Inspectors - Premier Home Inspections in LaBelle, FL',
  description:
    'Mayne Home Inspectors offers comprehensive home inspection services in LaBelle, Lehigh Acres, Clewiston, Moore Haven, Immokalee, Fort Myers, Cape Coral, Punta Gorda, and Port Charlotte. Schedule your inspection today for peace of mind.',
  keywords: 'home inspection, LaBelle, Florida, Mayne Home Inspectors, 4-point inspection, wind mitigation, mold testing, radon testing, commercial inspection',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-body antialiased`}>
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
