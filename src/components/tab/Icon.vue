<template>
  <router-link :to="path" class="tab-icon">
    <i class="icon">{{iconText}}</i>
    <p class="text">
      <slot>{{tabText}}</slot>
    </p>
  </router-link>
</template>

<script>
export default {
name: "Icon",
  props:{
    iconText:String,
    path:String,
  }
}
</script>

<style scoped lang="scss">
.tab-icon{
  display: inline-block;
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background: #ddd;
    color:#999;
    font-size: .22rem;
    transition: all .4s;
  }
  .text{
    font-size: .22rem;
    text-align: center;
    margin-top: .04rem;
    color: #999;
    transition: all .4s;
  }
  &.router-link-active{
    .icon{
      background: #ed4040;
      color: #fff;
    }
    .text{
      color:#ed4040;
    }
  }
}
</style>
