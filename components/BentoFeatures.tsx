'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScanFace, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BentoFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bento-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              El arte de la <span className="italic text-champagne">precisión.</span>
            </h2>
            <p className="text-ivory/60 text-lg font-light leading-relaxed">
              Nuestros protocolos combinan la tecnología más avanzada del mundo con un enfoque médico hiper-personalizado para resultados naturales y duraderos.
            </p>
          </div>
          <button className="flex items-center gap-2 text-champagne font-medium hover:text-ivory transition-colors group">
            Conocer la metodología
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:auto-rows-[400px]">
          
          {/* Card 1: Large */}
          <div className="bento-card md:col-span-2 glass rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-champagne/30 transition-colors relative overflow-hidden min-h-[400px] lg:min-h-0">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-champagne/10 rounded-full blur-3xl group-hover:bg-champagne/20 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate flex items-center justify-center mb-8 border border-white/5">
                <ScanFace className="text-champagne" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Análisis Facial IA</h3>
              <p className="text-ivory/60 leading-relaxed max-w-md">
                Escaneo 3D en tiempo real que evalúa más de 100 puntos faciales para simular resultados exactos antes de iniciar cualquier tratamiento.
              </p>
            </div>

            {/* Micro-interaction UI */}
            <div className="relative z-10 mt-8 glass-champagne p-4 rounded-xl flex items-center justify-between border border-champagne/20">
              <div className="flex items-center gap-2 sm:gap-3 overflow-hidden mr-2">
                <div className="w-3 h-3 rounded-full bg-champagne animate-pulse shrink-0"></div>
                <span className="font-mono text-xs sm:text-sm text-champagne truncate">Procesando biometría...</span>
              </div>
              <span className="font-mono text-xs sm:text-sm text-ivory/50 shrink-0">100%</span>
            </div>
          </div>

          {/* Card 2: Tall */}
          <div className="bento-card glass rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-ivory/30 transition-colors relative overflow-hidden min-h-[400px] lg:min-h-0">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate flex items-center justify-center mb-8 border border-white/5">
                <Activity className="text-ivory" size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Protocolos No Invasivos</h3>
              <p className="text-ivory/60 leading-relaxed">
                Recuperación en 24 horas con tecnología láser de picosegundos y ultrasonido focalizado.
              </p>
            </div>

            {/* Micro-interaction UI */}
            <div className="relative z-10 mt-8 w-full h-24 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-champagne/20 rounded-t-sm group-hover:bg-champagne transition-all duration-500"
                  style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Card 3: Wide */}
          <div className="bento-card md:col-span-3 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-champagne/30 transition-colors min-h-[400px] lg:min-h-0">
            <div className="max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-slate flex items-center justify-center mb-8 border border-white/5">
                <ShieldCheck className="text-champagne" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Atención Concierge</h3>
              <p className="text-ivory/60 leading-relaxed">
                Seguimiento médico 24/7 post-tratamiento, suites de recuperación privadas y un asesor estético personal dedicado exclusivamente a tu evolución.
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-sm glass p-6 md:p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate overflow-hidden relative shrink-0">
                  <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" alt="Dra. Elena Valdés" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-medium text-lg">Dra. Elena Valdés</div>
                  <div className="text-xs text-champagne font-mono mt-1">Directora Médica</div>
                </div>
              </div>
              <div className="glass-champagne p-4 rounded-xl text-sm md:text-base text-ivory/80 leading-relaxed italic">
                &quot;Tu plan de recuperación está listo. Nos vemos mañana a las 10:00 AM.&quot;
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
