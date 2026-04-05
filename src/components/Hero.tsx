import { Link } from 'react-router-dom';
import herobg from '../assets/herobg.svg';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-[#FFF] text-center text-[3.75rem] font-medium leading-[4.4375rem] text-brand-label mb-6">
          Handcrafted Embroidery.
          <br />
          Timeless by Design.
        </h1>
        <p className="font-sans text-[#FFF] text-center text-[1.375rem] font-normal leading-[2.2rem] text-brand-label mb-8 max-w-2xl mx-auto">
          Every stitch is shaped by skilled hands, tradition, and patience creating embroidery that
          feels personal, luxurious, and enduring.
        </p>
        <Link
          to="/enquire-now"
          className="inline-block rounded-[0.375rem] border-2 border-[#F6F1EA] bg-gradient-to-r from-[#FFCB3E] to-[#FFC036] font-sans text-black text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-3 transition-colors shadow-lg hover:shadow-xl"
        >
          REQUEST A CUSTOM DESIGN
        </Link>
      </div>
    </section>
  );
}
