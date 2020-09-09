<template>
  <header class="header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
name: "Index"
}
</script>

<style scoped lang="scss">
.header{
  position: fixed;
  top:0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .88rem;
  background: #ed4040;
  text-align: center;
  line-height: .88rem;
}
h1{
  font-size: .36rem;
  color:#fff;
}
</style>
