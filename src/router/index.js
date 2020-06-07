import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '@/router/modules/home'

Vue.use(Router)

const constantRoutes = [
  ...homeRouter
]

const createRouter = () => new Router({
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
