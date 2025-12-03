import React from 'react';
import { Content } from '../types';
import { Terminal } from 'lucide-react';

interface Props {
  content: Content['footer'];
}

const Footer: React.FC<Props> = ({ content }) => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-neutral-900 rounded flex items-center justify-center border border-neutral-800">
             <Terminal className="text-red-600 w-4 h-4" />
          </div>
          <span className="text-lg font-bold font-mono tracking-tighter text-white">
            RED<span className="text-red-600">STREAM</span>
          </span>
        </div>

        <div className="text-neutral-500 text-sm font-mono">
          {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;