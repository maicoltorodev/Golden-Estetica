'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    id: '01',
    title: 'Rejuvenecimiento Celular',
    desc: 'Terapia con exosomas y láser de picosegundos para restaurar la juventud a nivel molecular.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&h=1000&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Armonización Facial',
    desc: 'Proporciones áureas mediante inyectables premium y tensores de última generación.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=1000&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Contorno Corporal',
    desc: 'Reducción no invasiva y tensado cutáneo con radiofrecuencia fraccionada y ultrasonido.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=1000&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Longevidad Intravenosa',
    desc: 'Cócteles de vitaminas, NAD+ y antioxidantes personalizados para vitalidad extrema.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&auto=format&fit=crop'
  }
];

export default function SignatureTreatments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.treatment-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} id="signature-treatments" className="py-24 md:py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-champagne uppercase tracking-[0.2em] mb-4">
              Portafolio Exclusivo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Tratamientos <span className="italic text-champagne">Insignia.</span>
            </h2>
          </div>
          <p className="text-ivory/50 text-sm max-w-xs font-light leading-relaxed">
            Cada protocolo es diseñado a medida tras una evaluación biométrica exhaustiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* Left/Bottom: Accordion List */}
          <div className="lg:col-span-7 border-t border-white/10">
            {treatments.map((item, index) => (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`treatment-row flex flex-col py-6 md:py-8 border-b border-white/10 transition-all duration-500 cursor-pointer ${activeIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="font-mono text-sm md:text-base text-champagne hidden sm:block">
                      {item.id}
                    </span>
                    <h3 className={`font-serif text-xl sm:text-2xl md:text-4xl font-light transition-colors duration-500 ${activeIndex === index ? 'text-champagne' : 'text-ivory'}`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ml-4 ${activeIndex === index ? 'bg-champagne border-champagne text-obsidian' : 'border-white/10 text-ivory'}`}>
                    <Plus size={18} className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-45' : 'rotate-0 opacity-50'}`} />
                  </div>
                </div>
                
                <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${activeIndex === index ? 'translate-y-0' : '-translate-y-8'}`}>
                    <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed max-w-md sm:pl-12 md:pl-14">
                      {item.desc}
                    </p>
                    
                    {/* Mobile Inline Image */}
                    <div className={`relative w-full h-[250px] sm:h-[350px] rounded-xl overflow-hidden border border-white/10 mt-6 lg:hidden transition-all duration-700 delay-100 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image Reveal (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[650px] w-full rounded-2xl overflow-hidden border border-white/5 lg:sticky lg:top-32">
            {treatments.map((item, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
              >
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
