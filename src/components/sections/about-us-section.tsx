import Image from 'next/image';
import WayneCastenImage from '@/../public/images/wayne-casten-inspector.png';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Your Inspector
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I grew up in the building industry, working side-by-side with my father, a licensed Florida Contractor. That early experience taught me the value of hard work, attention to detail, and doing things the right way. In 2005, I earned my own State Contractor’s License, and a few years later in 2011, I became a licensed Home Inspector.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Since then, I’ve built my reputation on being thorough, straightforward, and easy to talk to. I take the time to walk you through what I see, explain things in plain language, and answer your questions honestly. With me, you’re not just getting a checklist, you’re getting the insight of someone who’s been in the construction trenches and understands how homes are really put together.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is simple: to give you the clearest picture possible so you can make confident decisions. When I’m not inspecting homes, I’m usually outside with my dogs or tinkering on a project - and I bring that same curiosity and attention to detail into every inspection.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src={WayneCastenImage}
              alt="Wayne Casten, certified home inspector"
              className="rounded-lg shadow-lg"
              width={400}
              height={400}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

