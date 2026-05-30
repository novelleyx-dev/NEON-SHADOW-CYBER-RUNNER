import PhaserGame from './game/PhaserGame';
import UIOverlay from './components/UIOverlay';

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark-bg text-white">
      <PhaserGame />
      <UIOverlay />
      
      {/* Scanline overlay for retro-cyber feel */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
    </div>
  );
}

export default App;
