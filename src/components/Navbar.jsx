import '../App.css';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-black/40 backdrop-blur-xl border-b border-zinc-900/50 sticky top-0 z-50">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center text-[10px] text-black shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <span className="animate-paw-wag">🐾</span>
        </div>
        <span className="font-black text-white tracking-tighter text-sm uppercase group-hover:text-amber-500 transition-colors">Pawsome</span>
      </div>
      <div className="hidden sm:flex gap-8 text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-600">
        {['Breeds', 'Adopt', 'Info'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="hover:text-amber-500 transition-all duration-300 hover:tracking-[0.4em]"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 transition-all active:scale-95">
        Sign In
      </button>
    </nav>
  );
}