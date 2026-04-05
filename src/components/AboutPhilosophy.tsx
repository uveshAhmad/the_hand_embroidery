import bp from '../assets/about/bp.svg';

const PRINCIPLES = [
  'Human craftsmanship over machines',
  'Quality over quantity',
  'Heritage over trends',
];

export default function AboutPhilosophy() {
  return (
    <section className="py-16 md:py-24 bg-white border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-semibold">
              Our Philosophy
            </h2>
            <p className="font-sans text-[#1C1C1C] text-lg md:text-xl">
              We believe luxury lies in detail.
            </p>
            <p className="font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed">
              In a world of speed and automation, hand embroidery stands as a reminder that beauty grows slowly. Each design is intentionally limited, carefully finished, and never repeated exactly the same way.
            </p>
            <ul className="font-sans text-[#1C1C1C] text-base md:text-lg space-y-2">
              {PRINCIPLES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#A07A5C] mt-1.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={bp}
              alt="Embroidered detail on fabric — craftsmanship in focus"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
