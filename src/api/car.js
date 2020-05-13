import request from '../untils/request'
import { GET_BRAND_LIST } from '../store/actionType'
import {GET_EVERY_CAR} from '../store/actionType'


export default {
    getBrandList(){
        return request.get('/v2-car-getMasterBrandList.html')
    },
    getEveryCar(data){
        return request.get('/v2-car-getMakeListByMasterBrandId.html',data)
    }
}