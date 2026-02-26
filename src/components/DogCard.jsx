export default function DogCard({ dog }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-zinc-800">{dog.name}</h3>
          <span className="text-[10px] uppercase tracking-widest font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
            {dog.age}
          </span>
        </div>
        <p className="text-sm text-zinc-500">{dog.breed}</p>
        <button className="mt-4 w-full py-2 bg-zinc-50 hover:bg-amber-50 text-zinc-700 hover:text-amber-700 text-xs font-semibold rounded-xl transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}