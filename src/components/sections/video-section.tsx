import { youtubeVideoId } from "@/lib/constants";
import { ScrollAnimationWrapper } from "@/components/common/scroll-animation-wrapper";

export function VideoSection() {
  return (
    <section id="video-intro" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Discover Mayne Home Inspectors</h2>
          <p className="section-subtitle">
            Learn more about our commitment to quality and how we can help you make informed decisions about your property.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClass="animate-fadeInUp" delay="delay-200">
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
