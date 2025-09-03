
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet'

const BRAND = 'Mayne Home Inspectors'
const PHONE_E164 = '+18638430735'
const PHONE_DISPLAY = '(863) 843-0735'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/cost-estimator', label: 'Cost Estimator' },
  { href: '/checklist', label: 'Checklist' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/#contact', label: 'Contact' },
]

function NavLinkItem({
  href,
  label,
  onClick,
  className,
}: {
  href: string
  label: string
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        className ??
        'text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md'
      }
    >
      {label}
    </Link>
  )
}

const Logo = () => (
  <>
    {/* light theme */}
    <Image
      src="/images/brand-pack/logo-dark.png"
      alt={BRAND}
      width={64}
      height={64}
      className="block dark:hidden"
      priority
    />
    {/* dark theme */}
    <Image
      src="/images/brand-pack/logo-light.png"
      alt={BRAND}
      width={64}
      height={64}
      className="hidden dark:block"
      priority
    />
  </>
)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Emergency Banner */}
      <div
        className="bg-destructive text-destructive-foreground py-2 text-center text-sm font-medium"
        role="status"
        aria-live="polite"
      >
        ⚡ Same-Day Inspections Available! Emergency Service Ready
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-background/95 shadow-lg backdrop-blur-md' : 'bg-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label={`${BRAND} Home`}>
            <Logo />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-headline text-foreground">{BRAND}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Licensed & Insured in Florida</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Phone Number & CTA */}
          <div className="flex items-center gap-2">
            {/* Desktop phone (text link) */}
            <div className="hidden md:flex flex-col items-end">
              <a
                href={`tel:${PHONE_E164}`}
                className="flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors"
                aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <span className="text-xs text-muted-foreground">Call or Text Anytime</span>
            </div>

            {/* Mobile quick-call icon */}
            <a
              href={`tel:${PHONE_E164}`}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
              aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
            >
              <Phone className="h-5 w-5" />
            </a>

            <Button asChild size="sm" className="hidden md:inline-flex font-semibold">
              <Link href="/#schedule">Schedule Now</Link>
            </Button>

            <ThemeToggleButton />

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                  <SheetTitle className="sr-only">Site navigation</SheetTitle>

                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label={`${BRAND} Home`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Logo />
                        <span className="text-lg font-bold font-headline text-foreground">{BRAND}</span>
                      </Link>

                      <SheetClose asChild>
                        <button
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
                          aria-label="Close navigation menu"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </SheetClose>
                    </div>

                    {/* Mobile nav links */}
                    <nav className="flex flex-col space-y-4" aria-label="Mobile">
                      {navLinks.map((link) => (
                        <NavLinkItem
                          key={link.href}
                          href={link.href}
                          label={link.label}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-base font-medium text-foreground/90 hover:text-foreground transition-colors px-3 py-2 rounded-md"
                        />
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
