export default function DogCard({ dog }) {
  return (
    <div className="break-inside-avoid group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-500">
      <img 
        src={dog.image} 
        alt={dog.name} 
        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Information Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-[11px] font-black text-white uppercase tracking-wider">{dog.name}</h3>
          <span className="text-[8px] bg-amber-500 text-black px-1.5 py-0.5 rounded-xs font-bold uppercase">
            {dog.age}
          </span>
        </div>
        <p className="text-[10px] text-zinc-400 italic">{dog.breed}</p>
      </div>

      {/* Static ID Badge */}
      <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/40 backdrop-blur-md rounded-sm text-[7px] font-bold text-zinc-500 uppercase tracking-tighter border border-white/5 group-hover:hidden">
        ID-{dog.id.toString().padStart(3, '0')}
      </div>
    </div>
  );
}