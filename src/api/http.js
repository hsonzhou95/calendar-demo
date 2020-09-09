import axios from 'axios';
import qs from 'qs';
import {JUHE_APPKEY} from'@/configs/Keys';
function axiosPost(option){
    axios({
        url:option.url,
        method:'post',
        header:{
            'Content-type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify({
            ...option.data,
            key:JUHE_APPKEY
        })
    }).then(res=>{
        option.success(res)
    }).catch(error=>{
        option.error(error)
    })
}
function axiosGet(option){
    axios(option.url+"&key="+JUHE_APPKEY).then(res=>{
        option.success(res)
    }).catch(error=>{
        option.error(error)
    })
}
export {
    axiosPost,
    axiosGet
}
