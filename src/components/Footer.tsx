import { Link } from 'react-router-dom';

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
                <Link
                  to="/"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  Contact Us
                </Link>
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
                  viewBox="0 0 24 24"
                  fill="#FFCB3E"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.478 5.611h-.011c-1.543 0-3.052-.414-4.375-1.196l-.314-.187-3.253.852.868-3.17-.205-.326A9.957 9.957 0 0 1 3.167 11.99c0-5.461 4.444-9.905 9.905-9.905 2.646 0 5.132 1.031 7.002 2.902a9.835 9.835 0 0 1 2.902 7.003c-.001 5.46-4.446 9.904-9.905 9.904m8.497-18.406A11.933 11.933 0 0 0 11.992 0C5.372 0 .004 5.37 0 11.992c0 2.115.551 4.181 1.6 6.006L.012 23.988l6.14-1.611a11.964 11.964 0 0 0 5.84 1.517h.005c6.618 0 11.986-5.369 11.986-11.991 0-3.208-1.248-6.225-3.514-8.492" />
                </svg>
                <a
                  href="https://wa.me/918810561006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[#1C1C1C] text-base hover:opacity-70 transition-opacity"
                >
                  +91 8810561006
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
