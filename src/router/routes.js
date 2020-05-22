export const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/Home.vue'),
        meta: {
            title: 'Home',
            requiresAuth: false,
            layout: 'default'
        }
    },
    {
        path: '/passwordless',
        name: 'passwordless',
        component: () =>
            import ('@/views/Passwordless.vue'),
        meta: {
            title: 'Passwordless Login',
            requiresAuth: false,
            layout: 'default'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('@/views/Dashboard.vue'),
        meta: {
            title: 'Dashboard',
            requiresAuth: true,
            layout: 'default'
        }
    },
    {
        path: '/callback',
        name: 'callback',
        component: () =>
            import ('@/views/Callback.vue'),
        meta: {
            title: 'Callback',
            requiresAuth: false,
            layout: 'default'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue'),
        meta: {
            title: 'Login',
            requiresAuth: false,
            layout: 'default'
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: () =>
            import ('@/views/Logout.vue'),
        meta: {
            title: 'Logout',
            requiresAuth: true,
            layout: 'default'
        }
    }
]