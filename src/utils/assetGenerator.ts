/**
 * Utility to generate procedural placeholder assets for the game using Canvas.
 * This ensures we have royalty-free assets without needing external files initially.
 */

export const generateAssets = async (): Promise<void> => {
  return new Promise((resolve) => {
    // Player Sprite (Cyber Ninja)
    createPlayerSprite();
    
    // Enemy Sprite (Drone)
    createEnemySprite();

    // Tiles
    createPlatformTile();
    createBackgroundTile();
    
    // Projectiles
    createProjectile();
    
    // Particle
    createParticle();

    resolve();
  });
};

function createPlayerSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 48;
  const ctx = canvas.getContext('2d')!;
  
  // Body
  ctx.fillStyle = '#090a0f';
  ctx.fillRect(4, 8, 24, 32);
  
  // Cyber highlights
  ctx.fillStyle = '#00f3ff';
  ctx.fillRect(8, 12, 16, 4); // Visor
  ctx.fillRect(4, 20, 4, 12); // Arm highlight
  ctx.fillRect(24, 20, 4, 12); // Arm highlight
  
  saveCanvasToImage(canvas, 'player');
}

function createEnemySprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  
  // Drone Body
  ctx.fillStyle = '#222';
  ctx.beginPath();
  ctx.arc(16, 16, 12, 0, Math.PI * 2);
  ctx.fill();
  
  // Red Eye
  ctx.fillStyle = '#ff003c';
  ctx.beginPath();
  ctx.arc(16, 16, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#ff003c';
  
  saveCanvasToImage(canvas, 'enemy_drone');
}

function createPlatformTile() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  
  ctx.fillStyle = '#11131a';
  ctx.fillRect(0, 0, 32, 32);
  
  // Neon Top Edge
  ctx.fillStyle = '#b026ff';
  ctx.shadowBlur = 5;
  ctx.shadowColor = '#b026ff';
  ctx.fillRect(0, 0, 32, 4);
  
  saveCanvasToImage(canvas, 'platform');
}

function createBackgroundTile() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  
  // Deep dark bg
  ctx.fillStyle = '#050608';
  ctx.fillRect(0, 0, 256, 256);
  
  // Grid lines
  ctx.strokeStyle = '#00f3ff22';
  ctx.lineWidth = 1;
  for(let i=0; i<256; i+=32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 256);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(256, i);
    ctx.stroke();
  }
  
  saveCanvasToImage(canvas, 'bg_grid');
}

function createProjectile() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 4;
  const ctx = canvas.getContext('2d')!;
  
  ctx.fillStyle = '#39ff14';
  ctx.shadowBlur = 4;
  ctx.shadowColor = '#39ff14';
  ctx.fillRect(0, 0, 16, 4);
  
  saveCanvasToImage(canvas, 'projectile');
}

function createParticle() {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 4;
  const ctx = canvas.getContext('2d')!;
  
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 4, 4);
  
  saveCanvasToImage(canvas, 'particle');
}

// Global cache to hold generated assets
export const assetCache: Record<string, string> = {};

function saveCanvasToImage(canvas: HTMLCanvasElement, key: string) {
  assetCache[key] = canvas.toDataURL('image/png');
}
