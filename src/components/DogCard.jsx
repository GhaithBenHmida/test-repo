export default function DogCard({ dog }) {
  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="font-bold text-sm text-zinc-100">{dog.name}</h3>
          <span className="text-[9px] uppercase tracking-tighter font-bold bg-amber-950/30 text-amber-500 px-1.5 py-0.5 rounded border border-amber-900/50">
            {dog.age}
          </span>
        </div>
        <p className="text-[11px] text-zinc-500">{dog.breed}</p>
        <button className="mt-3 w-full py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold rounded-lg transition-colors border border-zinc-700/50">
          Details
        </button>
      </div>
    </div>
  );
}