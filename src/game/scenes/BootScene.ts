import Phaser from 'phaser';
import { generateAssets } from '../../utils/assetGenerator';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  async create() {
    // Generate assets using Canvas before loading them
    await generateAssets();
    
    this.scene.start('PreloaderScene');
  }
}
