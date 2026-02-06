import React, { useState, useEffect } from 'react';
import { MODULES } from '../constants';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    MODULES.forEach((module) => {
      const el = document.getElementById(module.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg shadow-blue-500/30 lg:hidden hover:scale-105 transition-transform active:scale-95"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Container */}
      <nav className={`
        fixed inset-y-0 right-0 z-40 w-72 bg-white/90 backdrop-blur-xl border-l border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:bg-transparent lg:border-none lg:w-full
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}
      `}>
        <div className="h-full overflow-y-auto py-8 px-2 lg:px-0 scrollbar-hide">
          <div className="bg-white/50 backdrop-blur-md rounded-2xl border border-white/50 p-4 lg:shadow-sm lg:border-slate-100">
            <h5 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              模块导航
            </h5>
            <div className="space-y-1">
              {MODULES.map((module) => {
                const isActive = activeId === module.id;
                return (
                  <button
                    key={module.id}
                    onClick={() => scrollToSection(module.id)}
                    className={`
                      group w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-100/50' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <module.icon 
                        size={18} 
                        className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} 
                      />
                      <span>{module.title}</span>
                    </div>
                    {isActive && (
                      <ArrowRight size={14} className="text-blue-500 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Decorative mini footer in nav */}
          <div className="mt-8 px-6 hidden lg:block">
             <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/10">
                <p className="text-xs text-slate-400 mb-1">Current Focus</p>
                <p className="font-bold text-sm">Full Stack Architecture</p>
                <div className="mt-3 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-500 rounded-full animate-pulse-slow"></div>
                </div>
             </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;