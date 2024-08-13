import { useQuery } from "@tanstack/react-query";
import { getCard, singleGetCard } from "../api/getFetch";
import { useLocation, useSearchParams } from "react-router-dom";

export function useGetCard(){
    const searchUrl = useLocation().search
    console.log(searchUrl)
    return useQuery({
        queryKey:["card",searchUrl],
        queryFn:()=> getCard(searchUrl)
    })
}

export function useSingleGetCard(id){
    return useQuery({
        queryKey:["Singlecard"],
        queryFn: ()=>singleGetCard(id)
    })
}
