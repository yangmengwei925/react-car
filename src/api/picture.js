import request from '../untils/request'

export default{
    // 获取车系图片列表
    getPictures(data){
        return request.get('/v2-car-getImageList.html',data)
    },
    // 获取汽车颜色列表
    getColor(data){
        return request.get('/v2-car-getModelImageYearColor.html',data)
    },
    //车系图片分类列表
    getClassify(data){
        return request.get('/v2-car-getCategoryImageList.html',data)
    }
}