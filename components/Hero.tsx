import React, { useEffect, useState } from 'react';
import { Content } from '../types';
import { Play, CheckCircle, ChevronRight, Zap } from 'lucide-react';
import { createWhatsAppLink } from '../constants';

interface Props {
  content: Content['hero'];
}

const Hero: React.FC<Props> = ({ content }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only update if the hero is likely in view (optimization)
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20">
      
      {/* Background Elements - Elegant & Subtle Parallax */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        {/* Soft Red Glow Top Center */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
        
        {/* Subtle Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* MASTER EFFECT IPTV BADGE */}
        <div className="animate-fade-in-up" style={{animationDelay: '0s'}}>
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] mb-8 group hover:scale-105 transition-transform duration-300">
                {/* Spinning Border Gradient */}
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b91c1c_0%,#ffffff_50%,#b91c1c_100%)] opacity-70" />
                
                {/* Badge Content */}
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 px-8 py-2.5 text-sm font-medium text-white backdrop-blur-3xl border border-white/10">
                    <Zap size={16} className="text-yellow-400 mr-2 fill-yellow-400 animate-pulse" />
                    <span className="animate-text-shimmer bg-gradient-to-r from-white via-red-500 to-white bg-[length:200%_auto] bg-clip-text text-transparent font-black tracking-[0.2em] uppercase shadow-red-500/50 drop-shadow-sm">
                        PREMIUM IPTV
                    </span>
                    <Zap size={16} className="text-yellow-400 ml-2 fill-yellow-400 animate-pulse" />
                </span>
            </div>
        </div>

        {/* Status Badge - Professional */}
        <div className="flex justify-center mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
             <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-gray-300 text-xs font-semibold tracking-wide uppercase">{content.status}</span>
            </div>
        </div>

        {/* Main Title - Clean & Bold */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {content.title.split(' ')[0]} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            {content.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
           {content.subtitle}
        </p>

        {/* CTA Buttons - Modern Luxury Engineering Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <a 
            href={createWhatsAppLink("Hello RedStream, I want to get started with RedStream IPTV subscription.")}
            target="_blank"
            rel="noreferrer"
            className="btn-tech btn-tech-red group w-full sm:w-auto px-10 py-5 text-white font-bold text-sm tracking-widest rounded-lg flex items-center justify-center uppercase"
          >
            <span className="flex items-center space-x-3">
              <Play size={18} fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" />
              <span>{content.ctaPrimary}</span>
            </span>
          </a>

          <a 
            href="#pricing"
            className="btn-tech btn-tech-dark group w-full sm:w-auto px-10 py-5 text-gray-300 font-bold text-sm tracking-widest rounded-lg flex items-center justify-center uppercase"
          >
            <span className="flex items-center space-x-2">
              <span>{content.ctaSecondary}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-red-500" />
            </span>
          </a>
        </div>

        {/* Features Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-default">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">4K Ultra HD</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-default">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">Anti-Freeze</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-default">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">99.9% Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;