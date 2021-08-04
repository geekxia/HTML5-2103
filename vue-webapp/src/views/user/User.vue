<template>
<div class="qf-user">

  <div class="user-info">
    <div class="ui-tip">管理我的账户</div>
    <div class="ui-box">
      <img src="//storage.360buyimg.com/i.imageUpload/78696168616966656e673131313131353636373937323133333639_big.jpg" alt="">
      <div>
        <div>GeekXia</div>
        <div>xiahaifeng1111</div>
      </div>
    </div>
  </div>

  <div>
    <van-cell-group>
      <van-cell title="收货地址管理" value="管理我的收货地址" is-link />
      <van-cell title="账户与安全" value="密码实名认证等管理" is-link />
    </van-cell-group>
  </div>

  <div>
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item text="意见反馈">
        <template #icon>
          <img :src='$img.u1' class='icon' alt="">
        </template>
      </van-grid-item>
      <van-grid-item text="京东客户端">
        <template #icon>
          <img :src='$img.u2' class='icon' alt="">
        </template>
      </van-grid-item>
      <van-grid-item text="退出登录">
        <template #icon>
          <img :src='$img.u3' class='icon' alt="">
        </template>
      </van-grid-item>
    </van-grid>
  </div>

  <QfTabbar />
</div>
</template>

<script>
import { QfTabbar } from '@/components/'
import {
  Cell,
  CellGroup,
  Grid,
  GridItem
} from 'vant'
export default {
  // 这个“局部守卫”在组件实例化之前执行
  // 进一步说明，它比组件的生命周期更早执行
  // 在这个“局部守卫”中没有this，如果这个“局部守卫”拦截成功，那么User组件不会实例化。
  beforeRouteEnter(to,from,next){
    localStorage.getItem('token') ? next() : next('/login')
  },
  components: {
    QfTabbar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
}
</script>

<style lang="scss" scoped>
.qf-user {
  .user-info{
    .ui-tip {
      line-height: 1.33rem;
      font-size: .53rem;
      padding-left: .33rem;
      box-sizing: border-box;
      background: white;
    }
    .ui-box {
      width: 9.47rem;
      height: 2.4rem;
      overflow: hidden;
      border: .03rem solid red;
      box-sizing: border-box;
      margin: 0 auto;
      border-radius: .11rem;
      background: white;
      &>img {
        float: left;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin-top: .6rem;
        margin-left: .47rem;
      }
      &>div {
        line-height: .6rem;
        font-size: .43rem;
        float: left;
        margin-top: .6rem;
        margin: .47rem;
      }
    }
  }
  .icon {
    display: inline-block;
    width: .53rem;
    height: .48rem;
  }
}
</style>
