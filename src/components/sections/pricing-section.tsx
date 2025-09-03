
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Phone, Calendar, Zap, TrendingUp, Clock, Star } from "lucide-react"
import Link from "next/link"
import { pricingTiers } from "@/lib/constants"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Social Proof */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-1" />
              Southwest Florida's #1 Rated Inspector
            </Badge>
            <h2 className="section-title">
              Transparent Pricing, No Surprises
            </h2>
            <p className="section-subtitle">
              Choose the inspection package that fits your needs. All packages include same-day scheduling and 24-hour reports.
            </p>
            
            {/* Competitive Comparison */}
            <div className="flex items-center justify-center gap-8 mt-8 p-4 bg-primary/5 rounded-lg max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Competitors</div>
                <div className="text-xl font-bold text-destructive">$500+</div>
                <div className="text-xs">+ Hidden Fees</div>
              </div>
              <div className="text-4xl text-muted-foreground">VS</div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Mayne Inspectors</div>
                <div className="text-xl font-bold text-primary">$350</div>
                <div className="text-xs text-primary">All Inclusive</div>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.id} 
                className={`relative bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  tier.isPopular ? 'ring-2 ring-primary/50 bg-primary/5' : ''
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {tier.savings && (
                  <div className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {tier.savings}
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${tier.isPopular ? 'bg-primary/20' : 'bg-muted'}`}>
                      <tier.icon className={`h-8 w-8 ${tier.isPopular ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                  </div>
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      {tier.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{tier.originalPrice}</span>
                      )}
                      <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.priceDetails}</p>
                    {tier.urgencyText && (
                      <Badge variant="outline" className="text-xs">
                        {tier.urgencyText}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className={feature.startsWith('✅') || feature.startsWith('🏆') || feature.startsWith('💎') || feature.startsWith('⚡') ? 'font-medium' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 space-y-3">
                    {tier.id === 'emergency' ? (
                      <Button asChild className="w-full h-12 text-lg font-semibold bg-destructive hover:bg-destructive/90">
                        <a href={tier.href} className="flex items-center justify-center gap-2">
                          <Phone className="h-5 w-5" />
                          {tier.ctaText}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild className={`w-full h-12 text-lg font-semibold ${tier.isPopular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                        <Link href={tier.href} className="flex items-center justify-center gap-2">
                          <Calendar className="h-5 w-5" />
                          {tier.ctaText}
                        </Link>
                      </Button>
                    )}
                    
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <a href="tel:+1-863-843-0735" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call for Quote
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Urgency & Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">24-Hour Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Get your detailed inspection report by early next morning - faster than any competitor
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Emergency Service</h3>
                <p className="text-sm text-muted-foreground">
                  Need it today? We offer same-day emergency inspections for urgent situations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <h3 className="font-bold mb-2">5.0 Google Rating</h3>
                <p className="text-sm text-muted-foreground">
                  50+ verified reviews from satisfied Southwest Florida customers
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Final CTA */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Inspection?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait - inspection slots fill up fast, especially during peak buying season. 
              Call now for same-day service or schedule online for your preferred time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg font-semibold h-14 px-8">
                <a href="tel:+1-863-843-0735" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (863) 843-0735 Now
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg font-semibold h-14 px-8 border-2">
                <Link href="#schedule" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule Online
                </Link>
              </Button>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              ⚡ Emergency inspections available • 📞 Call or text anytime • 📧 Email responses within 1 hour
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
