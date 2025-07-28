
import { testimonials } from "@/lib/constants";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function TestimonialsSection() {
  // Calculate aggregate rating
  const totalReviews = testimonials.length;
  // Assuming all current testimonials are 5 stars based on the card component
  const aggregateRatingValue = totalReviews > 0 ? 5 : 0; 

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Or "Service" depending on the context of the reviews
    "name": "Mayne Home Inspectors Services", // Name of the service or product being reviewed
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRatingValue.toString(),
      "reviewCount": totalReviews.toString()
    }
  };

  return (
    <section id="testimonials" className="bg-background">
      {/* Include aggregateRating schema markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from satisfied homeowners and real estate professionals who have trusted Mayne Home Inspectors.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              avatarUrl={testimonial.avatarUrl}
              index={index}
              rating={5} // Pass the assumed 5-star rating
            />
          ))}
        </div>
      </div>
    </section>
  );
}
