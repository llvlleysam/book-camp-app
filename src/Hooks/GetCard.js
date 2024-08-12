import { useQuery } from "@tanstack/react-query";
import { getCard, singleGetCard } from "../api/getFetch";
import { useSearchParams } from "react-router-dom";

export function useGetCard(){
    const [searchParams, setSearchParams]=useSearchParams()
    // console.log(searchParams.get("registration"))
    return useQuery({
        queryKey:["card",searchParams.get("registration")],
        queryFn:()=> getCard(searchParams.get("registration"))
    })
}

export function useSingleGetCard(id){
    return useQuery({
        queryKey:["Singlecard"],
        queryFn: ()=>singleGetCard(id)
    })
}
