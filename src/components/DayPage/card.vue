<template>
    <div class="card-wrapper">
      <div class="card">
        <div class="header">
          <span class="weekday">
            {{data.weekday}}
          </span>
        </div>
        <h1 class="text lunar">{{data.lunar}}</h1>
        <h2 class="text date">{{data.date}}</h2>
      </div>
    </div>
</template>

<script>
export default {
name: "card",
  props:{
    data:Object
  }
}
</script>

<style scoped lang="scss">
.card-wrapper{
  padding:.2rem;
  box-sizing: border-box;
  .card{
    background: url("../../assets/img/bg.png")no-repeat center/cover;
    border-radius: .3rem;
    overflow-y: hidden;
    border:1px solid #ddd;
    color:#fff;
    .header{
      height: .7rem;
      padding: .2rem;
      box-sizing: border-box;
      font-size: .28rem;
      background: rgba(0,0,0,.3);
    }
    .text{
      text-align: center;
      margin: .6rem 0;
      text-shadow: .04rem .1rem .1rem #666;
    }
    .lunar{
      color:#f75555;
      font-size: 1rem;
      font-weight: bold;
    }
    .date{
      font-size: .4rem;
    }
  }
}

</style>
