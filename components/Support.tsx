import React from 'react';
import { Content } from '../types';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../constants';

interface Props {
  content: Content['support'];
}

const Support: React.FC<Props> = ({ content }) => {
  return (
    <section id="support" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-16 h-16 bg-red-900/20 rounded-2xl border border-red-900/50 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
          <MessageCircle className="text-red-500 w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          {content.title}
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {content.desc}
        </p>

        <a 
          href={createWhatsAppLink("Hello Support, I need assistance regarding RedStream IPTV.")}
          target="_blank" 
          rel="noreferrer"
          className="btn-tech btn-tech-whatsapp inline-flex items-center space-x-3 text-white font-bold py-5 px-10 rounded-full"
        >
          <MessageCircle size={24} />
          <span className="uppercase tracking-widest text-sm">{content.button}</span>
        </a>
      </div>
    </section>
  );
};

export default Support;