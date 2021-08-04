<template>
<div class="qf-nodata" v-if='show'>
  <img :src='$img.iNotData' alt="">
  <div>暂无数据</div>
</div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="scss" scoped>
.qf-nodata {
  width: 60%;
  margin: .33rem auto;
  font-size: .43rem;
  color: #999999;
  text-align: center;
  line-height: .8rem;
  &>img {
    display: block;
    width: 100%;
  }
}
</style>
