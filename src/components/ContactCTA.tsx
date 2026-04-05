import { Link } from 'react-router-dom';
import secondAbout from '../assets/about/secondAbout.svg';

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
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#FFC640] hover:bg-[#F5BC2E] text-[#1C1C1C] font-sans font-semibold text-base transition-colors"
              >
                Start a Conversation
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/enquire-now"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white font-sans font-semibold text-base transition-colors"
              >
                Request Custom Work
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={secondAbout}
              alt="Intricate gold embroidery detail on fabric"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
