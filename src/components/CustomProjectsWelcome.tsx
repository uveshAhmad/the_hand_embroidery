export default function CustomProjectsWelcome() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F6F2] border-l border-[#D1D1D1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
          Custom Projects Welcome
        </h2>
        <p className="font-sans text-[#555555] text-base md:text-lg mb-6">
          No templates. No mass production.
        </p>
        <p className="font-sans text-[#555555] text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Whether you need a single embroidered heirloom or a full collection, we approach every project with the same care and respect for craft.
        </p>
        <a
          href="#enquire"
          className="inline-block px-8 py-4 rounded-xl bg-[#FFC640] hover:bg-[#F5BC2E] text-[#1C1C1C] font-sans font-semibold text-base transition-colors"
        >
          Start Your Custom Project
        </a>
      </div>
    </section>
  );
}
