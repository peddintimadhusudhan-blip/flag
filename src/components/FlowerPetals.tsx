import React from 'react';

interface FlowerPetalsProps {
  isActive: boolean;
}

const FlowerPetals: React.FC<FlowerPetalsProps> = ({ isActive }) => {
  if (!isActive) return null;

  const flowers = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 3,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 0.7 + Math.random() * 0.6,
    type: Math.floor(Math.random() * 5), // 5 different flower types
    swayDuration: 2 + Math.random() * 2,
    swayDelay: Math.random() * 2,
  }));

  const renderFlower = (flower: any) => {
    const baseClasses = "absolute animate-fall animate-sway";
    const style = {
      left: `${flower.left}%`,
      animationDelay: `${flower.delay}s`,
      animationDuration: `${flower.duration}s`,
      transform: `scale(${flower.size})`,
      '--sway-duration': `${flower.swayDuration}s`,
      '--sway-delay': `${flower.swayDelay}s`,
    };

    const swayStyle = {
      animationDuration: `${flower.swayDuration}s`,
      animationDelay: `${flower.swayDelay}s`,
    };

    switch (flower.type) {
      case 0: // Rose
        return (
          <div key={flower.id} className={baseClasses} style={style}>
            <div className="relative w-6 h-6 animate-float" style={swayStyle}>
              {/* Rose petals */}
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-90 shadow-sm"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 shadow-sm"></div>
              <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-70 shadow-sm"></div>
              {/* Center */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full opacity-90 shadow-sm"></div>
            </div>
          </div>
        );
      
      case 1: // Marigold
        return (
          <div key={flower.id} className={baseClasses} style={style}>
            <div className="relative w-5 h-5 animate-float" style={swayStyle}>
              {/* Marigold petals */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full opacity-85 shadow-sm"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                    transformOrigin: '50% 100%',
                    top: '10px',
                    left: '8px',
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-orange-700 rounded-full shadow-sm"></div>
            </div>
          </div>
        );
      
      case 2: // Lotus
        return (
          <div key={flower.id} className={baseClasses} style={style}>
            <div className="relative w-6 h-6 animate-float" style={swayStyle}>
              {/* Lotus petals */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-4 bg-gradient-to-t from-pink-500 to-pink-200 rounded-full opacity-80 shadow-sm"
                  style={{
                    transform: `rotate(${i * 60}deg)`,
                    transformOrigin: '50% 90%',
                    top: '8px',
                    left: '6px',
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-2.5 left-2.5 w-1 h-1 bg-yellow-400 rounded-full shadow-sm"></div>
            </div>
          </div>
        );
      
      case 3: // Jasmine
        return (
          <div key={flower.id} className={baseClasses} style={style}>
            <div className="relative w-4 h-4 animate-float" style={swayStyle}>
              {/* Jasmine petals */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-br from-white to-yellow-50 rounded-full opacity-95 shadow-sm"
                  style={{
                    transform: `rotate(${i * 72}deg)`,
                    transformOrigin: '50% 100%',
                    top: '6px',
                    left: '6px',
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-yellow-300 rounded-full shadow-sm"></div>
            </div>
          </div>
        );
      
      case 4: // Sunflower (small)
        return (
          <div key={flower.id} className={baseClasses} style={style}>
            <div className="relative w-5 h-5 animate-float" style={swayStyle}>
              {/* Sunflower petals */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-3 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-full opacity-90 shadow-sm"
                  style={{
                    transform: `rotate(${i * 36}deg)`,
                    transformOrigin: '50% 100%',
                    top: '8px',
                    left: '8px',
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-sm"></div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {flowers.map(renderFlower)}
    </div>
  );
};

export default FlowerPetals;