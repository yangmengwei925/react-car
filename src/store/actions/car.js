//函数的返回值就是action
import api from '../../api/car'
import {GET_BRAND_LIST} from '../actionType'
export const getBrandList=()=>{
    return (dispatch)=>{
        api.getBrandList().then(res=>{
            dispatch({
                type:GET_BRAND_LIST,
                data:res.data
            })
        })
    }
}


//action是用来声明类型的 组件都在action里边管理