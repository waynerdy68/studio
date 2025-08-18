"use client"

import { Phone, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlCTABar = () => {
      const currentScrollY = window.scrollY
      
      // Hide when scrolling down, show when scrolling up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlCTABar)
    return () => window.removeEventListener('scroll', controlCTABar)
  }, [lastScrollY])

  const handleScheduleClick = () => {
    // Smooth scroll to schedule section
    const scheduleSection = document.getElementById('schedule')
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    // WhatsApp business link with pre-filled message
    const message = encodeURIComponent("Hi! I'd like to schedule a home inspection. Can you help me?")
    window.open(`https://wa.me/12398430735?text=${message}`, '_blank')
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-3 md:hidden z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2 max-w-sm mx-auto">
        {/* Call Button */}
        <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 h-auto">
          <a href="tel:+1-239-843-0735" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>

        {/* Schedule Button */}
        <Button 
          onClick={handleScheduleClick}
          className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 h-auto"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Schedule
        </Button>

        {/* WhatsApp Button */}
        <Button 
          onClick={handleWhatsAppClick}
          variant="outline" 
          className="px-3 py-3 h-auto border-2"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Trust indicator */}
      <div className="text-center mt-2">
        <p className="text-xs text-muted-foreground">
          ⭐ 5.0 Google Rating • Licensed & Insured • Same-Day Reports
        </p>
      </div>
    </div>
  )
}
