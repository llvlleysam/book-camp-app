import Card from "../components/Common/Card";
import { useGetCard } from "../Hooks/GetCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { useEffect } from "react";



export default function BootCamps() {
  const { data: cards, isLoading } = useGetCard();
  const [searchParams,setSearchParams]=useSearchParams()
  const navigate = useNavigate()
  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken")
    if(!accessToken){
      navigate("/login")
    }
  },[])
  return (
    <div className="p-8 mt-20 flex flex-col items-center gap-6 ">
      <div className="w-3/4 flex justify-around items-center bg-orange-300 py-4 rounded-lg drop-shadow-lg">
        <input className="w-3/5 py-2 rounded-lg border-2 border-orange-500 pl-2" type="text" placeholder="Search BootCamp ..." value={searchParams?.get("name_like")} onChange={(e)=>e.target.value.length>0 ? setSearchParams((prev)=>{
          prev.set("name_like",e.target.value)
          return prev
          }) : setSearchParams((prev)=>{
            prev.delete("name_like")
          })} />
        <label htmlFor="reg" className="bg-orange-500 py-1 px-2 rounded-lg text-white font-bold text-lg flex items-center gap-2">
          <input type="checkbox" id="reg" onChange={(e)=>e.target.checked ? setSearchParams((prev)=>{
            prev.set("registration",true)
            return prev
          }) : setSearchParams((prev)=>{
            prev.delete("registration")
            return prev
          })} />
          Status registration
        </label>
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        {isLoading ? Array.from({length:3}).map((index)=><SkeletonCard key={index}/>)  : cards ? cards.map((card) => (<Card key={card.id} card={card} />)) : console.log("hi")}
      </div>
    </div>
  );
}
