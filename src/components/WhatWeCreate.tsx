import img1 from "../assets/whatWeCreate/img1.svg"
import img2 from "../assets/whatWeCreate/img2.svg"
import img3 from "../assets/whatWeCreate/img3.svg"
import img4 from "../assets/whatWeCreate/img4.svg"
import img5 from "../assets/whatWeCreate/img5.svg"
import img6 from "../assets/whatWeCreate/img6.svg"
import img7 from "../assets/whatWeCreate/img7.svg"
import img8 from "../assets/whatWeCreate/img8.svg"

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
    image: `${img1}`,
    imageAlt: 'Custom hand embroidered patch with presidential yacht design',
    isLarge: true,
  },
  {
    id: 2,
    title: 'Couture & Bridal Embroidery',
    description: 'Intricate detailing for special garments and heirloom pieces.',
    image: `${img2}`,
    imageAlt: 'Couture embroidered patch with university design',
    isLarge: true,
  },
  {
    id: 3,
    title: 'Butterfly Hand Embroidery',
    image: `${img3}`,
    imageAlt: 'Intricate butterfly embroidery with beads',
  },
  {
    id: 4,
    title: 'Lion Hand Embroidery',
    image: `${img4}`,
    imageAlt: 'Embroidered coat of arms with lions',
  },
  {
    id: 5,
    title: 'Hanging Hand Embroidery',
    image: `${img5}`,
    imageAlt: 'Colorful embroidered rooster ornament',
  },
  {
    id: 6,
    title: 'Couture embellishment',
    image: `${img6}`,
    imageAlt: 'Garment with feathers and gold embroidery',
  },
  {
    id: 7,
    title: 'Beaded motif Details',
    image: `${img7}`,
    imageAlt: 'Beaded leaf motif with sequins',
  },
  {
    id: 8,
    title: 'Logo & Branding (Premium Finish)',
    image: `${img8}`,
    imageAlt: 'Premium branding with golden cord and logo',
  },
];

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

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="w-full sm:w-auto rounded-[0.375rem] bg-gradient-to-r from-[#FFCB3E] to-[#FFC036] font-sans text-black text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-3 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            SEE ALL DESIGN
          </button>
          <button className="w-full sm:w-auto rounded-[0.375rem] border-2 border-[#1C1C1C] bg-white font-sans text-[#1C1C1C] text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-3 transition-all hover:bg-[#1C1C1C] hover:text-white">
            START YOUR CUSTOM ORDER
          </button>
        </div>
      </div>
    </section>
  );
}
