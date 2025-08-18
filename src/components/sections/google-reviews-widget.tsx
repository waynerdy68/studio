"use client"

import { Star, ExternalLink } from "lucide-react"
import { FaGoogle } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const featuredReviews = [
  {
    name: "Ribi09 Imbert",
    rating: 5,
    text: "Wayne Casten did an outstanding job with the home inspection. He was thorough, professional, and took the time to explain everything clearly. His attention to detail and honest insights gave me great peace of mind.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXu91HlP3xyLZabNEH_7nG2RmPnFxLQ1jWPgZ30DcRkzj69diEn2A=w36-h36-p-rp-mo-br100",
    timeAgo: "2 weeks ago"
  },
  {
    name: "Josue Trejo", 
    rating: 5,
    text: "Wayne was extremely professional and flexible in getting us seen fast and easy. He easily answered any and all questions we had before, during and after the inspection. Inspection was thorough and detailed.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUpZ2odr170144d4uGBrHTrL7fIDQklnYTt0T9bmvpKIPIOgZ6b=w36-h36-p-rp-mo-br100",
    timeAgo: "1 month ago"
  },
  {
    name: "Serge Somers",
    rating: 5, 
    text: "Nice detailed inspection, very clear report. On top of that, I contacted Mayne Home Inspectors on real short notice and they were able to reschedule their agenda, which makes them even more favorable.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXvaz4ZUR79X0yDM7gwx5C9W2Q8SjjI6wBmZg14yxWt6Dasb9J7=w36-h36-p-rp-mo-br100",
    timeAgo: "2 months ago"
  }
]

export function GoogleReviewsWidget() {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white dark:bg-card px-4 py-2 rounded-full shadow-sm">
              <FaGoogle className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">Google Reviews</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              50+ Reviews
            </Badge>
          </div>
          
          <p className="text-muted-foreground">
            Trusted by homeowners across Southwest Florida
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <a 
              href="https://g.page/r/CVD2PrmEP1lVEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Read All Reviews
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}