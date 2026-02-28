import { lostDogs } from '../data/dogs';

export default function LostSection() {
  return (
    <div className="animate-card-entry">
      <div className="mb-10">
        <h1 className="text-red-500/80 text-[10px] font-black uppercase tracking-[0.4em] mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-red-500/40"></span>
          Emergency Alert
        </h1>
        <h2 className="text-2xl font-bold text-white tracking-tight">Lost Companions</h2>
        <p className="text-zinc-500 text-[10px] mt-2">Help us reunite these friends with their families. Contact us if spotted.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lostDogs.map((dog) => (
          <div key={dog.id} className="flex gap-4 p-3 bg-zinc-900/40 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors group">
            <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden bg-zinc-800">
              <img src={dog.image} alt={dog.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <h3 className="text-zinc-100 text-xs font-bold uppercase tracking-widest">{dog.name}</h3>
              </div>
              <p className="text-[10px] text-zinc-500 mb-0.5">Last Seen: <span className="text-zinc-300">{dog.lastSeen}</span></p>
              <p className="text-[9px] text-zinc-600 italic">Missing since {dog.date}</p>
              <button className="mt-3 text-[8px] font-bold uppercase tracking-tighter text-red-500/80 hover:text-red-400 transition-colors self-start">
                Report Sighting →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl border border-dashed border-zinc-800 text-center">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Found a pet?</p>
        <button className="mt-4 px-6 py-2 bg-zinc-100 text-black text-[9px] font-black uppercase rounded-full hover:bg-white transition-transform active:scale-95">
          Submit a Report
        </button>
      </div>
    </div>
  );
}