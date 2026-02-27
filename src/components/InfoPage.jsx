export default function InfoPage() {
  return (
    <div className="animate-card-entry">
      <div className="mb-12">
        <h1 className="text-zinc-100 text-[10px] font-black uppercase tracking-[0.4em] mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-amber-500/40"></span>
          About the Studio
        </h1>
        <h2 className="text-2xl font-bold text-white tracking-tight">Pawsome Ethics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-xs text-zinc-400 leading-relaxed">
            We are a boutique companion animal agency focused on high-quality rehoming. Our mission is to bridge the gap between soulful animals and loving environments through a curated, stress-free experience.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-900">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-2">Our Process</h4>
              <p className="text-[10px] text-zinc-500">Every dog is vetted for temperament and health before joining our gallery. We prioritize matching over speed.</p>
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-900">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-2">Support</h4>
              <p className="text-[10px] text-zinc-500">Lifetime post-adoption support and training resources are provided for every successful placement.</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/30 p-8 rounded-xl border border-dashed border-zinc-800 flex flex-col justify-center">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Connect With Us</h3>
          <ul className="space-y-4">
            {['Instagram', 'Twitter', 'Email'].map((social) => (
              <li key={social} className="flex items-center justify-between group cursor-pointer border-b border-zinc-900 pb-2">
                <span className="text-[10px] text-zinc-500 group-hover:text-amber-500 transition-colors">{social}</span>
                <span className="text-[10px] text-zinc-800">→</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-zinc-900">
            <p className="text-[8px] text-zinc-600 uppercase tracking-tighter">
              Location: District 09, Neo-Seoul<br/>
              Hours: 10:00 — 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}