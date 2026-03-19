'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} id="final-cta" className="py-24 md:py-32 relative overflow-hidden bg-obsidian border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-champagne/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Elegant vertical line */}
        <div className="cta-element w-px h-24 bg-gradient-to-b from-transparent to-champagne/50 mb-8"></div>
        
        <p className="cta-element text-xs font-mono text-champagne uppercase tracking-[0.3em] mb-6">
          Experiencia Golden
        </p>

        <h2 className="cta-element font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] font-light tracking-tight">
          Tu mejor versión <br />
          <span className="italic text-champagne">comienza aquí.</span>
        </h2>
        
        <p className="cta-element text-lg md:text-xl text-ivory/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Únete a nuestro exclusivo círculo de pacientes y descubre el estándar de oro en medicina estética. Resultados precisos, naturales y definitivos.
        </p>
        
        <div className="cta-element flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <button className="w-full sm:w-auto bg-champagne text-obsidian px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-ivory transition-all hover:scale-105 duration-300 flex items-center justify-center gap-3">
            Agendar Valoración
            <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium text-ivory border border-white/20 hover:border-champagne hover:text-champagne transition-all duration-300">
            Contactar Asesor
          </button>
        </div>
        
        {/* Structural footer of the CTA */}
        <div className="cta-element mt-20 w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-xs font-mono text-ivory/40 uppercase tracking-widest">
            Disponibilidad limitada
          </p>
          <div className="flex gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-champagne/40"></div>
            ))}
          </div>
           <p className="text-xs font-mono text-ivory/40 uppercase tracking-widest">
            Solo con cita previa
          </p>
        </div>
      </div>
    </section>
  );
}
