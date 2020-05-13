// 路由懒加载
import React,{Component} from 'react'
import loadable from 'react-loadable'
const loading =()=><div>loading...</div>
// const loadable=({load})=>{
//     return class extends Component{
//         state={
//             flag:false,
//             Com:null
//         }
//         render() {
//             const{flag,Com}=this.state;
//             return Com?<Com /> :<div>loading....</div>
//         }
//         componentDidMount(){
//             load().then(res=>{
//                 this.setState({
//                     Com:res.default

//                 })
//             })
//         }
//     }
// }
const routes=[
    {
        path:'/official',
        component: loadable({//component的值必须是一个组件
            loader:() => import('../pages/official/index'),
            loading
        })
    },
    {
        path:'/car/:id',
        name:'car',
        component:loadable({
            loader:() => import('../pages/car/index'),
            loading
        })
    },
    {
        path:'/img/:id',
        component:loadable({
            loader:() => import('../pages/img/index'),
            loading
        })
    },
    {
        path:'/price',
        component:loadable({
            loader:() => import('../pages/price/index'),
            loading
        })
    },
    {
        path:'*',
        component:()=><div>糟啦,页面君走丢啦!</div>
    },
    {
        path:'/',
        redirect:'/official'
    },
    
]
export default routes