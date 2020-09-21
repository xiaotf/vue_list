<template>
  <div class="login_bg">
    <div class="login_right">
      <p>欢迎登录</p>
      <div class="login_input">
        <input type="text" placeholder="请输入用户名" v-model="userphone">
        <input type="text" placeholder="请输入密码" v-model="userpass">
      </div>
      <div class="login_btn" @click="loginbtn">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return{
      userpass:'',
      userphone:''
    }
  },
  mounted(){
    // this.loginbtn()
  },
  methods:{
    loginbtn(){
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.login_bg{
  width:100%;
  height: 576px;
  position: relative;
  background: url(../assets/images/login-bg.jpg) no-repeat 50%;
  .login_right{
    width: 410px;
    height: 510px;
    position: absolute;
    top: 10px;
    right: 30px;
    background-color: #ffffff;
    p{
      text-align: center;
      padding-top: 16px;
      padding-bottom: 16px;
      font-size: 24px;
      color: #000;
    }
    .login_input{
      width: 300px;
      height: 160px;
      margin: auto;
      margin-top: 15px;
      overflow: hidden;
      input{
        width: 280px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #999;
        padding-left: 10px;
      }
    }
    .login_btn{
      width: 300px;
      margin: auto;
      line-height: 50px;
      background-color: #f60;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>