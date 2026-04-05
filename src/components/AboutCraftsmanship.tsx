
export default function AboutCraftsmanship() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404917/secondAbout_zzewv1.svg"
              alt="Close-up of hand embroidery — gold threads and red bead detail on fabric"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              What makes our work special is not just how it looks — but how it is made.
            </h2>
            <p className="font-sans text-[#1C1C1C] text-base md:text-lg">
              Time, precision, and respect for tradition define everything we create.
            </p>
            <p className="font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed">
              Today, we bring together traditional hand embroidery techniques with contemporary design, creating pieces that feel timeless yet relevant — crafted to be worn, displayed, and cherished for years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
