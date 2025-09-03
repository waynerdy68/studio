
"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, X, Calendar, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show widget after user scrolls down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to schedule a home inspection. Can you provide a quote?")
    window.open(`https://wa.me/18638430735?text=${message}`, '_blank')
  }

  const handleSchedule = () => {
    const scheduleSection = document.getElementById('schedule')
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      
      {/* Expanded Card */}
      {isExpanded && (
        <Card className="mb-4 w-80 bg-background/95 backdrop-blur-md shadow-2xl border-primary/20 animate-fadeInUp">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">Get Your Inspection Quote</h3>
                <p className="text-sm text-muted-foreground">Same-day service available</p>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsExpanded(false)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              
              {/* Call Button */}
              <Button asChild className="w-full justify-start h-12 text-left">
                <a href="tel:+1-863-843-0735" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">(863) 843-0735</div>
                    <div className="text-xs opacity-90">Call or text for instant quote</div>
                  </div>
                </a>
              </Button>

              {/* WhatsApp Button */}
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                className="w-full justify-start h-12 text-left border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">WhatsApp Chat</div>
                  <div className="text-xs opacity-75">Quick questions & quotes</div>
                </div>
              </Button>

              {/* Schedule Button */}
              <Button 
                onClick={handleSchedule}
                variant="outline" 
                className="w-full justify-start h-12 text-left"
              >
                <Calendar className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">Schedule Online</div>
                  <div className="text-xs opacity-75">Book your inspection now</div>
                </div>
              </Button>

            </div>

            {/* Trust Signals */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  24-hour reports
                </div>
                <Badge variant="secondary" className="text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  5.0 Rating
                </Badge>
              </div>
            </div>

          </CardContent>
        </Card>
      )}

      {/* Floating Action Button */}
      <div className="relative">
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
        
        {/* Main button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="icon"
          className="relative h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl text-primary-foreground"
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Phone className="h-6 w-6" />
          )}
        </Button>

        {/* Notification badge */}
        <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
          !
        </div>
        
      </div>
    </div>
  )
}
