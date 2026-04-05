export default function OurCraft() {
  return (
    <section className="py-16 md:py-24 bg-white border-l border-[#D1D1D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Our Craft
        </h2>

        <p className="font-sans text-[#555555] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Every creation passes through multiple hands — designers, artisans, and finishers — ensuring balance between artistry and perfection.
        </p>

        <div className="max-w-xl mx-auto text-left space-y-6 font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed">
          <div>
            <p className="font-semibold mb-2">We specialize in:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Fine hand embroidery</li>
              <li>Custom motifs and bespoke designs</li>
              <li>Traditional and contemporary stitch techniques</li>
              <li>Precision finishing and detailing</li>
            </ul>
          </div>

          <p className="italic text-[#555555] text-center">
            No two pieces are ever identical — that is the signature of true handwork.
          </p>
        </div>
      </div>
    </section>
  );
}
