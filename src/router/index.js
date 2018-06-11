import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => {
        import('@/views/home/home.vue').then(resolve)
      },
      meta: {
        title: 'happy我欲成风'
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: resolve => {
        import('@/views/article/article.vue').then(resolve)
      }
    },
    {
      path: '/archive',
      name: 'archive',
      component: resolve => {
        import('@/views/archive/archive.vue').then(resolve)
      },
      meta: {
        title: '归档 | happy我欲成风'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => {
        import('@/views/about/about.vue').then(resolve)
      },
      meta: {
        title: '关于 | happy我欲成风'
      }
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: resolve => {
        import('@/views/subscribe/subscribe.vue').then(resolve)
      },
      meta: {
        title: '订阅 | happy我欲成风'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  nprogress.start()
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
