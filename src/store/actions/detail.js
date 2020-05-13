import api from '../../api/detail'
import {GET_DETAIL} from '../actionType'
export const getDetail=(SerialID)=>{
    return (dispatch)=>{
        api.getDetail({SerialID:SerialID}).then(res=>{
            dispatch({
                type:GET_DETAIL,
                data:res.data
            })
        })
    }
}