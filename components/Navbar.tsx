'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuSection, setMenuSection] = useState('main');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMenuSection('main');
    }
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMenuSection('main');
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-all duration-300"
          onClick={handleMenuClick}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 md:hidden">
          {/* Menu Header */}
          <div className="glass border-b border-white/5 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="relative w-[140px] h-[40px]">
                <Image 
                  src="/logo2.png"
                  alt="Golden Estética Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button 
                className="text-ivory/80 hover:text-ivory transition-colors p-2"
                onClick={handleMenuClick}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="glass h-full overflow-y-auto">
            {menuSection === 'main' ? (
              <div className="p-6 space-y-6">
                {/* Main Navigation */}
                <div className="space-y-2">
                  <h3 className="text-champagne/60 text-xs font-semibold uppercase tracking-wider mb-4">Navegación</h3>
                  
                  <a 
                    href="#features" 
                    className="group flex items-center justify-between p-4 rounded-xl glass-champagne hover:bg-champagne/20 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-champagne/40"></div>
                      </div>
                      <span className="text-ivory font-medium">Tecnología</span>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </a>

                  <a 
                    href="#signature-treatments" 
                    className="group flex items-center justify-between p-4 rounded-xl glass-champagne hover:bg-champagne/20 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-champagne/40"></div>
                      </div>
                      <span className="text-ivory font-medium">Tratamientos</span>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </a>

                  <a 
                    href="#testimonials" 
                    className="group flex items-center justify-between p-4 rounded-xl glass-champagne hover:bg-champagne/20 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded bg-champagne/40 transform rotate-45"></div>
                      </div>
                      <span className="text-ivory font-medium">Testimonios</span>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </a>

                  <a 
                    href="#location" 
                    className="group flex items-center justify-between p-4 rounded-xl glass-champagne hover:bg-champagne/20 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-champagne/40"></div>
                      </div>
                      <span className="text-ivory font-medium">Ubicación</span>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </a>

                  <a 
                    href="#final-cta" 
                    className="group flex items-center justify-between p-4 rounded-xl glass-champagne hover:bg-champagne/20 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-champagne/40 transform rotate-45"></div>
                      </div>
                      <span className="text-ivory font-medium">Contacto</span>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  <h3 className="text-champagne/60 text-xs font-semibold uppercase tracking-wider mb-4">Accesos Rápidos</h3>
                  
                  <button className="w-full flex items-center justify-between p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Phone size={18} className="text-champagne" />
                      </div>
                      <div className="text-left">
                        <span className="text-ivory font-medium block">Contacto</span>
                        <span className="text-ivory/50 text-sm">+34 900 123 456</span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Calendar size={18} className="text-champagne" />
                      </div>
                      <div className="text-left">
                        <span className="text-ivory font-medium block">Acceso Pacientes</span>
                        <span className="text-ivory/50 text-sm">Gestiona tus citas</span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-ivory/40 group-hover:text-champagne transition-colors" />
                  </button>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-champagne to-champagne/80 text-obsidian px-6 py-4 rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
                    Agendar Valoración
                  </button>
                </div>

                {/* Footer Info */}
                <div className="text-center pt-6 pb-8">
                  <p className="text-ivory/40 text-sm">Golden Estética</p>
                  <p className="text-ivory/30 text-xs mt-1">Lu-Vi: 9:00-20:00 | Sá: 9:00-14:00</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-slate/40 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Desktop Links (Left) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-ivory/80 flex-1">
            <a href="#features" className="hover:text-champagne transition-colors">Tecnología</a>
            <a href="#signature-treatments" className="hover:text-champagne transition-colors">Tratamientos</a>
            <a href="#testimonials" className="hover:text-champagne transition-colors">Testimonios</a>
            <a href="#location" className="hover:text-champagne transition-colors">Ubicación</a>
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
            className="md:hidden text-ivory p-2 ml-auto relative group"
            onClick={handleMenuClick}
          >
            <div className="w-6 h-5 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}
