
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const Logo = () => (
    <>
      <Image
        src="/images/Mayne-Inspector-dark.png"
        alt="Mayne Inspectors Logo"
        width={32}
        height={32}
        className="block dark:hidden h-8 w-8"
        data-ai-hint="logo"
      />
      <Image
        src="/images/Mayne-Inspector-light.png"
        alt="Mayne Inspectors Logo"
        width={32}
        height={32}
        className="hidden dark:block h-8 w-8"
        data-ai-hint="logo"
      />
    </>
  );

  return (
    <footer className="bg-card text-card-foreground py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Mayne Inspectors Home">
              <Logo />
              <span className="text-xl font-bold font-headline">Mayne Inspectors</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Serving LaBelle, FL and surrounding areas.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3 font-headline">Quick Links</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="#about" className="text-sm hover:text-primary transition-colors">About Us</Link>
              <Link href="#services" className="text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
              <Link href="#schedule" className="text-sm hover:text-primary transition-colors">Schedule Inspection</Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
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
            &copy; {currentYear} Mayne Inspectors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
