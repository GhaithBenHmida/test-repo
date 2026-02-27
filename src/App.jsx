import Navbar from './components/Navbar';
import DogCard from './components/DogCard';
import { dogs } from './data/dogs';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-400 selection:bg-amber-500/30 overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12 text-center md:text-left">
          <div className="overflow-hidden">
            <h1 className="text-zinc-100 text-[10px] font-black uppercase tracking-[0.4em] mb-3 flex items-center justify-center md:justify-start gap-3 animate-card-entry">
              <span className="w-6 h-px bg-amber-500/40"></span>
              The Gallery
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight animate-card-entry" style={{ animationDelay: '100ms' }}>
            Discover Our Friends
          </h2>
          <p className="text-zinc-500 text-xs mt-2 max-w-sm leading-relaxed animate-card-entry" style={{ animationDelay: '200ms' }}>
            A compact curated collection of companion animals currently seeking new homes.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {dogs.map((dog, index) => (
            <DogCard key={dog.id} dog={dog} index={index} />
          ))}
        </div>

        <footer className="mt-24 py-10 border-t border-zinc-900/50 text-center animate-card-entry" style={{ animationDelay: '800ms' }}>
          <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 hover:text-zinc-500 transition-colors">
            &copy; Pawsome Studio MMXXV
          </p>
        </footer>
      </main>
    </div>
  );
}