<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/wuwangluo.png')" alt="">
    <p>{{errorData[errorCode]}}</p>
  </div>
</template>

<script>
import errorData from "@/data/error";

import {useStore} from 'vuex';
import {computed} from 'vue';
export default {
name: "index",
  setup(){
    const store = useStore(),
          state = store.state;
    return {
      errorCode : computed(()=>state.errorCode),
      errorData
    }
  }
}
</script>

<style scoped lang="scss">
.error-tip{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img{
    width: 1rem;
  }
  p{
    margin-top:.15rem;
    font-size: .14rem;
    color:#999;
  }

}
</style>
