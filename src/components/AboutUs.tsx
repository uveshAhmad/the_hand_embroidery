
export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white border-l border-[#D1D1D1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md mb-12">
          <img
            src="https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404915/homeAbout_o7qiom.svg"
            alt="Hand embroidery in progress — needle and thread on fabric"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
          About Us
        </h1>

        {/* Tagline */}
        <p className="font-serif text-[#444444] text-lg md:text-xl text-center mb-10 max-w-2xl mx-auto leading-relaxed">
          Hand embroidery is more than decoration for us — it is a language of patience, heritage, and human touch.
        </p>

        {/* Body paragraphs - left-aligned, constrained width */}
        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <p className="font-serif text-[#555555] text-base md:text-lg leading-relaxed">
            Our journey began with a simple belief: true craftsmanship cannot be rushed. Every stitch tells a story, shaped by skilled hands, quiet focus, and years of practice passed down through generations.
          </p>
          <p className="font-serif text-[#555555] text-base md:text-lg leading-relaxed">
            We work with experienced artisans who treat embroidery as an art form, not a process. From delicate florals to intricate motifs, each piece is created stitch by stitch, without shortcuts, machines, or mass production.
          </p>
        </div>
      </div>
    </section>
  );
}
