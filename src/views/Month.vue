<template>
  <div class="container">
    <error-tips></error-tips>
    <div v-if="!errorCode">
        <card-item :data="monthData"></card-item>
    </div>
  </div>
</template>

<script>
import getData from '@/serves/index'
import {getNowDate}from '@/serves/utils'
import ErrorTips from '@/components/ErrorTip/index'
import CardItem from  '@/components/MonthPage/list'

import {useStore} from 'vuex';
import {onMounted,computed,watch} from 'vue';
export default {
  name: "MonthPage",
  components:{
    ErrorTips,
    CardItem
  },
  setup(){
    const store = useStore(),
          state = store.state;
    watch(()=>{
      return  state.monthData
    },()=>{
      store.commit('setErroCode',0)
    })
    onMounted(()=>{
      getData(store,'month',getNowDate('month'))
    })
    return {
       errorCode:computed(()=>state.errorCode),
       monthData:computed(()=>state.monthData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
