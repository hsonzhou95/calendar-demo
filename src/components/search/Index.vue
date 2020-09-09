<template>
  <div class="search-wrap">
    <input type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script>
import {formatUserDate,getNowDate} from '@/serves/utils'
import getData from '@/serves/index';
import {ref,computed,watch} from 'vue'
import {useStore} from 'vuex'

export default {
name: "Index",
  props:{
    placeholder:String,
    maxlength:Number,
  },
  setup(props){
    console.log(props);
    const inputValue = ref('');
    const store = useStore(),
          state = store.state;

    const searchData = (e)=>{
      inputValue.value = e.target.value;
      const field = computed(()=>state.field).value;
        if(inputValue.value.length === props.maxlength){
          getData(store,field,formatUserDate(inputValue.value))
        }else if(inputValue.value.length === 0){
          getData(store,field,getNowDate(field))
        }
    }
    watch(()=>{
      return state.field;
    },()=>{
      inputValue.value = '';
    })
    return {
      inputValue,
      searchData
    }
  }
}
</script>

<style scoped lang="scss">
.search-wrap{
  position: fixed;
  top:.88rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .76rem;
  padding:.06rem .2rem;
  border-bottom: 1px solid #ddd;
  background: #fff;

  input{
    width: 100%;
    height: 100%;
    font-size: .28rem;
    border:1px solid #ddd;
    text-indent: .2rem;
    border-radius: .06rem;
  }
  &focus{
    border-color: #ed4040;
    box-shadow: 0 0 .04rem #ed4040;
    transition: all 3s;
  }
}
</style>
