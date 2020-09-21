import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import env from './env'
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
// 根据前端跨域方式调整
axios.defaults.baseURL = '/api';
// 超时设置
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求
// axios.defaults.baseURL = env.baseURL;
// 拦截器 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
