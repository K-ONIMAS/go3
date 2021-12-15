import axios from "axios"
import qs from "qs"
import store from "../store/index"

export default class DoRequest{

    axiosConfig = axios.create({
        baseURL:process.env.BASE_URL,
        withCredentials:true
    })

    constructor(url,parm = {},){

    }
}