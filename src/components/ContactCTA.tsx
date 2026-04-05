

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-white border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left - Text and buttons */}
          <div className="space-y-6">
            <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let's create
              <br />
              something
              <br />
              timeless together.
            </h2>
            <p className="font-sans text-[#555555] text-base md:text-lg leading-relaxed">
              Whether you're exploring a custom embroidery piece, collaborating on a collection, or simply have a question, we'd love to hear from you.
            </p>
          </div>

          {/* Right - Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404917/secondAbout_zzewv1.svg"
              alt="Intricate gold embroidery detail on fabric"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
