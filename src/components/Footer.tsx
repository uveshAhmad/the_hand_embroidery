export default function Footer() {
  return (
    <footer className="bg-[#F6F1EA] border-t border-l border-r border-[#D1D1D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Information */}
          <div>
            <h3 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl font-medium mb-4">
              Embroidery Studio
            </h3>
            <p className="font-sans text-[#1C1C1C] text-base md:text-lg leading-relaxed opacity-80">
              Hand embroidery created with patience, precision, and pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[#1C1C1C] text-sm font-semibold tracking-wider uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-sans text-[#1C1C1C] text-sm font-semibold tracking-wider uppercase mb-4">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5.83333L9.075 11.05C9.34863 11.2667 9.65137 11.2667 9.925 11.05L16.5 5.83333M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z"
                    stroke="#FFCB3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:contact@thehandembroidery.com"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  contact@thehandembroidery.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z"
                    stroke="#FFCB3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 18.3333C13.3333 15 16.6667 11.9167 16.6667 8.33333C16.6667 4.75 13.75 1.66667 10 1.66667C6.25 1.66667 3.33333 4.75 3.33333 8.33333C3.33333 11.9167 6.66667 15 10 18.3333Z"
                    stroke="#FFCB3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-[#1C1C1C] text-base">
                  Jawahar Nagar, Ghaziabad, 201102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[#D1D1D1] my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-[#1C1C1C] text-sm md:text-base opacity-70">
            © 2026 Embroidery Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
