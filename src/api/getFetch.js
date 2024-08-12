import { endPointBootCamps } from "../constant/BaseUrls";
import { http } from "../Services/BaseServce";

export async function getCard(registration="") {
    const response = await http.get(`${endPointBootCamps}${registration ? `?registration=${registration}` : ""}`)
    return response.data
}

export async function singleGetCard (id) {
    const response = await http.get(`${endPointBootCamps}/${id}`)
    return response.data
}