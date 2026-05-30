import Phaser from 'phaser';
import { assetCache } from '../../utils/assetGenerator';
import { useGameStore } from '../../store/gameStore';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene');
  }

  preload() {
    // Load generated assets from DataURLs
    for (const [key, dataUrl] of Object.entries(assetCache)) {
      this.textures.addBase64(key, dataUrl);
    }
  }

  create() {
    // Assets are loaded, transition to MainScene
    this.scene.start('MainScene');
    
    // Notify React UI that game is ready
    useGameStore.getState().setGameState('menu');
  }
}
