<template>
  <li class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`../../assets/img/${item.name}.jpg`)" :alt="item.name">
        <div class="mask">
          <h1>{{item.name}}</h1>
          <h2>{{item.festival}}</h2>
        </div>
        <div class="content-wrap">
          <h1>假期描述：{{item.desc || '无说明'}}</h1>
          <h2>拼假建议：{{item.rest || '无说明'}}</h2>
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
  width: 7rem;
  padding:.2rem .15rem;
  box-sizing: border-box;
  border-radius: .3rem;
  background: #fff;
  box-shadow: .02rem .06rem .1rem #999;
  margin:0 auto  .2rem;
  height: 6.8rem;
  .card{
    border:1px solid #ddd;
  }
  .img-wrap{
    position: relative;
    height: 4.3rem;
    img{
      width: 100%;
      height: 100%;
    }
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
        color:#fff;
        margin-top:.3rem
      }
    }

  }
  .content-wrap{
    padding:.2rem;
    box-sizing: border-box;
    h1{
      font-size: .32rem;
      line-height: .4rem;
    }
    h2{
      font-size: .28rem;
      margin-top: .2rem;
      line-height: .4rem;

    }
  }
}
</style>
