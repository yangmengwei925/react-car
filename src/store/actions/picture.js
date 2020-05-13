import api from '../../api/picture'

import {GET_PICTURE} from '../actionType'
export const getPictures=()=>{
    return (dispatch)=>{
        api.getPictures().then(res=>{
            dispatch({
                type:GET_PICTURE,
                data:res.data
            })
        })
    }
   
}