'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle zoom
      gsap.fromTo(
        bgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 15, ease: 'power2.out' }
      );

      // Fade up text elements
      gsap.fromTo(
        '.hero-element',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // 3D Mockup reveal on scroll
      gsap.fromTo(
        mockupRef.current,
        { rotationX: 15, y: 100, opacity: 0, scale: 0.95 },
        {
          rotationX: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mockupRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/50 to-obsidian"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        
        <div ref={textRef} className="max-w-4xl flex flex-col items-center">
          <h1 className="hero-element font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-6">
            La ciencia de la <br className="hidden md:block" />
            <span className="italic text-champagne">perfección.</span>
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-ivory/70 max-w-2xl mb-10 font-light leading-relaxed">
            Redefinimos la estética médica en España. Tratamientos no invasivos de vanguardia, resultados precisos y una experiencia de lujo absoluto.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-champagne text-obsidian px-8 py-4 rounded-full text-base font-semibold hover:bg-champagne/90 transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] flex items-center justify-center gap-2">
              Agendar Valoración Privada
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-ivory border border-white/10 hover:bg-white/5 transition-colors">
              Explorar Protocolos
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div 
          ref={mockupRef}
          className="mt-20 md:mt-32 w-full max-w-5xl relative perspective-[2000px]"
        >
          <div className="glass rounded-2xl md:rounded-[2rem] p-2 md:p-4 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden bg-slate">
              <Image 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop" 
                alt="Golden Estética Dashboard" 
                fill 
                className="object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              {/* Overlay UI Elements to make it look like a dashboard */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="glass px-4 py-2 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="font-mono text-xs text-ivory">Análisis 3D</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-lg font-mono text-xs text-champagne">
                    ID: GLD-8492
                  </div>
                </div>
                
                <div className="flex justify-between items-end w-full">
                  <div className="glass p-4 rounded-xl w-48 hidden md:block">
                    <div className="text-xs text-ivory/60 mb-1">Simetría Facial</div>
                    <div className="text-2xl font-serif text-champagne">98.4%</div>
                    <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="h-full bg-champagne w-[98%]"></div>
                    </div>
                  </div>
                  <div className="glass p-4 rounded-xl w-48 hidden md:block">
                    <div className="text-xs text-ivory/60 mb-1">Hidratación Dermis</div>
                    <div className="text-2xl font-serif text-ivory">Óptima</div>
                    <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="h-full bg-ivory w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
