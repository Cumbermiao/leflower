<template>
  <div>
    <header>
      <img src="../../assets/Types/lArrow.png" alt="">
      <span class="header_title">{{title}}</span>
      <p><span>菜单</span><img src="../../assets/Types/mlogo.png" alt=""></p>
    </header>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>
<style scoped>
header{
    background-color: #f00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    color: #fff;
}
header img{
    width: 2.5rem;
}
.header_title{
    font-size: 1.25rem;
}
header p img{
    vertical-align: top;
}
header p{
    line-height: 2.5rem;
}
</style>


