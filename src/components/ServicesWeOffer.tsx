import { Link } from 'react-router-dom';
import assets from '../../assets.json';

export default function ServicesWeOffer() {
  const patchImages = Object.values(assets.servicePage);

  return (
    <section id="services-we-offer" className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-12">
          Services We Offer
        </h2>

        {/* 4x4 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {patchImages.map((imageUrl, index) => (
            <div
              key={index}
              className="aspect-square bg-white rounded-sm border border-[#E8E4DE] overflow-hidden flex items-center justify-center shadow-sm"
            >
              {imageUrl ? (
                <img 
                  src={imageUrl as string} 
                  alt={`Service patch ${index + 1}`} 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-[#F6F1EA] flex items-center justify-center text-[#A07A5C]/40 font-serif text-sm">
                  Patch {index + 1}
                </div>
              )}
            </div>
          ))}

          {/* More Custom Design+ CTA */}
          <Link
            to="/contact"
            className="aspect-square bg-[#E8E4DE] hover:bg-[#DED8D0] border border-[#D1D1D1] rounded-sm flex items-center justify-center transition-colors group"
          >
            <span className="font-serif text-[#1C1C1C] text-base md:text-lg text-center px-4 group-hover:text-[#A07A5C] transition-colors">
              More Custom Design+
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
