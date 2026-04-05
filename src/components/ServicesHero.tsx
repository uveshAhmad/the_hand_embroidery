import { Link } from 'react-router-dom';


export default function ServicesHero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404870/home_bghbsq.svg"
          alt="Hand embroidery work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top Line */}
        <p className="font-sans text-white text-sm md:text-base tracking-wider uppercase mb-4">
          CRAFTED BY HAND. DEFINED BY DETAIL.
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6">
          Bespoke Hand
          <br />
          Embroidery,
          <br />
          Made to Endure
        </h1>

        {/* Body Text */}
        <p className="font-sans text-white text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-95">
          From couture garments to heirloom textiles, our hand embroidery
          <br className="hidden md:block" />
          {' '}transforms fabric into timeless art — stitch by stitch, with absolute precision.
        </p>

        {/* Call-to-Action Button */}
        <Link to="/contact" className="inline-block rounded-[0.375rem] bg-[#FFCB3E] font-sans text-[#1C1C1C] text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-4 transition-all shadow-lg hover:shadow-xl hover:scale-105">
          ENQUIRES NOW
        </Link>
      </div>
    </section>
  );
}
