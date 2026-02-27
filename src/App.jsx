import Navbar from './components/Navbar';
import DogCard from './components/DogCard';
import { dogs } from './data/dogs';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-2xl font-black text-zinc-100 mb-1">Our Furry Friends</h1>
          <p className="text-zinc-400 text-sm max-w-sm">Discover your next companion in our curated collection.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dogs.map(dog => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>

        <footer className="mt-16 py-6 border-t border-zinc-900 text-center text-zinc-600 text-[11px] uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Pawsome Inc. Dark & Compact.
        </footer>
      </main>
    </div>
  );
}