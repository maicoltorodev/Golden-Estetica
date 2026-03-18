'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SocialProof() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-content', {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const partners = [
    'VOGUE', 'ELLE', 'HARPER\'S BAZAAR', 'FORBES', 'GQ', 'VANITY FAIR',
    'VOGUE', 'ELLE', 'HARPER\'S BAZAAR', 'FORBES', 'GQ', 'VANITY FAIR'
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-obsidian/50 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-mono text-ivory/40 uppercase tracking-widest">
          Reconocidos por la excelencia en
        </p>
      </div>

      <div ref={marqueeRef} className="flex overflow-hidden whitespace-nowrap">
        <div className="marquee-content flex gap-16 md:gap-32 items-center px-8">
          {partners.map((partner, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-serif italic text-ivory/30 tracking-wider"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
