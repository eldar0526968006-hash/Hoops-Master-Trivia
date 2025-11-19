import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-hoops-dark overflow-hidden">
      
      {/* Abstract Basketball Court SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="woodgrain" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
             {/* Subtle noise for wood texture */}
             <rect width="200" height="200" fill="#0f0f0f" />
             <path d="M0 20 L200 25 M0 50 L200 45 M0 100 L200 110" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          </pattern>
          
          <radialGradient id="spotlight" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="1" />
            <stop offset="100%" stopColor="#050505" stopOpacity="1" />
          </radialGradient>
        </defs>
        
        {/* Base Layer */}
        <rect width="100%" height="100%" fill="url(#spotlight)" />

        {/* Court Markings (Neon Orange/White Lines) */}
        <g stroke="rgba(255, 85, 0, 0.15)" strokeWidth="2" fill="none">
          {/* Center Court Logo Area */}
          <circle cx="50%" cy="50%" r="15%" strokeWidth="3" />
          <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="3" />

          {/* 3-Point Arcs (Abstracted for background) */}
          <path d="M10 100 Q 50 10 90 100" transform="translate(0, -20) scale(5)" opacity="0.3" />
          
          {/* Key Area (The Paint) */}
          <rect x="35%" y="80%" width="30%" height="20%" strokeDasharray="10 10" />
          <rect x="35%" y="0" width="30%" height="20%" strokeDasharray="10 10" />
          
          {/* Free Throw Circles */}
          <circle cx="50%" cy="20%" r="8%" />
          <circle cx="50%" cy="80%" r="8%" />
        </g>
      </svg>

      {/* Vignette & Grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMzMzIiAvPgo8L3N2Zz4=')] opacity-10 mix-blend-overlay" />
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-hoops-orange/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};