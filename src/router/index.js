import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/searchIndex',
    component: () => import('@/pages/SearchIndex/SearchIndex'),
    hidden: true,
    name: 'searchIndex',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/paperProfile',
    component: () => import('@/pages/PaperProfile/PaperProfile'),
    hidden: true,
    name: 'paperProfile',
    meta: {
      title: '论文详情'
    }
  },
  {
    path: '/writerProfile',
    component: () => import('@/pages/WriterProfile/WriterProfile'),
    hidden: true,
    name: 'writerProfile',
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/searchResult',
    component: () => import('@/pages/SearchResult/SearchResult'),
    hidden: true,
    name: 'searchResult',
    meta: {
      title: '搜索结果'
    },
    props: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard2/index'),
        name: 'Dashboard',
        meta: { title: '面板', icon: 'dashboard', affix: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const adminRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/query',
    children: [
      {
        path: 'query',
        name: 'userQuery',
        component: () => import('@/views/userQuery/index'),
        meta: { title: '用户查询', icon: 'form', role: 'admin' }
      }
    ]
  },
  {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback/check',
    children: [
      {
        path: 'check',
        name: 'feedbackCheck',
        component: () => import('@/views/table/complex-table'),
        meta: { title: '举报审核', icon: 'form', role: 'admin' }
      }
    ]
  }
]

export const userRoutes = [
  {
    path: '/message',
    component: Layout,
    redirect: '/user/message',
    name: 'message',
    meta: { title: '收信箱', icon: 'el-icon-s-help', role: 'user' },
    children: [
      {
        path: 'message',
        name: 'userMessage',
        component: () => import('@/views/table/index'),
        meta: { title: '收信箱', icon: 'form', role: 'user' }
      }
    ]
  },
  {
    path: '/papers',
    component: Layout,
    redirect: '/papers/uploadedPapers',
    name: 'papers',
    meta: { title: '论文', icon: 'el-icon-s-help', role: 'user' },
    children: [
      {
        path: 'complex-table',
        component: () => import('@/views/paperInformation'),
        name: 'compleTable',
        meta: { title: '已上传论文', icon: 'el-icon-s-help' }
      },
      {
        path: 'tree',
        name: 'downloadedPapers',
        component: () => import('@/views/tab/index'),
        meta: { title: '已购 / 收藏 / 举报', icon: 'tree', role: 'user' }
      }
    ]
  },
  {
    path: '/api',
    component: Layout,
    redirect: '/papers/upload',
    name: 'uploadForm',
    meta: { title: '上传论文', icon: 'el-icon-s-help', role: 'user' },
    children: [
      {
        path: 'upload',
        name: 'uploadedPapers',
        component: () => import('@/views/upload/index'),
        meta: { title: '上传', icon: 'form', role: 'user' }
      }
    ]
  },
  {
    path: '/information',
    component: Layout,
    redirect: '/user/information',
    name: 'information',
    meta: { title: '用户信息', icon: 'el-icon-s-help', role: 'user' },
    children: [
      {
        path: 'update',
        name: 'informationUpdate',
        component: () => import('@/views/userInformation/index'),
        meta: { title: '用户信息', icon: 'form', role: 'user' }
      }
    ]
  },
  {
    path: '/commentCheck',
    component: Layout,
    redirect: '/user/commentCheck',
    name: 'comment',
    meta: { title: '评论', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'check',
        name: 'commentCheck',
        component: () => import('@/views/commentCheck/index'),
        meta: { title: '评论审核', icon: 'form' }
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
