import {getYearData,getMonthData,getData} from'./request';
import {formatChsDate,mapForChsDate}from'./utils'

export default async(store,field,date)=>{
    let data = null;
    switch (field){
        case 'day':
           data = await  getData(date)
            break;
        case 'month':
           data = await  getMonthData(date)
            break;
        case 'year':
            data = await  getYearData(date)
            break;
        default:
            break;
    }
    // 判断请求不为0的情况默认显示页面
    if(data.data.error_code !== 0 ){
        store.commit('setErroCode',data.data.error_code);
        return;
    }
    // 展示组件所以用到的数据day、month、year的处理
    let res = null;
    switch (field){
        case 'day':
            res = data.data.result.data;
            res.date = formatChsDate(res.date,'day');
            res['year-month'] = formatChsDate(res['year-month'],'month');
            break;
        case 'month':
            res = data.data.result.data.holiday_array;
            res = mapForChsDate(res,'festival');
            break;
        case 'year':
            res = data.data.result.data.holiday_list
            res = mapForChsDate(res,'startday');
            break
    }
    store.commit('setData',{
        field,
        data:res
    })
}
