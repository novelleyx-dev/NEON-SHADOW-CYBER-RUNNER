# NEON SHADOW: CYBER RUNNER

A AAA-quality 2D cyberpunk platformer game built with React, TypeScript, Phaser.js, TailwindCSS, and Zustand. The game runs completely in the browser without any backend requirements.

## 🚀 Tech Stack

* **React + TypeScript**: UI and Application shell
* **Phaser 3**: Core game engine and physics
* **TailwindCSS v4**: Next-gen styling for the UI
* **Framer Motion**: Smooth menu animations
* **Zustand**: Cross-bridge state management (React <-> Phaser)
* **Vite**: Lightning fast build tooling

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

## 🌍 Deployment

This project is configured to deploy instantly to Vercel and GitHub Pages.

### Vercel (Recommended)
1. Import the repository into Vercel.
2. Vercel will automatically detect Vite and use `vercel.json` config.
3. Deploy!

### GitHub Pages
1. Make sure your GitHub repository is public.
2. Update the `base` in `vite.config.ts` if deploying to a subpath (e.g. `base: '/repo-name/'`).
3. Run `npm run deploy`
4. This will build the project and push the `dist` folder to the `gh-pages` branch.

## 🎮 Features
* Procedural asset generation for standalone playability
* Cyberpunk aesthetics with dark modes and neon highlights
* Fluid movement mechanics (Dash, Double Jump)
* React-powered HUD and Menu system seamlessly interacting with Phaser
