<template>
  <div class="list-wrapper">
    <ul class="holiday-list">
      <card-item v-for="(item,index) in data " :key="index" :item="item"></card-item>
    </ul>
  </div>
</template>

<script>
import CardItem from './item'
export default {
  name: "index",
  components:{
    CardItem
  },
  props:{
    data:Array
  }
}
</script>

<style scoped>

</style>
