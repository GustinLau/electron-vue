import Layout from '@/layout'

const homeRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: () => import('@/views/home'),
      name: 'Home'
    }]
  }
]
export default homeRouter
