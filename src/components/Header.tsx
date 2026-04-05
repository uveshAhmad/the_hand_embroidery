import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Hand Embroidery Logo" 
                className="w-10 h-10"
              />
              <div className="h-10 w-px bg-amber-700/30"></div>
              <div className="flex flex-col">
                <span 
                  className="font-sans uppercase font-normal text-[#303131] text-[0.435rem] tracking-[0.12181rem] text-brand-label"
                  style={{
                    lineHeight: '121.162%'
                  }}
                >
                  THE
                </span>
                <span 
                  className="font-vintage-culture text-black text-[0.63975rem] font-normal leading-[100.075%] tracking-[0.032rem]"
                >
                  Hand Embroidery
                </span>
                <span 
                  className="font-sans uppercase font-normal text-[#303131] text-[0.435rem] tracking-[0.12181rem] text-brand-label"
                  style={{
                    lineHeight: '121.162%'
                  }}
                >
                  PURE TEXTILES
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-serif text-black text-center text-base font-normal text-brand-label">
              Home
            </Link>
            <Link to="/services" className="font-serif text-black text-center text-base font-normal text-brand-label">
              Services
            </Link>
            <Link to="/about" className="font-serif text-black text-center text-base font-normal text-brand-label">
              About Us
            </Link>
            <Link to="/contact" className="font-serif text-black text-center text-base font-normal text-brand-label">
              Contact Us
            </Link>
            <Link 
              to="/enquire-now"
              className="font-sans text-[#1C1C1C] text-center text-[0.82038rem] font-medium leading-[1.23056rem] tracking-[0.041rem] uppercase text-brand-label rounded-[0.30763rem] px-6 py-2.5 bg-gradient-to-r from-[#FFCB3E] to-[#FFC036] transition-colors inline-block"
            >
              ENQUIRE NOW
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-serif text-black text-center text-base font-normal text-brand-label">
                Home
              </Link>
              <Link to="/services" className="font-serif text-black text-center text-base font-normal text-brand-label">
                Services
              </Link>
              <Link to="/about" className="font-serif text-black text-center text-base font-normal text-brand-label">
                About Us
              </Link>
              <Link to="/contact" className="font-serif text-black text-center text-base font-normal text-brand-label">
                Contact Us
              </Link>
              <Link 
                to="/enquire-now"
                className="font-sans text-[#1C1C1C] text-center text-[0.82038rem] font-medium leading-[1.23056rem] tracking-[0.041rem] uppercase text-brand-label rounded-[0.30763rem] px-6 py-2.5 bg-gradient-to-r from-[#FFCB3E] to-[#FFC036] transition-colors w-full inline-block text-center"
              >
                ENQUIRE NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
