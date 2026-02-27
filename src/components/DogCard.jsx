export default function DogCard({ dog, index }) {
  return (
    <div 
      className="break-inside-avoid group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-900 hover:border-amber-500/30 transition-all duration-700 animate-card-entry"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name} 
          className="w-full h-auto block transition-transform duration-[1.5s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-105"
        />
      </div>
      
      {/* Information Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-[11px] font-black text-white uppercase tracking-wider">{dog.name}</h3>
          <span className="text-[8px] bg-amber-500 text-black px-1.5 py-0.5 rounded-xs font-bold uppercase animate-float-badge">
            {dog.age}
          </span>
        </div>
        <p className="text-[10px] text-zinc-400 italic">{dog.breed}</p>
      </div>

      {/* Static ID Badge */}
      <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-md rounded-sm text-[7px] font-bold text-zinc-400 uppercase tracking-tighter border border-white/5 group-hover:opacity-0 transition-opacity duration-300">
        ID-{dog.id.toString().padStart(3, '0')}
      </div>
      
      {/* Hover Pulse Effect */}
      <div className="absolute inset-0 pointer-events-none border-1 border-white/0 group-hover:border-white/10 transition-colors duration-700" />
    </div>
  );
}