import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const PauseMenu: React.FC = () => {
  const { setGameState } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-dark-bg/80 z-50 backdrop-blur-md"
    >
      <h2 className="text-4xl font-cyber text-white mb-8 tracking-widest text-shadow-neon-blue">
        SYSTEM PAUSED
      </h2>
      
      <div className="flex flex-col gap-4 w-64">
        <button
          onClick={() => setGameState('playing')}
          className="px-6 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors"
        >
          RESUME
        </button>
        <button
          onClick={() => setGameState('menu')}
          className="px-6 py-3 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
        >
          ABORT MISSION
        </button>
      </div>
    </motion.div>
  );
};

export default PauseMenu;
