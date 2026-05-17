
interface ServiceItem {
  id: number;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  isLarge?: boolean;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Custom Hand Embroidery',
    description: 'Personalized designs crafted exclusively for you.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404803/img1_o5djtl.svg`,
    imageAlt: 'Custom hand embroidered patch with presidential yacht design',
    isLarge: true,
  },
  {
    id: 2,
    title: 'Couture & Bridal Embroidery',
    description: 'Intricate detailing for special garments and heirloom pieces.',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404801/img2_a1s8w9.svg`,
    imageAlt: 'Couture embroidered patch with university design',
    isLarge: true,
  },
  {
    id: 3,
    title: 'Butterfly Hand Embroidery',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404803/img3_jekb2w.svg`,
    imageAlt: 'Intricate butterfly embroidery with beads',
  },
  {
    id: 4,
    title: 'Lion Hand Embroidery',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404802/img4_wrskx0.svg`,
    imageAlt: 'Embroidered coat of arms with lions',
  },
  {
    id: 5,
    title: 'Hanging Hand Embroidery',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404801/img5_gtenaj.svg`,
    imageAlt: 'Colorful embroidered rooster ornament',
  },
  {
    id: 6,
    title: 'Couture embellishment',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404801/img6_z2qfck.svg`,
    imageAlt: 'Garment with feathers and gold embroidery',
  },
  {
    id: 7,
    title: 'Beaded motif Details',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404801/img7_ka8rep.svg`,
    imageAlt: 'Beaded leaf motif with sequins',
  },
  {
    id: 8,
    title: 'Logo & Branding (Premium Finish)',
    image: `https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404802/img8_kiikik.svg`,
    imageAlt: 'Premium branding with golden cord and logo',
  },
];

import { Link } from 'react-router-dom';

export default function WhatWeCreate() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-[#1C1C1C] text-[3.5rem] font-medium leading-[4.2rem] mb-12 text-center">
          What We Create
        </h2>

        <div className="space-y-6 mb-12">
          {/* Top row - 2 large horizontal panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
                <img
                  src={services[0].image}
                  alt={services[0].imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-b from-[rgba(19,36,81,0.46)] to-[rgba(12,19,38,0.46)]">
                    <h3 className="font-serif text-white text-2xl md:text-3xl font-medium mb-2">
                      {services[0].title}
                    </h3>
                    {services[0].description && (
                      <p className="font-sans text-white/90 text-base md:text-lg">
                        {services[0].description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
                <img
                  src={services[1].image}
                  alt={services[1].imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-b from-[rgba(19,36,81,0.46)] to-[rgba(12,19,38,0.46)]">
                    <h3 className="font-serif text-white text-2xl md:text-3xl font-medium mb-2">
                      {services[1].title}
                    </h3>
                    {services[1].description && (
                      <p className="font-sans text-white/90 text-base md:text-lg">
                        {services[1].description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle row - 3 square panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(2, 5).map((service) => (
              <div key={service.id} className="relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-[300px] md:h-[350px]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-b from-[rgba(19,36,81,0.46)] to-[rgba(12,19,38,0.46)]">
                      <h3 className="font-serif text-white text-xl md:text-2xl font-medium">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 square panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(5).map((service) => (
              <div key={service.id} className="relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-[300px] md:h-[350px]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-b from-[rgba(19,36,81,0.46)] to-[rgba(12,19,38,0.46)]">
                      <h3 className="font-serif text-white text-xl md:text-2xl font-medium">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            to="/services#services-we-offer"
            className="inline-block px-8 py-3 rounded-md bg-[#FFCB3E] hover:bg-[#e5b637] text-[#1C1C1C] font-sans font-medium text-sm tracking-wider uppercase transition-colors shadow-sm"
          >
            SEE ALL DESIGN
          </Link>
        </div>

      </div>
    </section>
  );
}
