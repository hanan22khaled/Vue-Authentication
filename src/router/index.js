import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Home from '../components/Home.vue'
import Test from '../components/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component:ForgotPassword
  },
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
