

export default function SkeletonCard() {
  return (
    
      <div className="w-full flex flex-col items-center gap-4 border-2 drop-shadow-xl bg-white p-4 animate-pulse">
        <p className="w-24 h-9 bg-orange-500/35 rounded-2xl"></p>
        <div className="w-44 h-44 bg-orange-500/35 rounded-2xl" src="" alt="" ></div>
        <p className="w-full h-20 bg-orange-500/35 rounded-2xl "></p>
        <p className="h-8 w-44 bg-orange-500/35 rounded-2xl"></p>
      </div>
    
  )
}
