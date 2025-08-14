import React from 'react';

interface FlowerPetalsProps {
  isActive: boolean;
}

const FlowerPetals: React.FC<FlowerPetalsProps> = ({ isActive }) => {
  if (!isActive) return null;

  const petals = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg) scale(${petal.size})`,
          }}
        >
          {/* Rose petals */}
          <div className="w-4 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 shadow-sm transform rotate-45"></div>
        </div>
      ))}
      
      {/* Marigold petals */}
      {petals.slice(0, 8).map((petal) => (
        <div
          key={`marigold-${petal.id}`}
          className="absolute animate-fall"
          style={{
            left: `${(petal.left + 20) % 100}%`,
            animationDelay: `${petal.delay + 0.5}s`,
            animationDuration: `${petal.duration + 1}s`,
            transform: `rotate(${petal.rotation + 45}deg) scale(${petal.size * 0.8})`,
          }}
        >
          <div className="w-3 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-75 shadow-sm"></div>
        </div>
      ))}
      
      {/* Jasmine petals */}
      {petals.slice(0, 6).map((petal) => (
        <div
          key={`jasmine-${petal.id}`}
          className="absolute animate-fall"
          style={{
            left: `${(petal.left + 40) % 100}%`,
            animationDelay: `${petal.delay + 1}s`,
            animationDuration: `${petal.duration + 0.5}s`,
            transform: `rotate(${petal.rotation + 90}deg) scale(${petal.size * 0.6})`,
          }}
        >
          <div className="w-2 h-4 bg-gradient-to-br from-white to-cream-200 rounded-full opacity-85 shadow-sm"></div>
        </div>
      ))}
      
      {/* Lotus petals */}
      {petals.slice(0, 5).map((petal) => (
        <div
          key={`lotus-${petal.id}`}
          className="absolute animate-fall"
          style={{
            left: `${(petal.left + 60) % 100}%`,
            animationDelay: `${petal.delay + 1.5}s`,
            animationDuration: `${petal.duration + 2}s`,
            transform: `rotate(${petal.rotation + 135}deg) scale(${petal.size * 1.2})`,
          }}
        >
          <div className="w-5 h-7 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full opacity-70 shadow-md"></div>
        </div>
      ))}
    </div>
  );
};

export default FlowerPetals;