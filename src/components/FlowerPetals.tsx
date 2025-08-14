import React from 'react';

interface FlowerPetalsProps {
  isActive: boolean;
}

const FlowerPetals: React.FC<FlowerPetalsProps> = ({ isActive }) => {
  if (!isActive) return null;

  const petals = Array.from({ length: 20 }, (_, i) => ({
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
          {/* Rose petal */}
          <div className="w-4 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 shadow-sm transform rotate-45"></div>
        </div>
      ))}
      
      {/* Marigold petals */}
      {petals.slice(0, 10).map((petal) => (
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
          {/* Marigold petal */}
          <div className="w-3 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-75 shadow-sm"></div>
        </div>
      ))}
    </div>
  );
};

export default FlowerPetals;