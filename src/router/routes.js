
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '', redirect: 'login'
      },
      {
        path: 'dashboard', component: () => import('pages/Index.vue')
      },
      {
        path: 'batches', component: () => import('pages/Batches.vue') 
      },
      {
        path: 'samples', component: () => import('pages/Samples.vue')
      },
      {
        path: 'orders', component: () => import('pages/Orders.vue')
      },
      {
        path: 'admin', component: () => import('pages/Admin.vue'),
        children: [
          {
            path: 'search', component: () => import('components/Admin/Search.vue')
          },
          {
            path: 'reporting', component: () => import('components/Admin/Reporting.vue')
          },
          {
            path: 'accounts', component: () => import('components/Admin/Accounts.vue')
          },
          {
            path: 'settings', component: () => import('components/Admin/Settings.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
