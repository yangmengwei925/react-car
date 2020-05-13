import api from '../../api/picture'
import {GET_COLOR} from '../actionType'

export const getColor=(SerialID)=>{
    return (dispatch)=>{
        api.getColor({SerialID:SerialID}).then(res=>{
            dispatch({
                type:GET_COLOR,
                data:res.data
            })
        })
    }
}