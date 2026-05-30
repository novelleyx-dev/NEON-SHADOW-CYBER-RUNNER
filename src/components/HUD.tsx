import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Heart, Zap } from 'lucide-react';

const HUD: React.FC = () => {
  const { health, maxHealth, stamina, maxStamina, score, level } = useGameStore();

  const healthPercent = (health / maxHealth) * 100;
  const staminaPercent = (stamina / maxStamina) * 100;

  return (
    <div className="absolute inset-0 pointer-events-none p-6 z-40 flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex justify-between items-start">
        {/* Status Bars */}
        <div className="flex flex-col gap-4 w-64">
          {/* Health */}
          <div className="flex items-center gap-3">
            <Heart className="text-neon-pink" size={24} />
            <div className="flex-1 bg-dark-panel/80 h-4 border border-neon-pink/30 rounded overflow-hidden">
              <div 
                className="h-full bg-neon-pink shadow-neon-pink transition-all duration-300 ease-out"
                style={{ width: `${healthPercent}%` }}
              />
            </div>
          </div>

          {/* Stamina */}
          <div className="flex items-center gap-3">
            <Zap className="text-neon-blue" size={24} />
            <div className="flex-1 bg-dark-panel/80 h-3 border border-neon-blue/30 rounded overflow-hidden">
              <div 
                className="h-full bg-neon-blue shadow-neon-blue transition-all duration-100 ease-out"
                style={{ width: `${staminaPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Score & Level */}
        <div className="text-right">
          <div className="font-cyber text-2xl text-neon-blue text-shadow-neon-blue">
            LEVEL {level}
          </div>
          <div className="font-sans text-xl text-white mt-1">
            SCORE: {score.toString().padStart(6, '0')}
          </div>
        </div>
      </div>

      {/* Controls Hint */}
      <div className="text-center pb-4 opacity-50">
        <p className="font-sans text-sm tracking-widest">
          ARROWS: Move | UP: Jump/Double Jump | SHIFT: Dash
        </p>
      </div>
    </div>
  );
};

export default HUD;
