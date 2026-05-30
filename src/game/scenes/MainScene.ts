import Phaser from 'phaser';
import Player from '../entities/Player';
import { useGameStore } from '../../store/gameStore';

export default class MainScene extends Phaser.Scene {
  private player!: Player;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;

  constructor() {
    super('MainScene');
  }

  create() {
    const { width, height } = this.scale;

    // Background
    const bg = this.add.tileSprite(0, 0, width * 2, height * 2, 'bg_grid');
    bg.setOrigin(0, 0);
    bg.setScrollFactor(0.2);

    // Platforms
    this.platforms = this.physics.add.staticGroup();
    
    // Floor
    for (let i = 0; i < 20; i++) {
      this.platforms.create(i * 32 + 16, height - 16, 'platform');
    }
    
    // Some floating platforms
    this.platforms.create(400, height - 100, 'platform');
    this.platforms.create(432, height - 100, 'platform');
    this.platforms.create(464, height - 100, 'platform');
    
    this.platforms.create(600, height - 200, 'platform');
    this.platforms.create(632, height - 200, 'platform');
    this.platforms.create(664, height - 200, 'platform');

    // Player
    this.player = new Player(this, 100, height - 100);
    this.physics.add.collider(this.player, this.platforms);

    // Input
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Camera
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.cameras.main.setBounds(0, 0, width * 2, height);
    this.physics.world.setBounds(0, 0, width * 2, height);

    // Add stamina regeneration timer
    this.time.addEvent({
      delay: 100,
      callback: () => {
        const { stamina, maxStamina, setStamina } = useGameStore.getState();
        if (stamina < maxStamina) {
          setStamina(stamina + 2);
        }
      },
      loop: true
    });
  }

  update() {
    const state = useGameStore.getState().gameState;
    
    if (state !== 'playing') {
      this.physics.pause();
      return;
    } else {
      this.physics.resume();
    }

    this.player.update(this.cursors);
    
    // Check death bounds
    if (this.player.y > this.scale.height) {
      useGameStore.getState().takeDamage(100);
    }
  }
}
