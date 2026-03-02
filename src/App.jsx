import Navbar from './components/Navbar';
import DogCard from './components/DogCard';
import { dogs } from './data/dogs';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-black text-zinc-900 mb-2">Our Furry Friends</h1>
          <p className="text-zinc-500 max-w-md">Find your perfect companion among our curated list of healthy and happy dogs.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dogs.map(dog => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>

        <footer className="mt-20 py-8 border-t border-zinc-200 text-center text-zinc-400 text-sm">
          &copy; {new Date().getFullYear()} Pawsome Inc. Minimal & Compact Design.
        </footer>
      </main>
    </div>
  );
}