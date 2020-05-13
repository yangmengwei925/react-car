import request from '../untils/request'
import {GET_DETAIL} from '../store/actionType'


export default {
    getDetail(data){
        return request.get('/v2-car-getInfoAndListById.html',data)
    }
}