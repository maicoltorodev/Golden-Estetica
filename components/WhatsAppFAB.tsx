'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail, Sparkles } from 'lucide-react';

export default function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34600987654?text=Hola%20Golden%20Est%C3%A9tica,%20me%20gustar%C3%ADa%20agendar%20una%20consulta', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+34900123456');
  };

  const handleMailClick = () => {
    window.open('mailto:info@goldenestetica.es?subject=Consulta%20Golden%20Est%C3%A9tica');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      
      {/* Advanced Glow Background */}
      {isVisible && !isOpen && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-32 h-32 bg-gradient-to-r from-champagne/20 to-champagne/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute w-24 h-24 bg-champagne/15 rounded-full blur-xl animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      )}

      {/* Action Buttons with Modern Glass */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 space-y-4 animate-slideUp">
          
          {/* Mail */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <button
              onClick={handleMailClick}
              className="relative flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl text-ivory hover:from-white/10 hover:to-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl group-hover:scale-105"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Mail size={20} className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium">Email</span>
                <span className="text-xs text-ivory/50 block">info@goldenestetica.es</span>
              </div>
            </button>
          </div>

          {/* Phone */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <button
              onClick={handlePhoneClick}
              className="relative flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl text-ivory hover:from-white/10 hover:to-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl group-hover:scale-105"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                <Phone size={20} className="text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium">Llamar</span>
                <span className="text-xs text-ivory/50 block">+34 900 123 456</span>
              </div>
            </button>
          </div>

          {/* WhatsApp */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <button
              onClick={handleWhatsAppClick}
              className="relative flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl text-white shadow-xl hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold">WhatsApp</span>
                <span className="text-xs text-white/80 block">Chat instantáneo</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main FAB - Premium Design */}
      <div className="relative group">
        {/* Multi-layer Glow */}
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
          isHovered 
            ? 'bg-gradient-to-r from-champagne via-champagne/80 to-champagne blur-2xl scale-150 opacity-60' 
            : 'bg-gradient-to-r from-champagne/40 to-champagne/20 blur-xl scale-125 opacity-40'
        }`}></div>
        
        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full border-2 border-champagne/40 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-champagne/20 animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 border backdrop-blur-xl ${
            isOpen 
              ? 'bg-gradient-to-br from-obsidian/90 to-obsidian/80 border-white/20 shadow-2xl' 
              : 'bg-gradient-to-br from-champagne to-champagne/90 border-champagne/50 shadow-xl hover:shadow-2xl group-hover:scale-110'
          }`}
          style={{
            animation: isVisible && !isOpen ? 'premiumFloat 4s ease-in-out infinite' : 'none',
          }}
        >
          {isOpen ? (
            <X size={28} className="text-ivory transition-transform duration-300" />
          ) : (
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-obsidian transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              
              {/* Premium Sparkle */}
              <Sparkles size={14} className="absolute -top-3 -right-3 text-champagne animate-pulse" />
            </div>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes premiumFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          25% { 
            transform: translateY(-8px) scale(1.02); 
          }
          50% { 
            transform: translateY(0px) scale(1); 
          }
          75% { 
            transform: translateY(-4px) scale(1.01); 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

    </div>
  );
}
