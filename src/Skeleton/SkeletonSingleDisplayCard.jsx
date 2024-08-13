

export default function SkeletonSingleDisplayCard() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-6 p-8 animate-pulse">
        <p className="w-52 h-14 bg-orange-500/35 rounded-2xl"></p>
        <div className="w-full h-[600px] bg-orange-500/35 rounded-2xl" src="" alt="" ></div>
        <p className="w-full h-20 bg-orange-500/35 rounded-2xl "></p>
        <div className="flex justify-center gap-4">
        <p className="h-8 w-44 bg-orange-500/35 rounded-2xl"></p>
        <p className="h-8 w-44 bg-orange-500/35 rounded-2xl"></p>
        </div>
    </div>
    </div>
  )
}
