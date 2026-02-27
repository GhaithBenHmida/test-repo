export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3 px-6 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-amber-600 rounded flex items-center justify-center text-[12px]">🐾</div>
        <span className="font-black text-zinc-100 tracking-tighter text-base">Pawsome</span>
      </div>
      <div className="flex gap-4 text-[11px] uppercase tracking-widest font-bold text-zinc-500">
        <a href="#" className="hover:text-amber-500 transition-colors">Breeds</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Adopt</a>
        <a href="#" className="hover:text-amber-500 transition-colors">About</a>
      </div>
    </nav>
  );
}