import React from 'react';
import { Content } from '../types';
import { Tv, Smartphone, Cast, Tablet, Monitor, Laptop } from 'lucide-react';

interface Props {
  content: Content['supportedDevices'];
}

const SupportedDevices: React.FC<Props> = ({ content }) => {
  const icons = [Tv, Cast, Tablet, Cast, Monitor, Laptop];

  return (
    <section className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {content.items.map((item, idx) => {
            // Logic to pick icon based on index or name context
            // Mapping roughly to: Smart TV, Android Box, iOS, Firestick, PC, Mac
            // If the order changes in constants, these might need adjustment or specific mapping
            const Icon = icons[idx % icons.length];
            
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center group p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]"
              >
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon className="text-gray-400 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-sm font-bold text-gray-300 group-hover:text-white text-center uppercase tracking-wide">
                  {item}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportedDevices;