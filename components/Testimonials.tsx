'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, X } from 'lucide-react';
import gsap from 'gsap';

type Testimonial = {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  short: string;
  full: string;
  avatarUrl: string;
};

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            size={14}
            className={filled ? 'text-champagne fill-champagne' : 'text-white/15'}
          />
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Testimonial | null>(null);

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        id: 't1',
        name: 'Lucía M.',
        treatment: 'Rejuvenecimiento Facial',
        rating: 5,
        short: '“Resultados naturales y una atención impecable.”',
        full: 'Resultados naturales y una atención impecable. Desde la primera valoración sentí confianza: todo fue explicado con detalle, con un enfoque muy profesional y a la vez cercano. El post-tratamiento fue excelente y los cambios se notaron sin perder mi esencia.',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't2',
        name: 'Carmen R.',
        treatment: 'Lifting sin Cirugía',
        rating: 5,
        short: '“Me vi más descansada desde la primera semana.”',
        full: 'Me vi más descansada desde la primera semana. Me encantó que priorizaran la armonía y no el exceso. El espacio es precioso, el trato es premium y el seguimiento fue constante. Volveré para mantener los resultados.',
        avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't3',
        name: 'Sofía G.',
        treatment: 'Hidratación Profunda',
        rating: 5,
        short: '“Mi piel cambió por completo: glow real.”',
        full: 'Mi piel cambió por completo: glow real. Me personalizaron el protocolo según mi tipo de piel y objetivos. Se nota que trabajan con tecnología y criterio médico. La experiencia completa se siente de lujo.',
        avatarUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't4',
        name: 'Valeria P.',
        treatment: 'Perfilado de Labios',
        rating: 5,
        short: '“Sutil, elegante y exactamente lo que quería.”',
        full: 'Sutil, elegante y exactamente lo que quería. Tenía miedo de que se viera artificial, pero el resultado quedó súper natural. El equipo te acompaña en todo momento y te sientes cuidada desde que entras.',
        avatarUrl: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't5',
        name: 'Marina D.',
        treatment: 'Armonización Facial',
        rating: 5,
        short: '“La mejor decisión: precisión y buen gusto.”',
        full: 'La mejor decisión: precisión y buen gusto. Me hicieron un plan por etapas y siempre supe qué esperar. El resultado es armónico y me siento más segura. Se nota el nivel y el criterio estético.',
        avatarUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't6',
        name: 'Paula S.',
        treatment: 'Tratamiento Antiaging',
        rating: 5,
        short: '“Se siente exclusivo: impecable de inicio a fin.”',
        full: 'Se siente exclusivo: impecable de inicio a fin. Desde la recepción hasta el seguimiento, todo está pensado para que sea una experiencia premium. El tratamiento fue cómodo y los resultados se ven progresivos y naturales.',
        avatarUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't7',
        name: 'Andrea L.',
        treatment: 'Toxina Botulínica',
        rating: 5,
        short: '“Adiós cansancio en la mirada, sin rigidez.”',
        full: 'Adiós cansancio en la mirada, sin rigidez. Me respetaron las facciones y el resultado fue suave. Me gustó mucho el enfoque: menos es más, pero bien hecho. Súper recomendado.',
        avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't8',
        name: 'Natalia F.',
        treatment: 'Skin Booster',
        rating: 5,
        short: '“Textura más fina y luz increíble.”',
        full: 'Textura más fina y luz increíble. Me asesoraron con honestidad y me propusieron lo mejor para mi piel. El trato fue súper cuidado y el resultado se ve natural, pero mejorado.',
        avatarUrl: 'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?q=80&w=256&auto=format&fit=crop',
      },
      {
        id: 't9',
        name: 'Elena V.',
        treatment: 'Radiofrecuencia',
        rating: 5,
        short: '“Me encantó: firmeza sin downtime.”',
        full: 'Me encantó: firmeza sin downtime. Fue rápido, cómodo y el equipo se aseguró de que estuviera bien en todo momento. Noté cambios en la firmeza y la calidad de la piel.',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
      },
    ],
    []
  );

  const rows = useMemo(() => {
    return [
      testimonials.slice(0, 6),
      testimonials.slice(3, 9),
      testimonials.slice(1, 7),
    ];
  }, [testimonials]);

  const duplicatedRows = useMemo(() => rows.map((r) => [...r, ...r]), [rows]);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const makeLoop = (selector: string, duration: number, direction: 1 | -1) => {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            gsap.to(selector, {
              xPercent: direction === 1 ? -50 : 0,
              duration,
              ease: 'linear',
              repeat: -1,
            });
          }
        };

        makeLoop('.testimonials-row-1', 28, 1);
        makeLoop('.testimonials-row-2', 30, 1);
        makeLoop('.testimonials-row-3', 32, 1);
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSchedule = () => {
    window.open(
      'https://wa.me/34600987654?text=Hola%20Golden%20Est%C3%A9tica,%20me%20gustar%C3%ADa%20agendar%20una%20consulta',
      '_blank'
    );
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 relative overflow-hidden border-y border-white/5 bg-obsidian/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-champagne/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full px-0 md:px-12 relative z-10">
        <div className="text-center mb-14 md:mb-16 px-6 md:px-0">
          <p className="text-xs font-mono text-champagne uppercase tracking-[0.3em] mb-5">Testimonios</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] font-light tracking-tight">
            Voces de
            <br />
            <span className="italic text-champagne">Transformación</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ivory/60 font-light max-w-2xl mx-auto leading-relaxed">
            Descubre experiencias reales de personas que confiaron en nuestro centro y vivieron un cambio sutil, elegante y definitivo.
          </p>
        </div>

        <div className="space-y-6">
          {duplicatedRows.map((row, rowIndex) => {
            const rowClass = `testimonials-row-${rowIndex + 1}`;
            return (
              <div key={rowClass} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-obsidian/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-obsidian/95 to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-hidden">
                  <div className={`${rowClass} flex gap-5 md:gap-6 items-stretch px-2`}
                    style={{ width: 'max-content' }}
                  >
                    {row.map((t, i) => (
                      <button
                        key={`${t.id}-${i}`}
                        type="button"
                        onClick={() => setSelected(t)}
                        className="group relative w-[320px] md:w-[380px] text-left rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl p-6 hover:border-champagne/40 transition-all duration-300"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative">
                          <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                              <Image
                                src={t.avatarUrl}
                                alt={t.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-ivory truncate">{t.name}</p>
                              <p className="text-xs font-mono text-ivory/50 uppercase tracking-widest truncate">
                                {t.treatment}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <Stars value={t.rating} />
                            <span className="text-[10px] font-mono text-ivory/35 uppercase tracking-[0.25em]">
                              Ver completo
                            </span>
                          </div>

                          <p className="mt-4 text-sm md:text-[15px] text-ivory/70 leading-relaxed">
                            {t.short}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center gap-5 px-6 md:px-0">
          <button
            onClick={handleSchedule}
            className="w-full sm:w-auto bg-champagne text-obsidian px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-ivory transition-all hover:scale-105 duration-300 flex items-center justify-center gap-3"
          >
            Agendar Tu Consulta
            <ArrowRight size={18} />
          </button>
          <p className="text-xs font-mono text-ivory/40 uppercase tracking-widest">Cupos limitados · Solo con cita previa</p>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-obsidian/95 to-obsidian/80 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-champagne/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-champagne/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative p-8 md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={selected.avatarUrl}
                      alt={selected.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-2xl md:text-3xl text-ivory leading-tight truncate">{selected.name}</p>
                    <p className="text-xs font-mono text-ivory/50 uppercase tracking-widest truncate">
                      {selected.treatment}
                    </p>
                    <div className="mt-3">
                      <Stars value={selected.rating} />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="shrink-0 w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                  aria-label="Cerrar"
                >
                  <X size={18} className="text-ivory/80" />
                </button>
              </div>

              <div className="mt-8">
                <p className="text-ivory/80 text-base md:text-lg leading-relaxed">
                  “{selected.full}”
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleSchedule}
                  className="w-full sm:w-auto bg-champagne text-obsidian px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-ivory transition-all hover:scale-105 duration-300 flex items-center justify-center gap-3"
                >
                  Agendar Tu Consulta
                  <ArrowRight size={18} />
                </button>

                <p className="text-[10px] font-mono text-ivory/35 uppercase tracking-[0.25em] text-center sm:text-right">
                  Experiencia premium Golden
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
