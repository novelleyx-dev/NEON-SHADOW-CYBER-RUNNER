import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const MainMenu: React.FC = () => {
  const { setGameState } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-dark-bg/90 z-50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-dark-bg/80 to-dark-bg" />
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-shadow-neon-blue mb-4">
          NEON SHADOW
        </h1>
        <h2 className="text-2xl md:text-4xl font-sans text-white tracking-[0.5em] mb-12 text-shadow-neon-pink">
          CYBER RUNNER
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-6 relative z-10"
      >
        <button
          onClick={() => setGameState('playing')}
          className="group relative px-8 py-4 bg-transparent border-2 border-neon-blue text-white font-bold text-xl uppercase tracking-widest overflow-hidden transition-all hover:shadow-neon-blue"
        >
          <div className="absolute inset-0 bg-neon-blue w-0 transition-all duration-300 ease-out group-hover:w-full opacity-20" />
          <span className="relative text-shadow-neon-blue">START PROTOCOL</span>
        </button>

        <button className="px-8 py-4 border border-dark-panel text-gray-400 font-bold tracking-widest hover:text-white hover:border-gray-500 transition-colors">
          SETTINGS
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MainMenu;
