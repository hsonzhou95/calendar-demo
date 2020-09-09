<template>
  <li class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`../../assets/img/${item.name}.jpg`)" :alt="item.name">
        <div class="mask">
          <h1>{{item.name}}</h1>
          <h2>{{item.startday}}</h2>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "item",
  props:{
    item:Object
  }
}
</script>

<style scoped lang="scss">
.card-item{
  padding:.2rem .3rem;
  box-sizing: border-box;
  .card{
    border:1px solid #ddd;
    border-radius: .3rem;
    background: #fff;
    box-shadow: .02rem .06rem .1rem #999;
    overflow: hidden;
    .img-wrap{
      position: relative;
      height: 4.3rem;
      .mask{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        h1{
          color:#ed4040;
          font-size: 1rem;
          font-weight: bold;
        }
        h2{
          color: #fff;
          margin-top: .3rem;
        }
      }
    }
  }
}
</style>
