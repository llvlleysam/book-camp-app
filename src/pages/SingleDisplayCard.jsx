import { useNavigate, useParams } from "react-router-dom"
import { useSingleGetCard } from "../Hooks/GetCard"


export default function SingleDisplayCard() {
    const navigate = useNavigate()
    const {id}=useParams()
    const{data,isLoading}=useSingleGetCard(id)
    // const{id, name, description, price, image}=card
    // console.log(data.image[1])
    if(isLoading){
        return(<div>Loading ...</div>)
    }
  return (
    <div className=" flex flex-col items-center gap-6 p-8">
        <p className="text-6xl font-bold">{data?.name}</p>
        <img className=" w-4/6" src={`../${data?.image?.[1]}`} alt={`${data?.name}`} />
        <span className="text-2xl border-y-2 py-6"><span className="font-bold">description : </span>{`${data?.description}`}</span>
        <div className="flex justify-center gap-4">
        <span className={data?.registration ? "border-2 border-purple-700 py-2 px-4 rounded-lg bg-purple-500/30" : "border-2 border-red-700 py-2 px-4 rounded-lg bg-red-500/30 cursor-not-allowed"}>
          {data?.registration ? `${data?.price} t`:"registration Expire"}
        </span>
        <button className="py-2 px-4 rounded-lg bg-orange-500 text-white border-2 hover:bg-orange-400 transition duration-300" onClick={()=>navigate("/bootcamps")}>Back to BootCamps</button>
        </div>
    </div>
  )
}
