import {GET_PICTURE} from '../actionType'
import {GET_COLOR} from '../actionType'
const picture=(state={pictList:[],colorList:[]},action)=>{
    switch(action.type){
        case GET_PICTURE:{
            return{
                ...state,
                pictList:action.data
            }
        }
        case GET_COLOR:{
            return {
                ...state,
                colorList:action.data
            }
        }
        default:{
            return state
        }
    }
    return state
}
export default picture