import { useState } from 'react';

const ENQUIRY_OPTIONS = [
  'Select an option',
  'Custom embroidery',
  'Collection collaboration',
  'General question',
  'Other',
];

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    typeOfEnquiry: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic (e.g. send to API)
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDFBF7] rounded-xl shadow-md p-8 md:p-10">
          <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl font-semibold text-center mb-2">
            Get in Touch
          </h2>
          <p className="font-sans text-[#555555] text-sm md:text-base text-center mb-8">
            Fill out the form below and we'll respond within 1-2 working days.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="font-sans text-[#1C1C1C] text-sm md:text-base block mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C]"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-sans text-[#1C1C1C] text-sm md:text-base block mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="contact@thehandembroidery.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="font-sans text-[#1C1C1C] text-sm md:text-base block mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+918810561006"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C]"
              />
            </div>

            <div>
              <label htmlFor="typeOfEnquiry" className="font-sans text-[#1C1C1C] text-sm md:text-base block mb-1">
                Type of Enquiry <span className="text-red-500">*</span>
              </label>
              <select
                id="typeOfEnquiry"
                name="typeOfEnquiry"
                required
                value={formData.typeOfEnquiry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C]"
              >
                {ENQUIRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt === 'Select an option' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="font-sans text-[#1C1C1C] text-sm md:text-base block mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project or enquiry..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C] resize-y min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#FFC640] hover:bg-[#F5BC2E] text-[#1C1C1C] font-sans font-semibold text-base transition-colors inline-flex items-center justify-center gap-2"
            >
              Send Message
              <span aria-hidden>→</span>
            </button>
          </form>

          <p className="font-sans text-[#555555] text-sm text-center mt-6">
            We usually respond within 1-2 working days.
          </p>
        </div>
      </div>
    </section>
  );
}
