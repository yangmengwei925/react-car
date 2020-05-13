import api from '../../api/car'
import {GET_EVERY_CAR} from '../actionType'
export const getEveryCar=(MasterID)=>{
    return (dispatch)=>{
        api.getEveryCar({MasterID:MasterID}).then(res=>{
            dispatch({
                type:GET_EVERY_CAR,
                data:res.data
            })
        })
    }
}