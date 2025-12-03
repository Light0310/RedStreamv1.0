import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../constants';

const WhatsAppBtn: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={createWhatsAppLink("Hello, I have a question about RedStream IPTV.")}
        target="_blank"
        rel="noreferrer"
        className="btn-tech btn-tech-whatsapp flex items-center justify-center p-4 rounded-full text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-black text-xs font-bold py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Support Online
        <span className="absolute top-1/2 right-[-4px] -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-white"></span>
      </span>
    </div>
  );
};

export default WhatsAppBtn;