import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Index from '@/pages/index'
import Login from '@/pages/Login'
import Product from '@/pages/Product'
import Detail from '@/pages/Detail'
Vue.use(VueRouter)

  const routes = [
    { path: '/', redirect: '/index' },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path: '/index',
      name: 'Index',
      component: Index        
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product 
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail 
    }
    ]
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
