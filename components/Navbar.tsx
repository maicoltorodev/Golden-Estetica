'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate/40 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Desktop Links (Left) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-ivory/80 flex-1">
          <a href="#tratamientos" className="hover:text-champagne transition-colors">Tratamientos</a>
          <a href="#tecnologia" className="hover:text-champagne transition-colors">Tecnología</a>
          <a href="#simulador" className="hover:text-champagne transition-colors">Simulador IA</a>
        </div>

        {/* Logo (Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="relative w-[180px] h-[50px] md:w-[220px] md:h-[60px]">
            <Image 
              src="/logo2.png"
              alt="Golden Estética Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:flex items-center justify-end gap-6 flex-1">
          <button className="text-sm font-medium text-ivory/80 hover:text-ivory transition-colors">
            Acceso Pacientes
          </button>
          <button className="bg-champagne text-obsidian px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-champagne/90 transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]">
            Agendar Cita
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-ivory p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-white/5 p-6 flex flex-col gap-6 md:hidden">
          <a href="#tratamientos" className="text-lg font-medium text-ivory/80" onClick={() => setMobileMenuOpen(false)}>Tratamientos</a>
          <a href="#tecnologia" className="text-lg font-medium text-ivory/80" onClick={() => setMobileMenuOpen(false)}>Tecnología</a>
          <a href="#simulador" className="text-lg font-medium text-ivory/80" onClick={() => setMobileMenuOpen(false)}>Simulador IA</a>
          <div className="h-px w-full bg-white/10 my-2"></div>
          <button className="w-full bg-champagne text-obsidian px-6 py-3 rounded-xl text-base font-semibold">
            Agendar Valoración
          </button>
        </div>
      )}
    </nav>
  );
}
