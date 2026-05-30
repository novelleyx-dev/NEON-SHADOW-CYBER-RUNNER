import Phaser from 'phaser';
import { useGameStore } from '../../store/gameStore';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private dashCooldown: number = 0;
  private isDashing: boolean = false;
  private jumps: number = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.setCollideWorldBounds(true);
    // Cast body to Arcade.Body
    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setGravityY(1000);
    body.setDragX(1000);
    body.setMaxVelocity(300, 800);
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    const body = this.body as Phaser.Physics.Arcade.Body;
    const { setStamina, stamina } = useGameStore.getState();

    // Dash logic
    if (this.dashCooldown > 0) this.dashCooldown--;
    
    if (cursors.shift.isDown && this.dashCooldown === 0 && stamina >= 20) {
      this.isDashing = true;
      this.dashCooldown = 60;
      setStamina(stamina - 20);
      
      const dashDir = this.flipX ? -1 : 1;
      body.setVelocityX(dashDir * 800);
      body.setAllowGravity(false);
      body.setVelocityY(0);
      
      this.scene.time.delayedCall(150, () => {
        this.isDashing = false;
        body.setAllowGravity(true);
      });
      return; // Skip normal movement while dashing
    }

    if (this.isDashing) return;

    // Movement
    if (cursors.left.isDown) {
      body.setAccelerationX(-2000);
      this.setFlipX(true);
    } else if (cursors.right.isDown) {
      body.setAccelerationX(2000);
      this.setFlipX(false);
    } else {
      body.setAccelerationX(0);
    }

    // Jump / Double Jump
    const onGround = body.onFloor() || body.touching.down;
    
    if (onGround) {
      this.jumps = 0;
    }

    if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
      if (onGround) {
        body.setVelocityY(-600);
        this.jumps = 1;
      } else if (this.jumps === 1) {
        body.setVelocityY(-500);
        this.jumps = 2;
        // Create double jump effect
        this.createJumpDust();
      }
    }
  }

  private createJumpDust() {
    const particles = this.scene.add.particles(0, 0, 'particle', {
      x: this.x,
      y: this.y + 20,
      speed: { min: -100, max: 100 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      lifespan: 300,
      blendMode: 'ADD'
    });
    
    particles.explode(10);
  }
}
