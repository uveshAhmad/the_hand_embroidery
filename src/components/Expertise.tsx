export default function Expertise() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4">
          Our Hand Embroidery Expertise
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-[#A07A5C] text-base md:text-lg italic text-center mb-8">
          A balance of tradition and modern refinement
        </p>

        {/* Introductory Paragraph */}
        <p className="font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          We offer custom hand embroidery services tailored for designers, brands, studios, and private clients. Every piece is handcrafted by skilled artisans using time-honored techniques and premium materials.
        </p>

        {/* Service Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-[#A07A5C]"></div>
              </div>
              <p className="font-sans text-[#1C1C1C] text-base md:text-lg">
                Entirely hand-stitched (no machines)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-[#A07A5C]"></div>
              </div>
              <p className="font-sans text-[#1C1C1C] text-base md:text-lg">
                Museum-grade finishing
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-[#A07A5C]"></div>
              </div>
              <p className="font-sans text-[#1C1C1C] text-base md:text-lg">
                Custom design development
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-[#A07A5C]"></div>
              </div>
              <p className="font-sans text-[#1C1C1C] text-base md:text-lg">
                Small batch & one-of-one projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
