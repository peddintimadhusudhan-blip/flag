import React from 'react';

interface FlagPoleProps {
  isHoisted: boolean;
}

const FlagPole: React.FC<FlagPoleProps> = ({ isHoisted }) => {
  return (
    <div className="flex flex-col items-center h-96 relative">
      {/* Pole */}
      <div className="w-3 bg-gradient-to-b from-gray-400 to-gray-700 h-80 relative shadow-xl rounded-sm">
        {/* Pulley at top */}
        <div className="absolute -top-3 -left-1.5 w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg border border-gray-500"></div>
        
        {/* Flag */}
        <div 
          className={`absolute right-0 top-6 flag-hoist transform ${
            isHoisted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-64 opacity-60 scale-90'
          }`}
        >
          <div className="relative">
            {/* Flag with animation */}
            <div className={`w-48 h-32 shadow-2xl transform-gpu border border-gray-300 ${isHoisted ? 'animate-wave' : ''}`}>
              {/* Saffron stripe */}
              <div className="h-1/3 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
              
              {/* White stripe with Ashoka Chakra */}
              <div className="h-1/3 bg-white relative flex items-center justify-center">
                {/* Ashoka Chakra */}
                <div className={`w-8 h-8 relative ${isHoisted ? 'animate-spin-slow' : ''}`}>
                  <div className="absolute inset-0 border-2 border-blue-900 rounded-full shadow-sm"></div>
                  {/* Chakra spokes */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-4 bg-blue-900 left-1/2 top-1/2 origin-bottom"
                      style={{
                        transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Green stripe */}
              <div className="h-1/3 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Flag rope */}
            <div className="absolute -left-3 top-0 w-0.5 h-32 bg-gray-500 shadow-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Base */}
      <div className="w-16 h-8 bg-gradient-to-b from-gray-500 to-gray-800 rounded-b-xl shadow-xl border border-gray-600"></div>
      
      {/* Ground */}
      <div className="w-32 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mt-3 shadow-inner border border-green-600"></div>
    </div>
  );
};

export default FlagPole;