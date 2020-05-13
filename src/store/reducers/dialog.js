import {GET_EVERY_CAR} from '../actionType'

const dialog=(state={carList:[]},action)=>{
    switch(action.type){
        case GET_EVERY_CAR:{
            return{
                ...state,
                carList:action.data
            }
        }
        default:{
            return state
        }
    }
    return state;

}
export default dialog;