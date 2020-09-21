<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="@/assets/images/mi-logo.png">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">vue全栈课程</a><span>|</span>
      <a href="">vue全栈课程</a><span>|</span>
      <a href="">vue全栈课程</a><span>|</span>
      <a href="">vue全栈课程</a><span>|</span>
      <a href="">vue全栈课程</a><span>|</span>
    </div>
    <div class="copyright">
      ©。指作者或其他人（包括法人）依法对某一著作物享受的权利。
    </div>
  </div>
</template>

<script>
export default {
  name:'nav-footer'
}
</script>

<style lang="scss" scoped>
.footer{
  height: 234px;
  border-top:4px solid #ff7301;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  padding-top: 36px;
  .footer-logo{
    margin-top: 36rpx;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color: #999;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
  }
}

</style>