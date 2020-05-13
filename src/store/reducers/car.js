import {GET_BRAND_LIST} from '../actionType'
const car=(state={ brandList:[] },action)=>{
    switch(action.type){
        case GET_BRAND_LIST:{
            return{
                ...state,
                brandList:action.data
            }
        }
        default:{
            return state
        }
    }
    return state;

}
export default car;