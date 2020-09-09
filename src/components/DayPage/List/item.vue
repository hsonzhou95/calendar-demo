<template>
  <div class="list-item">
    <div class="block title">{{title}}</div>
    <div class="block content">{{content}}</div>

  </div>

</template>

<script>
export default {
  name: "item",
  props:{
    title:String,
    content:String
  }
}
</script>

<style scoped lang="scss">
.list-item{
  display: flex;
  flex-direction: row;
  height: .88rem;
  margin-bottom: .3rem;
  border:1px solid #ddd;
  background: #fff;
  border-radius: .5rem;
  .block{
    height: 100%;
    &.title{
      width: 2rem;
      font-size: .36rem;
      margin-right: .3rem;
      color:#ed4040;
      line-height: .88rem;
      text-align: center;
     }
    &.content{
      display: flex;
      align-items: center;
      font-size: .28rem;
    }
  }
}
</style>
