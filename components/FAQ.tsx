import React, { useState } from 'react';
import { Content } from '../types';
import { Plus, Minus } from 'lucide-react';

interface Props {
  content: Content['faq'];
}

const FAQ: React.FC<Props> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {content.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                  ? 'bg-neutral-900 border-red-900/50 shadow-lg shadow-red-900/10' 
                  : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className={`font-medium ${openIndex === idx ? 'text-white' : 'text-gray-300'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? (
                    <Minus size={20} className="text-red-500" />
                  ) : (
                    <Plus size={20} className="text-gray-500" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;