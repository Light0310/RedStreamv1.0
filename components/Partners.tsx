import React from 'react';
import { Content } from '../types';

interface Props {
  content: Content['partners'];
}

const Partners: React.FC<Props> = ({ content }) => {
  const brands = [
    { name: "beIN SPORTS", style: "text-white font-[900] tracking-tighter" },
    { name: "NETFLIX", style: "text-[#E50914] font-bold tracking-wide" },
    { name: "Apple TV+", style: "text-gray-300 font-medium" },
    { name: "SHAHID VIP", style: "text-[#1db954] font-bold tracking-widest uppercase" },
    { name: "HBO MAX", style: "text-purple-400 font-black tracking-tighter" },
    { name: "CANAL+", style: "text-white font-bold bg-black px-1" },
    { name: "DISNEY+", style: "text-blue-300 font-bold tracking-wide" },
  ];

  // Duplicate for seamless loop
  const displayBrands = [...brands, ...brands, ...brands];

  return (
    <div className="bg-neutral-950 border-y border-neutral-900 py-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-20">
         <h3 className="text-[10px] md:text-xs font-mono text-red-600/70 uppercase tracking-[0.3em] flex items-center justify-center">
            <span className="w-8 h-px bg-red-900/50 mr-4"></span>
            {content.title}
            <span className="w-8 h-px bg-red-900/50 ml-4"></span>
         </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex space-x-16 md:space-x-24 items-center whitespace-nowrap py-2 px-4">
          {displayBrands.map((brand, idx) => (
              <div 
                  key={idx} 
                  className={`text-2xl md:text-4xl opacity-50 hover:opacity-100 transition-opacity duration-300 ${brand.style} select-none font-display grayscale hover:grayscale-0`}
              >
                  {brand.name}
              </div>
          ))}
        </div>
        
        {/* Second copy for absolute smoothness (optional, but css loop handles it if width is correct. here we just rely on long list above) */}
      </div>
    </div>
  );
};

export default Partners;