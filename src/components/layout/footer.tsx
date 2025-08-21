
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Youtube } from "lucide-react"
import { serviceAreas } from "@/lib/constants"

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export function Footer() {
  const currentYear = new Date().getFullYear()

  const Logo = () => (
    <>
      <Image
        src="/images/brand-pack/logo-light.png"
        width={32}
        height={32}
        alt="Mayne Home Inspectors Logo"
        className="dark:hidden"
      />
      <Image
        src="/images/brand-pack/logo-dark.png"
        width={32}
        height={32}
        alt="Mayne Home Inspectors Logo"
        className="hidden dark:block"
      />
    </>
  );

  return (
    <footer className="bg-card text-card-foreground py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Mayne Home Inspectors Home">
              <Logo />
              <span className="text-xl font-bold font-headline">Mayne Home Inspectors</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Serving LaBelle, FL and surrounding areas.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 font-headline">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-sm hover:text-primary transition-colors">About Us</Link>
              <Link href="/#services" className="text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link>
              <Link href="/#pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
              <Link href="/#schedule" className="text-sm hover:text-primary transition-colors">Schedule Inspection</Link>
              <Link href="/#contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 font-headline">Service Areas</h3>
            <nav className="flex flex-col space-y-2">
              {serviceAreas.slice(0, 5).map(area => (
                 <Link key={area} href={`/service-areas/${slugify(area)}`} className="text-sm hover:text-primary transition-colors">{area}</Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center sm:items-end">
            <h3 className="text-lg font-semibold mb-3 font-headline">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mayne Home Inspectors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
