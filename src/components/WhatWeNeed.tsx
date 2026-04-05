interface RequirementItem {
  id: number;
  text: string;
}

const requirements: RequirementItem[] = [
  {
    id: 1,
    text: 'Reference images / artwork file (PNG/SVG/PDF)',
  },
  {
    id: 2,
    text: 'Size (in cm/inches) + placement (cap/chest/sleeve/patch)',
  },
  {
    id: 3,
    text: 'Quantity (estimate is fine)',
  },
  {
    id: 4,
    text: 'Fabric type (cotton/satin/velvet/leather etc.)',
  },
  {
    id: 5,
    text: 'Deadline + shipping location',
  },
];

export default function WhatWeNeed() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F1EA] rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl font-medium mb-4">
            What We Need From You
          </h2>
          <p className="font-sans text-[#1C1C1C] text-lg md:text-xl mb-8 text-gray-700">
            We'll start fastest when you share:
          </p>

          <ul className="space-y-4 mb-10">
            {requirements.map((requirement) => (
              <li key={requirement.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6667 5L7.50004 14.1667L3.33337 10"
                      stroke="#FFCB3E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed">
                  {requirement.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 rounded-[0.375rem] bg-gradient-to-r from-[#FFCB3E] to-[#FFC036] font-sans text-white text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-3 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Upload References
            </button>
            <button className="flex-1 rounded-[0.375rem] border-2 border-[#1C1C1C] bg-white font-sans text-[#1C1C1C] text-center text-base font-medium leading-[1.5rem] tracking-[0.05rem] uppercase px-8 py-3 transition-all hover:bg-[#1C1C1C] hover:text-white">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
