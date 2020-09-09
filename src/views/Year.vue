<template>
  <div class="container">
    <error-tips></error-tips>
    <div v-if="!errorCode">
      <Card :data="yearData"></Card>
    </div>
  </div>
</template>

<script>
import ErrorTips from '@/components/ErrorTip/index'
import Card from '@/components/YearPage/list'
import getData from '@/serves/index';
import {getNowDate} from '@/serves/utils'

import {useStore} from 'vuex'
import {onMounted,computed,watch} from 'vue'
export default {
  name: "YearPage",
  components:{
    ErrorTips,
    Card
  },
  setup(){
    const store = useStore(),
          state = store.state;
    watch(()=>{
      return state.yearData;
    },()=>{
      store.commit('setErroCode',0);
    })
    onMounted(()=>{
      getData(store,'year',getNowDate('year'))
    })
    return{
      errorCode:computed(()=>state.errorCode),
      yearData:computed(()=>state.yearData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
