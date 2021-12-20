import axios from "axios"
import qs from "qs"
import nprogress from "nprogress";
import "nprogress/nprogress.css"


    const axiosConfig = axios.create({
        baseURL:process.env.BASE_URL,
        withCredentials:true,
        timeout:5000,
        headers:{
            post:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            put:{'Content-Type':'application/x-www-form-urlencoded'}
        },
    })


    //请求拦截器

    axios.interceptors.request.use((config) => {
        
        nprogress.start();

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
        nprogress.done;
        return response.data;
    },(error)=>{
        nprogress.done;
        return Promise.reject(error)
    })
    
export default axiosConfig
