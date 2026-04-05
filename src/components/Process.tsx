
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Design Concept',
    description:
      'Each creation begins with a sketch or idea developed collaboratively with care and creativity.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404963/processImg1_mqbssa.svg`,
    imageAlt: 'Hands holding an embroidery hoop with a golden embroidered design',
  },
  {
    step: 2,
    title: 'Material Selection',
    description:
      'We choose premium fabrics, threads, and embellishments to ensure depth, durability, and elegance.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404959/processImg2_jm02fz.svg`,  
    imageAlt: 'Colorful thread spools and fabrics arranged on a wooden table',
  },
  {
    step: 3,
    title: 'Hand Embroidery',
    description:
      'Skilled artisans bring the design to life using time honored embroidery techniques.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404961/processImg3_u3sytt.svg`,
    imageAlt: 'Artisan working on embroidery at a desk',
  },
  {
    step: 4,
    title: 'Finishing & Quality Check',
    description: 'Every piece is inspected, refined, and finished with precision.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404965/processImg4_vfgitj.svg`,
    imageAlt: 'Hands holding an embroidered butterfly design in a hoop',
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-sm text-gray-500 tracking-wider mb-3">STEP {step.step}</div>
                <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
