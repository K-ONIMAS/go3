import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/homepage/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'homepage',
    path: '/',
    component: Homepage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject) {
  resolve = resolve?resolve:()=>{};
  reject = reject?reject:()=>{};
  originPush.call(this,location,resolve,reject)
}

VueRouter.prototype.replace = function(location,resolve,reject) {
  resolve = resolve?resolve:()=>{};
  reject = reject?reject:()=>{};
  originReplace.call(this,location,resolve,reject)
}


export default router
