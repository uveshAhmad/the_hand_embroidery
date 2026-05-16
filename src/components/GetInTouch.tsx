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

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          typeOfEnquiry: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please try again later.');
    }
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

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-serif font-medium mb-2">Thank you!</h3>
              <p className="text-sans">Your message has been sent successfully. We will get back to you soon.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

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
                  Type of Enquiry <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span>
                </label>
                <select
                  id="typeOfEnquiry"
                  name="typeOfEnquiry"
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
                  Message <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or enquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] font-sans text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A07A5C]/30 focus:border-[#A07A5C] resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-lg bg-[#FFC640] hover:bg-[#F5BC2E] disabled:opacity-70 disabled:cursor-not-allowed text-[#1C1C1C] font-sans font-semibold text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {status !== 'loading' && <span aria-hidden>→</span>}
              </button>
            </form>
          )}

          <p className="font-sans text-[#555555] text-sm text-center mt-6">
            We usually respond within 1-2 working days.
          </p>
        </div>
      </div>
    </section>
  );
}
