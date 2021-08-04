<template>
<div class="qf-regist">
  <QfNavbar title="注册">
    <template>
      <span @touchstart='$router.replace("/login")'>登录</span>
    </template>
  </QfNavbar>

  <van-form @submit="onRegist">
    <van-field
      v-model.trim="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model.trim="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model.trim="password2"
      type="password"
      name="确认密码"
      label="确认密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">注册</van-button>
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
      password: '',
      password2: ''
    }
  },
  methods: {
    onRegist() {
      const data = {
        username: this.username,
        password: this.password,
        password2: this.password2
      }
      if(data.password === data.password2) {
        this.$http.fetchRegist(data).then(res=>{
          console.log('注册成功', res)
          // 弹框提示用户“注册成功”
          // 然后跳转到登录页
          this.$router.replace('/login')
        })
      }else{
        // 提示用户“两次密码不一致”
      }
    }
  }
}
</script>
<style scoped>
.qf-regist {
  padding-top: 2rem;
}
</style>
