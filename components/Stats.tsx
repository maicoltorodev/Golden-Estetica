'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 98, suffix: '%', label: 'Tasa de Satisfacción' },
  { value: 15, suffix: '+', label: 'Años de Excelencia' },
  { value: 10, suffix: 'k+', label: 'Pacientes Atendidos' },
  { value: 40, suffix: '+', label: 'Protocolos Exclusivos' }
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up the stat items
      gsap.fromTo(
        '.stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );

      // Animate numbers counting up
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = statsData[index].value;
        
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: targetValue,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          onUpdate: () => {
            if (el) {
              el.innerHTML = Math.round(obj.val).toString();
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 relative z-10 border-y border-white/5 bg-obsidian/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-champagne/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-item flex flex-col items-center text-center relative group ${
                index !== statsData.length - 1 ? 'md:border-r md:border-white/10' : ''
              }`}
            >
              <div className="flex items-baseline justify-center mb-4 relative">
                <span 
                  ref={(el) => { numbersRef.current[index] = el; }}
                  className="font-serif text-6xl md:text-7xl lg:text-8xl text-champagne tracking-tighter drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]"
                >
                  0
                </span>
                <span className="font-serif text-3xl md:text-5xl text-champagne ml-1 opacity-80">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-mono text-[10px] md:text-xs text-ivory/50 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
