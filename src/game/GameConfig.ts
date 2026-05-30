import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import MainScene from './scenes/MainScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#050608',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000, x: 0 },
      debug: false,
    },
  },
  scene: [BootScene, PreloaderScene, MainScene],
  pixelArt: true,
  fps: {
    target: 60,
    forceSetTimeOut: true
  }
};
