import React from 'react';
import { ModuleData } from '../types';
import { CheckCircle2, Zap, Layers } from 'lucide-react';

interface ModuleCardProps {
  data: ModuleData;
  onImageClick?: (src: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ data, onImageClick }) => {
  const Icon = data.icon;
  const hasImages = data.images && data.images.length > 0;
  const images = data.images || [];

  // Helper to handle click
  const handleImageClick = (src: string) => {
    if (onImageClick) {
      onImageClick(src);
    }
  };

    // Render content logic based on whether images exist
    const renderContent = () => {
      if (hasImages) {
        return (
          <div className="flex flex-col gap-6 h-full">
            {/* Top Row (Text): Side-by-side */}
            <div className="grid grid-cols-2 gap-6 shrink-0">
               {/* Core Functions */}
              <div className="bg-white/60 rounded-3xl p-5 border border-slate-100 shadow-sm backdrop-blur-sm">
                <h4 className="flex items-center gap-2.5 text-base font-bold text-emerald-700 uppercase tracking-wider mb-3">
                  <div className="p-1.5 bg-emerald-100 rounded-lg">
                    <CheckCircle2 size={16} />
                  </div>
                  {data.coreFunctions.title}
                </h4>
                <ul className="space-y-2">
                  {data.coreFunctions.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[15px] text-slate-700 leading-tight">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="bg-orange-50/60 rounded-3xl p-5 border border-orange-100/50 backdrop-blur-sm">
                <h4 className="flex items-center gap-2.5 text-base font-bold text-orange-700 uppercase tracking-wider mb-3">
                  <div className="p-1.5 bg-orange-100 rounded-lg">
                    <Zap size={16} />
                  </div>
                  {data.challenges.title}
                </h4>
                <ul className="space-y-2">
                  {data.challenges.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 font-medium leading-tight text-[15px]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 shadow-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row (Images): Flexible height */}
            <div className="flex-1 min-h-0">
               <div className="h-full w-full">
                  
                  {/* Logic for 1 Image: Full Span */}
                  {images.length === 1 && (
                      <div 
                          className="h-full w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 relative group cursor-zoom-in"
                          onClick={() => handleImageClick(images[0])}
                      >
                          <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 border-b border-slate-200 z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                               <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                               <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                          </div>
                          <img src={images[0]} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" alt="Feature Main" />
                      </div>
                  )}

                  {/* Logic for 2 Images: Aesthetic Overlapping Stack (Restored for Contracts style) */}
                   {images.length === 2 && (
                      <div className="relative h-full w-full">
                          {/* Background Decor Element */}
                          <div className="absolute inset-x-12 top-1/2 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

                          {/* Image 1: Left-ish */}
                          <div 
                              className="absolute top-0 left-0 w-[60%] h-[85%] rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-4 border-white bg-white z-10 transition-all duration-500 hover:z-30 hover:scale-[1.02] hover:shadow-2xl cursor-zoom-in group"
                              onClick={() => handleImageClick(images[0])}
                          >
                               <div className="h-7 bg-slate-50 flex items-center px-3 gap-1.5 border-b border-slate-100">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                  <div className="ml-2 px-2 py-0.5 bg-white rounded text-[8px] text-slate-400 font-medium border border-slate-100 w-32 truncate">
                                    {data.title} / 视图 A
                                  </div>
                              </div>
                              <img src={images[0]} className="w-full h-full object-cover object-top" alt="Feature 1" />
                          </div>

                          {/* Image 2: Right-ish (Overlapping) */}
                          <div 
                              className="absolute bottom-0 right-0 w-[60%] h-[85%] rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-4 border-white bg-white z-20 transition-all duration-500 hover:z-30 hover:scale-[1.02] hover:shadow-2xl cursor-zoom-in group"
                              onClick={() => handleImageClick(images[1])}
                          >
                               <div className="h-7 bg-slate-50 flex items-center px-3 gap-1.5 border-b border-slate-100">
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                  <div className="ml-2 px-2 py-0.5 bg-white rounded text-[8px] text-slate-400 font-medium border border-slate-100 w-32 truncate">
                                    {data.title} / 视图 B
                                  </div>
                              </div>
                              <img src={images[1]} className="w-full h-full object-cover object-top" alt="Feature 2" />
                          </div>
                      </div>
                  )}

                  {/* Logic for 3 Images: Horizontal Overlapping Row (Mimicking stacked style) */}
                  {images.length === 3 && (
                      <div className="relative h-full w-full flex items-center justify-center">
                          {/* Image 1: Left */}
                          <div 
                              className="absolute left-0 top-4 bottom-4 w-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 z-10 transition-all duration-500 hover:z-40 hover:scale-105 cursor-zoom-in group"
                              onClick={() => handleImageClick(images[0])}
                          >
                              <div className="absolute top-0 left-0 w-full h-6 bg-slate-100/90 backdrop-blur-sm border-b border-slate-200 z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                              </div>
                              <img src={images[0]} className="w-full h-full object-cover object-top" alt="Feature 1" />
                          </div>

                          {/* Image 2: Center (Front) */}
                          <div 
                              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[48%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white z-30 transition-all duration-500 hover:scale-105 cursor-zoom-in group"
                              onClick={() => handleImageClick(images[1])}
                          >
                               <div className="absolute top-0 left-0 w-full h-6 bg-slate-100/90 backdrop-blur-sm border-b border-slate-200 z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                              </div>
                               <img src={images[1]} className="w-full h-full object-cover object-top" alt="Feature 2" />
                          </div>

                           {/* Image 3: Right */}
                           <div 
                              className="absolute right-0 top-4 bottom-4 w-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 z-20 transition-all duration-500 hover:z-40 hover:scale-105 cursor-zoom-in group"
                              onClick={() => handleImageClick(images[2])}
                          >
                               <div className="absolute top-0 left-0 w-full h-6 bg-slate-100/90 backdrop-blur-sm border-b border-slate-200 z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                              </div>
                               <img src={images[2]} className="w-full h-full object-cover object-top" alt="Feature 3" />
                          </div>
                      </div>
                  )}

                  {/* Logic for 4+ Images: Horizontal Fan Stack (Mimicking stacked style) */}
                  {images.length >= 4 && (
                      <div className="relative h-full w-full flex items-center">
                          {images.slice(0, 4).map((img, idx) => {
                              // Calculate z-index and position for fan effect
                              const zIndex = 10 + idx * 10;
                              // Staggered layout: 0%, 22%, 44%, 66% (approx for 40% width)
                              const leftPos = `${idx * 20}%`; 
                              
                              return (
                                <div 
                                    key={idx} 
                                    className="absolute top-4 bottom-4 w-[40%] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 transition-all duration-500 hover:z-50 hover:scale-105 cursor-zoom-in group"
                                    style={{ left: leftPos, zIndex }}
                                    onClick={() => handleImageClick(img)}
                                >
                                    <div className="absolute top-0 left-0 w-full h-6 bg-slate-100/90 backdrop-blur-sm border-b border-slate-200 z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    </div>
                                    <img 
                                        src={img} 
                                        className="w-full h-full object-cover object-top" 
                                        alt={`Feature ${idx + 1}`} 
                                    />
                                </div>
                              );
                          })}
                      </div>
                  )}

               </div>
            </div>
          </div>
        );
      }
    
    // Default Layout (No Images)
    return (
      <div className="grid grid-cols-2 gap-12">
        {/* Left Column: Core Functions */}
        <div className="bg-white/50 rounded-3xl p-8 border border-slate-100 shadow-sm backdrop-blur-sm">
          <h4 className="flex items-center gap-3 text-lg font-bold text-emerald-700 uppercase tracking-wider mb-6">
            <div className="p-1.5 bg-emerald-100 rounded-lg">
              <CheckCircle2 size={20} />
            </div>
            {data.coreFunctions.title}
          </h4>
          <ul className="space-y-4">
            {data.coreFunctions.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg text-slate-700 leading-snug">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 shadow-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Challenges */}
        <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100/50 backdrop-blur-sm">
          <h4 className="flex items-center gap-3 text-lg font-bold text-orange-700 uppercase tracking-wider mb-6">
            <div className="p-1.5 bg-orange-100 rounded-lg">
              <Zap size={20} />
            </div>
            {data.challenges.title}
          </h4>
          <ul className="space-y-4">
            {data.challenges.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg text-slate-700 font-medium leading-snug">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 shadow-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full flex flex-col justify-center px-8 text-left">
      
      {/* Slide Header */}
      <div className="flex items-center gap-6 mb-8 border-b border-slate-200 pb-4 shrink-0">
        <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg shadow-blue-500/30">
          <Icon size={40} />
        </div>
        <div>
          <h3 className="text-4xl font-black text-slate-800 tracking-tight mb-1">{data.title}</h3>
          <div className="flex gap-2">
            <span className="h-1.5 w-12 bg-blue-500 rounded-full"></span>
            <span className="h-1.5 w-6 bg-indigo-300 rounded-full"></span>
          </div>
        </div>
        <div className="ml-auto opacity-10">
          <Layers size={80} />
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 min-h-0">
         {renderContent()}
      </div>

    </div>
  );
};

export default ModuleCard;