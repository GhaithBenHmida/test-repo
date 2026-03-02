export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white border-b border-zinc-100 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">🐾</div>
        <span className="font-bold text-zinc-800 tracking-tight text-lg">Pawsome</span>
      </div>
      <div className="flex gap-6 text-sm font-medium text-zinc-500">
        <a href="#" className="hover:text-amber-600 transition-colors">Breeds</a>
        <a href="#" className="hover:text-amber-600 transition-colors">Adopt</a>
        <a href="#" className="hover:text-amber-600 transition-colors">About</a>
      </div>
    </nav>
  );
}