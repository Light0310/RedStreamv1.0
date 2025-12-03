import React from 'react';
import { Content } from '../types';
import { FEATURES_ICONS } from '../constants';

interface Props {
  content: Content['features'];
}

const Features: React.FC<Props> = ({ content }) => {
  return (
    <section id="features" className="py-20 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, idx) => {
            const Icon = FEATURES_ICONS[idx % FEATURES_ICONS.length];
            return (
              <div 
                key={idx} 
                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-red-600/50 transition-all duration-300 hover:bg-neutral-900 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <Icon className="text-red-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;