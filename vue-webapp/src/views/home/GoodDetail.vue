<template>
<div class="qf-good-detail">
  <QfNavbar :title='info.name' />

  <div class='info'>
    <img :src='$img.imgBase+info.img' />
    <div v-text='info.name'>商品名称</div>
    <div v-cloak>{{info.price|rmb}}</div>
  </div>

  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
    <van-goods-action-icon icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" @click='addToCart' />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</div>
</template>

<script>
import { QfNavbar } from '@/components/'
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'
export default {
  components: {
    QfNavbar,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.$http.fetchGoodDetail({id}).then((res)=>{
      console.log('商品详情', res)
      this.info = res
    })
  },
  methods: {
    addToCart() {
      // 先判断有没有登录（一般使用token来判断是否已登录）
      const isLogin = localStorage.getItem('token')
      if(isLogin) {
        // 如果登录了，直接调接口添加购物车
        console.log('用户已登录，休息15分钟调接口')
        const id = this.info._id
        this.$http.fetchAddToCart({id}).then(res=>{
          console.log('添加购物车成功', res)
          // 直接跳转到购物车页面
          this.$router.push('/cart')
        })
      }else{
        // 如果没有登录，直接跳转到登录页面
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-detail {
  padding-top: 1.33rem;
  .info {
    font-size: .4rem;
    img {
      display: block;
      width: 9.33rem;
      height: 9.33rem;
      margin: 0 auto;
    }
  }
}
</style>
