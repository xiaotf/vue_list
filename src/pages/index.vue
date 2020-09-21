<template>
  <div>
    <!-- swiper -->
    <div class="index">
        <div class="swiper-box">
          <el-carousel indicator-position="outside" height="451px" width="100%">
            <el-carousel-item v-for="item in arrItem" :key="item.name">
              <img class="img" :src="item.imgUrl" @click="topbtn">
            </el-carousel-item>
          </el-carousel>  
        </div>
        <div class="index_top_left">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="childeren">
                <ul>
                  <li>
                    <div>小米cc9</div>
                  </li>
                  <li>
                    <div>小米cc9</div>
                  </li>
                  <li>
                    <div>小米cc9</div>
                  </li>
                  <li>
                    <div>小米cc9</div>
                  </li>
                  <li>
                    <div>小米cc9</div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
          </ul>
        </div>
        <div class="index_box">
          <div class="index_box_nav" v-for="item in imglist" :key="item">
            <img :src="item.imgurl" alt="">
          </div>
        </div>
        <div class="index_img">
          <img src="http://mi.futurefe.com//imgs/banner-1.png" lazy="loaded" alt="">
        </div>
    </div>
    
    <div class="index_banner">
      <div class="index_lattop">手机</div>
      <div class="index_banner_nav">
        <div class="index_banner_left">
          <img src="http://mi.futurefe.com//imgs/mix-alpha.jpg" alt="">
        </div>
        <div class="index_banner_rig">
          <div class="index_right" v-for="item in itemlist" :key="item">
            <div :class="item.lat == 1 ? 'rig_top' :'rig_top1'">新品</div>
            <div class="item_img">
              <img :src="item.url" alt="">
            </div>
            <div class="item-text">
              <h3>{{item.name}}</h3>
              <p>{{item.text}}</p>
            </div>
            <div class="item_bottom">
              <span class="item_bottom_span1">${{item.pic}}</span>
              <span class="item_bottom_span2">购物车</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Servicebar/>
  </div>
</template>

<script>
import Servicebar from '@/components/Servicebar';
export default {
  data(){
    return{
      arrItem:[
        {imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
        {imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
        {imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
      ],
      imglist:[
        {imgurl:'http://mi.futurefe.com/imgs/ads/ads-1.png'},
        {imgurl:'http://mi.futurefe.com/imgs/ads/ads-2.jpg'},
        {imgurl:'http://mi.futurefe.com/imgs/ads/ads-3.png'},
        {imgurl:'http://mi.futurefe.com/imgs/ads/ads-4.jpg'},
      ],
      itemlist:[
        {
          pic:1269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          lat:1
        },
        {
          pic:2269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          lat:0
        },
        {
          pic:3269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          lat:1
        },
        {
          pic:4269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
          lat:0
        },
        {
          pic:5269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          lat:1
        },
        {
          pic:6269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          lat:0
        },
        {
          pic:7269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          lat:1
        },
        {
          pic:8269,
          name:'Redmi Note 8 Pro',
          text:'6400万全场景四摄',
          url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          lat:1
        },
      ]
    }
  },
  components:{
    Servicebar,
  },
  methods:{
    // 跳转传参
    topbtn(){
      this.$router.push({path: "/Product", query: {id: 1}})
    }
  }
}
</script>

<style lang="scss">
.index{
  width: 1226px;
  margin: auto;
  position: relative;
  .swiper-box{
    width: 1226px;
    margin: auto;
    height: 451px;
    overflow: hidden;   
     .el-carousel__item{
       img{
         width: 100%;
       }
     }
     .el-carousel__arrow--left {
       left: 300px !important;
     }
    /deep/.el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
      
    /deep/.el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  .index_top_left{
    position: absolute;
    width: 264px;
    height: 451px;
    background-color: rgba($color: #666, $alpha: .5);
    top: 0;
    z-index: 9;
    .menu-wrap{
      .menu-item{
        height: 50px;
        line-height: 50px;
        a{
          position: relative;
          display: block;
          font-size: 16px;
          color: #fff;
          padding-left: 30px;
          
        }
        &:after{
            position: absolute;
            right: 30px;
            top: 17.5px;
            contain: ' ';
            display: inline-block;
            width: 10px;
            height: 15px;
            background: url('http://mi.futurefe.com/imgs/icon-arrow.png') no-repeat;
            background-size: contain;
        }
        &:hover{
          background-color: orangered;
          .childeren{
            display: block;
          }
        }
        .childeren{
          width: 962px;
          height: 451px;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 264px;
          border: 1px solid #e5e5e5;
          z-index: 19;
          display: none;
        }
      }
     
    }
  }
  .index_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    .index_box_nav{
      height: 167px;
      width: 296px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .index_img{
    width: 100%;
    height: 130px;
    padding-bottom: 40px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.index_banner{
  width: 1226px;
  margin: auto;
  margin-bottom: 30px;
  .index_lattop{
    font-size: 26px;
    font-weight: bolder;
    padding-bottom: 20px;
    color: #000;
  }
  .index_banner_nav{
    display: flex;
    .index_banner_left{
      width: 224px;
      height: 619px;
      margin-right: 24px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .index_banner_rig{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 986px;
      .index_right{
        width: 236px;
        height: 302px;
        border: 1px solid #999;
        .rig_top{
          width: 67px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          background-color: red;
          margin: auto;
        }
        .rig_top1{
          width: 67px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          background-color: royalblue;
          margin: auto;
        }
        .item_img{
          height: 195px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .item-text{
          text-align: center;
          h3{
            font-size: 14px;
            color: #333;
            font-weight: bold;
          }
          p{
            color: #999;
            font-size: 12px;
          }
        }
        .item_bottom{
          text-align: center;
          margin-top: 10px;
         .item_bottom_span1{
           color: #333;
           font-size: 16px;
           margin-right: 10px;
          }
          .item_bottom_span2{
            font-size: 14px;
            color: red;
          }
        }
      }
    }
  }
}
  

</style>