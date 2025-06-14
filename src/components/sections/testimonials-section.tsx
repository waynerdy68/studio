import { testimonials } from "@/lib/constants";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
