'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map fade-in
      gsap.fromTo(
        mapRef.current,
        { scale: 0.95, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Info cards stagger animation
      gsap.fromTo(
        '.info-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="location" className="py-24 md:py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-mono text-champagne uppercase tracking-[0.2em] mb-4">
            Visítanos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestra <span className="italic text-champagne">Ubicación.</span>
          </h2>
          <p className="text-ivory/50 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            En el corazón de Madrid, nuestra clínica combina discreción absoluta con acceso privilegiado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Map Container - Takes 2 columns on desktop */}
          <div ref={mapRef} className="lg:col-span-2">
            <div className="glass rounded-2xl p-1 border border-white/5 overflow-hidden">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1518.483559080137!2d-3.699362!3d40.431727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229a1f73a66b5%3A0xceec573f56d099ed!2zQ2zDrW5pY2EgR29sZGVuIEVzdMOpdGljYSBFc3Bhw7Fh!5e0!3m2!1sen!2sus!4v1773879721203!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-6">
            
            {/* Address Card */}
            <div className="info-card glass-champagne rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-champagne" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Dirección</h3>
                  <p className="text-ivory/70 text-sm leading-relaxed">
                    Clínica Golden Estética España<br />
                    Calle de Serrano, 45<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="info-card glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-champagne" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Contacto</h3>
                  <div className="space-y-2">
                    <p className="text-ivory/70 text-sm">
                      <strong>Teléfono:</strong> +34 900 123 456
                    </p>
                    <p className="text-ivory/70 text-sm">
                      <strong>WhatsApp:</strong> +34 600 987 654
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Mail size={16} className="text-champagne" />
                      <span className="text-champagne text-sm">info@goldenestetica.es</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="info-card glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-champagne" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Horario</h3>
                  <div className="space-y-1 text-ivory/70 text-sm">
                    <p><strong>Lunes - Viernes:</strong> 9:00 - 20:00</p>
                    <p><strong>Sábado:</strong> 9:00 - 14:00</p>
                    <p><strong>Domingo:</strong> Cerrado</p>
                    <p className="text-champagne text-xs mt-2 font-medium">
                      Citas prioritarias disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-champagne to-champagne/80 text-obsidian px-6 py-4 rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(230,168,23,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
                Agendar Visita Guiada
              </button>
            </div>

          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-champagne text-2xl font-serif mb-2">Parking Privado</p>
              <p className="text-ivory/50 text-sm">Acceso exclusivo para clientes</p>
            </div>
            <div>
              <p className="text-champagne text-2xl font-serif mb-2">Transporte Público</p>
              <p className="text-ivory/50 text-sm">Metro Serrano (L4) a 2 min</p>
            </div>
            <div>
              <p className="text-champagne text-2xl font-serif mb-2">Acceso VIP</p>
              <p className="text-ivory/50 text-sm">Entrada discreta y privada</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
