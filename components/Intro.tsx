import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const Intro: React.FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState(1); // 1: Pulse, 2: Reveal Text, 3: Exit

  useEffect(() => {
    // Phase 1: Logo Pulse (Heartbeat)
    const timer1 = setTimeout(() => setPhase(2), 1200);
    
    // Phase 2: Full Logo Reveal
    const timer2 = setTimeout(() => setPhase(3), 2200);
    
    // Phase 3: Exit
    const timer3 = setTimeout(onComplete, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center transition-opacity duration-700 ${phase === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Background */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] transition-all duration-1000 ${phase === 1 ? 'scale-50 opacity-50' : 'scale-150 opacity-80'}`}></div>

        {/* Logo Icon */}
        <div className={`relative z-10 w-24 h-24 bg-black border-2 border-red-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-700 ease-out transform ${phase === 1 ? 'scale-90' : 'scale-100 rotate-0'}`}>
            <Terminal className="text-white w-12 h-12" strokeWidth={3} />
        </div>

        {/* Text Reveal */}
        <div className={`mt-8 overflow-hidden transition-all duration-700 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            RED<span className="text-red-600">STREAM</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className={`mt-4 overflow-hidden transition-all duration-700 delay-200 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em]">
            Premium Entertainment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;