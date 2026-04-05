import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 md:py-32 bg-[#1C1C1C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[#F6F1EA] text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Looking for Something Truly
          <br />
          Unique?
        </h2>
        <p className="font-sans text-[#D1D1D1] text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
          We collaborate closely to transform your ideas into hand-embroidered
          <br className="hidden md:block" />
          {' '}artwork — designed, stitched, and finished with care.
        </p>
        <Link
          to="/enquire-now"
          className="inline-block rounded-[0.375rem] bg-[#FFCB3E] font-sans text-[#1C1C1C] text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-4 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          REQUEST A CUSTOM DESIGN
        </Link>
      </div>
    </section>
  );
}
