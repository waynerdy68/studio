"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/cost-estimator", label: "Cost Estimator" },
  { href: "/checklist", label: "Checklist" },
  { href: "/faq", label: "FAQ" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinkItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
      href={href}
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md"
      onClick={onClick}
    >
      {label}
    </Link>
  )

  const Logo = () => (
    <>
      <Image
        src="/images/brand-pack/logo-dark.png"
        width={32}
        height={32}
        alt="Mayne Home Inspectors Logo"
        className="dark:hidden"
      />
      <Image
        src="/images/brand-pack/logo-light.png"
        width={32}
        height={32}
        alt="Mayne Home Inspectors Logo"
        className="hidden dark:block"
      />
    </>
  );

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-2 text-center text-sm font-medium">
        ⚡ Same-Day Inspections Available! Emergency Service Ready
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/95 shadow-lg backdrop-blur-md" : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Mayne Home Inspectors Home">
            <Logo />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-headline text-foreground">Mayne Home Inspectors</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Licensed & Insured in Florida</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Phone Number & CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end">
              <a 
                href="tel:+1-863-843-0735" 
                className="flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (863) 843-0735
              </a>
              <span className="text-xs text-muted-foreground">Call or Text Anytime</span>
            </div>
            
            <Button asChild size="sm" className="hidden md:inline-flex font-semibold">
              <Link href="/#schedule">Schedule Now</Link>
            </Button>

            <ThemeToggleButton />

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2" aria-label="Open navigation menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                       <Link href="/" className="flex items-center gap-2" aria-label="Mayne Home Inspectors Home" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo />
                        <span className="text-lg font-bold font-headline text-foreground">Mayne Inspectors</span>
                      </Link>
                      <SheetClose asChild>
                         <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                            <X className="h-6 w-6" />
                          </Button>
                      </SheetClose>
                    </div>

                    {/* Mobile Phone Number */}
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <a 
                        href="tel:+1-863-843-0735" 
                        className="flex items-center justify-center gap-2 text-primary font-bold text-xl"
                      >
                        <Phone className="h-6 w-6" />
                        (863) 843-0735
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Tap to call now</p>
                    </div>

                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                         <SheetClose asChild key={link.href}>
                            <NavLinkItem href={link.href} label={link.label} onClick={() => setIsMobileMenuOpen(false)} />
                         </SheetClose>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
