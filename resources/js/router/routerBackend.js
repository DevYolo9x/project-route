export default [
    {
        path: '/admin',
        children: [
            {
                path: 'login',
                name: 'admin.login',
                component: () => import('../components/backend/auth/Login.vue')
            },
            {
                path: 'dashboard',
                name: 'admin.dashboard',
                component: () => import('../components/backend/dashboard/Dashboard.vue')
            },
            {
                path: 'user',
                name: 'admin.user',
                component: () => import('../components/backend/auth/ListUser.vue'),
                children: [
                    {
                        path: 'edit',
                        name: 'user.edit',
                        component: () => import('../components/backend/auth/ListUser.vue'),
                    }
                ]
            },
            {
                path: ':pathMatch(.*)*',
                name: 'admin.404',
                component: () => import('../components/backend/404.vue')
              }
        ]
    }
]