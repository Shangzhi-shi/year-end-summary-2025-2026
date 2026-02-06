import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface GallerySlideProps {
  title: string;
  images: string[];
  type: 'mobile' | 'web';
  onImageClick?: (src: string) => void;
}

const GallerySlide: React.FC<GallerySlideProps> = ({ title, images, type, onImageClick }) => {
  const handleImageClick = (src: string) => {
    if (onImageClick) {
      onImageClick(src);
    }
  };

  if (type === 'mobile') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center px-4">
        <div className="flex items-center gap-4 mb-12 bg-white/50 px-8 py-4 rounded-full backdrop-blur-sm border border-slate-100 shadow-sm">
          <Smartphone className="text-blue-600" size={32} />
          <h3 className="text-4xl font-bold text-slate-800">{title}</h3>
        </div>
        
        <div className="flex justify-center items-center gap-12 w-full">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 transform transition-transform duration-500 hover:-translate-y-4 cursor-zoom-in"
              onClick={() => handleImageClick(img)}
            >
              {/* Phone Frame Details */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-2xl z-20 pointer-events-none"></div>
              <div className="absolute -right-[2px] top-24 w-[3px] h-12 bg-slate-700 rounded-r-md pointer-events-none"></div>
              <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-md pointer-events-none"></div>
              <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-md pointer-events-none"></div>
              
              <div className="h-full w-full bg-white rounded-[2.2rem] overflow-hidden relative z-10">
                <img 
                  src={img} 
                  alt={`Mobile Interface ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Web Layout
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8">
       <div className="flex items-center gap-4 mb-12 bg-white/50 px-8 py-4 rounded-full backdrop-blur-sm border border-slate-100 shadow-sm">
          <Monitor className="text-indigo-600" size={32} />
          <h3 className="text-4xl font-bold text-slate-800">{title}</h3>
        </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-7xl">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`
              relative bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden group cursor-zoom-in
              ${idx === 0 && images.length % 2 !== 0 ? 'col-span-2 aspect-[21/9]' : 'col-span-1 aspect-video'}
            `}
            onClick={() => handleImageClick(img)}
          >
            {/* Browser Header */}
            <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 flex-1 h-5 bg-white rounded-md border border-slate-200 shadow-sm"></div>
            </div>
            
            <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden">
               <img 
                src={img} 
                alt={`Web Interface ${idx + 1}`} 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlide;