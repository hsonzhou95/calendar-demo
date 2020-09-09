<template>
  <div class="tab">
    <div class="tab-item" v-for="(item,index) in tabData" :key="index">
      <Icon :iconText="item.iconText" :path="item.path">{{item.tabText}}</Icon>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import tabData from '@/data/tab'

import {reactive} from 'vue'
export default {
name: "Index",
  components:{
    Icon
  },
  setup(){
    let state = reactive({
      tabData
    })
    return {
      ...state
    }
  }
}
</script>

<style scoped lang="scss">
.tab{
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .88rem;
  border-top:1px solid #ddd;
  background: #fff;
  .tab-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}

</style>
