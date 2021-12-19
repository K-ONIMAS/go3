import axios from "axios"
import qs from "qs"


    const axiosConfig = axios.create({
        baseURL:process.env.BASE_URL,
        withCredentials:true,
        timeout:5000
    })


    //请求拦截器

    axios.interceptors.request.use((config) => {

        config.paramsSerializer = (params) => {
            return qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        };
        config.headers.Token = localStorage.getItem("token")
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    

    //响应拦截器
    axiosConfig.interceptors.response.use(response => {
        return response.data;
    },(error)=>{
        return Promise.reject(error)
    })
    
export default axiosConfig
