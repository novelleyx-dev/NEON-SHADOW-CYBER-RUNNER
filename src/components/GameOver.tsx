import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const GameOver: React.FC = () => {
  const { resetGame, score } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 z-50 backdrop-blur-md"
    >
      <motion.h2 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-6xl font-cyber text-neon-red text-shadow-neon-pink mb-4"
      >
        CRITICAL FAILURE
      </motion.h2>
      
      <p className="text-xl text-white mb-8">FINAL SCORE: {score}</p>
      
      <button
        onClick={resetGame}
        className="px-8 py-4 bg-neon-red/20 border-2 border-neon-red text-white hover:bg-neon-red/40 transition-colors tracking-widest"
      >
        RESTART SEQUENCE
      </button>
    </motion.div>
  );
};

export default GameOver;
