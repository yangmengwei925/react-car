//axios的二次封装
//axios的目的是对请求和请求结果做拦截做统一配置
import axios from 'axios'
import router from '../router'
const request=axios.create({
    //参数 baseURL 根地址
    baseURL:''
})
//添加拦截器
request.interceptors.request.use(function(config){//请求成功的回调
    return config;//返回配置项,拿到send的参数 执行send
    //该函数的作用是发送send请求前对参数进行配置
},function(error){//请求失败的回调
    
    return Promise.reject(error)
})
//请求结果拦截 onload执行时执行这个函数
request.interceptors.response.use(function(data){//请求成功的回调
    //data服务器返回值
    //返回值就是接收成功的参数
    return data.data //这个函数的返回值的作用是得到请求结果,结束promise,状态变为成功 对请求结果做统一处理
},function(error){//请求失败的回调
    console.log(error.response.status)
    switch(error.response.status){
        case 404:
            alert('接口走丢了,页面没找到')
            router.push('/404')
        break;
        case 401:
            alert('您可能未登录')
        break;
        case 403:
            alert('您暂无该权限')
        break;
        case 500:
            alert('无服务报错啦')
        break;
        case 406:
            alert('您的参数可能不合法')
        break;
        default:alert('报错啦!')
    }
    return Promise.reject(error) 
})
export default{
    get(url,params={}){
        return request.get(url,{params})
    },
    post(url,data={}){
        return request.post(url,data)
    },
    put(url,data={}){
        return request.put(url,data)
    },
    delete(url,config){
        return request.delete(url,config)
    }
}

//封装一个自定义指令 v-timeupdate 通过directive指令 全局和组件内指令
// data(){
//     return{
//         time:0
//     }
// }
// v-timeupdate="time"
// <audio v-timeupdate="time" src=''></audio>

// directive 自定义指令操作dom节点
// Vue.directive('指令名',{
//     //钩子函数
//     install(){

//     }
// })