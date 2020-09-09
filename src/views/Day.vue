<template>
  <div class="container">
    <error-tips></error-tips>
    <div v-if="!errorCode">
      <day-card :data="dayData"></day-card>
      <day-list :data="dayData"></day-list>
    </div>
  </div>
</template>

<script>
import DayCard from  '@/components/DayPage/card'
import DayList from '@/components/DayPage/List/index'
import ErrorTips from '@/components/ErrorTip/index'
import getData from '@/serves/index'
import {getNowDate}from'@/serves/utils'

import {onMounted,computed,watch} from'vue';
import {useStore} from 'vuex'
export default {
name: "DayPage",
  components:{
    DayCard,
    DayList,
    ErrorTips
  },
  setup(){
    const store = useStore(),
          state = store.state;
    watch(()=>{
      return state.dayData
    },()=>{
      store.commit('setErroCode',0)
    })
    onMounted(()=>{
      getData(store,'day',getNowDate('day'))
    })
    return{
      dayData:computed(()=>state.dayData),
      errorCode:computed(()=>state.errorCode)
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
