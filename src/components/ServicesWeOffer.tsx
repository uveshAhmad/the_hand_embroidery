export default function ServicesWeOffer() {
  const patchCount = 15;
  const patchSlots = Array.from({ length: patchCount }, (_, i) => i + 1);

  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-12">
          Services We Offer
        </h2>

        {/* 4x4 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {patchSlots.map((i) => (
            <div
              key={i}
              className="aspect-square bg-white rounded-sm border border-[#E8E4DE] overflow-hidden flex items-center justify-center shadow-sm"
            >
              {/* Placeholder: replace with <img src={...} alt="..." /> when you have patch assets */}
              <div className="w-full h-full bg-[#F6F1EA] flex items-center justify-center text-[#A07A5C]/40 font-serif text-sm">
                Patch {i}
              </div>
            </div>
          ))}

          {/* More Custom Design+ CTA */}
          <a
            href="#enquire"
            className="aspect-square bg-[#E8E4DE] hover:bg-[#DED8D0] border border-[#D1D1D1] rounded-sm flex items-center justify-center transition-colors group"
          >
            <span className="font-serif text-[#1C1C1C] text-base md:text-lg text-center px-4 group-hover:text-[#A07A5C] transition-colors">
              More Custom Design+
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
