
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
              Wayne Casten is a state-licensed and certified professional inspector with years of experience in the industry. His meticulous approach and commitment to excellence ensure that you receive the most accurate and comprehensive home inspection possible.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              He believes in clear, honest communication, taking the time to walk you through his findings and answer any questions you may have. With Wayne, you're not just getting an inspection; you're gaining a trusted partner in your home-buying journey.
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
