import {GET_DETAIL} from '../actionType'
const detail=(state={detailList:{}},action)=>{
    switch(action.type){
        case GET_DETAIL:{
            return {
                ...state,
                detailList:action.data
            }
        }
        default:{
            return state;
        }
    }
    return state;

}
export default detail;