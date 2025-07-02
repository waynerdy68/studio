
"use client"

import Link from "next/link"
import Image from "next/image" 
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#schedule", label: "Schedule" },
  { href: "#contact", label: "Contact" },
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
      <Image src="/images/Mayne-Inspector-light.png" alt="Mayne Inspectors Logo" width={32} height={32} className="hidden dark:block" />
      <Image src="/images/Mayne-Inspector-dark.png" alt="Mayne Inspectors Logo" width={32} height={32} className="block dark:hidden" />
    </>
  );


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Mayne Inspectors Home">
          <Logo />
          <span className="text-2xl font-bold font-headline text-foreground">Mayne Inspectors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                   <Link href="/" className="flex items-center gap-2" aria-label="Mayne Inspectors Home" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                    <span className="text-xl font-bold font-headline text-foreground">Mayne Inspectors</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                        <X className="h-6 w-6" />
                      </Button>
                  </SheetClose>
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
    </header>
  )
}
