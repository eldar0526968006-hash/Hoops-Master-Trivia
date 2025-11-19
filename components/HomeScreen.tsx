import React from 'react';
import { Trophy, Play, Star } from 'lucide-react';

interface HomeScreenProps {
  onStart: () => void;
  highScore: number;
}

// A highly detailed, filled basketball icon
const RealisticBasketball = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" fill="#FF5500" />
    <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" opacity="0.5" />
    
    <g stroke="#1a0a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {/* Horizontal Line */}
      <path d="M2 50H98" />
      {/* Vertical Line */}
      <path d="M50 2V98" />
      {/* Curves */}
      <path d="M20 20C35 35 65 35 80 20" />
      <path d="M20 80C35 65 65 65 80 80" />
      {/* Side arcs */}
      <path d="M95 35C85 35 75 42 75 50C75 58 85 65 95 65" />
      <path d="M5 35C15 35 25 42 25 50C25 58 15 65 5 65" />
    </g>

    <defs>
      <radialGradient id="ballGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 35) rotate(45) scale(80)">
        <stop stopColor="#FF9955" />
        <stop offset="1" stopColor="#CC4400" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStart, highScore }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 md:px-6 text-center relative z-10 overflow-y-auto">
      
      {/* Floating Hero Section */}
      <div className="animate-float flex flex-col items-center mt-8 md:mt-0">
        <div className="relative group mb-6 md:mb-8">
          {/* Glow behind ball */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 bg-hoops-orange/30 blur-2xl rounded-full group-hover:bg-hoops-orange/50 transition-all duration-700"></div>
          
          {/* The Ball */}
          <RealisticBasketball className="w-32 h-32 md:w-52 md:h-52 drop-shadow-2xl animate-[spin_20s_linear_infinite]" />
        </div>

        <h1 className="text-6xl md:text-9xl font-scoreboard font-bold text-white mb-2 tracking-wider uppercase italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none">
          Hoops<br/>
          <span className="text-hoops-orange">Master</span>
        </h1>
        
        <div className="flex items-center gap-3 text-gray-300 font-tech tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-base border-b border-hoops-orange/30 pb-4 mb-8 md:mb-12 mt-2">
          <Star size={10} className="text-hoops-orange md:w-3 md:h-3" />
          PREMIUM BASKETBALL TRIVIA
          <Star size={10} className="text-hoops-orange md:w-3 md:h-3" />
        </div>
      </div>

      {/* Stats & Actions Container */}
      <div className="w-full max-w-xs md:max-w-sm space-y-4 md:space-y-6 mb-8">
        
        {/* High Score Badge */}
        <div className="glass-panel rounded-2xl p-3 md:p-4 flex items-center justify-between transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-hoops-orange/20 rounded-lg">
              <Trophy size={20} className="text-hoops-orange md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">שיא אישי</span>
              <span className="text-[10px] md:text-xs text-gray-500 hidden md:inline">NBA & Israeli League</span>
            </div>
          </div>
          <span className="text-3xl md:text-4xl font-modern font-bold text-white">{highScore}</span>
        </div>

        {/* Play Button */}
        <button
          onClick={onStart}
          className="w-full group relative overflow-hidden bg-hoops-orange text-white font-bold py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:shadow-[0_0_50px_rgba(255,85,0,0.5)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
          <div className="flex items-center justify-center gap-3">
            <Play fill="currentColor" size={20} className="md:w-6 md:h-6" />
            <span className="text-xl md:text-2xl font-scoreboard tracking-widest pt-1">START GAME</span>
          </div>
        </button>

      </div>
      
      <div className="absolute bottom-2 md:bottom-6 text-gray-600 text-[8px] md:text-[10px] font-mono tracking-widest opacity-50">
        EST. 2025 • DESIGNED FOR CHAMPIONS
      </div>
    </div>
  );
};