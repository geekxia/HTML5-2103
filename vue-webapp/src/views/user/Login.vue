<template>
<div class="qf-login">
  <QfNavbar title="登录">
    <template>
      <span @touchstart='$router.replace("/regist")'>注册</span>
    </template>
  </QfNavbar>

  <van-form @submit="onLogin">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>

</div>
</template>

<script>
import { QfNavbar } from '@/components/'
import {
  Form,
  Field,
  Button
} from 'vant'
export default {
  components: {
    QfNavbar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      const data = {
        username: this.username,
        password: this.password
      }
      this.$http.fetchLogin(data).then(res=>{
        console.log('登录成功', res)
        // 弹框提示用户“登录成功”
        // 把token存储在localStorage中
        localStorage.setItem('token', res.token)
        // 返回到上一页
        this.$router.back()
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.qf-login {
  padding-top: 2rem;
}
</style>

<!-- 路由栈  [] -->
<!-- $router.push() 向路由栈的栈顶添加一条访问记录 -->
<!-- $router.replace() 向路由栈的栈顶添加一条记录，同时替换掉上一个栈顶的路由 -->

<!-- login  服务器上 生成一个session
       向客户端上写入一个cookie

每一次http时，自动携带上cookie -->
