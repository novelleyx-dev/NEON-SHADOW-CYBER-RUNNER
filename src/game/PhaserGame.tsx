import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { config } from './GameConfig';

const PhaserGame: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="phaser-container" className="absolute inset-0 z-0" />;
};

export default PhaserGame;
