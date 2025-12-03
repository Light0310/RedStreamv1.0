import React, { useState, useEffect } from 'react';
import { Language, Content } from '../types';
import LanguageSelector from './LanguageSelector';
import { Menu, X, Terminal } from 'lucide-react';
import { createWhatsAppLink } from '../constants';

interface Props {
  lang: Language;
  content: Content['nav'];
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<Props> = ({ lang, content, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.home, href: "#hero" },
    { name: content.features, href: "#features" },
    { name: content.pricing, href: "#pricing" },
    { name: content.faq, href: "#faq" },
    { name: content.contact, href: "#support" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-red-900/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center shadow-lg shadow-red-600/20">
                <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-white">
              RED<span className="text-red-500">STREAM</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageSelector currentLang={lang} onLanguageChange={onLanguageChange} />
            <a 
              href={createWhatsAppLink("Hello RedStream, I would like to request a Free Trial.")}
              target="_blank" 
              rel="noreferrer"
              className="btn-tech btn-tech-red text-white text-xs font-bold py-2.5 px-6 rounded-lg"
            >
              {content.tryNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <LanguageSelector currentLang={lang} onLanguageChange={onLanguageChange} />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-red-900/30 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-red-500"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={createWhatsAppLink("Hello RedStream, I would like to request a Free Trial.")}
            target="_blank" 
            rel="noreferrer" 
            className="block text-center btn-tech btn-tech-red text-white py-3 rounded-lg font-bold"
          >
            {content.tryNow}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;