import { useState } from 'react';

export const RsLogo = ({ showLogo }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="w-full h-[300px] md:h-[400px] relative flex justify-center items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Logo Light Theme - Circular */}
      <div
        className={`
          bg-contain bg-no-repeat bg-center absolute transition-all duration-500 ease-in-out
          ${showLogo 
            ? "w-[280px] h-[280px] md:w-[380px] md:h-[380px] animate-heartbeat rounded-full" 
            : "w-[140px] h-[140px] rounded-full"
          }
          dark:hidden
          ${isHovering ? 'brightness-110 shadow-[0_0_40px_rgba(59,130,246,0.6)]' : 'brightness-100 shadow-lg'}
          transition-all duration-300
          overflow-hidden
          border-4 border-white/20 dark:border-gray-800/20
        `}
        style={{
          backgroundImage: `url(/logo-RS-Light-theme.png)`,
        }}
      ></div>

      {/* Logo Dark Theme - Circular */}
      <div
        className={`
          bg-contain bg-no-repeat bg-center absolute transition-all duration-500 ease-in-out
          ${showLogo 
            ? "w-[280px] h-[280px] md:w-[380px] md:h-[380px] animate-heartbeat rounded-full" 
            : "w-[140px] h-[140px] rounded-full"
          }
          hidden dark:block
          ${isHovering ? 'brightness-110 shadow-[0_0_40px_rgba(34,211,238,0.6)]' : 'brightness-100 shadow-lg'}
          transition-all duration-300
          overflow-hidden
          border-4 border-gray-800/30 dark:border-white/10
        `}
        style={{
          backgroundImage: `url(/logo-RS-Dark-theme.png)`,
        }}
      ></div>

      {/* Anillo de luz alrededor (solo cuando showLogo es true) */}
      {showLogo && (
        <div className={`
          absolute rounded-full border-[3px]
          ${showLogo ? "w-[300px] h-[300px] md:w-[400px] md:h-[400px]" : "w-[150px] h-[150px]"}
          ${isHovering 
            ? 'border-cyan-400/40 dark:border-cyan-300/30 opacity-100 scale-105' 
            : 'border-cyan-300/20 dark:border-cyan-200/10 opacity-50 scale-100'
          }
          transition-all duration-500
          pointer-events-none
          animate-pulse
        `}></div>
      )}
    </div>
  );
};