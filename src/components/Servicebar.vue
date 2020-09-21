<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-setting"></span>预约维修服务</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Servicebar'
}
</script>

<style lang="scss" scoped>
  .service{
    padding: 33px 0;
    color: #666;
    font-size: 16px;
    text-align: center;
    li{
      display: inline-block;
      width: 24.8%;
      text-align: center;
      border-right: 1px solid #e5e5ee;
      span{
        display: inline-block;
        width: 20px;
        height: 19px;
      }
    }
  }
</style>