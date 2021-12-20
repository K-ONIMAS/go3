import Mock from "mockjs"

export default{
    mockData(){
        const BASE_URL = process.env.BASE_URL.endsWith("/")
        ?process.env.BASE_URL.substr(0,process.env.BASE_URL.length-1):process.env.BASE_URL.length
        Mock.mock(BASE_URL,{

        })


    }
}