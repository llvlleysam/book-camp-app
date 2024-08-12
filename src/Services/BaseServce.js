import axios from "axios";
import { baseURL, baseURL_bootCamps } from "../constant/BaseUrls";

const httpService = axios.create({
    baseURL
})
export const http=axios.create({
    baseURL:baseURL_bootCamps
})
export default httpService