<template>
  <div class="prodect">
    <div class="pro_top">
      <div class="pro_top_left"><span>红米Note 7</span></div>
      <div class="pro_top_right">
        <div class="pro_toprigtext1">
          <span>概述</span>|
          <span>参数</span>|
          <span>用户评价</span>
        </div>
        <div><div class="pro_toprigtext">立即购买</div></div>
      </div>
    </div>
    <div class="pro_center">
      <h2>红米Note 7</h2>
      <h3>4800万拍照千元机 / 品质“小金刚”</h3>
      <p>
        <span>全球首款双频 GP</span> |
        <span>骁龙845</span>|
        <span>AI 变焦双摄</span>|
        <span>红外人脸识别</span>
      </p>
      <div class="pric">
        <span>$<em>999</em></span>
      </div>
    </div>
    <div class="item2"></div>
    <div class="item3"></div>
  </div>
</template>

<script>
export default {
  name:'Product',
  data(){
    return{
      id:''
    }
  },
  mounted(){
    // 接受参数
    this.id = this.$route.query.id
    console.log(this.id)
  }
}
</script>

<style lang="scss" scoped>
.prodect{
  width: 100%;
  .pro_top{
    width: 1226px;
    height: 70px;
    margin: auto;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pro_top_left{
      font-size: 18px;
      color: #333;
      font-weight: 700;
    }
    .pro_top_right{
      display: flex;
      .pro_toprigtext1{
        font-size: 14px;
        color: #666;
        span{
          margin-right: 8px;
        }
      }
      .pro_toprigtext{
        width: 110px;
        height: 40px;
        margin-top: 15px;
        line-height: 40px;
        text-align: center;
        background-color: #f60;
        color: #fff;
        // border: none;
        cursor: pointer;
        margin-left: 10px;
      }
    }
  }
  .pro_center{
    height: 718px;
    text-align: center;
    background: url('http://mi.futurefe.com/imgs/product/product-bg-1.png') no-repeat;
    background-size: 100% 718px;
    h2{
      font-size: 80px;
      padding-top: 55px;
    }
    h3{
      font-size: 24px;
      letter-spacing: 10px;
    }
    p{
      margin-top: 21px;
      margin-bottom: 40px;
    }
    .pric{
      font-size: 30px;
      color: #333;
    }
  }
  .item2{
    background: url('http://mi.futurefe.com/imgs/product/product-bg-2.png') no-repeat;
    height: 480px;
    background-size: 1226px 397px;
  }
  .item3{
    background: url('http://mi.futurefe.com/imgs/product/product-bg-3.png') no-repeat 50%;
    height: 638px;
    background-size: cover;
  }
}
</style>