import React from 'react';

interface FlowerPetalsProps {
  isActive: boolean;
}

const FlowerPetals: React.FC<FlowerPetalsProps> = ({ isActive }) => {
  if (!isActive) return null;

  const flowers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 0.5 + Math.random() * 0.5,
    color: i % 4, // 4 different flower colors
  }));

  const getFlowerColor = (colorIndex: number) => {
    const colors = [
      'from-pink-400 to-pink-600', // Pink flowers
      'from-yellow-400 to-orange-500', // Marigold flowers
      'from-red-400 to-red-600', // Red flowers
      'from-purple-400 to-purple-600', // Purple flowers
    ];
    return colors[colorIndex];
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-fall"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            transform: `rotate(${flower.rotation}deg) scale(${flower.size})`,
          }}
        >
          {/* Small flower with petals */}
          <div className="relative w-6 h-6">
            {/* Flower center */}
            <div className="absolute inset-0 w-2 h-2 bg-yellow-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            {/* Flower petals */}
            {Array.from({ length: 5 }).map((_, petalIndex) => (
              <div
                key={petalIndex}
                className={`absolute w-3 h-2 bg-gradient-to-br ${getFlowerColor(flower.color)} rounded-full opacity-80 shadow-sm`}
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center',
                  transform: `translate(-50%, -50%) rotate(${petalIndex * 72}deg) translateY(-6px)`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowerPetals;