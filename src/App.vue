<template>
  <div id="app">
    <Header>{{headerTitle}}</Header>
    <Search :placeholder="placeholder" :maxlength="maxlength"></Search>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Tab></Tab>
  </div>
</template>
<script>
import Header from '@/components/header/Index'
import Tab from '@/components/tab/Index'
import Search from '@/components/search/Index'

import {computed,watch}from 'vue';
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  name:'App',
  components:{
    Header,
    Tab,
    Search
  },
  setup(){
    const store = useStore(),
          state = store.state,
          router = useRouter();

    router.push('/')
    store.commit('setPlaceHolder','day')
    watch(()=>{
      return router.currentRoute.value.name;
    },(value)=>{
      console.log(value);
      store.commit('setHedaerTit',value);
      store.commit('setPlaceHolder',value)
      store.commit('setMaxLength',value);
      store.commit('setField',value)
      store.commit('setErroCode',0)
    })
    return computed(()=>state).value
  }
}

</script>
<style lang="scss">
</style>
