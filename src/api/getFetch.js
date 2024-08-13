import { endPointBootCamps } from "../constant/BaseUrls";
import { http } from "../Services/BaseServce";

export async function getCard(search="") {
    const response = await http.get(`${endPointBootCamps}${search}`)
    return response.data
}

export async function singleGetCard (id) {
    const response = await http.get(`${endPointBootCamps}/${id}`)
    return response.data
}