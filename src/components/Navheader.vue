<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javescript:;">小米商城</a>
          <a href="javescript:;">MUI</a>
          <a href="javescript:;">云服务</a>
          <a href="javescript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="#/Login" v-if="username">登录</a>
          <a href="javescript:;" v-if="!username">登录</a>
          <a href="javescript:;" v-if="username">我的订单</a>
          <a href="javescript:;" class="my-cart" @click="goToCart()">购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799员</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799员</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" placeholder="小米">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Navheader',
  data(){
    return{
      username:'jack',
      phoneList:[]
    }
  },
  mounted(){
    // 调用方法
    this.getProductList()
  },
  methods:{
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'10012'
        }
      }).then((res)=>{
        console.log(res)
        Math.max(res.list,6);
      })
    },
    goToCart(){
      // this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/sass/minxin.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background: #333;
    color: #b0b0b0;
    .container{
      width: 1226px;
      margin: auto;
      flex-wrap: nowrap;
      @include flex();
      // display: flex;
      // 
      // justify-content: space-between;
      // align-items: center;
      a{
        display: inline-block;
        color:#b0b0b0;
        margin-right: 17px;
        text-decoration: none;
      }
      .my-cart{
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      width: 1226px;
      height: 112px;
      align-items: center;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      // overflow: hidden;
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          background: url("../assets/images/mi-logo.png") no-repeat;
          &:before{
            content: ' ';
            width: 55px;
            height: 55px;
            background: url("../assets/images/mi-logo.png") no-repeat;
            background-size: 55px;
            // background-color: #ff6600;
          }
          &:after{
            content: ' ';
            width: 55px;
            height: 55px;
            background: url("../assets/images/mi-home.png") no-repeat;
            background-size: 55px;
            // background-color: red;
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2;
          }
        }
      }
      .header-menu{
        display: inline-block;
        padding-left: 209px;
        // width: 200px;
        .item-menu{
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          margin-left: 20px;
          span{
            cursor: pointer;
            // margin-left: 100px;
          }
          &:hover{
            color: #ff6600;
            .children{
              height: 220px;
              transition: all .5s;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #ff6600;
            box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
            z-index: 10;
            background-color: #fff;
            height: 0;
            opacity: 0;
            display: none;//打开之后就好了
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;
                
              }
              a:hover{
                display: block;
              }
              img{
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img{
                height: 111px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 39px;
                margin-bottom: 8px;
                color: #333;
              }
              .pro-price{
                color: #333;
              }
              &:before{
              contain: ' ';
              position: absolute;
              border-left: 1px solid #f0f0f0;
              top: 28px;
              right: 0;
              height: 100px;
            }
            // &:last-child{
            //   display: none;
            // }
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wapper{
          height: 50px;
          border: 1px solid #e0e0ee;
          display: flex;
          align-items: center;
          input{
            // border-box:;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
            display: inline-block;
            width: 18px;
            height: 18px;
            background-color: red;
            // background-image: ;
            background-size: contain;
            margin-left: 14px;
          }
        }
      }
    }
  }
  
}
</style>