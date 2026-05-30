import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import MainMenu from './MainMenu';
import HUD from './HUD';
import PauseMenu from './PauseMenu';
import GameOver from './GameOver';

const UIOverlay: React.FC = () => {
  const { gameState, setGameState } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (gameState === 'playing') setGameState('paused');
        else if (gameState === 'paused') setGameState('playing');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, setGameState]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {gameState === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-bg text-white z-50">
            <h2 className="text-2xl font-cyber animate-pulse text-neon-blue">INITIALIZING NEON SHADOW...</h2>
          </div>
        )}
        
        {gameState === 'menu' && (
          <div className="pointer-events-auto">
            <MainMenu />
          </div>
        )}

        {(gameState === 'playing' || gameState === 'paused') && (
          <HUD />
        )}

        {gameState === 'paused' && (
          <div className="pointer-events-auto">
            <PauseMenu />
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="pointer-events-auto">
            <GameOver />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UIOverlay;
