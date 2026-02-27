export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-black/40 backdrop-blur-xl border-b border-zinc-900/50 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center text-[10px] text-black shadow-[0_0_15px_rgba(245,158,11,0.2)]">🐾</div>
        <span className="font-black text-white tracking-tighter text-sm uppercase">Pawsome</span>
      </div>
      <div className="hidden sm:flex gap-8 text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-600">
        <a href="#" className="hover:text-amber-500 transition-colors">Breeds</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Adopt</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Info</a>
      </div>
      <button className="bg-white/5 hover:bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 transition-all">
        Sign In
      </button>
    </nav>
  );
}