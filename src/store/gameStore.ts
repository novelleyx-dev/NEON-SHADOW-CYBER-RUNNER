import { create } from 'zustand';

export type GameState = 'menu' | 'playing' | 'paused' | 'gameover' | 'loading';

interface GameStore {
  gameState: GameState;
  health: number;
  maxHealth: number;
  stamina: number;
  maxStamina: number;
  score: number;
  level: number;
  
  setGameState: (state: GameState) => void;
  setHealth: (health: number) => void;
  takeDamage: (amount: number) => void;
  heal: (amount: number) => void;
  setStamina: (stamina: number) => void;
  addScore: (points: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: 'loading', // Start in loading state until assets are generated/loaded
  health: 100,
  maxHealth: 100,
  stamina: 100,
  maxStamina: 100,
  score: 0,
  level: 1,

  setGameState: (state) => set({ gameState: state }),
  
  setHealth: (health) => set((state) => ({ 
    health: Math.max(0, Math.min(health, state.maxHealth)) 
  })),
  
  takeDamage: (amount) => set((state) => {
    const newHealth = Math.max(0, state.health - amount);
    if (newHealth === 0 && state.gameState === 'playing') {
      return { health: 0, gameState: 'gameover' };
    }
    return { health: newHealth };
  }),
  
  heal: (amount) => set((state) => ({
    health: Math.min(state.maxHealth, state.health + amount)
  })),
  
  setStamina: (stamina) => set((state) => ({
    stamina: Math.max(0, Math.min(stamina, state.maxStamina))
  })),
  
  addScore: (points) => set((state) => ({ score: state.score + points })),
  
  resetGame: () => set({
    gameState: 'playing',
    health: 100,
    stamina: 100,
    score: 0,
    level: 1
  }),
}));
