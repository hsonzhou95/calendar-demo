import {axiosPost} from '@/api/http';
function getData(date){
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:'/api/calendar/day',
            data:{date},
            success(res){
                resolve(res)
            },
            error(err){
                reject(err);
            }
        })
    } )
}
function getMonthData(yearmonth){
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:"/api/calendar/month",
            data:{
                'year-month':yearmonth
            },
            success(res){
                resolve(res)
            },
            error(err){
                reject(err)
            }
        })
    })
}
function getYearData(year){
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:'/api/calendar/year',
            data:{year},
            success(res){
                resolve(res)
            },
            error(err){
                reject(err)
            }
        })
    })
}
export {
    getData,
    getMonthData,
    getYearData
}
