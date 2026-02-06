import React, { useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import { MODULES, OVERVIEW_ITEMS, PERSONAL_INFO, REFLECTIONS, FUTURE_PLANS } from './constants';
import ModuleCard from './components/ModuleCard';
import GallerySlide from './components/GallerySlide';
import { User, Calendar, Award, Sparkles, ArrowRight, X, CheckCircle2, AlertTriangle, Lightbulb, Target } from 'lucide-react';

function App() {
  const deckRef = useRef<Reveal.Api | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Reveal.js
    if (!deckRef.current) {
      deckRef.current = new Reveal({
        hash: false, // Disabled to prevent SecurityError in sandboxed iframe/blob environments
        history: false, // Ensure history API is not accessed
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        backgroundTransition: 'fade',
        controls: true,
        progress: true,
        center: true,
        width: 1600, // Increased width for 16:9 aspect ratio and fuller content
        height: 900, // Increased height
        margin: 0.025,
        minScale: 0.2,
        maxScale: 2.0,
        display: 'flex', // Changed from block to flex for better centering
        embedded: true, // Helps with resizing in some containers
      });

      deckRef.current.initialize();
    }

    return () => {
      if (deckRef.current) {
        try {
          deckRef.current.destroy();
          deckRef.current = null;
        } catch (e) {
          console.error("Reveal destroy error", e);
        }
      }
    };
  }, []);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewImage) {
        setPreviewImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

  const handleImageClick = (src: string) => {
    setPreviewImage(src);
  };

  return (
    <>
      <div className="reveal">
        
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[900px] h-[900px] bg-indigo-400/10 rounded-full blur-[150px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="slides">

          {/* Slide 1: Cover / Hero - Centered Split Card */}
          <section data-transition="zoom">
            <div className="flex items-center justify-center h-full w-full">
              <div className="relative bg-white/40 backdrop-blur-md rounded-[3rem] p-12 border border-white/50 shadow-2xl flex items-center gap-12 max-w-7xl w-full text-left">
                  
                  {/* Left: Text Content */}
                  <div className="flex-1 flex flex-col items-start pl-4">
                      <div className="mb-10 relative">
                        <div className="absolute -inset-6 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-40"></div>
                        <div className="relative flex items-center gap-3 px-6 py-2.5 bg-white/90 rounded-full shadow-sm border border-slate-100">
                          <Sparkles size={18} className="text-blue-600" />
                          <span className="font-bold text-slate-700 tracking-wide uppercase text-sm">Year-End Review</span>
                          <span className="w-px h-4 bg-slate-300 mx-1"></span>
                          <span className="text-slate-500 text-sm font-mono">{PERSONAL_INFO.period}</span>
                        </div>
                      </div>

                      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
                        {PERSONAL_INFO.name}
                      </h1>
                      
                      <p className="text-3xl text-slate-600 font-medium mb-12 tracking-tight">
                        {PERSONAL_INFO.role}
                      </p>

                      <div className="flex gap-8 w-full">
                        <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-lg flex-1 max-w-[200px] transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-black text-blue-600 mb-1">8</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Modules</div>
                        </div>
                        <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-lg flex-1 max-w-[200px] transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-black text-indigo-600 mb-1">100%</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Stack</div>
                        </div>
                      </div>
                  </div>

                  {/* Right: Project Screenshot */}
                  <div 
                    className="flex-1 relative group cursor-zoom-in"
                    onClick={() => handleImageClick("https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-1.png")}
                  >
                      <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-700"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white/80 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                          <div className="bg-slate-100 h-8 flex items-center px-4 gap-2 border-b border-slate-200">
                              <div className="w-3 h-3 rounded-full bg-red-400"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                              <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <img 
                              src="https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-1.png" 
                              alt="Project Dashboard" 
                              className="w-full h-auto object-cover"
                          />
                      </div>
                  </div>

              </div>
            </div>
          </section>

          {/* Slide 2: Overview (Optimized Layout) */}
          <section data-transition="convex">
            <div className="h-full flex flex-col justify-center px-8 w-full">
              {/* Header */}
              <div className="flex items-center gap-6 mb-16 pl-4">
                <div className="flex items-center justify-center w-20 h-20 bg-slate-900 rounded-[24px] text-white shadow-2xl shadow-slate-900/20 transform -rotate-3">
                  <Award size={40} />
                </div>
                <h2 className="text-[5rem] font-black text-slate-900 tracking-tighter leading-none">工作概览</h2>
              </div>
              
              {/* Cards - minmax 保证每列足够宽，标题不单字换行 */}
              <div className="grid gap-10 w-full" style={{ gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))' }}>
                {OVERVIEW_ITEMS.map((item, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 text-left h-full flex flex-col overflow-hidden"
                  >
                    {/* Background decoration on hover */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0 translate-x-12 -translate-y-12"></div>
                    
                    <div className="relative z-10 min-w-0">
                      {/* Top Accent Line */}
                      <div className="h-2 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10 shadow-sm group-hover:w-28 transition-all duration-500"></div>
                      
                      {/* Title - 不换行，避免「全栈体系建设」等标题单字掉行 */}
                      <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight whitespace-nowrap">
                          {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xl text-slate-500 leading-relaxed font-medium pr-2 indent-[2em] text-justify">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Subtle Number */}
                    <div className="mt-auto pt-8 flex justify-end">
                      <span className="text-8xl font-black text-slate-50 group-hover:text-blue-50/80 transition-colors select-none leading-none -mb-6 -mr-6">
                          0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transition Slide */}
          <section data-background-gradient="linear-gradient(to bottom right, #eff6ff, #eef2ff)">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 blur-[60px] opacity-20 rounded-full"></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-2xl mb-8 border border-white/50">
                  <User size={80} className="text-blue-600" />
                </div>
              </div>
              <h2 className="text-7xl font-black text-slate-900 mb-6 tracking-tight">核心模块梳理</h2>
              <p className="text-3xl text-slate-500 font-light">Feature Breakdown & Technical Challenges</p>
              <div className="mt-16 p-4 bg-white/50 rounded-full animate-bounce shadow-sm">
                <ArrowRight size={32} className="text-blue-600" />
              </div>
            </div>
          </section>

          {/* Module Slides */}
          {MODULES.map((module, idx) => {
            // Segregate images
            const mobileImages = module.images?.filter(img => img.includes('wx-') || img.includes('mobile')) || [];
            const webImages = module.images?.filter(img => !img.includes('wx-') && !img.includes('mobile')) || [];
            
            // Logic to determine if we should use the vertical gallery layout
            // Trigger if:
            // 1. Mixed content (Mobile + Web) - to separate viewports nicely
            // 2. Too many images for a single card (> 4) - to avoid layout clutter
            // UPDATED: Threshold increased to 4 to allow Sales/Store modules to fit in the card grid
            const hasGallery = (mobileImages.length > 0 && webImages.length > 0) || (module.images?.length || 0) > 4;

            if (hasGallery) {
              const isReservation = module.id === 'reservation';

              // Create a modified module data for the summary slide
              // For Reservation: Include ALL web images in the summary card (to show 3 images at once)
              // For others: Only show 1 hero image
              const heroImage = webImages.length > 0 ? webImages[0] : (mobileImages.length > 0 ? mobileImages[0] : undefined);
              
              const summaryData = {
                  ...module,
                  images: isReservation ? webImages : (heroImage ? [heroImage] : [])
              };

              let galleryWebImages: string[] = [];
              
              if (isReservation) {
                // Reservation: Web images are already in summaryData, so no web gallery needed
                galleryWebImages = [];
              } else if (mobileImages.length > 0 && webImages.length > 0) {
                 // Mixed mode: Hero is usually web[0], gallery shows web[1..n]
                 galleryWebImages = webImages.slice(1);
              } else {
                 // Single mode (e.g. only Web): Hero is web[0], gallery shows web[0..n] (Full set)
                 galleryWebImages = webImages;
              }

              return (
                  <section key={module.id}>
                      {/* 1. Main Summary Slide */}
                      <section>
                          <ModuleCard data={summaryData} onImageClick={handleImageClick} />
                          {/* Hint for vertical navigation - Only show if there are additional gallery slides */}
                          {(mobileImages.length > 0 || galleryWebImages.length > 0) && (
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 animate-bounce pointer-events-none">
                                <span className="text-xs uppercase tracking-widest mb-2">View Gallery</span>
                                <div className="w-px h-8 bg-slate-300"></div>
                            </div>
                          )}
                      </section>
                      
                      {/* 2. Mobile Gallery Slide */}
                      {mobileImages.length > 0 && (
                          <section>
                              <GallerySlide 
                                title="C-End: Mini Program" 
                                images={mobileImages} 
                                type="mobile" 
                                onImageClick={handleImageClick}
                              />
                          </section>
                      )}

                      {/* 3. Web Gallery Slide */}
                      {galleryWebImages.length > 0 && (
                          <section>
                              <GallerySlide 
                                title="B-End: Management Portal" 
                                images={galleryWebImages.slice(0, 4)} 
                                type="web" 
                                onImageClick={handleImageClick}
                              />
                          </section>
                      )}
                  </section>
              );
            }

            // Default single slide for modules with few images (<= 4) of a single type
            return (
              <section key={module.id} data-transition="slide">
                <ModuleCard data={module} onImageClick={handleImageClick} />
              </section>
            );
          })}

          {/* Reflections Slide */}
          <section data-transition="convex">
             <div className="h-full flex flex-col justify-center px-8 w-full">
                <div className="flex items-center gap-6 mb-12 pl-4">
                  <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-indigo-500/30">
                    <Lightbulb size={32} />
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 tracking-tight">反思与总结</h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {REFLECTIONS.map((item, idx) => {
                     let icon;
                     let colorClass;
                     let bgClass;
                     
                     if (item.type === 'success') {
                        icon = <CheckCircle2 size={24} />;
                        colorClass = 'text-emerald-700';
                        bgClass = 'bg-emerald-50 border-emerald-100';
                     } else if (item.type === 'warning') {
                        icon = <AlertTriangle size={24} />;
                        colorClass = 'text-amber-700';
                        bgClass = 'bg-amber-50 border-amber-100';
                     } else {
                        icon = <Sparkles size={24} />;
                        colorClass = 'text-blue-700';
                        bgClass = 'bg-blue-50 border-blue-100';
                     }

                     return (
                        <div key={idx} className={`rounded-[2rem] p-8 border ${bgClass} backdrop-blur-sm h-full flex flex-col text-left transition-transform hover:-translate-y-1`}>
                            <div className={`flex items-center gap-3 mb-6 ${colorClass}`}>
                                {icon}
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>
                            <ul className="space-y-4 text-slate-700 text-lg leading-relaxed flex-1">
                                {item.content.map((point, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                       <span className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 bg-current`} />
                                       <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                     );
                  })}
                </div>
             </div>
          </section>

          {/* 2026 Planning Slide */}
          <section data-transition="zoom">
             <div className="h-full flex flex-col justify-center px-8 w-full">
                <div className="flex items-center gap-6 mb-12 pl-4">
                  <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-lg shadow-orange-500/30">
                    <Target size={32} />
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 tracking-tight">2026 年度规划</h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {FUTURE_PLANS.map((plan, idx) => {
                       const Icon = plan.icon;
                       return (
                          <div key={idx} className="relative group bg-white rounded-[2rem] p-10 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 text-left overflow-hidden">
                             {/* Decorative Background Blob */}
                             <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full transition-transform group-hover:scale-150 ${plan.color.replace('text-', 'bg-')}`}></div>

                             <div className={`inline-flex p-3 rounded-xl mb-6 bg-slate-50 ${plan.color}`}>
                                <Icon size={32} />
                             </div>
                             
                             <h3 className="text-3xl font-bold text-slate-800 mb-6">{plan.category}</h3>
                             
                             <div className="space-y-5">
                                {plan.goals.map((goal, i) => (
                                   <div key={i} className="flex items-start gap-4">
                                      <div className={`mt-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 ${plan.color.replace('text-', 'bg-')} opacity-80`}>
                                        {i + 1}
                                      </div>
                                      <p className="text-lg text-slate-600 font-medium leading-snug">{goal}</p>
                                   </div>
                                ))}
                             </div>

                             <div className={`absolute bottom-0 left-0 w-full h-1 ${plan.color.replace('text-', 'bg-')} opacity-20`}></div>
                          </div>
                       );
                    })}
                </div>
             </div>
          </section>

          {/* Ending Slide - Centered Card */}
          <section data-transition="zoom">
            <div className="flex items-center justify-center h-full w-full">
              <div className="relative bg-white/40 backdrop-blur-md rounded-[3rem] p-20 border border-white/50 shadow-2xl flex flex-col items-center max-w-4xl w-full text-center">
                  <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                      <Sparkles size={120} />
                  </div>
                  
                  <h2 className="text-7xl font-black text-slate-900 mb-8 tracking-tight">Thank You</h2>
                  <p className="text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                    "持续追求技术卓越，赋能业务增长"
                    <br/>
                    <span className="text-slate-400 text-xl mt-4 block font-normal">Expecting new challenges in 2026.</span>
                  </p>
                  
                  <div className="flex items-center gap-3 px-8 py-3 bg-white rounded-full text-slate-500 font-mono text-sm shadow-sm border border-slate-100">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>© 2026 {PERSONAL_INFO.name}</span>
                  </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Global Lightbox Overlay */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-8 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            className="absolute top-8 right-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
            onClick={() => setPreviewImage(null)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={previewImage} 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-zoom-in select-none"
            onClick={(e) => e.stopPropagation()}
            alt="Full screen preview"
          />
          
          <div className="absolute bottom-8 text-white/50 text-sm font-mono tracking-widest pointer-events-none">
            PRESS ESC TO CLOSE
          </div>
        </div>
      )}
    </>
  );
}

export default App;