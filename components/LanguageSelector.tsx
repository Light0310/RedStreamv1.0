import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { ChevronDown, Globe } from 'lucide-react';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-neutral-900"
      >
        <Globe size={18} />
        <span className="font-mono text-sm">{currentLang}</span>
        <ChevronDown size={14} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-neutral-950 border border-neutral-800 rounded-md shadow-xl z-50 overflow-hidden">
          {Object.values(Language).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-mono transition-colors
                ${currentLang === lang ? 'bg-red-900/20 text-red-500' : 'text-gray-400 hover:bg-neutral-900 hover:text-white'}
              `}
            >
              {lang === Language.EN && "🇬🇧 English"}
              {lang === Language.FR && "🇫🇷 Français"}
              {lang === Language.IT && "🇮🇹 Italiano"}
              {lang === Language.ES && "🇪🇸 Español"}
              {lang === Language.AR && "🇸🇦 العربية"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;